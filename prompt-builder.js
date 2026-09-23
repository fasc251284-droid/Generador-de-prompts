// Motor de generación de prompts con metodología RCOF
// (Rol, Contexto, Objetivo, Formato)

class PromptBuilderRCOF {
    constructor(formData) {
        this.data = formData;
    }

    // Constructor principal del prompt RCOF
    buildPrompt() {
        const sections = [];

        sections.push(this.buildRolSection());
        sections.push(this.buildContextoSection());
        sections.push(this.buildObjetivoSection());
        sections.push(this.buildFormatoSection());

        return sections.filter(s => s).join('\n\n');
    }

    // SECCIÓN R: ROL
    buildRolSection() {
        return `🎯 ROL (R):\nEres un experto docente y diseñador instruccional especializado en el curriculum chileno. Tienes amplia experiencia en didáctica, evaluación y creación de recursos pedagógicos alineados con las Bases Curriculares del MINEDUC.`;
    }

    // SECCIÓN C: CONTEXTO
    buildContextoSection() {
        const parts = [];

        parts.push('📚 CONTEXTO (C):');
        parts.push('\n— Contexto Curricular:');
        parts.push(`  • Asignatura: ${this.data.asignatura}`);
        parts.push(`  • Nivel: ${this.data.nivel}`);

        if (this.data.curso) {
            parts.push(`  • Curso: ${this.data.curso}`);
        }

        parts.push(`  • Objetivo de Aprendizaje (OA): ${this.data.objetivo}`);

        if (this.data.indicadores && this.data.indicadores.length > 0) {
            parts.push(`  • Indicadores: ${this.data.indicadores.join(', ')}`);
        }

        if (this.data.unidad) {
            parts.push(`  • Unidad/Eje/Tema: ${this.data.unidad}`);
        }

        // Contexto pedagógico específico
        parts.push('\n— Enfoque Pedagógico:');

        if (this.data.habilidades && this.data.habilidades.length > 0) {
            parts.push('  • Habilidades a desarrollar:');
            this.data.habilidades.forEach(h => parts.push(`    - ${h}`));
        }

        // Agregar base teórica según tipo de recurso
        if (this.data.baseTeorica) {
            parts.push(`  • Marco teórico: ${this.data.baseTeorica}`);
        }

        // Agregar NEE si fue seleccionada
        if (this.data.nee) {
            parts.push('\n— Necesidades Educativas Especiales (NEE):');
            parts.push(`  • ${this.data.nee}`);
            parts.push('  • Adapta el recurso considerando esta NEE: usa lenguaje accesible, incluye apoyos diferenciados, ajusta nivel de complejidad y proporciona estrategias de mediación pertinentes.');
        }

        // Agregar datos extra de Paso 1 y Paso 2 si existen
        if (this.data.datosExtra) {
            if (this.data.datosExtra.paso1) {
                parts.push(`\n— Información Adicional (Paso 1):\n  ${this.data.datosExtra.paso1}`);
            }
            if (this.data.datosExtra.paso2) {
                parts.push(`\n— Información Adicional (Paso 2):\n  ${this.data.datosExtra.paso2}`);
            }
        }

        return parts.join('\n');
    }

    // SECCIÓN O: OBJETIVO
    buildObjetivoSection() {
        let objetivo = '🎯 OBJETIVO (O):\n';

        switch (this.data.categoria) {
            case 'planificacion':
                objetivo += this.buildObjetivoPlanificacion();
                break;
            case 'material':
                objetivo += this.buildObjetivoMaterial();
                break;
            case 'evaluacion':
                objetivo += this.buildObjetivoEvaluacion();
                break;
            default:
                objetivo += `Diseñar un recurso pedagógico para ${this.data.nivel} en ${this.data.asignatura}.`;
        }

        return objetivo;
    }

    buildObjetivoPlanificacion() {
        const tipo = this.data.tipoPlanificacion || 'planificación';
        const duracion = this.data.duracion || '';
        return `Diseña una ${tipo} ${duracion ? `para ${duracion}` : ''} en ${this.data.asignatura} (${this.data.nivel}), enfocada en desarrollar el objetivo de aprendizaje especificado.`;
    }

    buildObjetivoMaterial() {
        const tipo = this.data.tipoMaterial || 'material pedagógico';
        return `Crea ${tipo} para estudiantes de ${this.data.nivel} en ${this.data.asignatura}, que permita trabajar de manera práctica y significativa el objetivo de aprendizaje.`;
    }

    buildObjetivoEvaluacion() {
        const tipo = this.data.tipoEvaluacion || 'instrumento de evaluación';
        const enfoque = this.data.enfoqueEvaluacion || '';
        return `Diseña ${tipo} con enfoque ${enfoque} para estudiantes de ${this.data.nivel} en ${this.data.asignatura}, que permita evidenciar el logro del objetivo de aprendizaje.`;
    }

    // SECCIÓN F: FORMATO
    buildFormatoSection() {
        const parts = [];

        parts.push('📋 FORMATO (F):');

        switch (this.data.categoria) {
            case 'planificacion':
                parts.push(this.buildFormatoPlanificacion());
                break;
            case 'material':
                parts.push(this.buildFormatoMaterial());
                break;
            case 'evaluacion':
                parts.push(this.buildFormatoEvaluacion());
                break;
        }

        // Criterios de calidad (comunes a todos)
        parts.push('\n— Criterios de Calidad:');
        parts.push('  • Alineación total con el OA y las habilidades seleccionadas');
        parts.push('  • Lenguaje claro, preciso y adecuado al nivel de los estudiantes');
        parts.push('  • Coherencia pedagógica y progresión en la dificultad');
        parts.push('  • Contextualización pertinente al entorno de los estudiantes');

        // Agregar datos extra de Paso 3 y Paso 4 si existen
        if (this.data.datosExtra) {
            if (this.data.datosExtra.paso3) {
                parts.push(`\n— Información Adicional (Paso 3):\n  ${this.data.datosExtra.paso3}`);
            }
            if (this.data.datosExtra.paso4) {
                parts.push(`\n— Información Adicional (Paso 4):\n  ${this.data.datosExtra.paso4}`);
            }
        }

        return parts.join('\n');
    }

    buildFormatoPlanificacion() {
        const parts = [];

        parts.push('\n— Estructura Requerida:');

        // Si hay un tipo personalizado "Otro", agregarlo
        if (this.data.otroPlanificacion) {
            parts.push(`\n— Tipo de Planificación Personalizado: ${this.data.otroPlanificacion}`);
        }

        if (this.data.componentes && this.data.componentes.length > 0) {
            this.data.componentes.forEach(comp => {
                parts.push(`  • ${comp}`);
            });
        } else {
            // Estructura por defecto
            parts.push('  • Objetivo específico (con verbo observable)');
            parts.push('  • Inicio–Desarrollo–Cierre (con tiempos estimados)');
            parts.push('  • Actividades principales y estrategias metodológicas');
            parts.push('  • Evaluación formativa (evidencias de aprendizaje)');
            parts.push('  • Recursos didácticos necesarios');
            parts.push('  • Diferenciación (apoyos y extensión)');
        }

        parts.push('\n— Formato de Salida:');
        parts.push('  • Entrega la planificación lista para implementar');
        parts.push('  • Incluye instrucciones claras para el docente');
        parts.push('  • Sugiere preguntas orientadoras y actividades específicas');

        return parts.join('\n');
    }

    buildFormatoMaterial() {
        const parts = [];

        parts.push('\n— Estructura del Material:');

        // Si hay un tipo personalizado "Otro", agregarlo
        if (this.data.otroMaterial) {
            parts.push(`\n— Tipo de Material Personalizado: ${this.data.otroMaterial}`);
        }

        const items = (this.data.itemsDetallados && this.data.itemsDetallados.length)
            ? this.data.itemsDetallados.map(i => ({ ...i, tipo: PromptBuilderRCOF.nombreItem(i.tipo) }))
            : this.data.items;

        if (this.data.tipoMaterialId === 'guia' && items) {
            parts.push(`  • Total de ítems: ${items.length}`);
            parts.push('  • Tipos de ítem en orden:');

            items.forEach((item, index) => {
                const itemDesc = [];
                itemDesc.push(`    ${index + 1}. ${item.tipo}`);
                if (item.contexto) itemDesc.push(`(Contexto: ${item.contexto})`);
                if (item.nivelCognitivo) itemDesc.push(`[Nivel: ${item.nivelCognitivo}]`);
                parts.push(itemDesc.join(' '));
            });

            if (this.data.incluirSolucionario) {
                parts.push('  • Incluir solucionario completo paso a paso');
            }
            if (this.data.incluirClaves) {
                parts.push('  • Incluir tabla de claves de respuestas correctas');
            }
        } else {
            parts.push('  • Título motivador y contextualizado');
            parts.push('  • Instrucciones claras para los estudiantes');
            parts.push('  • Actividades secuenciadas (de menor a mayor complejidad)');
            parts.push('  • Espacios para que los estudiantes trabajen');
        }

        parts.push('\n— Formato de Salida:');
        parts.push('  • Material listo para imprimir o proyectar');
        parts.push('  • Lenguaje directo dirigido a los estudiantes');
        parts.push('  • Diseño visual claro y ordenado');

        return parts.join('\n');
    }

    buildFormatoEvaluacion() {
        const parts = [];

        parts.push('\n— Instrumentos a Generar:');

        // Si hay un tipo personalizado "Otro", agregarlo
        if (this.data.otroEvaluacion) {
            parts.push(`\n— Tipo de Evaluación Personalizado: ${this.data.otroEvaluacion}`);
        }

        if (this.data.instrumentos && this.data.instrumentos.length > 0) {
            this.data.instrumentos.forEach(inst => {
                parts.push(`  • ${inst}`);
            });
        } else {
            parts.push('  • Instrumento de evaluación alineado al OA');
            parts.push('  • Pauta de corrección o rúbrica');
        }

        if (this.data.enfoqueEvaluacion === 'formativa' || this.data.enfoqueEvaluacion === 'mixta') {
            parts.push('\n— Componentes de Evaluación Formativa:');
            parts.push('  • Evidencias observables de aprendizaje');
            parts.push('  • Descriptores claros de desempeño');
            parts.push('  • Sugerencias de retroalimentación efectiva');
        }

        parts.push('\n— Formato de Salida:');
        parts.push('  • Instrumentos listos para aplicar');
        parts.push('  • Criterios de evaluación explícitos y medibles');
        parts.push('  • Niveles de desempeño claramente definidos');

        if (this.data.tipoEvaluacionId === 'prueba_escrita') {
            const items = this.data.itemsPruebaDetallados || [];
            if (items.length) {
                parts.push(`\n— Estructura de la Prueba (${items.length} ítems):`);
                items.forEach(i => {
                    parts.push(`    ${i.numero}. ${PromptBuilderRCOF.nombreItem(i.tipo)} [Nivel cognitivo: ${i.nivelCognitivo}]`);
                });
            }
            parts.push('  • Incluir tabla de especificaciones (contenido vs habilidad)');
        }

        return parts.join('\n');
    }
}

PromptBuilderRCOF.nombreItem = function (id) {
    const nombres = {
        seleccion_multiple: 'Selección múltiple',
        verdadero_falso: 'Verdadero o Falso',
        desarrollo: 'Desarrollo',
        completar: 'Completar',
        terminos_pareados: 'Términos pareados',
        resolucion_problemas: 'Resolución de problemas'
    };
    return nombres[id] || id;
};

// Función auxiliar para generar el prompt completo
function generarPromptRCOF(formData) {
    const builder = new PromptBuilderRCOF(formData);
    return builder.buildPrompt();
}
