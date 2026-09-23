// Configuración completa del Generador de Prompts Docentes
// Estructura de flujo multi-paso con metodología RCOF

const appConfig = {
    version: "2.0.0",
    locale: "es-CL",
    productName: "Generador de Prompts Docentes RCOF",

    // Mapeo de IDs de asignaturas entre curriculum-data.js y esta config
    asignaturaMapping: {
        'lengua': 'Lengua y Literatura',
        'matematica': 'Matemática',
        'ciencias': 'Ciencias Naturales',
        'historia': 'Historia, Geografía y Ciencias Sociales',
        'ingles': 'Idioma Extranjero: Inglés',
        'ed_fisica': 'Educación Física y Salud',
        'musica': 'Música',
        'artes': 'Artes Visuales',
        'tecnologia': 'Tecnología',
        'orientacion': 'Orientación',
        // 3° y 4° Medio - Plan Común y Electivos
        'ciencias_ciudadania': 'Ciencias para la Ciudadanía',
        'educacion_ciudadana': 'Educación Ciudadana',
        'filosofia': 'Filosofía',
        'artes_visuales': 'Artes Visuales, Audiovisuales y Multimediales',
        'creacion_musical': 'Creación y Composición Musical',
        'diseno_arquitectura': 'Diseño y Arquitectura',
        'interpretacion_danza': 'Interpretación y Creación en Danza',
        'interpretacion_teatro': 'Interpretación y Creación en Teatro',
        'interpretacion_musical': 'Interpretación Musical',
        'biologia_ecosistemas': 'Biología de los Ecosistemas',
        'biologia_celular': 'Biología Celular y Molecular',
        'ciencias_salud': 'Ciencias de la Salud',
        'fisica': 'Física',
        'quimica': 'Química',
        'vida_activa': 'Promoción de Estilos de Vida Activos y Saludables',
        'ciencias_ejercicio': 'Ciencias del Ejercicio Físico y Deportivo',
        'expresion_corporal': 'Expresión Corporal',
        'estetica': 'Estética',
        'filosofia_politica': 'Filosofía Política',
        'seminario_filosofia': 'Seminario de Filosofía',
        'comprension_historica': 'Comprensión Histórica del Presente',
        'geografia_territorio': 'Geografía, Territorio y Desafíos Socioambientales',
        'economia_sociedad': 'Economía y Sociedad',
        'taller_literatura': 'Taller de Literatura',
        'lectura_escritura': 'Lectura y Escritura Especializada',
        'participacion_argumentacion': 'Participación y Argumentación en Democracia',
        'limites_derivadas': 'Límites, Derivadas e Integrales',
        'probabilidades_estadistica': 'Probabilidades y Estadística',
        'pensamiento_computacional': 'Pensamiento Computacional y Programación',
        'geometria_3d': 'Geometría 3D',
        // Técnico Profesional
        'tp_acuicultura': 'ACUICULTURA',
        'tp_administracion': 'ADMINISTRACIÓN',
        'tp_administracion_logistica': 'ADMINISTRACIÓN - Mención LOGÍSTICA',
        'tp_administracion_recursos_humanos': 'ADMINISTRACIÓN - Mención RECURSOS HUMANOS',
        'tp_agropecuaria': 'AGROPECUARIA',
        'tp_agropecuaria_agricultura': 'AGROPECUARIA - Mención AGRICULTURA',
        'tp_agropecuaria_pecuaria': 'AGROPECUARIA - Mención PECUARIA',
        'tp_agropecuaria_vitivinicola': 'AGROPECUARIA - Mención VITIVINÍCOLA',
        'tp_asistencia_en_geologia': 'ASISTENCIA EN GEOLOGÍA',
        'tp_atencion_de_enfermeria': 'ATENCIÓN DE ENFERMERÍA',
        'tp_atencion_de_enfermeria_adulto_mayor': 'ATENCIÓN DE ENFERMERÍA - Mención ADULTO MAYOR',
        'tp_atencion_de_enfermeria_enfermeria': 'ATENCIÓN DE ENFERMERÍA - Mención ENFERMERÍA',
        'tp_atencion_de_parvulos': 'ATENCIÓN DE PÁRVULOS',
        'tp_conectividad_y_redes': 'CONECTIVIDAD Y REDES',
        'tp_construccion': 'CONSTRUCCIÓN',
        'tp_construccion_edificacion': 'CONSTRUCCIÓN - Mención EDIFICACIÓN',
        'tp_construccion_obras_viales_e_infraestructura': 'CONSTRUCCIÓN - Mención OBRAS VIALES E INFRAESTRUCTURA',
        'tp_construccion_terminaciones_de_la_construccion': 'CONSTRUCCIÓN - Mención TERMINACIONES DE LA CONSTRUCCIÓN',
        'tp_construcciones_metalicas': 'CONSTRUCCIONES METÁLICAS',
        'tp_contabilidad': 'CONTABILIDAD',
        'tp_dibujo_tecnico': 'DIBUJO TÉCNICO',
        'tp_elaboracion_industrial_de_alimentos': 'ELABORACIÓN INDUSTRIAL DE ALIMENTOS',
        'tp_electricidad': 'ELECTRICIDAD',
        'tp_electronica': 'ELECTRÓNICA',
        'tp_explotacion_minera': 'EXPLOTACIÓN MINERA',
        'tp_forestal': 'FORESTAL',
        'tp_gastronomia': 'GASTRONOMÍA',
        'tp_gastronomia_cocina': 'GASTRONOMÍA - Mención COCINA',
        'tp_gastronomia_pasteleria_y_reposteria': 'GASTRONOMÍA - Mención PASTELERÍA Y REPOSTERÍA',
        'tp_grafica': 'GRÁFICA',
        'tp_instalaciones_sanitarias': 'INSTALACIONES SANITARIAS',
        'tp_mecanica_automotriz': 'MECÁNICA AUTOMOTRIZ',
        'tp_mecanica_de_mantenimiento_de_aeronaves': 'MECÁNICA DE MANTENIMIENTO DE AERONAVES',
        'tp_mecanica_industrial': 'MECÁNICA INDUSTRIAL',
        'tp_mecanica_industrial_mantenimiento_electromecanico': 'MECÁNICA INDUSTRIAL - Mención MANTENIMIENTO ELECTROMECÁNICO',
        'tp_mecanica_industrial_maquinasherramientas': 'MECÁNICA INDUSTRIAL - Mención MÁQUINAS-HERRAMIENTAS',
        'tp_mecanica_industrial_matriceria': 'MECÁNICA INDUSTRIAL - Mención MATRICERÍA',
        'tp_metalurgia_extractiva': 'METALURGIA EXTRACTIVA',
        'tp_montaje_industrial': 'MONTAJE INDUSTRIAL',
        'tp_muebles_y_terminaciones_en_madera': 'MUEBLES Y TERMINACIONES EN MADERA',
        'tp_operaciones_portuarias': 'OPERACIONES PORTUARIAS',
        'tp_pesqueria': 'PESQUERÍA',
        'tp_programacion': 'PROGRAMACIÓN',
        'tp_quimica_industrial': 'QUÍMICA INDUSTRIAL',
        'tp_quimica_industrial_laboratorio_quimico': 'QUÍMICA INDUSTRIAL - Mención LABORATORIO QUÍMICO',
        'tp_quimica_industrial_planta_quimica': 'QUÍMICA INDUSTRIAL - Mención PLANTA QUÍMICA',
        'tp_refrigeracion_y_climatizacion': 'REFRIGERACIÓN Y CLIMATIZACIÓN',
        'tp_servicios_de_hoteleria': 'SERVICIOS DE HOTELERÍA',
        'tp_servicios_de_turismo': 'SERVICIOS DE TURISMO',
        'tp_telecomunicaciones': 'TELECOMUNICACIONES',
        'tp_tripulacion_de_naves_mercantes_y_especiales': 'TRIPULACIÓN DE NAVES MERCANTES Y ESPECIALES',
        'tp_vestuario_y_confeccion_textil': 'VESTUARIO Y CONFECCIÓN TEXTIL',
    },

    nivelMapping: {
        '1basico': '1° Básico',
        '2basico': '2° Básico',
        '3basico': '3° Básico',
        '4basico': '4° Básico',
        '5basico': '5° Básico',
        '6basico': '6° Básico',
        '7basico': '7° Básico',
        '8basico': '8° Básico',
        '1medio': '1° Medio',
        '2medio': '2° Medio',
        '3medio': '3° Medio',
        '4medio': '4° Medio'
    }
};

// Catálogos expandidos
const catalogos = {
    contextos: [
        { id: 'cotidiano', label: 'Cotidiano' },
        { id: 'cientifico', label: 'Científico' },
        { id: 'laboral', label: 'Laboral / técnico' },
        { id: 'datos_graficos', label: 'Datos y gráficos' },
        { id: 'geometrico', label: 'Geométrico' },
        { id: 'sin_contexto', label: 'Sin contexto (procedimental)' }
    ],

    nivelesCognitivos: [
        { id: 'recordar', label: 'Recordar' },
        { id: 'comprender', label: 'Comprender' },
        { id: 'aplicar', label: 'Aplicar' },
        { id: 'analizar', label: 'Analizar' },
        { id: 'evaluar', label: 'Evaluar' },
        { id: 'crear', label: 'Crear' }
    ],

    tiposDeItem: [
        {
            id: 'seleccion_multiple',
            label: 'Selección múltiple (1 correcta)',
            hint: 'Enunciado claro, 4 alternativas, 1 correcta, distractores plausibles.'
        },
        {
            id: 'seleccion_multiple_multiple',
            label: 'Selección múltiple (múltiples correctas)',
            hint: 'Indica cuántas correctas hay o pide marcar todas las correctas.'
        },
        {
            id: 'verdadero_falso',
            label: 'Verdadero / Falso',
            hint: 'Enunciados precisos, sin ambigüedad.'
        },
        {
            id: 'vf_justificado',
            label: 'Verdadero / Falso con justificación',
            hint: 'Pide justificar con 1–2 líneas o procedimiento breve.'
        },
        {
            id: 'completar_oracion',
            label: 'Completar la oración (fill in the blank)',
            hint: 'Oración con espacio(s) para concepto clave.'
        },
        {
            id: 'completar_procedimiento',
            label: 'Completar pasos de un procedimiento',
            hint: 'Deja espacios en pasos críticos del procedimiento.'
        },
        {
            id: 'respuesta_corta',
            label: 'Respuesta corta (1–2 líneas)',
            hint: 'Pregunta directa, respuesta verificable.'
        },
        {
            id: 'respuesta_extendida',
            label: 'Respuesta desarrollada / explicación',
            hint: 'Incluye pauta breve o criterios.'
        },
        {
            id: 'resolver_problema',
            label: 'Resolver problema (procedimiento)',
            hint: 'Problema contextualizado, solicita procedimiento y respuesta final.'
        },
        {
            id: 'problema_modelamiento',
            label: 'Problema de modelamiento (representaciones)',
            hint: 'Pide transitar entre representaciones.'
        },
        {
            id: 'emparejamiento',
            label: 'Emparejamiento (match)',
            hint: 'Columna A y B para emparejar definiciones, ejemplos, representaciones.'
        },
        {
            id: 'ordenamiento',
            label: 'Ordenar / secuenciar',
            hint: 'Ordena pasos, eventos, procesos o soluciones.'
        },
        {
            id: 'clasificacion',
            label: 'Clasificar (categorías)',
            hint: 'Entrega elementos y pide clasificarlos en categorías.'
        },
        {
            id: 'completar_tabla',
            label: 'Completar tabla',
            hint: 'Tabla con datos incompletos para inferir o calcular.'
        },
        {
            id: 'interpretar_grafico',
            label: 'Interpretación de gráfico',
            hint: 'Incluye preguntas de lectura literal e inferencial.'
        },
        {
            id: 'construir_grafico',
            label: 'Construcción de gráfico',
            hint: 'Pide graficar, rotular e interpretar.'
        },
        {
            id: 'detectar_error',
            label: 'Detectar y corregir error',
            hint: 'Presenta procedimiento con error y pide identificarlo y corregirlo.'
        },
        {
            id: 'comparar_metodos',
            label: 'Comparar métodos / estrategias',
            hint: 'Pide resolver de dos formas o comparar eficiencia/validez.'
        },
        {
            id: 'explicar_concepto',
            label: 'Explicar concepto con ejemplo',
            hint: 'Definición + ejemplo propio + contraejemplo (opcional).'
        },
        {
            id: 'estudio_de_caso',
            label: 'Estudio de caso',
            hint: 'Caso breve + preguntas de análisis y decisión.'
        },
        {
            id: 'pregunta_oral',
            label: 'Pregunta oral / defensa',
            hint: 'Incluye pauta de evaluación breve.'
        }
    ],

    tiposPlanificacion: [
        {
            id: 'planificacion_inversa_ubd',
            label: 'Planificación Inversa (Understanding by Design - UbD)',
            baseTeorica: 'Wiggins & McTighe: objetivos → evidencias → experiencias. Alineamiento constructivo.'
        },
        {
            id: 'secuencia_didactica',
            label: 'Secuencia Didáctica (progresión de aprendizaje)',
            baseTeorica: 'Progresión y andamiaje. Enseñanza explícita + práctica guiada + práctica autónoma.'
        },
        {
            id: 'clase_a_clase_abcd',
            label: 'Planificación Clase a Clase (Objetivos ABCD + Bloom)',
            baseTeorica: 'Modelo ABCD (Audiencia, Conducta, Condición, Grado). Taxonomía de Bloom revisada.'
        },
        {
            id: 'planificacion_dua',
            label: 'Planificación con DUA (Diseño Universal para el Aprendizaje)',
            baseTeorica: 'CAST: múltiples medios de representación, acción/expresión y compromiso. Accesibilidad y barreras.'
        },
        {
            id: 'planificacion_abp',
            label: 'ABP (Aprendizaje Basado en Problemas) / Indagación',
            baseTeorica: 'Resolución de problemas auténticos. Metacognición y justificación.'
        },
        {
            id: 'planificacion_proyecto',
            label: 'ABPro (Aprendizaje Basado en Proyectos)',
            baseTeorica: 'Producto final + hitos. Evaluación con rúbrica.'
        }
    ],

    duraciones: [
        { id: '1_clase', label: '1 clase' },
        { id: 'semana', label: '1 semana' },
        { id: 'unidad', label: 'Unidad completa' },
        { id: 'mes', label: '1 mes' }
    ],

    componentesPlanificacion: [
        {
            id: 'objetivo_especifico',
            label: 'Objetivo específico (redactado con verbo observable)'
        },
        {
            id: 'inicio_desarrollo_cierre',
            label: 'Inicio–Desarrollo–Cierre'
        },
        {
            id: 'evaluacion_formativa',
            label: 'Evaluación formativa (evidencias durante la clase)'
        },
        {
            id: 'metacognicion',
            label: 'Metacognición (preguntas de reflexión)'
        },
        {
            id: 'diferenciacion',
            label: 'Diferenciación (apoyos y desafíos)'
        },
        {
            id: 'recursos',
            label: 'Recursos y materiales'
        },
        {
            id: 'tiempos',
            label: 'Distribución de tiempos'
        }
    ],

    tiposMaterial: [
        { id: 'guia', label: 'Guía de trabajo (actividades)' },
        { id: 'ppt', label: 'Presentación (diapositivas)' },
        { id: 'actividad_estacion', label: 'Estaciones de aprendizaje' },
        { id: 'taller_practica', label: 'Taller práctico' },
        { id: 'actividad_tics', label: 'Actividad con TIC (herramienta digital)' },

    ],

    tiposEvaluacion: [
        { id: 'prueba_escrita', label: 'Prueba escrita (instrumento tradicional)' },
        { id: 'quiz_formativo', label: 'Quiz formativo / salida (exit ticket)' },
        { id: 'proyecto', label: 'Evaluación por proyecto' },
        { id: 'desempeno', label: 'Evaluación de desempeño (tarea auténtica)' },
        { id: 'oral', label: 'Evaluación oral (presentación/defensa)' },
        { id: 'portafolio', label: 'Portafolio' },
        { id: 'coevaluacion_auto', label: 'Autoevaluación y coevaluación' },

    ],

    instrumentosEvaluacion: [
        {
            id: 'rubrica_analitica',
            label: 'Rúbrica analítica (criterios x niveles)'
        },
        {
            id: 'rubrica_holistica',
            label: 'Rúbrica holística'
        },
        {
            id: 'lista_cotejo',
            label: 'Lista de cotejo'
        },
        {
            id: 'escala_valoracion',
            label: 'Escala de valoración (1–4 / insuficiente–destacado)'
        },
        {
            id: 'pauta_observacion',
            label: 'Pauta de observación'
        },
        {
            id: 'guia_retroalimentacion',
            label: 'Guía de retroalimentación (feed up/feedback/feed forward)'
        }
    ],

    enfoquesEvaluacion: [
        {
            id: 'formativa',
            label: 'Formativa (mejorar durante el proceso)',
            baseTeorica: 'Black & Wiliam: evaluación para el aprendizaje'
        },
        {
            id: 'sumativa',
            label: 'Sumativa (calificación final)',
            baseTeorica: 'Medición del logro de OA'
        },
        {
            id: 'mixta',
            label: 'Mixta (formativa + sumativa)',
            baseTeorica: 'Ciclo de mejora + evidencia final'
        }
    ],

    necesidadesEducativasEspeciales: {
        permanentes: [
            { id: 'discapacidad_intelectual', label: 'Discapacidad Intelectual' },
            { id: 'discapacidad_auditiva', label: 'Discapacidad Auditiva' },
            { id: 'discapacidad_visual', label: 'Discapacidad Visual' },
            { id: 'discapacidad_motora', label: 'Discapacidad Motora' },
            { id: 'tea', label: 'Trastorno del Espectro Autista (TEA)' },
            { id: 'discapacidad_multiple', label: 'Discapacidad Múltiple' }
        ],
        transitorias: [
            { id: 'dea', label: 'Dificultades Específicas del Aprendizaje (DEA)' },
            { id: 'tdah', label: 'Trastorno por Déficit de Atención (TDA/TDAH)' },
            { id: 'tel', label: 'Trastorno Específico del Lenguaje (TEL/TDL)' },
            { id: 'ci_limitrofe', label: 'Coeficiente Intelectual en Rango Limítrofe' }
        ]
    }
};
