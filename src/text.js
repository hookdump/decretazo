const text = [
    {
        type: "header",
        blocks: [
            'República Argentina - Poder Ejecutivo Nacional',
            '1983/2023 - 40 AÑOS DE DEMOCRACIA',
            'Decreto de Necesidad y Urgencia',
            'Número: DNU-2023-70-APN-PTE',
            'CIUDAD DE BUENOS AIRES',
            'Miércoles 20 de Diciembre de 2023',
            'Referencia: Decreto de Necesidad y Urgencia – Bases para la Reconstrucción de la Economía Argentina',
            'VISTO y CONSIDERANDO:',
            'Que la REPÚBLICA ARGENTINA se encuentra atravesando una situación de inédita gravedad, generadora de ' +
            'profundos desequilibrios que impactan negativamente en toda la población, en especial en lo social y económico.\n' +
            'Que la severidad de la crisis pone en riesgo la subsistencia misma de la organización social, jurídica y política ' +
            'constituida, afectando su normal desarrollo en procura del bien común.\n' +
            'Que ningún gobierno federal ha recibido una herencia institucional, económica y social peor que la que recibió la ' +
            'actual administración por lo que es imprescindible adoptar medidas que permitan superar la situación de ' +
            'emergencia creada por las excepcionales condiciones económicas y sociales que la Nación padece, especialmente, ' +
            'como consecuencia de un conjunto de decisiones intervencionistas.\n' +
            'Que con el fin de corregir la crisis terminal que enfrenta la economía argentina y conjurar el grave riesgo de un ' +
            'deterioro aún mayor y mucho más grave de la situación social y económica, se debe reconstruir la economía a ' +
            'través de la inmediata eliminación de barreras y restricciones estatales que impiden su normal desarrollo, ' +
            'promoviendo al mismo tiempo una mayor inserción en el comercio mundial.\n' +
            'Que en el año 2003 el país tenía superávits gemelos, es decir, superávit fiscal y externo.\n' +
            'Que la realidad actual es muy diferente: los déficits gemelos son equivalentes a DIECISIETE (17) puntos del PBI.\n' +
            'Que para comenzar a solucionar la enorme cantidad de problemas derivados de la herencia que la administración ' +
            'saliente deja a todos los argentinos, es necesario un ajuste fiscal en el sector público nacional de 5 puntos del PBI, ' +
            'y -al mismo tiempo- se requiere resolver la situación de los pasivos remunerados del BANCO CENTRAL DE LA ' +
            'REPÚBLICA ARGENTINA, los que son responsables de los 10 puntos de su déficit.\n' +
            'Que, de esta manera, se pondría fin tanto al déficit fiscal como a la emisión de dinero necesaria para financiarlo y, ' +
            'con ello, a la única causa de la inflación empíricamente cierta y válida en términos teóricos.\n' +
            'Que, sin embargo, dado que la política monetaria actúa con un rezago que oscila entre 18 a 24 meses, aun cuando ' +
            'hoy se deje de emitir dinero, los argentinos seguiremos pagando los costos del desastre monetario del gobierno ' +
            'saliente.\n' +
            'Que la administración anterior emitió moneda por un equivalente a 20 puntos del PBI, lo que genera un efecto ' +
            'devastador inevitable que se prolongará en el tiempo, generando un incremento notorio de la ya altísima inflación ' +
            'heredada.\n' +
            'Que el comúnmente conocido como “cepo cambiario”, otra herencia nefasta de la administración anterior, no solo ' +
            'constituye una pesadilla social y productiva, porque implica altas tasas de interés, bajo nivel de actividad, escaso ' +
            'nivel de empleo formal y salarios reales miserables que impulsan el aumento de pobres e indigentes, sino que ' +
            'produjo un sobrante de dinero en la economía que hoy es el doble de lo que se registraba en los momentos previos ' +
            'a la implementación del plan impulsado por el ministro Celestino Rodrigo, conocido como el “Rodrigazo”.\n' +
            'Que para poder dimensionar la magnitud de lo que esto implica, cabe recordar que ese plan multiplicó por 6 veces ' +
            'la tasa de inflación, por lo que un evento similar significaría multiplicar la tasa de inflación por 12 veces.\n' +
            'Que teniendo en cuenta que la inflación mensual anualizada implicaría una inflación del 300% anual, la ' +
            'REPÚBLICA ARGENTINA podría pasar a tener una tasa anual del orden del 3.600 %.\n' +
            'Que, a su vez, dada la situación de los pasivos remunerados del BANCO CENTRAL DE LA REPÚBLICA ' +
            'ARGENTINA, que es peor que la que había en los momentos previos a la hiperinflación de 1989, en muy poco ' +
            'tiempo se podría cuadruplicar la cantidad de dinero y con eso llevar a la inflación a niveles del 15.000% anual.\n' +
            'Que debido al accionar irresponsable del gobierno saliente, la REPÚBLICA ARGENTINA se enfrenta a una ' +
            'emergencia nunca vista en la historia del país con la posibilidad cierta de una aceleración de la inflación a ' +
            '15.000% anual.\n' +
            'Que este número aterrador implica una inflación del 52% mensual; hoy mismo la inflación de acuerdo con ' +
            'estimaciones privadas, oscilará entre el 20 y el 40 por ciento mensual para los meses entre diciembre y febrero.\n' +
            'Que, en función de lo expuesto, las políticas implementadas por el gobierno saliente han tenido como resultado ' +
            'un severo riesgo de hiperinflación, la que -de registrarse- generaría un enorme perjuicio económico - social a toda ' +
            'la población del país.\n' +
            'Que, en ese marco, el gobierno actual tiene como máxima prioridad actuar de manera urgente y hacer todos los ' +
            'esfuerzos necesarios para evitar semejante catástrofe que llevaría a la pobreza por encima del 90% y la indigencia ' +
            'por encima del 50%.\n' +
            'Que, en consecuencia, no hay solución alternativa a un urgente ajuste fiscal que ordene las cuentas públicas y, ' +
            'como contrapartida, un programa general de desregulación de la economía que saque al país del pozo en el que lo ' +
            'sumió la administración anterior.\n' +
            'Que, por otra parte, la situación de emergencia heredada no termina ahí, ya que los desequilibrios en las tarifas ' +
            'son equiparables a la desastrosa situación registrada a finales del año 2015.\n' +
            'Que la deuda por importaciones supera los 30.000 millones de dólares y las utilidades retenidas a las empresas ' +
            'extranjeras alcanzan los 10.000 millones de dólares, las deudas del BANCO CENTRAL DE LA REPÚBLICA ' +
            'ARGENTINA y de YPF suman 25.000 millones de dólares y la deuda del Tesoro pendiente suma unos 35.000 ' +
            'millones de dólares adicionales.\n' +
            'Que el monto neto de la deuda contraída irresponsablemente por la administración anterior asciende a ' +
            'aproximadamente 112.000 millones de dólares, que se suman a los aproximadamente 420.000 millones de dólares ' +
            'de deuda ya existentes.\n' +
            'Que a estos problemas se suman los compromisos de deuda del corriente año, en el que los vencimientos en pesos ' +
            'son equivalentes a 90.000 millones de dólares y 25.000 millones de dólares en monedas extranjeras con ' +
            'organismos multilaterales de crédito.\n' +
            'Que el acceso a los mercados financieros está cerrado como consecuencia de la política irresponsable de la ' +
            'administración anterior y el acuerdo alcanzado oportunamente con el Fondo Monetario Internacional fue ' +
            'incumplido por esa misma administración, limitando severamente la capacidad de acción del gobierno federal y ' +
            'exigiendo la adopción de medidas urgentes para revertir la delicadísima situación heredada.\n' +
            'Que todo esto transcurre en medio de una situación de enorme gravedad social como consecuencia de una ' +
            'economía que no crece desde el año 2011.\n' +
            'Que el empleo formal en el sector privado se mantiene estancado en 6 millones de puestos de trabajo desde esa ' +
            'fecha, lo que ha provocado la anómala e inaceptable situación de que el empleo informal supere al formal en un ' +
            '33%.\n' +
            'Que, por ello, los salarios reales se encuentran en un nivel inusualmente bajo, ubicándose a finales del mandato ' +
            'de la administración anterior en torno a los 300 dólares mensuales, eso es 6 veces inferior al nivel existente ' +
            'durante el período de convertibilidad.\n' +
            'Que la consecuencia de la catastrófica política económica y social aplicada por la administración anterior es una ' +
            'caída abrupta del salario de los trabajadores de todo el país, lo que resulta en un 45% de pobreza y un 10% de ' +
            'indigencia.\n' +
            'Que en los últimos 12 años el PBI per cápita ha caído un 15% en un contexto donde el país acumuló una inflación ' +
            'de aproximadamente 5.000%, demostración cabal de que nuestro país ya se encuentra inmerso en una ' +
            'estanflación desde hace más de una década.\n' +
            'Que es fácil advertir que la actual administración ha recibido un país en donde casi la mitad de su población es ' +
            'pobre y con un tejido social completamente deteriorado, donde más de 20 millones de argentinos no tienen acceso ' +
            'a una vida digna por estar presos de un sistema que solo genera más pobreza.\n' +
            'Que más de 6 millones de menores de edad pasan hambre, no tienen acceso a condiciones dignas de vida y, como ' +
            'es evidente, ni siquiera pueden asistir regularmente a la escuela.\n' +
            'Que la infraestructura de nuestro país también se encuentra en situación calamitosa; solo el 16% de nuestras rutas ' +
            'se encuentran asfaltadas y solo el 11% está en buen estado.\n' +
            'Que por todo lo dicho es indudable que la situación de la Argentina es extremadamente crítica y de una ' +
            'emergencia sin precedentes en nuestra historia.\n' +
            'Que si bien nuestro país ha atravesado graves crisis, y muchos gobiernos se han expresado en el pasado en forma ' +
            'similar acerca de la gravedad de la situación que enfrentó la Argentina, la realidad indica que ninguna de las ' +
            'anteriores, pese a su seriedad, tuvo la magnitud y alcance de la crisis actual.\n' +
            'Que frente a ese gravísimo cuadro de situación no hay más alternativa posible que el ajuste de las cuentas y de las ' +
            'finanzas públicas, que implique un drástico cambio de rumbo económico.\n' +
            'Que la confianza -núcleo central de las decisiones económicas- solo se podrá revertir con un programa integral de ' +
            'reformas económicas que quiebre en forma decidida las causas profundas de la decadencia de nuestro país.\n' +
            'Que esas causas se encuentran en una estructura económica que se basa en la cooptación de rentas de la población ' +
            'a través de un esquema corporativo, que se apoya en muchos casos en regulaciones arbitrarias que no tienen como ' +
            'fin el bien común y que entorpecen el normal desenvolvimiento de la economía e impiden el libre desarrollo de ' +
            'las capacidades económicas de nuestro país.\n' +
            'Que esa intrincada red de regulaciones, lejos de proteger a los sectores más débiles de la población, los hace ' +
            'dependientes de sectores notablemente improductivos y parasitarios.\n' +
            'Que la situación exige la adopción de medidas urgentes, que no admiten dilación alguna, con el objetivo de ' +
            'romper ese círculo vicioso de empobrecimiento generalizado y crisis recurrentes.\n' +
            'Que el grave cuadro descripto obliga a tomar en forma inmediata decisiones drásticas, que ayuden a poner en ' +
            'marcha el país a través de la liberación de fuerzas productivas, hoy maniatadas por regulaciones cuyo fracaso es ' +
            'patente.\n' +
            'Que la situación descripta atenta contra el bien común y afecta los derechos constitucionales de millones de ' +
            'argentinos.\n' +
            'Que para revertir la situación de estancamiento y empobrecimiento en que nuestro país se encuentra sumido hace ' +
            'varias décadas, resulta imperiosa la eliminación de numerosas regulaciones que ahogan a las fuerzas productivas ' +
            'de la república.\n' +
            'Que, por ese motivo, el gobierno nacional ha decidido implementar un plan de desregulación de amplísimo ' +
            'alcance.\n' +
            'Que, en ese orden, es imprescindible facilitar la operatoria económica eliminando los obstáculos que han ' +
            'introducido diversas leyes en el libre funcionamiento de los mercados mediante una indebida injerencia del ' +
            'Estado, correspondiendo así derogar las Leyes N° 20.680 de Abastecimiento, N° 18.875 de Compre Nacional parcialmente, N° 21.608 de Promoción Industrial, N° 27.437 de Compre Argentino -parcialmente- y N° 27.545 de ' +
            'Góndolas.\n' +
            'Que es necesario derogar la Ley N° 18.425 de Promoción Comercial que impone limitaciones al funcionamiento ' +
            'de los comercios y obliga a participar de registros de actividad que carecen de razón de ser.\n' +
            'Que en aras de impulsar inversiones y radicaciones comerciales y generar empleo es necesario derogar la Ley N° ' +
            '19.227 -que limita la ubicación de mercados mayoristas- y la Ley N° 20.657, otorgando más libertad para las ' +
            'decisiones privadas en el comercio.\n' +
            'Que se torna imperioso acrecentar actividades productivas que permitan expandir la producción y reducir los ' +
            'precios de los productos, fomentando asimismo el desarrollo de las economías regionales, de manera de hacer ' +
            'realidad el plan federal que nuestros padres fundadores tuvieron en mente al sancionar la Constitución Nacional.\n' +
            'Que, a tales fines, resulta necesaria una modernización del Instituto Nacional de la Yerba Mate, previsto en la Ley ' +
            'N° 25.564, que lo equipare con el Instituto Nacional de la Vitivinicultura, focalizando sus actividades en las ' +
            'verificaciones de calidad, al tiempo de impedir su intromisión en un mercado competitivo, replicando así el ' +
            'exitoso modelo de la industria del vino que ha logrado una mayor inserción internacional.\n' +
            'Que, en esa línea, corresponde derogar la Ley N° 27.114 que impone limitaciones al fraccionamiento de la yerba ' +
            'mate.\n' +
            'Que frente a la crisis del sistema de salud es imperativo lograr reducciones contundentes en los costos de las ' +
            'prestaciones, lo que en definitiva redundará en un beneficio directo para la población en general.\n' +
            'Que con el objetivo de aumentar la competitividad del mercado debe reformularse la ley de medicamentos y ' +
            'recetas, migrando a la receta electrónica, a los fines de lograr una mayor agilidad de la industria y minimizar ' +
            'costos.\n' +
            'Que, por ello, resulta necesario modificar las Leyes N° 25.649 y N° 27.553.\n' +
            'Que también se deben introducir modificaciones en la Ley N° 17.565 de Ejercicio de la Actividad Farmacéutica y ' +
            'en la Ley N° 17.132 de Ejercicio de la Medicina, a los fines de incrementar la competencia en el sector y reducir ' +
            'los precios para el usuario.\n' +
            'Que con el objeto de disminuir el costo de los medicamentos, facilitar su uso y acceso, así como para lograr un ' +
            'mejor desarrollo de la actividad farmacéutica, en el mundo se ha facilitado la utilización de remedios genéricos.\n' +
            'Que debe rescatarse el espíritu originario de la Ley N° 25.649, facilitando la venta de medicamentos genéricos de ' +
            'menor costo, los que convivirán con los productos medicinales de marcas reconocidas en el mercado.\n' +
            'Que, asimismo, para aumentar la competitividad del sistema, se deben liberar las restricciones de precios al ' +
            'sistema de medicina prepaga.\n' +
            'Que en orden a disminuir los costos del sistema de salud es necesario modificar la Ley N° 26.906 de Trazabilidad ' +
            'y Verificación de Aptitud Técnica de Productos Médicos Activos de Salud a los fines de reducir la burocracia ' +
            'asociada a la implementación de equipamiento médico.\n' +
            'Que, por otra parte, el comercio exterior de nuestro país requiere de una fuerte reforma para su fortalecimiento y ' +
            'fomento.\n' +
            'Que para agilizar el comercio, eje central para superar la situación de inédita gravedad por la que atraviesa la ' +
            'REPÚBLICA ARGENTINA es necesaria una profunda reforma del Código Aduanero.\n' +
            'Que, en ese sentido, es preciso eliminar el registro de exportadores e importadores, toda vez que nuestro país es ' +
            'uno de los pocos en el mundo que requiere participar de un registro para exportar o importar, lo que crea barreras ' +
            'artificiales que solamente encarecen los productos, con grave perjuicio para sus habitantes.\n' +
            'Que con el objeto de facilitar las operaciones y asegurar su transparencia es necesario digitalizar los trámites, ' +
            'rediseñar los procesos de retiro de mercadería y autorizar la declaración anticipada.\n' +
            'Que a los fines de fomentar las inversiones es necesario eliminar también la posibilidad de imponer prohibiciones ' +
            'de importación y exportación económicas, dando certeza jurídica a quienes inviertan en el país.\n' +
            'Que, asimismo, debe derogarse la Ley N° 14.499, que en algunos casos operaba como un freno al otorgamiento ' +
            'de créditos.\n' +
            'Que es necesario realizar una fuerte desregulación y simplificación en el mercado de tarjetas de crédito, ' +
            'adecuándolo a los cambios recientes en modalidades de relacionamiento y tecnologías de digitalización.\n' +
            'Que en el contexto de la emergencia es fundamental acotar los riesgos de la actividad económica dotando al ' +
            'sector asegurador de mayor flexibilidad.\n' +
            'Que, por otro lado, el sector agropecuario debe ser un factor esencial para salir de la emergencia que se ha ' +
            'descripto y para ello es necesaria una fuerte liberación de la actividad.\n' +
            'Que para ello es imprescindible efectuar modificaciones en la Ley N° 9.643 que regula los certificados de ' +
            'depósito y warrants.\n' +
            'Que, a su vez, es menester derogar la Ley N° 26.737 que limita el derecho de propiedad sobre la tierra rural y las ' +
            'inversiones en el sector.\n' +
            'Que varias industrias deben soportar el peso de una excesiva regulación, como ocurre con la industria vitivinícola, ' +
            'por lo que resulta adecuado derogar la Ley N° 18.600 de contratos de elaboración de vinos, la Ley N° 18.905 de ' +
            'política vitivinícola nacional y la Ley N° 22.667 de reconversión vitivinícola.\n' +
            'Que por idénticos motivos deben derogarse la Ley N° 18.770 de régimen de entregas de azúcar para consumo en ' +
            'el mercado interno y la Ley N° 26.736 que regula el mercado de pasta celulosa y papel para diarios; ello así a fin ' +
            'de lograr un mejor acceso de las empresas del sector a ese insumo, fomentando la más amplia libertad de ' +
            'expresión.\n' +
            'Que en línea con esa eliminación de restricciones que limitan el ágil funcionamiento del sector agropecuario, es ' +
            'necesario derogar la Ley N° 12.916 que crea la Corporación Nacional de Olivicultura, la Ley N° 18.859 de ' +
            'envases nuevos y de único uso para productos destinados a la alimentación del ganado y la Ley N° 19.990 de ' +
            'regulación de la actividad algodonera.\n' +
            'Que la minería es otra área con gran potencial en el país y que se encuentra notablemente subdesarrollada.\n' +
            'Que, en línea con ello, deben eliminarse costos en el sector minero con la derogación de la Ley N° 24.523 del ' +
            'Sistema Nacional de Comercio Minero y la Ley N° 24.695 del Banco Nacional de Información Minera.\n' +
            'Que el sector energético es central para la reversión de la situación de crisis que atraviesa el país.\n' +
            'Que deviene adecuado derogar la Ley N° 25.822 de Plan Federal de Transporte Eléctrico y los Decretos Nros.\n' +
            '1491 del 16 de agosto de 2002, 634 del 21 de agosto de 2003 y 311 del 21 de marzo de 2006.\n' +
            'Que la situación de emergencia también requiere la supresión de costos fiscales de baja productividad.\n' +
            'Que, en tal sentido, resulta imperioso una simplificación en la Ley N° 27.424 de energía distribuida, eliminando ' +
            'la ayuda estatal y la estructura de control.\n' +
            'Que por otra parte, y toda vez que la causa fundamental de la situación de emergencia ya descripta es ' +
            'sustancialmente fiscal, su solución conllevará la superación de la crisis que aqueja al país.\n' +
            'Que para ello es necesario modificar el status jurídico de las empresas públicas, reconvirtiéndolas en Sociedades ' +
            'Anónimas, acordes al régimen de la Ley General de Sociedades.\n' +
            'Que este cambio tendrá el extraordinario beneficio de mejorar la transparencia y el gobierno corporativo de esas ' +
            'empresas, al tiempo que tendrá la virtud de facilitar la transferencia de las acciones a sus empleados, en los casos ' +
            'en que se quiera avanzar en este sentido, en uso de las prerrogativas de la Ley N° 23.696.\n' +
            'Que con este cambio desaparecerán las figuras jurídicas de las Sociedades del Estado, reguladas por la Ley N° ' +
            '20.705, las Empresas del Estado previstas en la Ley N° 13.653 y las Sociedades de Economía Mixta ' +
            'contempladas en el Decreto - Ley N° 15.349/46.\n' +
            'Que, del mismo modo, se modifica el capítulo del Programa de Propiedad Participada de la Ley N° 23.696, a los ' +
            'fines de facilitar el traspaso de las acciones de las empresas actualmente estatales a sus empleados.\n' +
            'Que, adicionalmente, deben incluirse cambios en la Ley N° 21.799 para adecuar al BANCO DE LA NACIÓN ' +
            'ARGENTINA a su nueva configuración societaria.\n' +
            'Que a los fines de una mayor eficiencia en el funcionamiento del sector público es necesario efectuar una ' +
            'profunda reorganización de las empresas públicas mencionadas precedentemente, así como derogar la Ley N° ' +
            '27.113 y suprimir la AGENCIA NACIONAL DE LABORATORIOS PÚBLICOS creada por el artículo 4° de ' +
            'ese texto legal.\n' +
            'Que, del mismo modo, resulta menester derogar la Ley N° 26.992, de manera de eliminar el Observatorio de ' +
            'Precios, cuya absoluta irrelevancia queda demostrada por los altísimos índices de inflación.\n' +
            'Que el trabajo productivo, inclusivo y digno, centrado en un contexto social adecuado, es la principal herramienta ' +
            'de crecimiento para una comunidad que busca la distribución equitativa de los bienes producidos, dado que sin ' +
            'producción no hay distribución posible.\n' +
            'Que los emprendimientos, esencialmente privados, resultan el mejor recurso para la contención social, a través ' +
            'del empleo y la generación de bienes y servicios necesarios para la vida de toda la sociedad, y para ello se ' +
            'requieren cambios que permitan una expansión de la demanda de trabajo en el país.\n' +
            'Que el empleo formal registrado no crece desde el año 2011, y es un hecho demostrado que las medidas ' +
            'estructurales adoptadas por la Ley de Empleo N° 24.013 y por la Ley N° 25.323 no han podido revertir el ' +
            'problema de la informalidad.\n' +
            'Que se modifican las Leyes Nros. 14.250, 14.546, 20.744 (t.o. 1976), 23.551, 24.013, 25.345, 25.877, 26.727, ' +
            '26.844 y 27.555 y se deroga la Ley N° 25.323, a los efectos de mejorar y simplificar los procesos de registración, ' +
            'darle seguridad jurídica a la relación laboral, aumentar el período de prueba, redefinir la procedencia de los ' +
            'descuentos salariales convencionales, autorizar a las convenciones colectivas a explorar mecanismos de ' +
            'indemnización alternativos a cargo del empleador, tal como se ha implementado en algunas actividades, revisar ' +
            'los criterios de ultractividad y evitar los bloqueos de actividades productivas.\n' +
            'Que en adición a ello, se ofrece un mecanismo para que los trabajadores independientes puedan operar un sistema ' +
            'flexible de colaboradores de hasta CINCO (5) personas.\n' +
            'Que, en otro orden, la política aeronáutica argentina ha limitado fuertemente el desarrollo de la industria ' +
            'aerocomercial, pilar fundamental no solo de su integración federal, sino fundamentalmente del desarrollo ' +
            'económico y turístico.\n' +
            'Que, por eso, es imperativo un reordenamiento integral de la legislación aerocomercial para dotar al mercado de ' +
            'un entorno competitivo que otorgue la suficiente flexibilidad para llegar a todas las ciudades argentinas.\n' +
            'Que estos objetivos requieren derogar la Ley N° 19.030, el Decreto - Ley N° 12.507 del 12 de julio de 1956 y el ' +
            'Decreto N° 1654 del 4 de septiembre de 2002, e introducir modificaciones en el CÓDIGO AERONÁUTICO;\n' +
            'todo ello con el fin de mejorar radicalmente la competitividad en el sector.\n' +
            'Que, con el mismo objetivo, se introducen modificaciones a las Leyes Nros. 26.412 y 26.466 a los fines de ' +
            'permitir la transferencia de las acciones de AEROLÍNEAS ARGENTINAS SOCIEDAD ANÓNIMA a sus ' +
            'empleados.\n' +
            'Que, en otro orden, como un factor complementario a la reforma que se propone implementar, resulta menester ' +
            'otorgarle al sistema de comunicaciones mayor libertad para su desarrollo.\n' +
            'Que para ello es imprescindible introducir reformas a la Ley de Medios de Comunicación Audiovisual N° 26.522 ' +
            'y sus modificatorias, suprimiendo las restricciones a la multiplicidad de licencias en el orden nacional.\n' +
            'Que, del mismo modo, corresponde incorporar ciertas modificaciones a la Ley N° 27.078 “Argentina Digital”, a ' +
            'los fines de facilitar mayores alternativas en el ámbito de las TIC’s.\n' +
            'Que las relaciones civiles también necesitan ser liberadas de regulaciones paternalistas excesivas.\n' +
            'Que es preciso recordar que el artículo 1197 del Código Civil redactado por Dalmacio VÉLEZ SARSFIELD, que ' +
            'estuvo vigente desde 1869 hasta 2015, establecía que “Las convenciones hechas en los contratos forman para las ' +
            'partes una regla a la cual deben someterse como a la ley misma”. Este precepto, profundamente liberal, fue a lo ' +
            'largo de los años socavado por sucesivas teorías regulatorias que descreyeron de la capacidad de los individuos ' +
            'para determinar su propio destino, y que el Estado estaba en mejores condiciones que las personas para saber lo ' +
            'que necesitaban.\n' +
            'Que, en concordancia con ello se unificó el CÓDIGO CIVIL Y COMERCIAL DE LA NACIÓN, incluyendo ' +
            'normas imperativas que impiden a las partes decidir sobre la forma, contenido y ejecución de los contratos, ' +
            'llegando algunas veces a imponer requisitos desmesurados para la validez de esos acuerdos.\n' +
            'Que, en ese marco, es menester modificar las regulaciones del CÓDIGO CIVIL Y COMERCIAL DE LA ' +
            'NACIÓN que obstruyen el ejercicio de las libertades individuales en el ámbito contractual.\n' +
            'Que los inconvenientes y penurias que el exceso de regulación normativa han aparejado en las convenciones ' +
            'privadas, especialmente en los contratos de locación de viviendas, es un hecho público y notorio, con graves ' +
            'consecuencias tanto para locadores como para locatarios y la virtual destrucción del mercado inmobiliario.\n' +
            'Que en forma concordante, deviene imprescindible la derogación de la nefasta Ley de Alquileres N° 27.551.\n' +
            'Que coherentemente con ello, es preciso respetar la voluntad de los ciudadanos de pactar las formas de ' +
            'cancelación de sus obligaciones de dar sumas de dinero, sin distinción del curso legal o no de la moneda que se ' +
            'determine, sin que pueda el deudor o el juez que eventualmente intervenga obligar al acreedor a aceptar el pago ' +
            'en una moneda diferente, salvo pacto en contrario.\n' +
            'Que la REPÚBLICA ARGENTINA ha desarrollado un sistema de deporte que debe ser mejorado ' +
            'sustancialmente, ampliando las estructuras organizativas que lo integran.\n' +
            'Que, en ese sentido, es imperioso modificar la Ley N° 20.655 a los efectos de incluir nuevas figuras societarias ' +
            'para la conformación de las entidades que integran el SISTEMA INSTITUCIONAL DEL DEPORTE Y LA ' +
            'ACTIVIDAD FÍSICA, de modo de ampliar las opciones a las que puedan recurrir dichas entidades. En aras de la ' +
            'coherencia jurídica del sistema, se introducen los ajustes correspondientes en la Ley General de Sociedades N° ' +
            '19.550, T.O. 1984, y sus modificatorias.\n' +
            'Que esta actualización normativa no puede ser interpretada como una imposición a las aludidas entidades ' +
            'deportivas de transformar su actual forma de organización, sino que constituye una ampliación de las opciones ' +
            'entre las que pueden elegir libremente la conformación que mejor responda a sus intereses.\n' +
            'Que no es posible desconocer la importancia que el desarrollo del turismo tiene en el crecimiento económico del ' +
            'país, más aún cuando se cuenta con atractivos turísticos inigualables y en un contexto de creciente globalización.\n' +
            'Que, en este sentido, la derogación de la Ley N° 18.829 es fundamental para incrementar la oferta de desarrollos ' +
            'turísticos, quedando la actividad plenamente desregulada, redundando en una mayor competencia entre las ' +
            'empresas del sector y en beneficio de los ciudadanos.\n' +
            'Que, de igual modo, es menester derogar las Leyes N° 18.828 y N° 26.356 a los efectos de liberar la actividad de ' +
            'alojamientos turísticos de carácter privado y reducir su carga burocrática.\n' +
            'Que asimismo, es necesario realizar modificaciones al Régimen Jurídico del Automotor que permitan que los ' +
            'trámites puedan hacerse integralmente de manera digital y agilizar todos los procesos, eliminando etapas ' +
            'innecesarias y costos absolutamente desproporcionados que dificultan la circulación de este tipo de bienes.\n' +
            'Que las medidas referidas en los considerandos anteriores son razonables e imprescindibles para superar la ' +
            'situación de emergencia que afecta a nuestro país, y deben adoptarse de forma urgente, ya que la situación hasta ' +
            'aquí descripta no admite dilación alguna.\n' +
            'Que la adopción de las medidas que aquí se disponen debe ser inmediata para paliar una situación de rigurosa ' +
            'excepcionalidad y urgencia que pone en riesgo el normal funcionamiento del país y sus instituciones.\n' +
            'Que el artículo 99, inciso 3 de la CONSTITUCIÓN NACIONAL otorga al PODER EJECUTIVO NACIONAL la ' +
            'facultad de emitir disposiciones de carácter legislativo en casos de necesidad y urgencia en los que sea imposible ' +
            'seguir el procedimiento normal de formación y sanción de las leyes.\n' +
            'Que se trata de un instrumento de excepción, que debe ser utilizado exclusivamente en casos extremos, para ' +
            'sortear graves situaciones de crisis, sin que implique pretender soslayar la intervención del HONORABLE ' +
            'CONGRESO DE LA NACIÓN en ejercicio de sus facultades legislativas.\n' +
            'Que la CORTE SUPREMA DE JUSTICIA DE LA NACIÓN expresó que “para que el Poder Ejecutivo pueda ' +
            'ejercer legítimamente facultades legislativas que, en principio, le son ajenas, es necesaria la concurrencia de ' +
            'alguna de estas dos circunstancias: 1) Que sea imposible dictar la ley mediante el trámite ordinario previsto por la ' +
            'Constitución, vale decir, que las cámaras del Congreso no puedan reunirse por circunstancias de fuerza mayor que ' +
            'lo impidan, como ocurriría en el caso de acciones bélicas o desastres naturales que impidiesen su reunión o el ' +
            'traslado de los legisladores a la Capital Federal; o 2) que la situación que requiere solución legislativa sea de una ' +
            'urgencia tal que deba ser solucionada inmediatamente, en un plazo incompatible con el que demanda el trámite ' +
            'normal de las leyes” (Fallos 322:1726 y 333:633).\n' +
            'Que la situación indicada en el punto 2) del Fallo antes citado es precisamente la que existe en la actualidad en ' +
            'nuestro país, dado a la desesperante situación económica general, descripta en todos los Considerandos anteriores, ' +
            'no admite dilaciones y hace que sea imposible esperar el trámite normal de formación y sanción de las leyes, ya ' +
            'que ello podría implicar un agravamiento de las condiciones adversas que atraviesa la REPÚBLICA ' +
            'ARGENTINA y afectar todavía más a un porcentaje aún mayor de la población.\n' +
            'Que lo expuesto demuestra a todas luces la existencia de “una genuina situación de emergencia que imponga al ' +
            'Estado el deber de amparar los intereses vitales de la comunidad” (Fallos 333:633), es decir que no se trata de una ' +
            'mera invocación genérica de una situación de emergencia, sino que esa declaración encuentra “debido sustento en ' +
            'la realidad”. (Fallo citado).\n' +
            'Que existen numerosos antecedentes en la historia argentina que avalan la utilización de este tipo de decretos en ' +
            'casos de aguda emergencia pública y de crisis como la actual.\n' +
            'Que, tal como se mencionó en el Decreto N° 1096 del 14 de junio de 1985, dictado por el ex-Presidente Raúl ' +
            'Ricardo ALFONSÍN, la utilización de este instrumento excepcional se justifica, ya que “las medidas resueltas ' +
            'solo pueden ser efectivas si se disponen sin preanuncio, porque de lo contrario los comportamientos individuales ' +
            'distorsionarían sus efectos”.\n' +
            'Que en ese mismo decreto se afirmó que “el Gobierno Nacional toma la decisión de poner en vigencia las ' +
            'disposiciones precedentes como autodefensa de la comunidad para evitar las consecuencias irreparables derivadas ' +
            'de la publicidad y postergación de las medidas que, por su gravedad y urgencia, exigen ‘la adopción de recursos ' +
            'extremos para restablecer la normalidad social, que es presupuesto inherente a la concreta vigencia de las normas ' +
            'constitucionales y de los derechos humanos’ (Fallos 246:247)”.\n' +
            'Que, en el mismo sentido, en el Decreto N° 214 del 3 de febrero de 2002, dictado por el entonces Presidente ' +
            'Eduardo Alberto DUHALDE, se hizo referencia a la imperiosa necesidad de adoptar medidas urgentes tendientes ' +
            'a “recrear las condiciones mínimas para el desarrollo de las actividades productivas y económicas”.\n' +
            'Que las crisis que justificaron el dictado de las medidas reseñadas en los considerandos anteriores, si bien eran ' +
            'agudas, no habían llegado al nivel de profundidad y gravedad de la que atraviesa actualmente nuestro país.\n' +
            'Que conforme ha sostenido la Comisión Bicameral Permanente -órgano constitucional encargado de dictaminar ' +
            'sobre la validez de los decretos de necesidad y urgencia- en reiteradas oportunidades en sus dictámenes de ' +
            'aprobación de decretos de este tipo, la crisis económica que sufría nuestro país en el año 2021 -que en modo ' +
            'alguno es comparable con la gravedad de la actual- era una situación que “configura una circunstancia ' +
            'excepcional que hace imposible seguir los trámites ordinarios previstos por la Constitución Nacional para la ' +
            'sanción de las leyes”. Además, reconoció que "la imperiosa necesidad del Poder Ejecutivo de contar con todas sus ' +
            'herramientas para realizar una eficiente administración configura una necesidad que torna imposible el ' +
            'cumplimiento de los trámites ordinarios previstos por la Constitución Nacional, para la sanción de las Leyes" Dictamen de validez en la consideración del Decreto N° 819/20 -(S.-2483 /21-), y aprobado en la sesión del 18 de ' +
            'noviembre de 2021 junto con otros CIENTO CATORCE (114) decretos.\n' +
            'Que como puede observarse, el PODER EJECUTIVO NACIONAL no se limita, en este caso, a invocar una ' +
            'emergencia genérica, sino que ha descripto detalladamente la emergencia existente y la necesidad urgente de las ' +
            'distintas medidas que se adoptan a través de este decreto.\n' +
            'Que todo ello demuestra holgadamente que se encuentran cumplidos todos los requisitos formales y sustanciales ' +
            'exigidos por el artículo 99, inciso 3 de la CONSTITUCIÓN NACIONAL para habilitar la utilización excepcional ' +
            'del instrumento previsto en esa norma, por lo que el dictado del presente decreto, en cuanto implica el ejercicio de ' +
            'facultades reservadas al HONORABLE CONGRESO DE LA NACIÓN se encuentra plenamente justificado, ' +
            'tanto por lo que dispone aquella Ley Fundamental, como por su interpretación por parte de la CORTE ' +
            'SUPREMA DE JUSTICIA DE LA NACIÓN y la práctica de sucesivas gestiones presidenciales.\n' +
            'Que la Ley Nº 26.122 regula el trámite y los alcances de la intervención del HONORABLE CONGRESO DE LA ' +
            'NACIÓN respecto de los decretos de necesidad y urgencia dictados por el PODER EJECUTIVO NACIONAL, en ' +
            'virtud de lo dispuesto por el artículo 99, inciso 3 de la CONSTITUCIÓN NACIONAL.\n' +
            'Que la citada ley determina que la COMISIÓN BICAMERAL PERMANENTE tiene competencia para ' +
            'pronunciarse respecto de la validez o invalidez de los decretos de necesidad y urgencia, así como para elevar el ' +
            'dictamen al plenario de cada Cámara para su expreso tratamiento, en el plazo de DIEZ (10) días hábiles.\n' +
            'Que el artículo 22 de la Ley Nº 26.122 dispone que las Cámaras se pronuncien mediante sendas resoluciones y ' +
            'que el rechazo o aprobación de los decretos deberá ser expreso conforme lo establecido en el artículo 82 de la ' +
            'CONSTITUCIÓN NACIONAL.\n' +
            'Que el presente decreto se dicta en ejercicio de las facultades previstas en los artículos 99, incisos 1, 2 y 3 de la ' +
            'CONSTITUCIÓN NACIONAL.\n' +
            'Por ello,\n' +
            'EL PRESIDENTE DE LA NACIÓN ARGENTINA\n' +
            'EN ACUERDO GENERAL DE MINISTROS\n' +
            'DECRETA:'
        ]
    },
    {
        type: 'block',
        title: 'Título I – BASES PARA LA RECONSTRUCCIÓN DE LA ECONOMÍA ARGENTINA',
        articles: [
            {
                text: 'ARTÍCULO 1°.- EMERGENCIA. Declárase la emergencia pública en materia económica, financiera, fiscal, ' +
                    'administrativa, previsional, tarifaria, sanitaria y social hasta el 31 de diciembre de 2025.'
            },
            {
                text: 'ARTÍCULO 2°.- DESREGULACIÓN. El Estado Nacional promoverá y asegurará la vigencia efectiva, en todo ' +
                'el territorio nacional, de un sistema económico basado en decisiones libres, adoptadas en un ámbito de libre ' +
                'concurrencia, con respeto a la propiedad privada y a los principios constitucionales de libre circulación de bienes, ' +
                'servicios y trabajo.\n' +
                'Para cumplir ese fin, se dispondrá la más amplia desregulación del comercio, los servicios y la industria en todo ' +
                'el territorio nacional y quedarán sin efecto todas las restricciones a la oferta de bienes y servicios, así como toda ' +
                'exigencia normativa que distorsione los precios de mercado, impida la libre iniciativa privada o evite la ' +
                'interacción espontánea de la oferta y de la demanda.\n' +
                'La reglamentación determinará los plazos e instrumentos a través de los cuales se hará efectiva la desregulación ' +
                'dispuesta en el párrafo anterior.\n'
            },
            {
                text: 'ARTÍCULO 3°.- INSERCIÓN EN EL MUNDO. Las autoridades argentinas, en el ámbito de sus competencias, ' +
                'promoverán una mayor inserción de la República Argentina en el comercio mundial.\n' +
                'Con ese fin y de conformidad con la política de desregulación promovida en el artículo anterior, el Poder ' +
                'Ejecutivo de la Nación elaborará y/o dictará todas las normas necesarias para adoptar estándares internacionales ' +
                'en materia de comercio de bienes y servicios, procurando armonizar el régimen interno, hasta donde sea posible, ' +
                'con los demás países del Mercosur u otras organizaciones internacionales. En particular, se deberá procurar ' +
                'cumplir con las recomendaciones de la Organización Mundial del Comercio (O.M.C.) y la Organización para la ' +
                'Cooperación y el Desarrollo Económicos (OCDE).\n' +
                'Se invita a las autoridades de las provincias y de la Ciudad Autónoma de Buenos Aires a dictar, en el ámbito de ' +
                'sus respectivas competencias, las normas necesarias o convenientes para el cumplimiento de esos fines.\n'
            }
        ]
    },
    {
        type: 'block',
        title: 'Título II – DESREGULACIÓN ECONÓMICA',
        articles: [
            {
                text: 'ARTÍCULO 4°.- Derógase la Ley N° 18.425.',
                delta: {
                    title: 'Ley N° 18.425 - Promoción Comercial',
                    removed: require('./ley18425').default,
                },
            },
            {
                text: 'ARTÍCULO 5°.- Derógase la Ley N° 26.992.',
                delta: {
                    title: 'Ley N° 26.992 - Observatorio de Precios y Disponibilidad de Insumos, Bienes y Servicios',
                    removed: require('./ley26992').default,
                },
            },
            {
                text: 'ARTÍCULO 6°.- Derógase la Ley N° 27.221.',
                delta: {
                    title: 'Ley N° 27.221 - Locación de inmuebles',
                    removed: require('./ley27221').default,
                },
            },
            {
                text: 'ARTÍCULO 7°.- Derógase la Ley N° 27.545.',
                delta: {
                    title: 'Ley N° 27.545 - Ley de Góndolas',
                    removed: require('./ley27545').default,
                },
            },
            {
                text: 'ARTÍCULO 8°.- Derógase la Ley N° 19.227.',
                delta: {
                    title: 'Ley N° 19.227 - Mercados de Interés Nacional',
                    removed: require('./ley19227').default,
                },
            },
            {
                text: 'ARTÍCULO 9°.- Derógase la Ley N° 20.680.',
                delta: {
                    title: 'Ley N° 20.680 - Abastecimiento',
                    removed: require('./ley20680').default,
                },
            },
            {
                text: 'ARTÍCULO 10.- Deróganse los artículos 1° al 21 y 24 al 30 inclusive de la Ley N° 27.437.',
                delta: {
                    title: 'Ley N° 27.437 - Compre Argentino',
                    removed: require('./ley27437').default,
                    added: require('./ley27437-new').default,
                },
            },
            {
                text: 'ARTÍCULO 11.- Derógase la Ley N° 26.736.',
                delta: {
                    title: 'Ley N° 26.736 - Pasta Celulosa y Papel para Diarios',
                    removed: require('./ley26736').default,
                },
            },
            {
                text: 'ARTÍCULO 12.- Derógase la Ley N° 20.657.',
                delta: {
                    title: 'Ley N° 20.657 - Promoción Comercial',
                    removed: require('./ley20657').default,
                },
            },
        ]
    },
    {
        type: 'block',
        title: 'Capítulo I – Banco de la Nación Argentina (Ley N° 21.799)',
        articles: [
            {
                text: 'ARTÍCULO 13.- Derógase el artículo 2° de la Ley N° 21.799.',
                delta: {
                    title: 'Ley N° 21.799 - Promoción Comercial',
                    removed: require('./ley21799').default,
                    added: require('./ley21799-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo II – Tarjetas de crédito (Ley N° 25.065)',
        articles: [
            {
                text: 'ARTÍCULO 14.- Deróganse los artículos 5°, 7°, 8°, 9°, 17, 32, 35, 53 y 54 de la Ley N° 25.065.\n' +
                'ARTÍCULO 15.- Sustitúyese el artículo 1° de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 1°.- Se entiende por sistema de Tarjeta de Crédito al conjunto de contratos individuales cuya ' +
                'finalidad es:\n' +
                'a) Posibilitar al usuario efectuar operaciones de compra o locación de bienes o servicios u obras, obtener ' +
                'préstamos y anticipos de dinero del sistema, en los comercios e instituciones adheridos.\n' +
                'b) Diferir para el titular responsable el pago o las devoluciones a fecha pactada o financiarlo conforme alguna de ' +
                'las modalidades establecidas en el contrato.\n' +
                'c) Abonar a los proveedores de bienes o servicios los consumos del usuario en los términos pactados.”\n' +
                'ARTÍCULO 16.- Sustitúyese el inciso a) del artículo 2° de la Ley N° 25.065 por el siguiente:\n' +
                '“a) Emisor: Es la entidad, de cualquier naturaleza, en tanto se encuentre previsto dentro de su objeto social, que ' +
                'emita Tarjetas de Crédito, o que haga efectivo el pago.”\n' +
                'ARTÍCULO 17.- Sustitúyese el artículo 4° de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 4°.- Denominación. Se denomina genéricamente Tarjeta de Crédito al instrumento de identificación ' +
                'del usuario, que puede ser física o virtual, magnética o de cualquier otra tecnología, emergente de una relación ' +
                'contractual previa entre el titular y el emisor.”\n' +
                'ARTÍCULO 18.- Deróganse los incisos c) y e) del artículo 14 de la Ley N° 25.065.\n' +
                'ARTÍCULO 19.- Sustitúyense el título del Capítulo VI y el artículo 15 de la Ley N° 25.065 por los siguientes:\n' +
                '“CAPÍTULO VI\n' +
                'De las Tasas – Información\n' +
                'ARTÍCULO 15.- La entidad emisora deberá obligatoriamente dar a conocer el público la tasa de financiación ' +
                'aplicada al sistema de Tarjeta de Crédito.”\n' +
                'ARTÍCULO 20.- Sustitúyese el artículo 18 de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 18.- Interés punitorio. Independientemente de lo dispuesto por las leyes de fondo, los intereses ' +
                'punitorios no serán capitalizables.”\n' +
                'ARTÍCULO 21.- Sustitúyese el artículo 22 de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 22.- Resumen mensual de operaciones. El emisor deberá confeccionar y enviar mensualmente un ' +
                'resumen detallado, preferentemente en forma electrónica, de las operaciones realizadas por el titular o sus ' +
                'autorizados.”\n' +
                'ARTÍCULO 22.- Sustitúyese el artículo 25 de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 25.- Tiempo de recepción. El resumen deberá ser recibido por el titular con una anticipación ' +
                'mínima de cinco (5) días anteriores al vencimiento de su obligación de pago, independientemente de lo pactado ' +
                'en el respectivo contrato de Tarjeta de Crédito.\n' +
                'En el supuesto de la no recepción del resumen, el titular dispondrá de un canal de comunicación telefónico ' +
                'proporcionado por el emisor durante las veinticuatro (24) horas del día que le permitirá obtener el saldo de la ' +
                'cuenta y el pago mínimo que podrá realizar."\n' +
                'ARTÍCULO 23.- Sustitúyese el artículo 38 de la Ley N° 25.065 por el siguiente:\n' +
                '“ARTÍCULO 38.- El contrato tipo entre el emisor y el proveedor contendrá como mínimo:\n' +
                'a) Plazo de vigencia.\n' +
                'b) Topes máximos por operación de la tarjeta de que se trate.\n' +
                'c) Determinación del tipo y monto de las comisiones, intereses y cargos administrativos de cualquier tipo.\n' +
                'd) Obligaciones que surgen de la presente ley.\n' +
                'e) Plazo y requisitos para la presentación de las liquidaciones.\n' +
                'f) Tipo de comprobantes a presentar de las operaciones realizadas.\n' +
                'g) Obligación del proveedor de consulta previa sobre la vigencia de la tarjeta.\n' +
                'Además deberán existir tantos ejemplares como partes contratantes haya y de un mismo tenor.”\n',
                delta: {
                    title: 'Ley N° 25.065 - Tarjetas de Crédito',
                    removed: require('./ley25065').default,
                    added: require('./ley25065-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo III - Operaciones de crédito mobiliario realizadas por medio de certificados de depósito y warrant. (Ley N° 9.643)',
        articles: [
            {
                text: 'ARTÍCULO 24.- Deróganse los artículos 3°, 4°, 23, 26 y 29 de la Ley N° 9.643.\n' +
                'ARTÍCULO 25.- Sustitúyese el artículo 1° de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 1°.- Las operaciones de crédito mobiliario sobre frutos o productos agrícolas, ganaderos, forestales, ' +
                'mineros o de manufacturas, depositados en almacenes fiscales o de terceros, serán hechas por medio de ' +
                '"certificados de depósito" y "warrants" expedidos de acuerdo con las disposiciones de esta ley y en la forma que ' +
                'reglamente el Poder Ejecutivo.”\n' +
                'ARTÍCULO 26.- Sustitúyese el artículo 2° de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 2°.- Los almacenes o depósitos particulares podrán emitir "certificados de depósito" y "warrants".\n' +
                'Aquellas empresas que así lo deseen podrán inscribirse en un registro a cargo del Poder Ejecutivo, lo que será ' +
                'publicado en el "Boletín Oficial", para lo cual deberán declarar:\n' +
                'a) El capital con que se establecen.\n' +
                'b) Las condiciones de seguridad, previsiones contra incendio y causas de deterioro que ofrezcan las ' +
                'construcciones y el seguro de las mismas.\n' +
                'c) La forma de administración y sistema de vigilancia clasificación y limpieza que se adoptará en los almacenes.\n' +
                'd) Las obligaciones de la administración respecto a la entrada y salida de mercaderías o productos, su ' +
                'conservación y responsabilidad en los casos de pérdida y averías.\n' +
                'e) Los nombres y domicilios de los representantes de la sociedad o empresa de depósito.\n' +
                'f) Las garantías con las que cuentan para asegurar el cumplimiento de sus obligaciones.\n' +
                'Las empresas que estén incorporadas al registro podrán incluir la leyenda “inscripta en los registros de empresas ' +
                'de warrants Ley N° 9.643 y sus modificatorias”. Las empresas que opten por no registrarse deberán incluir la ' +
                'leyenda “empresa no inscripta en los registros de empresas de warrants Ley N° 9.643 y sus modificatorias”.\n' +
                'ARTÍCULO 27.- Sustitúyese el artículo 6° de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 6°.- Contra la entrega de los frutos o productos depositados, la administración del respectivo ' +
                'almacén expedirá a la orden del depositante un "certificado de depósito" y "warrant" referente a aquellos, con ' +
                'expresión de la fecha de expedición, el nombre y domicilio del depositante, la designación del almacén y la firma ' +
                'del administrador, la clase de producto, su cantidad, peso, clase y número de envases, calidad y estado del mismo, ' +
                'su valor aproximado y toda otra indicación que sirva para identificarlo con arreglo a las prácticas establecidas en ' +
                'el comercio de los productos respectivos, el monto del seguro, nombre y domicilio del asegurador, el tiempo por ' +
                'el cual se efectúa el depósito y el monto del almacenaje; todo ello en formularios de tipo uniforme que el Poder ' +
                'Ejecutivo reglamentará, dejando consignadas las mismas circunstancias en los talonarios y en los libros ' +
                'rubricados especiales que deberá llevar, a fin de registrar diariamente y por orden todas las operaciones en que ' +
                'intervenga.\n' +
                'Podrán utilizarse documentos electrónicos en reemplazo de cualquier documentación establecida en la presente ' +
                'ley, en los términos de los artículos 286 y 288 del Código Civil y Comercial de la Nación.”\n' +
                'ARTÍCULO 28.- Sustitúyese el artículo 7° de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 7°.- Para que puedan emitirse "certificados de depósito" y "warrants", por frutos o productos ' +
                'depositados, es menester:\n' +
                '1) Que dichos efectos estén asegurados, ya sea directamente por el dueño o por intermedio de las empresas ' +
                'emisoras.\n' +
                '2) Que estén libres de todo gravamen o embargo judicial notificado al administrador del depósito, sin cuyo ' +
                'requisito se reputarán no existentes.”\n' +
                'ARTÍCULO 29.- Sustitúyese el artículo 8° de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 8°.- El "warrant" será siempre nominativo y para su constitución se podrá usar, en su caso, ' +
                'cualquier versión de firma electrónica que identifique de manera indubitable al firmante. Los endosos del ' +
                'certificado de depósito o, en su caso, de "warrant", se incluirá en el registro electrónico del documento, también ' +
                'con cualquier versión de firma electrónica, debiendo, para su validez, ser registrado en los libros de la empresa ' +
                'emisora dentro del término de SEIS (6) días.”\n' +
                'ARTÍCULO 30.- Sustitúyese el artículo 11 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 11.- Negociado el "warrant", en su caso, se anotará en el registro electrónico respectivo, el monto ' +
                'del crédito, nombre y domicilio del prestamista, fecha de vencimiento y lugar de pago, debiendo estos mismos ' +
                'datos consignarse en el libro de Registro de la empresa emisora, al anotarse la primera transferencia del ' +
                '"warrant", de acuerdo con el artículo 8°.”\n' +
                'ARTÍCULO 31.- Sustitúyese el artículo 13 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 13.- Los efectos depositados por los cuales hayan sido expedidos "warrants", no serán entregados ' +
                'sin la presentación simultánea del "certificado de depósito" y del "warrant".\n' +
                'En caso de haber sido registrada la transferencia del "warrant", tiene derecho a pedir que el depósito se consigne ' +
                'por bultos o lotes separados, y que por cada lote se le den nuevos certificados con los "warrants" respectivos, en ' +
                'substitución del certificado y "warrant" anterior, que será anulado.”\n' +
                'ARTÍCULO 32.- Sustitúyese el artículo 14 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 14.- El propietario de un certificado de depósito con "warrant", tiene derecho a pedir que el ' +
                'depósito se consigne por bultos o lotes separados, y que por cada lote se le den nuevos certificados con los ' +
                '"warrants" respectivos, en substitución del certificado y "warrant" anterior, que será anulado.”\n' +
                'ARTÍCULO 33.- Sustitúyese el artículo 24 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 24.- El Poder Ejecutivo inspeccionará las empresas incluidas en el registro de empresas emisoras de ' +
                '"warrants" a fin de asegurar el cumplimiento de las obligaciones consignadas en esta ley o dejar sin efecto, la ' +
                'inscripción prevista en el artículo 2°.”\n' +
                'ARTÍCULO 34.- Sustitúyese el artículo 31 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 31.- Las personas o sociedades que emiten certificados de depósito y "warrants", se consideran ' +
                'comerciantes y están obligados a llevar los libros exigidos por la ley.”\n' +
                'ARTÍCULO 35.- Sustitúyese el artículo 32 de la Ley N° 9.643 por el siguiente:\n' +
                '“ARTÍCULO 32.- No será indispensable el traslado a almacenes de terceros, para la expedición de los ' +
                'certificados de depósito y "warrants", pudiendo los productores constituirse en depositarios y emitir los referidos ' +
                'documentos, los que serán negociables.\n' +
                'Formarán, además, parte integrante de aquellos, los análisis correspondientes al producto sobre que se emiten. A ' +
                'la referida repartición competirán los actos que deben realizar las empresas de depósito, de acuerdo con los ' +
                'artículos 7°, inciso 3, 8°, 17 y 19.”\n',
                delta: {
                    title: 'Ley N° 9.643 - Warrants',
                    removed: require('./ley9643').default,
                    added: require('./ley9643-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Título III – REFORMA DEL ESTADO',
        articles: [
            {
                text: 'ARTÍCULO 36.- Derógase el Decreto - Ley N° 15.349/46.',
                delta: {
                    title: 'Decreto - Ley N° 15.349/46 - Sociedades de Economía Mixta',
                    removed: require('./ley15349').default,
                },
            },
            {
                text: 'ARTÍCULO 37.- Derógase la Ley N° 13.653.',
                delta: {
                    title: 'Ley 13.653 - Empresas del Estado',
                    removed: require('./ley13653').default,
                },
            },
            {
                text: 'ARTÍCULO 38.- Deróganse los artículos 1° al 20 y 23 al 28 inclusive de la Ley N° 18.875.',
                delta: {
                    title: 'Ley N° 18.875 - Compre Nacional',
                    removed: require('./ley18875').default,
                    added: require('./ley18875-new').default,
                },
            },
            {
                text: 'ARTÍCULO 39.- Derógase la Ley N° 14.499.',
                delta: {
                    title: 'Ley N° 14.499 - Bases para la fijación de haberes a los jubilados y pensionados',
                    removed: require('./ley14499').default,
                },
            },
            {
                text: 'ARTÍCULO 40.- Derógase la Ley N° 20.705.',
                delta: {
                    title: 'Ley N° 20.705 - Sociedades del Estado',
                    removed: require('./ley20705').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I – Reforma del Estado (Ley N° 23.696)',
        articles: [
            {
                text: 'ARTÍCULO 41.- Derógase el tercer párrafo del artículo 9° de la Ley N° 23.696.\n' +
                'ARTÍCULO 42.- Derógase el artículo 29 de la Ley N° 23.696.\n' +
                'ARTÍCULO 43.- Derógase el inciso 8°) del artículo 15 de la Ley N° 23.696.\n' +
                'ARTÍCULO 44.- Sustitúyese el inciso a) del artículo 27 de la Ley Nº 23.696 por el siguiente:\n' +
                '“a) Para el caso de los empleados adquirentes el coeficiente deberá ser representativo de la antigüedad, las cargas ' +
                'de familia, el nivel jerárquico o categoría el ingreso total anual del último año, actualizado, prorrateado con este ' +
                'criterio el monto total para esta categoría entre los empleados que decidan participar del proceso. Aquellos que ' +
                'opten por no participar durante el período establecido perderán cualquier derecho de reclamar su participación en ' +
                'el futuro.”\n' +
                'ARTÍCULO 45.- Sustitúyese el artículo 30 de la Ley Nº 23.696 por el siguiente:\n' +
                '“ARTÍCULO 30.- El precio de las acciones adquiridas a través de un Programa de Propiedad Participada será ' +
                'pagado por los adquirentes en el número de anualidades y del modo que se establezca en el Acuerdo General de ' +
                'Transferencia conforme con lo establecido en esta ley, que no debe entenderse como limitativo de otros modos de ' +
                'pago que pudieren acordarse. El Poder Ejecutivo podrá, a su criterio, considerar que la transferencia, cuando ' +
                'corresponde al inciso a) del artículo 22, pueda ser a título gratuito.”\n' +
                'ARTÍCULO 46.- Sustitúyese el artículo 31 de la Ley Nº 23.696 por el siguiente:\n' +
                '“ARTÍCULO 31.- En el caso de los empleados adquirentes se podrá destinar al pago de las acciones los ' +
                'dividendos anuales, hasta su totalidad, de ser necesario.”\n' +
                'ARTÍCULO 47.- Sustitúyese el artículo 34 de la Ley Nº 23.696 por el siguiente:\n' +
                '“ARTÍCULO 34.- En los casos que corresponda, como garantía de pago, los adquirentes comprendidos en un ' +
                'Programa de Propiedad Participada constituirán una prenda sobre las acciones objeto de la transacción, a favor ' +
                'del Estado vendedor o cedente o de la Autoridad de Aplicación, en su caso. A ese efecto, las acciones se ' +
                'depositarán en un banco fideicomisario.”',
                delta: {
                    title: 'Ley N° 23.696 - Reforma del Estado',
                    removed: require('./ley23696').default,
                    added: require('./ley23696-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo II - Transformación de empresas del Estado en Sociedades Anónimas',
        articles: [
            {
                text: 'ARTÍCULO 48.- Las sociedades o empresas con participación del Estado, cualquier sea el tipo o forma societaria ' +
                'adoptada, se transformarán en Sociedades Anónimas.\n' +
                'Esta disposición comprende a las Empresas del Estado que no tengan una forma jurídica societaria, las ' +
                'Sociedades del Estado, las Sociedades Anónimas con Participación Estatal Mayoritaria, las Sociedades de ' +
                'Economía Mixta y todas aquellas otras organizaciones societarias donde el Estado nacional tenga participación en ' +
                'el capital o en la formación de las decisiones societarias y no se encuentren constituidas como sociedades ' +
                'anónimas.\n' +
                'Las Sociedades Anónimas transformadas estarán sujetas a todos los efectos a las prescripciones de la Ley General ' +
                'de Sociedades N° 19.550, T.O. 1984 y sus modificatorias en igualdad de condiciones con las sociedades sin ' +
                'participación estatal y sin prerrogativa pública alguna.',
                
            },
            {
                text: 'ARTÍCULO 49.- Sustitúyese el inciso 3°) del artículo 299 de la Ley General de Sociedades N° 19.550, T.O. 1984 ' +
                'y sus modificatorias por el siguiente:\n' +
                '“3º) Sean de participación estatal, ya sea por la participación del Estado nacional, los estados provinciales, la ' +
                'Ciudad Autónoma de Buenos Aires, los municipios y/o los organismos estatales legalmente autorizados al ' +
                'efecto.”',
                delta: {
                    title: 'Ley N° 19.550 - Ley de Sociedades Comerciales',
                    removed: require('./ley19550').default,
                    added: require('./ley19550-new').default,
                },
            },
            {
                text: 'ARTÍCULO 50.- Las empresas en las que el Estado nacional sea parte accionista no gozarán de ninguna ' +
                'prerrogativa de derecho público ni podrá el Estado Nacional disponer ventajas en la contratación o en la compra ' +
                'de bienes y servicios, ni priorizar u otorgar beneficios de ningún tipo, alcance o carácter en ninguna relación ' +
                'jurídica en la que intervenga.\n' +
                'ARTÍCULO 51.- Se establece un período máximo de transición de 180 días a partir del dictado del presente para ' +
                'que la Autoridad de Aplicación proceda a la aplicación del artículo 48 y la inscripción de las sociedades ' +
                'transformadas en los Registros Públicos de Comercio que corresponda.\n' +
                'ARTÍCULO 52.- La Ley N° 24.156 y demás normativa de control del sector público solo será aplicable cuando, ' +
                'en las Sociedades Anónimas producto de la transformación determinada en el presente, el Estado posea ' +
                'participación accionaria mayoritaria.',                
            },
        ],
    },
    {
        type: 'block',
        title: 'Título IV – TRABAJO',
        articles: [
            {
                text: 'ARTÍCULO 53.- Deróganse los artículos 8° a 17 y 120, inciso a), de la Ley N° 24.013.',
                delta: {
                    title: 'Ley N° 24.013 - Empleo',
                    removed: require('./ley24013').default,
                    added: require('./ley24013-new').default,
                },
            },
            {
                text: 'ARTÍCULO 54.- Derógase el artículo 9° de la Ley N° 25.013.',
                delta: {
                    title: 'Ley N° 25.013 - Reforma laboral',
                    removed: require('./ley25013').default,
                    added: require('./ley25013-new').default,
                },
            },
            {
                text: 'ARTÍCULO 55.- Derógase la Ley N° 25.323.',
                delta: {
                    title: 'Ley N° 25.323 - Indemnizaciones laborales',
                    removed: require('./ley25323').default,
                },
            },
            {
                text: 'ARTÍCULO 56.- Deróganse los artículos 43 a 48 de la Ley N° 25.345.',
                delta: {
                    title: 'Ley N° 25.345 - Prevención de la Evasión Fiscal',
                    added: require('./ley25345-new').default,
                    removed: require('./ley25345').default,
                },
            },
            {
                text: 'ARTÍCULO 57.- Derógase el artículo 15 de la Ley N° 26.727.',
                delta: {
                    title: 'Ley N° 26.727 - Trabajo Agrario',
                    added: require('./ley26727-new').default,
                    removed: require('./ley26727').default,
                },
            },
            {
                text: 'ARTÍCULO 58.- Derógase el artículo 50 de la Ley N° 26.844.',
                delta: {
                    title: 'Ley N° 26.844 - Servicio Doméstico',
                    added: require('./ley26844-new').default,
                    removed: require('./ley26844').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I - Registro Laboral (Ley N° 24.013)',
        articles: [
            {
                text: 'ARTÍCULO 59.- Sustitúyese el artículo 7° de la Ley N° 24.013 por el siguiente:\n' +
                '“ARTÍCULO 7°.- Se entiende que la relación o el contrato de trabajo se encuentran registrados cuando el ' +
                'trabajador esté inscripto en las formas y condiciones que establezca la reglamentación que determine el Poder ' +
                'Ejecutivo.\n' +
                'Dicha registración deberá ser simple, inmediata, expeditiva, y realizarse a través de medios electrónicos.”\n' +
                'ARTÍCULO 60.- Incorpórase como artículo 7° bis de la Ley N° 24.013, el siguiente:\n' +
                '“ARTÍCULO 7° bis - En virtud de lo establecido en los artículos 29 y 30 de la Ley N° 20.744, la registración ' +
                'efectuada en los términos del artículo 7° se considera plenamente eficaz cuando hubiera sido realizada por ' +
                'cualquiera de las personas intervinientes, humanas o jurídicas.”\n' +
                'ARTÍCULO 61.- Incorpórase como artículo 7° ter de la Ley N° 24.013, el siguiente:\n' +
                '“ARTÍCULO 7° ter - El trabajador podrá denunciar la falta de registración laboral ante la Autoridad de ' +
                'Aplicación, que deberá ofrecer un medio electrónico a tal efecto, ante la Administración Federal de Ingresos ' +
                'Públicos, entidad autárquica en el ámbito del Ministerio de Economía, o ante las autoridades administrativas del ' +
                'trabajo locales."\n' +
                'ARTÍCULO 62.- Incorpórase como artículo 7° quáter de la Ley N° 24.013, el siguiente:\n' +
                '“ARTÍCULO 7° quáter.- En el supuesto de sentencia judicial firme que determine la existencia de una relación de ' +
                'empleo no registrada, la autoridad judicial deberá poner en conocimiento de la entidad recaudadora de las ' +
                'obligaciones de la seguridad social, dentro de los DIEZ (10) días hábiles siguientes a la fecha en que quede firme ' +
                'y consentida la sentencia, todas las circunstancias que permitan la determinación de deuda existente, si la hubiera.\n' +
                'Si conforme sentencia judicial firme, la relación laboral se encontrara enmarcada erróneamente como contrato de ' +
                'obra o servicios, de la deuda que determine el organismo recaudador, se deducirán los componentes ya ingresados ' +
                'conforme al régimen del cual se trate, se establecerá un sistema de intereses menos gravoso y facilidades de ' +
                'pago.”\n' +
                'ARTÍCULO 63.- Sustitúyese el artículo 18 de la Ley N° 24.013, por el siguiente:\n' +
                '“ARTÍCULO 18.- El Sistema Único de Registro Laboral concentrará los siguientes registros:\n' +
                'a) la inscripción del empleador y la afiliación del trabajador al Instituto Nacional de Previsión Social, a las cajas ' +
                'de subsidios familiares y al prestador del sistema nacional de salud elegido por el trabajador;\n' +
                'b) el registro de los trabajadores beneficiarios del sistema integral de prestaciones por desempleo.”\n' +
                'ARTÍCULO 64.- Incorpórase como inciso i) al artículo 114 de la Ley N° 24.013, el siguiente:\n' +
                '“i) Extinción por mutuo acuerdo de las partes en los términos del artículo 241 de la Ley N° 20.744”.',
                delta: {
                    title: 'Ley N° 24.013 - Empleo',
                    removed: require('./ley24013').default,
                    added: require('./ley24013-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo II – Ley de contrato de trabajo – Ley N° 20.744 (t.o. 1976)',
        articles: [
            {
                text: 'ARTÍCULO 65.- Sustitúyese el artículo 2° de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 2°.- Ámbito de Aplicación. La vigencia de esta Ley quedará condicionada a que la aplicación de ' +
                'sus disposiciones resulte compatible con la naturaleza y modalidades de la actividad de que se trate y con el ' +
                'específico régimen jurídico a que se halle sujeta. Las disposiciones de esta Ley no serán aplicables:\n' +
                'a. A los dependientes de la Administración Pública Nacional, Provincial, de la Ciudad Autónoma de Buenos ' +
                'Aires o Municipal, excepto que por acto expreso se los incluya en la misma o en el régimen de las convenciones ' +
                'colectivas de trabajo.\n' +
                'b. Al personal de casas particulares, sin perjuicio que las disposiciones de la presente Ley serán de aplicación en ' +
                'todo lo que resulte compatible y no se oponga a la naturaleza y modalidades propias del régimen específico o ' +
                'cuando así se lo disponga expresamente.\n' +
                'c. A los trabajadores agrarios, sin perjuicio de las disposiciones de la presente Ley serán de aplicación supletoria ' +
                'en todo lo que resulte compatible y no se oponga a la naturaleza y modalidades propias del Régimen de Trabajo ' +
                'Agrario.\n' +
                'd. A las contrataciones de obra, servicios, agencia y todas las reguladas en el Código Civil y Comercial de la ' +
                'Nación.”\n' +
                'ARTÍCULO 66.- Sustitúyese el artículo 9° de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 9°.- El principio de la norma más favorable para el trabajador.\n' +
                'En caso de duda sobre la aplicación de normas legales o convencionales prevalecerá la más favorable al ' +
                'trabajador, considerándose la norma o conjuntos de normas que rija cada una de las instituciones del derecho del ' +
                'trabajo.\n' +
                'Si la duda recayese en la interpretación o alcance de la ley, o en la apreciación de la prueba, en los casos ' +
                'concretos, los jueces o encargados de aplicarla se decidirán en el sentido más favorable al trabajador, cuando ' +
                'hubieran agotado todos los medios de investigación a su alcance y persistiera duda probatoria insuperable, ' +
                'valorando los principios de congruencia y defensa en juicio.\n' +
                'En tal sentido se aplicará la regla general procesal, en virtud de la cual los hechos deben ser probados por quien ' +
                'los invoca, con plena vigencia de la facultad de los magistrados en la obtención de la verdad objetiva y el respeto ' +
                'a la seguridad jurídica.”\n' +
                'ARTÍCULO 67.- Sustitúyese el artículo 12 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 12 - Protección de los trabajadores. Irrenunciabilidad. Será nula y sin valor toda convención de ' +
                'partes que suprima o reduzca los derechos previstos en esta ley, los estatutos profesionales y las convenciones ' +
                'colectivas de trabajo, ya sea al tiempo de su celebración o de su ejecución, o del ejercicio de derechos ' +
                'provenientes de su extinción.\n' +
                'Cuando se celebren acuerdos relativos a modificaciones de elementos esenciales del contrato de trabajo o de ' +
                'desvinculación en los términos del artículo 241 de esta Ley, las partes podrán solicitar a la autoridad de aplicación ' +
                'su homologación en los términos del artículo 15 de la presente Ley.”\n' +
                'ARTÍCULO 68.- Sustitúyese el artículo 23 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 23.- Presunción de la existencia del contrato de trabajo. El hecho de la prestación de servicios hace ' +
                'presumir la existencia de un contrato de trabajo, salvo que, por las circunstancias, las relaciones o causas que lo ' +
                'motiven se demostrase lo contrario.\n' +
                'La presunción contenida en el presente artículo no será de aplicación cuando la relación se trate de contrataciones ' +
                'de obras o de servicios profesionales o de oficios y se emitan los recibos o facturas correspondientes a dichas ' +
                'formas de contratación o el pago se realice conforme los sistemas bancarios determinados por la reglamentación ' +
                'correspondiente. Dicha ausencia de presunción se extenderá a todos los efectos, inclusive a la Seguridad Social.”\n' +
                'ARTÍCULO 69.- Sustitúyese el artículo 29 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 29.- Mediación. Intermediación. Solidaridad. Subsidiariedad. Los trabajadores serán considerados ' +
                'empleados directos de aquellos que registren la relación laboral, sin perjuicio de haber sido contratados con vistas ' +
                'a utilizar su prestación o de proporcionarlos a terceras empresas. La empresa usuaria será responsable solidaria ' +
                'por las obligaciones laborales y de la seguridad social respecto de los trabajadores proporcionados.”\n' +
                'ARTÍCULO 70.- Sustitúyese el artículo 80 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el siguiente:\n' +
                '“ARTÍCULO 80.- Entrega de certificados. El Poder Ejecutivo Nacional establecerá en orden a la obligación de ' +
                'entrega de los certificados del artículo 80 de la Ley N° 20.744, un mecanismo opcional de cumplimiento de ' +
                'entrega a través de una plataforma virtual.\n' +
                'Se considera efectivamente cumplida dicha obligación por parte de los empleadores cuando se hubieran ' +
                'incorporado a la plataforma virtual los certificados pertinentes. Asimismo, también se considera cumplimentada ' +
                'cuando la información se encuentre actualizada y disponible para el trabajador a través de la página web del ' +
                'organismo de la seguridad social”.\n' +
                'ARTÍCULO 71.- Sustitúyese el artículo 92 bis de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 92 bis.- Período de prueba. El contrato de trabajo por tiempo indeterminado, excepto el referido en ' +
                'el artículo 96, se entenderá celebrado a prueba durante los primeros OCHO (8) meses de vigencia. Cualquiera de ' +
                'las partes podrá extinguir la relación durante ese lapso sin expresión de causa, sin derecho a indemnización con ' +
                'motivo de la extinción, pero con obligación de preavisar según lo establecido en los artículos 231 y 232.\n' +
                'El período de prueba se regirá por las siguientes reglas:\n' +
                '1. Un empleador no puede contratar a un mismo trabajador, más de una vez, utilizando el período de prueba. De ' +
                'hacerlo, se considerará de pleno derecho, que el empleador ha renunciado al período de prueba.\n' +
                '2. El uso abusivo del período de prueba con el objeto de evitar la efectivización de trabajadores será pasible de las ' +
                'sanciones previstas en los regímenes sobre infracciones a las leyes de trabajo. En especial, se considerará abusiva ' +
                'la conducta del empleador que contratare sucesivamente a distintos trabajadores para un mismo puesto de trabajo ' +
                'de naturaleza permanente.\n' +
                '3. Las partes tienen los derechos y las obligaciones propias de la relación laboral, con las excepciones que se ' +
                'establecen en este artículo. Tal reconocimiento respecto del trabajador incluye los derechos sindicales.\n' +
                '4. Las partes están obligadas al pago de los aportes y contribuciones a la Seguridad Social, con los beneficios ' +
                'establecidos en cada caso.\n' +
                '5. El trabajador tiene derecho, durante el período de prueba, a las prestaciones por accidente o enfermedad del ' +
                'trabajo. También por accidente o enfermedad inculpable, que perdurará exclusivamente hasta la finalización del ' +
                'período de prueba si el empleador rescindiere el contrato de trabajo durante ese lapso. Queda excluida la ' +
                'aplicación de lo prescripto en el cuarto párrafo del artículo 212.”\n' +
                'ARTÍCULO 72.- Sustitúyese el artículo 124 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 124.- Las remuneraciones en dinero debidas al trabajador deberán pagarse, bajo pena de nulidad, en ' +
                'efectivo, cheque a la orden del trabajador para ser cobrado personalmente por este o quien él indique o mediante ' +
                'la acreditación en cuenta abierta a su nombre en entidad bancaria, en institución de ahorro oficial o en otras ' +
                'categorías de entidades que la autoridad de aplicación del sistema de pagos considere aptas, seguras, ' +
                'interoperables y competitivas.”\n' +
                'ARTÍCULO 73.- Sustitúyese el inciso c) del artículo 132 de la Ley de Contrato de Trabajo Nº 20.744 (t.o 1976) y ' +
                'sus modificatorias, por el siguiente:\n' +
                '“inciso c).- pago de cuotas, aportes periódicos o contribuciones a que estuviesen obligados los trabajadores en ' +
                'virtud de normas legales o provenientes de las convenciones colectivas de trabajo o que resulte de su carácter de ' +
                'afiliados a asociaciones profesionales de trabajadores con personería gremial o de miembros de sociedades ' +
                'mutuales o cooperativas así como por servicios sociales y demás prestaciones que otorguen dichas entidades, solo ' +
                'si existe un consentimiento explícito del empleado autorizando el mismo.”\n' +
                'ARTÍCULO 74.- Sustitúyese el artículo 136 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 136.- Contratistas e intermediarios. Sin perjuicio de la facultad de retención establecida en el art. 30 ' +
                'de esta ley, los trabajadores contratados por contratistas o intermediarios tendrán derecho a solicitar al empleador ' +
                'principal para los cuales dichos contratistas o intermediarios presten servicios o ejecuten obras, que retengan, de ' +
                'lo que deben percibir estos, y den en pago por cuenta y orden de su empleador, los importes adeudados en ' +
                'concepto de remuneraciones, indemnizaciones u otros derechos apreciables en dinero provenientes de la relación ' +
                'laboral.\n' +
                'Conforme lo dispuesto en el artículo 30 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, el principal estará ' +
                'facultado a retener sin preaviso, de lo que deben percibir los contratistas o intermediarios, los importes que estos ' +
                'adeuden a los organismos de seguridad social con motivo de la relación laboral mantenida con los trabajadores ' +
                'contratados por dichos contratistas o intermediarios. Dichas sumas deberán depositarse a la orden de los ' +
                'correspondientes organismos en las formas y condiciones que determine la reglamentación.\n' +
                'La ADMINISTRACIÓN FEDERAL DE INGRESOS PÚBLICOS, dentro de los NOVENTA (90) días de ' +
                'sancionada la presente ley establecerá un mecanismo simplificado a fin de poder efectivizar la retención ' +
                'correspondiente a la seguridad social establecida en el presente artículo.”\n' +
                'ARTÍCULO 75.- Sustitúyese el artículo 139 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 139.- Modalidad. El recibo será confeccionado por el empleador debiendo hacer entrega de una ' +
                'copia fiel del original al trabajador la que podrá ser instrumentada de forma electrónica.”\n' +
                'ARTÍCULO 76.- Sustitúyese el artículo 140 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 140.- Contenido necesario. El recibo de pago deberá necesariamente contener, como mínimo, las ' +
                'siguientes enunciaciones:\n' +
                'a) Nombre íntegro o razón social del empleador y su domicilio y su Clave Única de Identificación Tributaria ' +
                '(C.U.I.T);\n' +
                'b) Nombre y apellido del trabajador y su calificación profesional y su Código Único de Identificación Laboral ' +
                '(C.U.I.L.);\n' +
                'c) Total de remuneración que perciba, con indicación substancial de su determinación. Si se tratase de porcentajes ' +
                'o comisiones de ventas, se indicarán los importes totales de estas últimas, y el porcentaje o comisión asignada al ' +
                'trabajador.\n' +
                'd) Los requisitos del artículo 12 del Decreto-Ley N° 17.250/67.\n' +
                'e) Total bruto de la remuneración básica o fija y porcentual devengado y tiempo que corresponda. En los trabajos ' +
                'remunerados a jornal o por hora, el número de jornadas u horas trabajadas, y si se tratase de remuneración por ' +
                'pieza o medida, número de estas, importe por unidad adoptado y monto global correspondiente al lapso liquidado.\n' +
                'f) Importe de las deducciones que se efectúan por aportes jubilatorios u otras autorizadas por esta ley; embargos y ' +
                'demás descuentos que legalmente correspondan.\n' +
                'g) Importe neto percibido, expresado en números y letras.\n' +
                'h) En el caso de los artículos 124 y 129 de esta ley, firma y sello de los funcionarios o agentes dependientes de la ' +
                'autoridad, la que podrá ser electrónica y supervisión de los pagos.\n' +
                'i) Fecha de ingreso o antigüedad reconocida y tarea cumplida o categoría en que efectivamente se desempeñó ' +
                'durante el período de pago.\n' +
                'j) Total de contribuciones abonadas por el empleador por disposición legal”.\n' +
                'ARTÍCULO 77.- Sustitúyese el artículo 143 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 143.- Conservación - Plazo. El empleador deberá conservar los recibos y otras constancias de pago ' +
                'durante todo el plazo correspondiente a la prescripción liberatoria del beneficio de que se trate.\n' +
                'A efectos de la conservación de los recibos y otras constancias de pago, los mismos podrán ser digitalizados, los ' +
                'cuales tendrán la misma validez que en formato papel.\n' +
                'El pago hecho por un último o ulteriores períodos no hace presumir el pago de los anteriores.”\n' +
                'ARTÍCULO 78.- Sustitúyese el artículo 177 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 177.- Prohibición de trabajar. Conservación del Empleo. Queda prohibido el trabajo del personal ' +
                'femenino o persona gestante durante los cuarenta y cinco (45) días anteriores al parto y hasta cuarenta y cinco ' +
                '(45) días después del mismo.\n' +
                'Sin embargo, la persona interesada podrá optar por que se le reduzca la licencia anterior al parto, que en tal caso ' +
                'no podrá ser inferior a diez (10) días; el resto del período total de licencia se acumulará al período de descanso ' +
                'posterior al parto. En caso de nacimiento pre-término se acumulará al descanso posterior todo el lapso de licencia ' +
                'que no se hubiere gozado antes del parto, de modo de completar los noventa (90) días.\n' +
                'La trabajadora o persona gestante deberá comunicar fehacientemente su embarazo al empleador, con presentación ' +
                'de certificado médico en el que conste la fecha presunta del parto, o requerir su comprobación por el empleador.\n' +
                'La misma conservará su empleo durante los períodos indicados, y gozará de las asignaciones que le confieren los ' +
                'sistemas de seguridad social, que garantizarán a la misma la percepción de una suma igual a la retribución que ' +
                'corresponda al período de licencia legal, todo de conformidad con las exigencias y demás requisitos que prevean ' +
                'las reglamentaciones respectivas.\n' +
                'Garantízase a toda mujer o persona gestante durante la gestación el derecho a la estabilidad en el empleo, el que ' +
                'tendrá carácter de derecho adquirido a partir del momento en que la misma practique la notificación a que se ' +
                'refiere el párrafo anterior.\n' +
                'En caso de permanecer ausente de su trabajo durante un tiempo mayor, a consecuencia de enfermedad que según ' +
                'certificación médica deba su origen al embarazo o parto y la incapacite para reanudarlo vencidos aquellos plazos, ' +
                'la mujer o persona gestante será acreedora a los beneficios previstos en el artículo 208 de esta ley.”\n' +
                'ARTÍCULO 79.- Incorpórase como artículo 197 bis de la Ley N° 20.744 (t.o. 1976) y sus modificatorias, el ' +
                'siguiente texto:\n' +
                '“ARTÍCULO 197 bis.- Las convenciones colectivas de trabajo, respetando los mínimos indisponibles de 12 horas ' +
                'de descanso entre jornada y jornada por razones de salud y seguridad en el trabajo, así como los límites legales ' +
                'conforme la naturaleza de cada actividad, podrán establecer regímenes que se adecuen a los cambios en las ' +
                'modalidades de producción, las condiciones propias de cada actividad, contemplando especialmente el beneficio ' +
                'e interés de los trabajadores.\n' +
                'A tal efecto, se podrá disponer colectivamente del régimen de horas extras, banco de horas, francos ' +
                'compensatorios, entre otros institutos relativos a la jornada laboral.”\n' +
                'ARTÍCULO 80.- Sustitúyese el artículo 242 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 242.- Justa causa. Una de las partes podrá hacer denuncia del contrato de trabajo en caso de ' +
                'inobservancia por parte de la otra de las obligaciones resultantes del mismo que configuren injuria y que, por su ' +
                'gravedad, no consientan la prosecución de la relación.\n' +
                'La valoración deberá ser hecha prudencialmente por los jueces, teniendo en consideración el carácter de las ' +
                'relaciones que resulta de un contrato de trabajo, según lo dispuesto en la presente ley, y las modalidades y ' +
                'circunstancias personales en cada caso.\n' +
                'Configura injuria laboral grave la participación en bloqueos o tomas de establecimiento. Se presume que existe ' +
                'injuria grave cuando durante una medida de acción directa:\n' +
                'a.- Se afecte la libertad de trabajo de quienes no adhieran a la medida de fuerza, mediante actos, hechos, ' +
                'intimidaciones o amenazas;\n' +
                'b.- Se impida u obstruya total o parcialmente el ingreso o egreso de personas y/o cosas al establecimiento;\n' +
                'c.- Se ocasionen daños en personas o en cosas de propiedad de la empresa o de terceros situadas en el ' +
                'establecimiento (instalaciones, mercaderías, insumos y materias primas, herramientas, etc.) o se las retenga ' +
                'indebidamente.\n' +
                'Previo al distracto el empleador debe intimar al trabajador al cese de la conducta injuriosa, excepto en el supuesto ' +
                'de daños a las personas o cosas previsto en el inciso c), donde la producción del daño torna inoficiosa la ' +
                'intimación.”\n' +
                'ARTÍCULO 81.- Sustitúyese el artículo 245 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 245.- Indemnización por antigüedad o despido. En los casos de despido dispuesto por el empleador ' +
                'sin justa causa, habiendo o no mediado preaviso y luego de transcurrido el periodo de prueba, se deberá abonar al ' +
                'trabajador una indemnización equivalente a UN (1) mes de sueldo por cada año de servicio o fracción mayor de ' +
                'TRES (3) meses, tomando como base de cálculo la mejor remuneración mensual, normal y habitual devengada ' +
                'durante el último año o durante el tiempo de prestación de servicios si este fuera menor. La base de cálculo de ' +
                'esta indemnización no incluirá el Sueldo Anual Complementario, ni conceptos de pago semestral o anual.\n' +
                'Para aquellos trabajadores remunerados a comisión o con remuneraciones mensuales variables, será de aplicación ' +
                'el promedio de los últimos SEIS (6) meses, o del último año si fuera más favorable al trabajador.\n' +
                'Dicha base no podrá exceder el equivalente de TRES (3) veces el importe mensual de la suma que resulte del ' +
                'promedio de todas las remuneraciones previstas en el convenio colectivo de trabajo aplicable al trabajador, al ' +
                'momento del despido, por la jornada legal o convencional, excluida la antigüedad. Le corresponderá a la ' +
                'Autoridad de Aplicación fijar y publicar el promedio resultante, conjuntamente con las escalas salariales de cada ' +
                'convenio colectivo de trabajo.\n' +
                'Para aquellos trabajadores excluidos de todo convenio colectivo de trabajo, el tope establecido en el párrafo ' +
                'anterior será el del convenio aplicable al establecimiento donde preste servicios o al convenio más favorable, en ' +
                'el caso de que hubiera más de uno.\n' +
                'La base de cálculo de la indemnización no podrá en ningún caso ser inferior al SESENTA Y SIETE POR ' +
                'CIENTO (67 %) del importe correspondiente a UN (1) mes de sueldo, obtenido conforme el método descripto en ' +
                'el primer y segundo párrafo del presente.\n' +
                'La indemnización en ningún caso podrá ser inferior a UN (1) mes de sueldo calculado sobre la base del sistema ' +
                'establecido en el primer y segundo párrafo del presente.\n' +
                'Mediante convenio colectivo de trabajo, las partes podrán sustituir el presente régimen indemnizatorio por un ' +
                'fondo o sistema de cese laboral cuyo costo estará siempre a cargo del empleador, con un aporte mensual que no ' +
                'podrá ser superior al OCHO POR CIENTO (8%) de la remuneración computable.\n' +
                'Por su parte, los empleadores podrán optar por contratar un sistema privado de capitalización a su costo, a fin de ' +
                'solventar la indemnización prevista en el presente artículo y/o la suma que libremente se pacte entre las partes ' +
                'para el supuesto de desvinculación por mutuo acuerdo conforme artículo 241 de la presente ley.”\n' +
                'ARTÍCULO 82.- Incorpórase como artículo 245 bis a la Ley N° 20.744 (t.o. 1976) y sus modificatorias, el ' +
                'siguiente:\n' +
                '“ARTÍCULO 245 bis.- Agravamiento indemnizatorio por despido motivado por un acto discriminatorio. Será ' +
                'considerado despido por un acto de discriminación aquel originado por motivos de etnia, raza, nacionalidad, sexo, ' +
                'identidad de género, orientación sexual, religión, ideología, u opinión política o gremial.\n' +
                'En este supuesto la prueba estará a cargo de quien invoque la causal, y en caso de sentencia judicial que corrobore ' +
                'el origen discriminatorio del despido, corresponderá el pago de una indemnización agravada especial que ' +
                'ascenderá a un monto equivalente al 50% de la establecida por el artículo 245 de la Ley N° 20.744 (t.o. 1976) y ' +
                'sus modificatorias o de la indemnización por antigüedad del régimen especial aplicable al caso.\n' +
                'Según la gravedad de los hechos, los jueces podrán incrementar esta indemnización hasta el 100%, conforme los ' +
                'parámetros referidos anteriormente.\n' +
                'La indemnización prevista en el presente artículo no será acumulable con ningún otro régimen especial que ' +
                'establezca agravamientos indemnizatorios.\n' +
                'El despido dispuesto, en todos los casos, producirá la extinción del vínculo laboral a todos los efectos.”\n' +
                'ARTÍCULO 83.- Sustitúyese el artículo 255 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 255.- Reingreso del trabajador. Deducción de las indemnizaciones percibidas.\n' +
                'La antigüedad del trabajador se establecerá conforme a lo dispuesto en los artículos 18 y 19 de esta ley, pero si ' +
                'hubiera mediado reingreso a las órdenes del mismo empleador se deducirá de las indemnizaciones de los artículos ' +
                '245, 246, 247, 250, 251, 253 y 254 lo pagado oportunamente, actualizado por el Índice de Precios al Consumidor ' +
                '(IPC) con más una tasa de interés pura del 3% anual, por la causal de cese anterior.\n' +
                'En ningún caso la indemnización resultante podrá ser inferior a la que hubiera correspondido al trabajador si su ' +
                'período de servicios hubiera sido solo el último y con prescindencia de los períodos anteriores al reingreso.”\n' +
                'ARTÍCULO 84.- Sustitúyese el artículo 276 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 276.- Actualización y repotenciación de los créditos laborales por depreciación monetaria. Los ' +
                'créditos provenientes de las relaciones individuales de trabajo serán actualizados y/o repotenciados y/o ' +
                'devengarán intereses.\n' +
                'La suma que resulte de dicha actualización y/o repotenciación y/o aplicación de intereses en ningún caso podrá ' +
                'ser superior a la que resulte de calcular el capital histórico actualizado por el Índice de Precios al Consumidor ' +
                '(IPC) con más una tasa de interés pura del 3% anual.\n' +
                'La presente disposición es de orden público federal y será aplicada por los jueces o por la autoridad ' +
                'administrativa, de oficio o a petición de parte, incluso en los casos de concurso del deudor, así como también, ' +
                'después de la declaración de quiebra.”\n' +
                'ARTÍCULO 85.- Sustitúyese el artículo 277 de la Ley N° 20.744 (t.o. 1976) y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 277.- Pago en juicio. Todo pago que deba realizarse en los juicios laborales se efectivizará ' +
                'mediante depósito bancario en autos a la orden del Tribunal interviniente y giro judicial personal al titular del ' +
                'crédito o sus derecho-habientes, aún en el supuesto de haber otorgado poder.\n' +
                'Queda prohibido el pacto de cuota litis que exceda del veinte por ciento (20%) el que, en cada caso, requerirá ' +
                'ratificación personal y homologación judicial.\n' +
                'Las personas humanas y las personas jurídicas alcanzadas por la Ley N° 24.467, ante una sentencia judicial ' +
                'condenatoria, podrán acogerse al pago total de la misma en hasta un máximo de doce (12) cuotas mensuales ' +
                'consecutivas, las que serán ajustadas conforme la pauta establecida en el artículo 276 de la presente Ley.\n' +
                'El desistimiento por el trabajador de acciones y derechos se ratificará personalmente en el juicio y requerirá ' +
                'homologación.\n' +
                'Todo pago realizado sin observar lo prescripto, así como el pacto de cuota litis o el desistimiento no ' +
                'homologados, serán nulos de pleno derecho.\n' +
                'La responsabilidad por el pago de las costas procesales, incluidos los honorarios profesionales de todo tipo allí ' +
                'devengados y correspondientes a la primera o única instancia, no excederán del veinticinco por ciento (25 %) del ' +
                'monto de la sentencia, laudo, transacción o instrumento que ponga fin al diferendo. Si las regulaciones de ' +
                'honorarios practicadas conforme a las leyes arancelarias o usos locales, correspondientes a todas las profesiones ' +
                'y especialidades superaran dicho porcentaje, el juez procederá a prorratear los montos entre los beneficiarios.\n' +
                'Para el cómputo del porcentaje indicado no se tendrá en cuenta el monto de los honorarios profesionales que ' +
                'hubieren representado, patrocinado o asistido a la parte condenada en costas.”',
                delta: {
                    title: 'Ley N° 20.744 - Régimen de Contrato de trabajo',
                    removed: require('./ley20744').default,
                    added: require('./ley20744-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo III – Convenciones Colectivas de Trabajo (Ley N° 14.250)',
        articles: [
            {
                text: 'ARTÍCULO 86.- Sustitúyese el artículo 6° de la Ley N° 14.250, por el siguiente:\n' +
                '“ARTÍCULO 6°.- Una convención colectiva de trabajo, cuyo término estuviere vencido, solamente mantendrá ' +
                'subsistentes las normas referidas a las condiciones de trabajo establecidas en virtud de ellas (cláusulas ' +
                'normativas) y hasta tanto entre en vigencia una nueva convención colectiva o exista un acuerdo de partes que la ' +
                'prorrogue.\n' +
                '\n' +
                'El resto de las cláusulas (obligacionales) podrán mantener su vigencia, solo por acuerdo de partes o por la ' +
                'específica prórroga dispuesta por el Poder Ejecutivo Nacional.”',
                delta: {
                    title: 'Ley N° 14.250 - Convenciones Colectivas de Trabajo',
                    removed: require('./ley14250').default,
                    added: require('./ley14250-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo IV - Asociaciones Sindicales (Ley N° 23.551)',
        articles: [
            {
                text: 'ARTÍCULO 87.- Incorpórase como artículo 20 bis a la Ley N° 23.551, el siguiente:\n' +
                '“ARTÍCULO 20 bis.- Derecho de realizar Asambleas, Congresos. Los representantes sindicales dentro de la ' +
                'empresa, delegados, comisiones internas u organismos similares, así como las autoridades de las distintas ' +
                'seccionales de las asociaciones sindicales tendrán derecho a convocar a asambleas y congresos de delegados sin ' +
                'perjudicar las actividades normales de la empresa o afectar a terceros.”\n' +
                'ARTÍCULO 88.- Incorpórase como artículo 20 ter a la Ley N° 23.551, el siguiente:\n' +
                '“ARTÍCULO 20 ter - Acciones prohibidas. Las siguientes conductas están prohibidas y serán consideradas ' +
                'infracciones muy graves:\n' +
                'a. Afectar la libertad de trabajo de quienes no adhieran a una medida de fuerza, mediante actos, hechos, ' +
                'intimidaciones o amenazas;\n' +
                'b. Provocar el bloqueo o tomar un establecimiento; impedir u obstruir total o parcialmente el ingreso o egreso de ' +
                'personas y/o cosas al establecimiento;\n' +
                'c. Ocasionar daños en personas o en cosas de propiedad de la empresa o de terceros situadas en el establecimiento ' +
                '(instalaciones, mercaderías, insumos y materias primas, herramientas, etc.) o retenerlas indebidamente.\n' +
                'Verificadas dichas acciones como medidas de acción directa sindical, la entidad responsable será pasible de la ' +
                'aplicación de las sanciones que establezca la reglamentación, una vez cumplimentado el procedimiento que se ' +
                'disponga al efecto a cargo de la Autoridad de Aplicación, sin perjuicio de las responsabilidades civiles y/o ' +
                'penales que pudieran corresponder.”',
                delta: {
                    title: 'Ley N° 23.551 - Asociaciones sindicales',
                    removed: require('./ley23551').default,
                    added: require('./ley23551-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo V - Régimen del Trabajo Agrario (Ley N° 26.727)',
        articles: [
            {
                text: 'ARTÍCULO 89.- Sustitúyese el artículo 69 de la Ley Nº 26.727, por el siguiente:\n' +
                '“ARTÍCULO 69.- Bolsa de trabajo. Las bolsas de trabajo a cargo de las asociaciones sindicales de trabajadores' +
                'con personería gremial podrán proponer a los empleadores un listado del personal necesario para la realización de' +
                'tareas temporarias en las actividades contempladas en la presente Ley, conforme las resoluciones que a tal efecto' +
                'dicte la Comisión de Trabajo Agrario.\n' +
                'El empleador podrá contratar a la persona sugerida y/o a cualquier otra que disponga.\n' +
                'Queda derogada toda norma que se oponga al presente artículo y/o a la libertad de contratación y elección del' +
                'personal por parte del empleador.”',
                delta: {
                    title: 'Ley N° 26.727 - Trabajo Agrario',
                    removed: require('./ley26727').default,
                    added: require('./ley26727-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo VI - Régimen del Viajante de Comercio (Ley N° 14.546)',
        articles: [
            {
                text: 'ARTÍCULO 90.- Derógase la Ley N° 14.546.\n' +
                'ARTÍCULO 91.- La derogación de la Ley N° 14.546 no afecta los derechos individuales de aquellos trabajadores ' +
                'que se encuentren actualmente alcanzados por el Régimen establecido en la ley que se deroga.\n' +
                'Las nuevas contrataciones producidas con posterioridad a la entrada en vigencia de esta Ley, se regirán por las ' +
                'normas generales, contratos individuales y convenios colectivos que resulten aplicables.\n' +
                'La representación sindical y empleadora deberán impulsar la negociación colectiva relativa con el fin de otorgar ' +
                'el marco adicional que consideren menester adecuado a las circunstancias actuales si correspondiere.',
                delta: {
                    title: 'Ley N° 14.546 - Régimen del Viajante de Comercio',
                    removed: require('./ley14546').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo VII - Régimen Legal del Contrato de teletrabajo (Ley N° 27.555)',
        articles: [
            {
                text: 'ARTÍCULO 92.- Sustitúyese el artículo 6° de la Ley Nº 27.555, por el siguiente:\n' +
                '“ARTÍCULO 6°.- Tareas de cuidados. Las personas que trabajen bajo esta modalidad y que acrediten tener a ' +
                'cargo el cuidado de personas menores de trece (13) años, personas con discapacidad o adultas mayores que ' +
                'convivan con la persona que trabaja y que requieran asistencia específica, tendrán derecho a coordinar con el ' +
                'empleador, en tanto no afecte lo requerido de su trabajo, horarios compatibles a la tarea de cuidado a su cargo y/o ' +
                'la interrupción esporádica de su jornada, compensado dichos períodos de tiempo de manera acorde con las tareas ' +
                'asignadas.\n' +
                'El presente artículo no será de aplicación cuando el empleador abonare alguna compensación legal, convencional ' +
                'o contractual relativa a gastos por tareas de cuidado.\n' +
                'Mediante negociación colectiva o en el ámbito de los contratos de trabajo podrán establecerse pautas específicas ' +
                'para el ejercicio de este derecho.”\n' +
                'ARTÍCULO 93.- Sustitúyese el artículo 8° de la Ley Nº 27.555, por el siguiente:\n' +
                '“ARTÍCULO 8° - Reversibilidad. La solicitud o el consentimiento prestado por la persona que trabaja en una ' +
                'posición presencial para pasar a la modalidad de teletrabajo, podrá ser revertido por acuerdo mutuo entre el ' +
                'trabajador y el empleador, en tanto existan en las instalaciones de la empresa las condiciones para que la persona ' +
                'pueda retomar su trabajo en forma presencial.\n' +
                'En función de las necesidades propias de cada puesto de trabajo se podrá revertir la modalidad de teletrabajo por ' +
                'la modalidad presencial, en los supuestos en que las propias características de la actividad así lo requieran.”\n' +
                'ARTÍCULO 94.- Sustitúyese el artículo 17 de la Ley Nº 27.555, por el siguiente:\n' +
                '“ARTÍCULO 17.- Prestaciones transnacionales. Cuando se trate de prestaciones transnacionales de teletrabajo, se ' +
                'aplicará al contrato respectivo la ley del lugar de ejecución de las tareas por parte del trabajador.”\n' +
                'ARTÍCULO 95.- Sustitúyese el artículo 18 de la Ley Nº 27.555, por el siguiente:\n' +
                '“ARTÍCULO 18.- El Poder Ejecutivo Nacional establecerá un método simple, electrónico y automático de ' +
                'registro de esta modalidad contractual al tiempo del alta o al momento de la incorporación del trabajador al ' +
                'presente régimen.”',
                delta: {
                    title: 'Ley N° 27.555 - Régimen Legal del Contrato de Teletrabajo',
                    removed: require('./ley27555').default,
                    added: require('./ley27555-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo VIII - De los Trabajadores independientes con colaboradores',
        articles: [
            {
                text: 'ARTÍCULO 96.- El trabajador independiente podrá contar con hasta otros CINCO (5) trabajadores ' +
                'independientes para llevar adelante un emprendimiento productivo y podrá acogerse a un régimen especial ' +
                'unificado que al efecto reglamentará el Poder Ejecutivo Nacional.\n' +
                'El mismo estará basado en la relación autónoma, sin que exista vinculo de dependencia entre ellos, ni con las ' +
                'personas contratantes de los servicios u obras, e incluirá, tanto para el trabajador independiente como para los ' +
                'trabajadores colaboradores, el aporte individual de una cuota mensual que comprenda la cotización al Régimen ' +
                'Previsional, al Régimen Nacional de Obras Sociales y Sistema Nacional del Seguro de Salud y al Régimen de ' +
                'Riesgos del Trabajo, en las condiciones y requisitos que establezca la reglamentación.',
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo IX – Servicios esenciales (Ley N° 25.877)',
        articles: [
            {
                text: 'ARTÍCULO 97.- Sustitúyese el artículo 24 de la Ley N° 25.877, por el siguiente:\n' +
                '“ARTÍCULO 24.- Los conflictos colectivos que pudieren afectar la normal prestación de servicios esenciales o ' +
                'actividades de importancia trascendental, quedan sujetos a las siguientes garantías de prestación de servicios ' +
                'mínimos.\n' +
                'En lo que respecta a la prestación de servicios mínimos, en el caso de los servicios esenciales, en ningún caso ' +
                'podrá negociar o imponer a las partes una cobertura menor al SETENTA Y CINCO POR CIENTO (75%) de la ' +
                'prestación normal del servicio de que se tratare.\n' +
                'En el caso de las actividades o servicios de importancia trascendental, en ningún caso se podrá negociar o ' +
                'imponer a las partes una cobertura menor al CINCUENTA POR CIENTO (50%).\n' +
                'Se considerarán servicios esenciales en sentido estricto, las actividades siguientes:\n' +
                'a. Los servicios sanitarios y hospitalarios, así como el transporte y distribución de medicamentos e insumos ' +
                'hospitalarios y los servicios farmacéuticos;\n' +
                'b. La producción, transporte y distribución y comercialización de agua potable, gas y otros combustibles y ' +
                'energía eléctrica;\n' +
                'c. Los servicios de telecomunicaciones, incluyendo internet y comunicaciones satelitales;\n' +
                'd. La aeronáutica comercial y el control de tráfico aéreo y portuario; incluyendo balizamiento, dragado, ' +
                'amarre, estiba y remolque de buques;\n' +
                'e. servicios aduaneros y migratorios, y demás vinculados al comercio exterior; y\n' +
                'f. cuidado de menores y educación de niveles guardería, preescolar, primario y secundario, así como la ' +
                'educación especial.\n' +
                'Se consideran actividades de importancia trascendental las siguientes:\n' +
                'a. Producción de medicamentos y/o insumos hospitalarios;\n' +
                'b. Transporte marítimo, fluvial, terrestre y subterráneo de personas y/o mercaderías a través de los distintos ' +
                'medios que se utilicen para tal fin;\n' +
                'c. Servicios de radio y televisión;\n' +
                'd. Actividades industriales continuas, incluyendo siderurgia y la producción de aluminio, actividad química y la ' +
                'actividad cementera;\n' +
                'e. Industria alimenticia en toda su cadena de valor;\n' +
                'f. La producción y distribución de materiales de la construcción, servicios de reparación de aeronaves y buques, ' +
                'todos los servicios portuarios y aeroportuarios, servicios logísticos, actividad minera, actividad frigorífica, ' +
                'correos, distribución y comercialización de alimentos y bebidas, actividad agropecuaria y su cadena de valor;\n' +
                'g. Los servicios bancarios, financieros, servicios hoteleros y gastronómicos y el comercio electrónico; y\n' +
                'h. La producción de bienes y/o servicios de toda actividad, que estuvieran afectados a compromisos de ' +
                'exportación.\n' +
                'Una comisión independiente y autónoma, denominada COMISIÓN DE GARANTÍAS, integrada según se ' +
                'establezca en la reglamentación, por cinco (5) miembros de reconocida solvencia técnica, profesional o ' +
                'académica en materia de relaciones del trabajo, del derecho laboral o de derecho constitucional y destacada ' +
                'trayectoria, podrá, mediante resolución fundada, calificar como servicio esencial o servicio de importancia ' +
                'trascendental una actividad no incluida en las enumeraciones precedentes, cuando se diere alguna de las ' +
                'siguientes circunstancias:\n' +
                'a) La extensión y duración de la interrupción de la actividad de que se tratare pudiere poner en peligro la vida, la ' +
                'salud o la seguridad de la persona en toda o parte de la comunidad;\n' +
                'b) La actividad afectada constituyere un servicio público de importancia trascendental o de utilidad pública;\n' +
                'c) La interrupción o suspensión del servicio pudiere provocar una situación de crisis nacional aguda que hiciere ' +
                'peligrar las condiciones normales o de existencia de parte de la población; y\n' +
                'd) la interrupción o suspensión de la producción pudiere poner en peligro el adecuado abastecimiento de ' +
                'productos críticos para la población y/o afectar metas de recaudación asociadas a las políticas de equilibrio fiscal.\n' +
                'El Poder Ejecutivo Nacional dictará la reglamentación correspondiente y la Autoridad de Aplicación las normas ' +
                'complementarias, aclaratorias y operativas que resulten necesarias.”',
                delta: {
                    title: 'Ley N° 25.877 - Régimen Laboral',
                    removed: require('./ley25877').default,
                    added: require('./ley25877-new').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Título V – COMERCIO EXTERIOR',
        articles: [
            {
                text: 'ARTÍCULO 98.- Derógase la Ley N° 25.626.',
                delta: {
                    title: 'Ley N° 25.626 - Importaciones',
                    removed: require('./ley25626').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I - Código Aduanero (Ley N° 22.415)',
        articles: [
            {
                text: 'ARTÍCULO 99.- Sustitúyese el artículo 37 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 37.- Las personas humanas o jurídicas podrán gestionar el despacho y la destinación de mercadería, ' +
                'por sí o a través de persona autorizada, con la excepción de las funciones que este Código prevé para los agentes ' +
                'de transporte aduanero y de aquellas facultades inherentes a la calidad de capitán de buque, comandante de ' +
                'aeronave o, en general, conductor de los demás medios de transporte.”\n' +
                'ARTÍCULO 100.- Sustitúyese el artículo 41 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 41.- No podrán desempeñarse como Despachantes de Aduana quienes estén comprendidos en ' +
                'alguno de los siguientes supuestos:\n' +
                '1°) haber sido condenado por algún delito aduanero o por la infracción de contrabando menor;\n' +
                '2°) haber sido socio ilimitadamente responsable, director o administrador de cualquier sociedad o asociación\n' +
                'cuando la sociedad o la asociación de que se tratare hubiera sido condenada por cualquiera de los ilícitos ' +
                'mencionados en el punto 1). Cuando hubiese sido condenada por la infracción de contrabando menor, la ' +
                'inhabilidad se extenderá hasta CINCO (5) años a contar desde que la condena hubiera quedado firme. Se exceptúa ' +
                'de la inhabilitación a quienes probaren haber sido ajenos al acto o haberse opuesto a su realización;\n' +
                '3°) haber sido condenado por delito reprimido con pena privativa de la libertad. Exceptúanse los delitos contra las ' +
                'personas, el honor, la honestidad y el estado civil, cuando la sentencia hubiera concedido el beneficio de la ' +
                'ejecución condicional de la pena;\n' +
                '4°) contar con procesamiento judicial firme o encontrarse sumariado en jurisdicción aduanera por cualquiera de ' +
                'los ilícitos indicados en los puntos 1) y 3), mientras no fuere sobreseído provisional o definitivamente o absuelto ' +
                'por sentencia o resolución firme;\n' +
                '5°) haber sido condenado con pena accesoria de inhabilitación para ejercer cargos públicos, hasta que se ' +
                'produjere su rehabilitación;\n' +
                '6°) ser fallido o concursado civil, hasta DOS (2) años después de su rehabilitación. No obstante, cuando se tratare ' +
                'de quiebra o concurso culpable o fraudulento la inhabilidad se extenderá hasta CINCO (5) o DIEZ (10) años ' +
                'después de su rehabilitación, respectivamente;\n' +
                '7°) encontrarse en concurso preventivo o resolutorio, hasta que hubiere obtenido carta de pago o acreditare el ' +
                'cumplimiento total del acuerdo respectivo;\n' +
                '8°) estar inhibido judicialmente para administrar o disponer de sus bienes, mientras esta situación subsistiere;\n' +
                '9°) ser deudor de obligación tributaria aduanera exigible o de obligación emergente de pena patrimonial aduanera ' +
                'firme, o ser socio ilimitadamente responsable, director o administrador de cualquier sociedad o asociación, ' +
                'cuando la sociedad o la asociación de que se tratare fuere deudora de alguna de las obligaciones mencionadas.\n' +
                'Estas inhabilidades subsistirán hasta la extinción de la obligación.\n' +
                '10) ser o haber sido agente aduanero, hasta después de UN (1) año de haber cesado como tal;\n' +
                '11) haber sido exonerado como agente de la administración pública nacional, provincial de la CIUDAD ' +
                'AUTÓNOMA DE BUENOS AIRES o municipal, hasta que se produjere su rehabilitación.\n' +
                '12) quienes incurrieren en reiteración de inconductas o en una falta grave en el ejercicio de sus funciones, que ' +
                'hicieren su permanencia incompatible con la seguridad del servicio aduanero.”\n' +
                'ARTÍCULO 101.- Deróganse los artículos 42, 43, 44, 45 y 46 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias.\n' +
                'ARTÍCULO 102.- Sustitúyese el artículo 47 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 47.- 1. Según la índole de la falta cometida, el perjuicio ocasionado o que hubiera podido ' +
                'ocasionarse y los antecedentes del interesado, el servicio aduanero podrá aplicar a los despachantes de aduana las ' +
                'siguientes sanciones:\n' +
                'a) apercibimiento;\n' +
                'b) suspensión o prohibición para actuar como despachante ante la Dirección General de Aduanas\n' +
                '2. El apercibimiento será impuesto por el administrador de la aduana en cuya jurisdicción se hubiere cometido la ' +
                'falta o por quien ejerciere sus funciones. Las sanciones de suspensión serán impuestas por el Director General de ' +
                'Aduanas.”\n' +
                'ARTÍCULO 103.- Sustitúyese el punto 1. del artículo 51 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias, por el siguiente:\n' +
                '“1. En el marco de lo previsto en el inciso b) del artículo 47, el administrador de la aduana en cuya jurisdicción se ' +
                'hubiere cometido la falta, o quien cumpliere sus funciones, deberá instruir el pertinente sumario administrativo, ' +
                'en el que, cumplidas las diligencias de investigación que considerare necesarias, correrá vista al interesado por un ' +
                'plazo de DIEZ (10) días, dentro del cual deberá ejercer su defensa y ofrecer las pruebas que hicieren a su ' +
                'derecho.”\n' +
                'ARTÍCULO 104.- Deróganse los artículos 55 y 56 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias.\n' +
                'ARTÍCULO 105.- Sustitúyese el artículo 92 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 92.- Todas las personas humanas y jurídicas podrán solicitar destinaciones aduaneras y realizar ' +
                'operaciones de comercio exterior sin necesidad de inscribirse en ningún registro.”\n' +
                'ARTÍCULO 106.- Derógase el artículo 93 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias.\n' +
                'ARTÍCULO 107.- Sustitúyese el artículo 94 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 94.- 1. No podrán realizar operaciones de exportación o importación las personas humanas que ' +
                'estén comprendidas en algunos de los siguientes supuestos: 1°) haber sido condenado por algún delito aduanero, ' +
                'impositivo o previsional, siempre que no haya transcurrido el doble del máximo de la pena prevista en la ley para ' +
                'dicho delito desde el momento de cumplida la condena;\n' +
                '2°) haber sido socio ilimitadamente responsable, director o administrador de cualquier sociedad o asociación, ' +
                'cuando la sociedad o la asociación de que se tratare hubiera sido condenada por cualquiera de los ilícitos ' +
                'mencionados en el punto 1). Se exceptúa de esta inhabilitación a quienes probaren haber sido ajenos al acto o ' +
                'haberse opuesto a su realización;\n' +
                '3°) contar con procesamiento firme o encontrarse sumariado en jurisdicción de la ADMINISTRACIÓN ' +
                'FEDERAL DE INGRESOS PÚBLICOS, entidad autárquica en el ámbito del MINISTERIO DE ECONOMÍA, ' +
                'por cualquiera de los ilícitos indicados en el punto 1) mientras no fuere sobreseído o absuelto por sentencia o ' +
                'resolución firme. No obstante, podrán actuar en tal carácter si el servicio aduanero resuelve aceptar que la persona ' +
                'otorgue garantías suficientes en resguardo del interés fiscal.\n' +
                '4°) ser fallido;\n' +
                '5°) estar inhibido judicialmente para administrar o disponer de sus bienes mientras esta situación subsistiere;\n' +
                '2. Las personas jurídicas no podrán realizar operaciones de importación o exportación cuando:\n' +
                'a) la sociedad, asociación o alguno de sus directores, administradores o socios ilimitadamente responsables, fuere ' +
                'judicialmente procesado o condenado por algún delito aduanero, impositivo o previsional. Esta suspensión solo se ' +
                'aplicará cuando el procesado o el condenado no cesare en su función dentro de los CUARENTA (40) días ' +
                'siguientes a la intimación que a tal fin el servicio aduanero efectuare a la mencionada persona de existencia ideal ' +
                'y subsistirá hasta que el procesado o el condenado cesare en sus funciones o hasta que fuere absuelto o ' +
                'sobreseído. No obstante ello, podrán actuar en tal carácter si el servicio aduanero resuelve aceptar que la persona ' +
                'jurídica otorgue garantías suficientes en resguardo del interés fiscal.\n' +
                'b) hubieran sido declarados en quiebra;\n' +
                'c) fueren sometidos a sumario administrativo, siempre que se lo estimare necesario por resolución fundada en la ' +
                'gravedad de la falta investigada, en relación con la seguridad del servicio aduanero. Esta suspensión tendrá ' +
                'carácter preventivo y no podrá exceder los CUARENTA Y CINCO (45) días prorrogables por única vez por otro ' +
                'plazo igual, mediante decisión fundada, siempre que se mantuvieren las circunstancias que dieron origen a tal ' +
                'medida, pero nunca más allá de la fecha en que quedare firme la resolución definitiva dictada en el sumario de ' +
                'que se tratare. No obstante ello, podrán actuar en tal carácter si el servicio aduanero resuelve aceptar que la ' +
                'persona jurídica otorgue garantías suficientes en resguardo del interés fiscal; d) incurrieren en reiteración de ' +
                'inconductas sancionadas o en una falta grave en el ejercicio de su actividad que hiciere su permanencia ' +
                'incompatible con la seguridad del servicio aduanero.”\n' +
                'ARTÍCULO 108.- Deróganse los artículos 95, 96, 97, 98, 99 y 107 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias.\n' +
                'ARTÍCULO 109.- Sustitúyese el artículo 100 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 100.- El Director General de Aduanas, según la índole de la falta cometida, el perjuicio ocasionado ' +
                'o que hubiera podido ocasionarse y los antecedentes del interesado, podrá aplicarle las siguientes sanciones;\n' +
                'a) apercibimiento;\n' +
                'b) suspensión o prohibición para efectuar operaciones de comercio exterior.”\n' +
                'ARTÍCULO 110.- Sustitúyese el punto 1 del artículo 103 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias, por el siguiente:\n' +
                '“1. En el marco de lo establecido en el inciso b) del artículo 100, la Dirección General de Aduana deberá instruir ' +
                'el pertinente sumario administrativo en el que, cumplidas las diligencias de investigación que considerare ' +
                'necesarias, correrá vista al interesado por un plazo de DIEZ (10) días, dentro del cual éste deberá ejercer su ' +
                'defensa y ofrecer las pruebas que hicieren a su derecho.”\n' +
                'ARTÍCULO 111.- Sustitúyese el artículo 119 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 119.- 1. Cualquiera fuere la zona de que se tratare, los agentes del servicio aduanero y, dentro del ' +
                'ámbito de sus respectivas competencias, los de las fuerzas de seguridad y policiales podrán proceder a la ' +
                'identificación y registro de personas y mercadería, incluidos los medios de transporte, cuando mediaren sospechas ' +
                'de la comisión de algún ilícito aduanero, así como también aprehender, secuestrar o interdictar la mercadería de ' +
                'que se tratare poniendo la misma a disposición de la autoridad competente dentro de las CUARENTA Y OCHO ' +
                '(48) horas.\n' +
                '2. Los agentes del servicio aduanero y, en su caso, los de las fuerzas de seguridad y policiales que debieran operar ' +
                'en materia de control aduanero, procurarán preservar la actividad y la continuidad de las operaciones de ' +
                'importación o de exportación que se hallaren en curso. La eventual interrupción solo procederá ante la existencia ' +
                'de elementos de convicción que condujeren a un razonable estado de presunción de la comisión o principio de ' +
                'ejecución de un delito o de una infracción tipificada en este Código.\n' +
                '3. Los agentes del servicio aduanero no podrán dejar en suspenso, ni demorar la aplicación de las disposiciones en ' +
                'vigencia bajo el pretexto de pedir aclaración de sus términos.”\n' +
                'ARTÍCULO 112.- Incorpórase como artículo 120 bis a la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias, el siguiente:\n' +
                '“ARTÍCULO 120 bis.- 1. El PODER EJECUTIVO NACIONAL debe adoptar procedimientos y mecanismos que ' +
                'simplifiquen el cumplimiento de sus obligaciones con los distintos actores involucrados en actividades de ' +
                'comercio exterior, incluyendo la utilización extendida de tecnologías de información, automatización y ' +
                'comunicaciones para el intercambio electrónico de información.\n' +
                '2. Los procedimientos, solicitudes, tramitaciones necesarias para el cumplimiento de las formalidades, ' +
                'operaciones u obligaciones aduaneras, incluyendo las destinaciones de importación y exportación, deberán ' +
                'llevarse a cabo mediante el uso de los servicios informáticos electrónicos.\n' +
                '3. En los casos excepcionales y fundamentados, la Dirección General de Aduana podrá autorizar la presentación ' +
                'de trámites o documentación por medios físicos los cuales deberán ser digitalizados.\n' +
                '4. La firma digital debidamente certificada o firma electrónica equivalen, para todos los efectos legales, a la firma ' +
                'manuscrita de los funcionarios aduaneros y de las personas que intervienen en el proceso aduanero. A su vez, los ' +
                'requisitos de firmas manuscritas podrán ser sustituidas por contraseñas o firma digital o electrónica, para ' +
                'actuaciones de comercio exterior que se realicen por medios informáticos.\n' +
                '5. La Dirección General de Aduanas establecerá procedimientos de contingencia de los servicios informáticos ' +
                'electrónicos en los casos en que los Sistemas Informáticos queden, total o parcialmente, fuera de servicio. En ' +
                'estos casos la Dirección General de Aduanas autorizará el trámite a un mecanismo o en forma manual, mediante ' +
                'la presentación de documentos físicos, sin perjuicio de la obligación de incluir tal actuación en los servicios ' +
                'informáticos electrónicos, una vez que se restablezca el servicio.\n' +
                '6. La Dirección General de Aduanas y demás autoridades competentes dictarán las normas complementarias y ' +
                'establecerá los procedimientos que regulen la emisión, transferencia, digitalización, uso y control de la ' +
                'información, en relación con tales operaciones.”\n' +
                'ARTÍCULO 113.- Incorpórase como artículo 120 ter a la Ley N° 22.415 (Código Aduanero) y sus modificatorias, ' +
                'el siguiente:\n' +
                '“ARTÍCULO 120 ter.- Publicación. Toda normativa relativa a operaciones de comercio exterior deberá:\n' +
                '(a) publicarse en un medio oficial y electrónico;\n' +
                '(b) prever un plazo suficiente entre la publicación y/o la publicación de las medidas, y la entrada en vigor de ' +
                'dichas medidas.\n' +
                'Se incluye dentro del término “normativa” a los dictámenes técnicos clasificatorios de la División Clasificación ' +
                'Arancelaria, aprobado por el Jefe del Departamento Técnica de Nomenclatura y Clasificación Arancelaria y, ' +
                'posteriormente, por la Dirección de Técnica de la Subdirección General de Legal y Técnica Aduanera, que se ' +
                'adopten con carácter obligatorio en toda actuación infraccional ya aperturada. Tales publicaciones deberán ' +
                'detallar al menos la mercadería y la posición arancelaria adoptada. La Dirección General de Aduanas podrá ' +
                'resolver la publicación de otros actos que estime son necesarios para asegurar la transparencia y buenas prácticas ' +
                'de la Administración, resguardando el secreto fiscal.”\n' +
                'ARTÍCULO 114.- Incorpórase como artículo 120 quáter a la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias, el siguiente:\n' +
                '“ARTÍCULO 120 quáter.- Trámites y requerimientos por terceros organismos.\n' +
                '1. Los organismos comprendidos en los incisos a) y b) del artículo 8° de la Ley N° 24.156 y sus modificatorias, ' +
                'deberán:\n' +
                'A. Tramitar los permisos, autorizaciones y demás informaciones inherentes a las operaciones aduaneras que ' +
                'dicten para regular el tráfico internacional de mercaderías, en cumplimiento de lo dispuesto por el artículo 11 y ' +
                'sus modificaciones mediante la Ventanilla Única de Comercio Exterior Argentino (VUCEA) de forma ' +
                'electrónica. La obligación comprenderá los procedimientos y trámites de declaraciones, permisos, certificaciones, ' +
                'licencias y demás autorizaciones o gestiones necesarias para realizar operaciones de importación y/o exportación.\n' +
                'B. Identificar las mercaderías conforme a las posiciones arancelarias de la Nomenclatura Común del ' +
                'MERCOSUR (N.C.M.), en todo régimen que dicten para regular el tráfico internacional de mercaderías, en ' +
                'cumplimiento de lo dispuesto por el artículo 11 y sus modificaciones. La obligación comprenderá los ' +
                'procedimientos y trámites de declaraciones, permisos, certificaciones, licencias y demás autorizaciones o ' +
                'gestiones necesarias para realizar operaciones de importación y/o exportación. De corresponder, cada organismo ' +
                'deberá indicar las excepciones, requisitos, condiciones o reglas que resulten necesarias para identificar el universo ' +
                'de mercaderías alcanzadas por la regulación de que se trate.\n' +
                '2. Toda medida vinculada a la creación, modificación o eliminación de regímenes que regulen el tráfico ' +
                'internacional de mercaderías deberá ser comunicada por la autoridad que la dictó a la Ventanilla Única de ' +
                'Comercio Exterior Argentino (VUCEA), en el plazo de UN (1) día hábil, contado desde su determinación o ' +
                'emisión, mediante el módulo “Comunicaciones Oficiales” del Sistema de Gestión Documental Electrónica -GDE3. La DIRECCIÓN GENERAL DE ADUANAS solo podrá controlar las tramitaciones debidamente incorporadas ' +
                'a la Ventanilla Única de Comercio Exterior Argentino (VUCEA).”\n' +
                'ARTÍCULO 115.- Incorpórase como artículo 120 quinquies a la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias, el siguiente:\n' +
                '“ARTÍCULO 120 quinquies.- Profesionalización del personal. La profesionalización del personal dentro de un ' +
                'marco transparencia es un principio que debe orientar en el desarrollo de las funciones de la Dirección General de ' +
                'Aduanas. La Dirección General de Aduanas deberá impulsar procedimientos de contratación basados en los ' +
                'principios de objetividad, neutralidad, mérito, capacidad, publicidad y transparencia, así como la profesionalidad ' +
                'y la neutralidad del organismo, comité o personal que lleve adelante el proceso de selección.”\n' +
                'ARTÍCULO 116.- Sustitúyese la denominación del Capítulo Cuarto del Título II de la Sección III de la Ley N° ' +
                '22.415 (Código Aduanero) y sus modificatorias por la siguiente: “Despacho directo a plaza y Declaración ' +
                'anticipada”\n' +
                'ARTÍCULO 117.- Sustitúyese el artículo 130 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 130.- Sin perjuicio de lo dispuesto en leyes especiales, todo medio de transporte procedente del ' +
                'exterior que arribare al territorio aduanero o que se detuviere en él, deberá:\n' +
                'a) Hacerlo por o en los lugares habilitados y, en su caso, por las rutas y dentro de los horarios establecidos.\n' +
                'b) Presentar en forma previa al arribo o inmediatamente después de su llegada o en la oportunidad en la que el ' +
                'servicio aduanero ejerciere el derecho de visita, la documentación que en este título se exige y la que la ' +
                'Administración Federal de Ingresos Públicos pudiere determinar, según la vía que se utilizare.”\n' +
                'ARTÍCULO 118.- Sustitúyese el artículo 131 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 131.- La ADMINISTRACIÓN FEDERAL DE INGRESOS PÚBLICOS determinará las ' +
                'formalidades a que habrá de ajustarse la confección, presentación y trámite de la documentación que deberá ' +
                'acompañarse al tiempo de arribar el medio de transporte, incluidas las formalidades relativas al modo de ' +
                'descripción de la mercadería.\n' +
                'Las presentaciones deberán ser realizadas por medios electrónicos, a través del sistema informático establecido ' +
                'por el servicio aduanero.”\n' +
                'ARTÍCULO 119.- Sustitúyese el artículo 217 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 217.- El importador deberá solicitar la destinación de importación, ya sea en forma anticipada y ' +
                'hasta el arribo del medio de transporte, mediante el despacho directo a plaza regido por el Artículo 278 y ' +
                'siguientes de este Código; o dentro del plazo de QUINCE (15) días contados desde la fecha del arribo del medio ' +
                'transportador.”\n' +
                'ARTÍCULO 120.- Sustitúyese el artículo 226 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 226.- 1. La resolución anticipada es el acto administrativo, emitido por el servicio aduanero, a ' +
                'petición del solicitante, antes de la importación de la mercadería, mediante el cual se establece el tratamiento ' +
                'aduanero que se concederá a la mercadería en el momento de la importación, en relación al tema objeto de ' +
                'consulta, de la manera que se indica en los apartados siguientes de este artículo.\n' +
                '2. Si antes de solicitar una destinación de importación, el importador tuviere dudas en relación con el criterio que ' +
                'el servicio aduanero pudiera adoptar respecto de la clasificación arancelaria, el origen o la valoración de la ' +
                'mercadería, o en relación con los elementos que fueren necesarios para la correcta aplicación del régimen ' +
                'tributario, de prohibiciones o restricciones, referidos a la mercadería de importación, podrá solicitar al servicio ' +
                'aduanero que emita una resolución anticipada, debidamente fundada, que establezca el criterio aplicable al caso.\n' +
                'En su solicitud el importador deberá proporcionar la información y la documentación que resultare necesaria, ' +
                'además de su opinión técnica y jurídica sobre el tema consultado.\n' +
                '3. Será válida y vinculante para el servicio aduanero, mientras no existiera una modificación de la ley, o se tratare ' +
                'de hechos o circunstancias diferentes y que no admitieran su asimilación a aquellos en que se hubiere sustentado ' +
                'la resolución.\n' +
                '4. La reglamentación determinará los requisitos formales y la información que deberá presentar el importador, el ' +
                'procedimiento de la resolución anticipada y el plazo dentro del cual la misma deberá ser emitida, el que no podrá ' +
                'ser superior a treinta (30) días.\n' +
                '5. Si el servicio aduanero no emitiere la resolución anticipada dentro del plazo establecido al efecto, el importador ' +
                'podrá optar por solicitar la destinación de importación, en los términos propiciados al requerir la decisión, por ' +
                'aplicación del artículo 234, apartados 3 y 4 del Código Aduanero, a cuyo efecto la reglamentación deberá arbitrar ' +
                'los medios necesarios. En su caso, podrá exigirse la constitución de una garantía, en los términos previstos por el ' +
                'régimen de garantía en la Sección V, Título III.\n' +
                '6. Contra la resolución anticipada procederá la impugnación prevista en el artículo 1053 de este Código.”\n' +
                'ARTÍCULO 121.- Sustitúyese el artículo 227 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 227.- 1. Si en sede aduanera hubiera en trámite alguna controversia, sumarial o no sumarial, ' +
                'originada en la declaración de los elementos necesarios para la clasificación arancelaria, valoración o aplicación ' +
                'de los tributos y prohibiciones referidos a una mercadería de importación, que fueren idénticos a aquellos que ' +
                'hubieren de ser objetos de declaración, el interesado podrá comprometer esta última en forma supeditada a la del ' +
                'antecedente. El pronunciamiento final que recayere en sede administrativa se hará extensivo a la declaración ' +
                'supeditada, sin perjuicio de la eventual interposición de los recursos que, individualmente, pudieran corresponder ' +
                'contra la decisión.\n' +
                '2. En el supuesto previsto en el apartado 1, el servicio aduanero comprobará fehacientemente que existe identidad ' +
                'de causa litigiosa, a cuyo fin, si la controversia lo requiriere para su decisión, se extraerán muestras ' +
                'representativas de la mercadería en cuestión, con previa citación al interesado.”\n' +
                'ARTÍCULO 122.- Sustitúyese el artículo 228 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 228.- Si el interesado declarare una mercadería de acuerdo a la forma prevista en el artículo 227, ' +
                'con la comprobación del servicio aduanero contemplada en su apartado 2, no incurrirá en infracción aduanera por ' +
                'la eventual declaración inexacta efectuada en la declaración supeditada.”\n' +
                'ARTÍCULO 123.- Sustitúyese el artículo 245 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 245.- 1. El agente del servicio aduanero que en el curso del despacho comprobare prima facie la ' +
                'comisión de algún ilícito aduanero procederá a formular la pertinente denuncia al administrador de la aduana o a ' +
                'quien ejerciere sus funciones y, en caso de corresponder, a la extracción de las muestras representativas ' +
                'necesarias para evaluar la seriedad o verosimilitud de la misma.\n' +
                '2. Cumplido ello, se concederá el libramiento de la mercadería, remitiendo las actuaciones al administrador de la ' +
                'Aduana en cuya jurisdicción se hubieran producido los hechos, quien podrá requerir la constitución de la garantía ' +
                'en los términos del artículo 453, incisos a) y h). La falta de constitución de la garantía importará la inmediata ' +
                'suspensión del importador, según la reglamentación que se emita.\n' +
                '3. El libramiento no procederá cuando ocurra alguno de los siguientes supuestos:\n' +
                'a) se tratare de mercadería necesaria para la decisión aduanera o la consideración de un recurso deducido contra la ' +
                'misma, por resultar insuficiente a estos fines la extracción de muestras, fotografías, diagramas, croquis, análisis u ' +
                'otros elementos de juicio igualmente idóneos, según el caso;\n' +
                'b) se tratare de mercadería afectada a un sumario o proceso instruido por la presunta comisión de un ilícito ' +
                'reprimido con pena de comiso;\n' +
                'c) se procurase determinar la aplicación de una prohibición a la destinación de importación, una prohibición de la ' +
                'mercadería cuyo libramiento se pretendiere o se tramitare un recurso contra una decisión que hubiera determinado ' +
                'la aplicación de una prohibición.”\n' +
                'ARTÍCULO 124.- Sustitúyese el artículo 248 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 248.- Efectuados los trámites relativos al despacho de la mercadería se procederá a su libramiento.\n' +
                'De no cumplirse con el pago o con la garantía que correspondiere, se aplicará el procedimiento de ejecución ' +
                'previsto en la Sección XIV, Título II, Capítulo Quinto.”\n' +
                'ARTÍCULO 125.- Incorpórase como artículo 278 bis de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias por el siguiente:\n' +
                '“ARTÍCULO 278 bis.- Declaración anticipada de arribo de la mercadería es el procedimiento por medio del cual ' +
                'se podrá presentar la solicitud de destinación en forma previa al arribo del medio de transporte al territorio ' +
                'aduanero.”\n' +
                'ARTÍCULO 126.- Sustitúyese el artículo 279 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 279.- La solicitud de destinación de importación de la mercadería sujeta al procedimiento del ' +
                'despacho directo puede ser presentada por el importador dentro de los CINCO (5) días anteriores al arribo del ' +
                'medio de transporte.”\n' +
                'ARTÍCULO 127.- Sustitúyese el artículo 280 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 280.- 1. La declaración anticipada de arribo de la mercadería es voluntaria por parte del importador ' +
                'y podrá aplicarse a cualquier tipo de destinación aduanera de importación, salvo para aquélla mercadería que la ' +
                'reglamentación excluya.\n' +
                '2. Sin perjuicio de lo dispuesto en el apartado 1 precedente, deberá sujetarse al procedimiento de declaración ' +
                'anticipada, la mercadería cuya permanencia en depósito implicare peligro para la integridad de las personas, para ' +
                'la inalterabilidad de la propia mercadería o de la mercadería contigua, salvo que ingresare a depósitos ' +
                'especialmente acondicionados para esa especie de mercadería. Asimismo, se aplicará este procedimiento cuando ' +
                'se tratare de mercadería cuyo almacenamiento fuere sumamente dificultoso, o no exista depósito acondicionado ' +
                'especialmente para la mercadería.”\n' +
                'ARTÍCULO 128.- Sustitúyese el artículo 281 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 281.- La Dirección General de Aduanas establecerá, con alcance general, la nómina de la ' +
                'mercadería prevista en el artículo 280, apartado 2, y podrá ampliarla cuando la naturaleza o condiciones ' +
                'intrínsecas así lo aconsejaren.”\n' +
                'ARTÍCULO 129.- Sustitúyese el artículo 282 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 282.- Si no se dispusiere de depósitos especialmente acondicionados para la especie de mercadería ' +
                'indicada en los artículos 280, apartado 2, y 281, y no hubiere sido solicitada su destinación de importación con ' +
                'anterioridad al arribo del medio de transporte, el servicio aduanero adoptará las medidas tendientes a evitar los ' +
                'perjuicios emergentes de la naturaleza o condición de la mercadería de que se trate, por cuenta y bajo la ' +
                'responsabilidad de quien correspondiere.”\n' +
                'ARTÍCULO 130.- Sustitúyese el artículo 283 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 283.- En todos los casos el servicio aduanero podrá disponer que la mercadería sujeta a los ' +
                'procedimientos de despacho previstos en este capítulo ingrese, total o parcialmente, a un lugar de depósito al solo ' +
                'efecto de practicar una verificación exhaustiva.”\n' +
                'ARTÍCULO 131.- Sustitúyese el artículo 284 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 284.- El procedimiento de declaración anticipada se encuentra autorizado para todo tipo de ' +
                'destinación aduanera de importación.”\n' +
                'ARTÍCULO 132.- Sustitúyese el artículo 323 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 323.- 1. La resolución anticipada es un acto administrativo, emitido por el servicio aduanero, a ' +
                'petición del solicitante, antes de la exportación de la mercadería, mediante el cual se establece el tratamiento ' +
                'aduanero que se concederá a la mercadería en el momento de la exportación, en relación al tema objeto de ' +
                'consulta, de la manera que se indica en los apartados siguientes de este artículo.\n' +
                '2. Si antes de solicitar una destinación de exportación, el exportador tuviere dudas en relación con el criterio que ' +
                'el servicio aduanero pudiera adoptar respecto de la clasificación arancelaria, el origen o la valoración de la ' +
                'mercadería, o en relación con los elementos que fueren necesarios para la correcta aplicación del régimen ' +
                'tributario, de estímulos, o de prohibiciones o restricciones, referidos a la mercadería de exportación, podrá ' +
                'solicitar al servicio aduanero que emita una resolución anticipada, debidamente fundada, que establezca el criterio ' +
                'aplicable al caso. En su solicitud el exportador deberá proporcionar la información y documentación que resultare ' +
                'necesaria, además de su opinión técnica y jurídica sobre el tema consultado.\n' +
                '3. Será válida y vinculante para el servicio aduanero mientras no existiera una modificación de la ley, o se ' +
                'trataren de hechos o circunstancias diferentes, que no admitieran su asimilación a aquellos en que se hubiere ' +
                'sustentado la resolución.\n' +
                '4. La reglamentación determinará los requisitos formales y la información que deberá presentar el exportador, el ' +
                'procedimiento de la resolución anticipada y el plazo dentro del cual la misma deberá ser emitida, el que no podrá ' +
                'ser superior a TREINTA (30) días.\n' +
                '5. Si el servicio aduanero no emitiere la resolución anticipada dentro del plazo establecido al efecto, el exportador ' +
                'podrá optar por solicitar la destinación de exportación, en los términos propiciados al requerir la decisión, por ' +
                'aplicación del artículo 332, apartados 3 y 4 de este Código a cuyo efecto la reglamentación deberá arbitrar los ' +
                'medios necesarios. En su caso, podrá exigirse la constitución de una garantía, en los términos previstos por el ' +
                'régimen de garantía en la Sección V, Título III.\n' +
                '6. Contra la resolución anticipada procederá la impugnación prevista en el artículo 1053 de este Código.”\n' +
                'ARTÍCULO 133.- Sustitúyese el artículo 324 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 324.- 1. Si en sede aduanera hubiera en trámite alguna controversia, sumarial o no sumarial, ' +
                'originada en la declaración de los elementos necesarios para la clasificación arancelaria, valoración o aplicación ' +
                'de los tributos, prohibiciones y estímulos a la exportación, referidos a una mercadería de exportación, que fueren ' +
                'idénticos, a aquellos que hubieren de ser objeto de declaración, el interesado podrá comprometer esta última en ' +
                'forma supeditada a la del antecedente. El pronunciamiento final que recayere en sede administrativa se hará ' +
                'extensivo a la declaración supeditada, sin perjuicio de la eventual interposición de los recursos que, ' +
                'individualmente, pudieran corresponder contra la decisión.\n' +
                '2. En el supuesto previsto en el apartado 1, el servicio aduanero comprobará fehacientemente que existe identidad ' +
                'de causa litigiosa, a cuyo fin, si la controversia lo requiriere para su decisión, se extraerán muestras ' +
                'representativas de la mercadería en cuestión, con previa citación al interesado.”\n' +
                'ARTÍCULO 134.- Sustitúyese el artículo 325 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 325.- Si el interesado declarare una mercadería de acuerdo a la forma prevista en el artículo 324 ' +
                'con la comprobación del servicio aduanero contemplada en su apartado 2, no incurrirá en infracción aduanera por ' +
                'la eventual declaración inexacta efectuada en la declaración supeditada.”\n' +
                'ARTÍCULO 135.- Sustitúyese el artículo 326 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 326.- En el supuesto previsto en el artículo 324, se suspende el curso de la prescripción de las ' +
                'acciones que le pudieren corresponder al fisco con relación a la declaración supeditada desde la fecha en que se ' +
                'comprometiere la misma hasta que recayere la decisión allí mencionada.”\n' +
                'ARTÍCULO 136.- Sustitúyese el artículo 343 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 343.- 1. El agente del servicio aduanero que en el curso del despacho comprobare prima facie la ' +
                'comisión de algún ilícito aduanero procederá a formular la pertinente denuncia al administrador de la aduana o a ' +
                'quien ejerciere sus funciones y, en caso de corresponder, a la extracción de las muestras representativas ' +
                'necesarias para evaluar la seriedad o verosimilitud de la misma.\n' +
                '2. Cumplido ello, se concederá el libramiento de la mercadería, remitiendo las actuaciones al administrador de la ' +
                'Aduana en cuya jurisdicción se hubieran producido los hechos, quien podrá requerir la constitución de la garantía ' +
                'en los términos del artículo 453 incisos a) y h). La falta de constitución de la garantía importará la inmediata ' +
                'suspensión del exportador, según la reglamentación que se emita.\n' +
                '3. El libramiento no procederá cuando ocurra alguno de los siguientes supuestos:\n' +
                'a) se tratare de mercadería necesaria para la decisión aduanera o la consideración de un recurso deducido contra la ' +
                'misma, por resultar insuficiente a estos fines la extracción de muestras, fotografías, diagramas, croquis, análisis u ' +
                'otros elementos de juicio igualmente idóneos, según el caso;\n' +
                'b) se tratare de mercadería afectada a un sumario o proceso instruido por la presunta comisión de un ilícito ' +
                'reprimido con pena de comiso;\n' +
                'c) se procurase determinar la aplicación de una prohibición a la destinación de exportación de que se tratare, de la ' +
                'mercadería cuyo libramiento se pretendiere o se tramitare un recurso contra una decisión que hubiera determinado ' +
                'la aplicación de dicha prohibición.”\n' +
                'ARTÍCULO 137.- Sustitúyese el artículo 357 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 357.- Cuando la mercadería hubiera sido objeto de una transformación, elaboración, combinación, ' +
                'mezcla, reparación o cualquier otro perfeccionamiento o beneficio, su retorno está sujeto al pago de los tributos ' +
                'que gravaren la importación para consumo, los que se aplicarán sobre el mayor valor de la mercadería al ' +
                'momento de su reimportación.”\n' +
                'ARTÍCULO 138.- Sustitúyense los incisos a) y h) del artículo 453 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias por los siguientes:\n' +
                '"a) el resguardo de la eventual exigencia por diferencias de tributos que el servicio aduanero advirtiera respecto ' +
                'de la liquidación contenida en una destinación de importación o exportación. En este supuesto, la garantía deberá ' +
                'cubrir la diferencia entre esa cantidad y el máximo que el servicio aduanero razonablemente considere que ' +
                'pudiere adeudarse en tal concepto;”\n' +
                '“h) el resguardo del cobro de la eventual multa que pudiera corresponder por la presunta comisión de un ilícito ' +
                'aduanero. La garantía, en el supuesto de importación, debe cubrir el importe equivalente al del valor en aduana de ' +
                'la mercadería que hubiere sido objeto de la presunta infracción, salvo que el máximo de la multa eventualmente ' +
                'aplicable fuere inferior, caso en el cual bastará garantizar este último importe. Si la destinación solicitada ' +
                'estuviere gravada con algún tributo deben además garantizarse el importe previsto en el inciso a). En el supuesto ' +
                'de exportación, la garantía debe cubrir el importe equivalente al del valor en plaza de la mercadería que hubiere ' +
                'sido objeto de la presunta infracción, con deducción de los tributos que debieren ser pagados. Cuando el máximo ' +
                'de la multa eventualmente aplicable adicionado a la diferencia de tributos que pudiere resultar exigible fuere un ' +
                'importe inferior, bastará con garantizar el de la multa y además garantizarse el importe previsto en el inciso a).”\n' +
                'ARTÍCULO 139.- Incorpóranse el numeral 1. al primer párrafo del artículo 453 y como apartado 2. del citado ' +
                'artículo 453 a la Ley N° 22.415 (Código Aduanero) y sus modificatorias, el siguiente:\n' +
                '“2. La reglamentación podrá determinar otros supuestos de utilización del régimen bajo los recaudos y en las ' +
                'condiciones que en ella se establecieren." ' +
                'ARTÍCULO 140.- Sustitúyese el artículo 459 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 459.- La resolución que autorizare o denegare la utilización del régimen de garantía deberá dictarse ' +
                'dentro de un plazo que no podrá exceder de cinco días contados desde la fecha de presentación prevista en el ' +
                'artículo 454. En caso de hacerse lugar a dicha utilización, el acto no implicará prejuzgamiento respecto de la ' +
                'decisión que en definitiva recayere ni renuncia alguna relativa a los derechos controvertidos.”\n' +
                'ARTÍCULO 141.- Sustitúyese el artículo 463 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 463.- 1. Contra la resolución que denegare el otorgamiento del régimen de garantía, o contra la que ' +
                'exigiere su constitución, o fijare su importe o determinare su forma, podrá interponerse demanda ante la justicia o ' +
                'recurso de apelación ante el Tribunal Fiscal por el procedimiento previsto en la Sección XIV, Título III. La ' +
                'constitución de la garantía exigida por el servicio aduanero no obstará a la interposición de la demanda o del ' +
                'recurso previsto, y, en su caso, no significará desistimiento de los que se hubieren interpuesto.\n' +
                '2. También procederá la demanda ante la justicia o el recurso de apelación ante el Tribunal Fiscal cuando el ' +
                'servicio aduanero no se expidiera dentro del plazo previsto en el artículo 459 con relación al pedido de ' +
                'otorgamiento del régimen de garantía presentado por el interesado.”\n' +
                'ARTÍCULO 142.- Sustitúyese el artículo 609 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 609.- El Poder Ejecutivo Nacional no podrá establecer prohibiciones ni restricciones a las ' +
                'exportaciones o importaciones por motivos económicos. Solo se podrán realizar por Ley.\n' +
                'Son económicas las prohibiciones establecidas con cualquiera de los siguientes fines:\n' +
                'a) asegurar un adecuado ingreso para el trabajo nacional o combatir la desocupación;\n' +
                'b) ejecutar la política monetaria, cambiaria o de comercio exterior;\n' +
                'c) promover, proteger o conservar las actividades nacionales productivas de bienes o servicios, así como dichos ' +
                'bienes y servicios, los recursos naturales o vegetales;\n' +
                'd) estabilizar los precios internos a niveles convenientes o mantener un volumen de oferta adecuado a las ' +
                'necesidades de abastecimiento del mercado interno;\n' +
                'e) atender las necesidades de las finanzas públicas;\n' +
                'f) proteger los derechos de la propiedad intelectual, industrial o comercial;\n' +
                'g) resguardar la buena fe comercial, a fin de impedir las prácticas que pudieren inducir a error a los ' +
                'consumidores.”\n' +
                'ARTÍCULO 143.- Deróganse los artículos 613, 614, 615, 616, 617, 618, 619, 620, 622, 623, 632 y 633 de la Ley ' +
                'N° 22.415 (Código Aduanero) y sus modificatorias.\n' +
                'ARTÍCULO 144.- Sustitúyese el artículo 610 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 610.- Las prohibiciones pueden ser establecidas por cualquiera de las razones siguientes:\n' +
                'a) afirmación de la soberanía nacional o defensa de las instituciones políticas del Estado;\n' +
                'b) política internacional;\n' +
                'c) seguridad pública o defensa nacional;\n' +
                'd) salud pública o sanidad animal o vegetal;\n' +
                'e) protección del patrimonio artístico, histórico, arqueológico o científico;\n' +
                'f) conservación de las especies animales o vegetales.\n' +
                'g) Preservación del ambiente, conservación de los recursos naturales y prevención de la contaminación.\n' +
                'El Poder Ejecutivo Nacional no podrá establecer prohibiciones o cupos a las exportaciones ni importaciones por ' +
                'motivos o fundamentos económicos.”\n' +
                'ARTÍCULO 145.- Deróganse los artículos 663, 665 y 666 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias.\n' +
                'ARTÍCULO 146.- Deróganse los artículos 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685 y 686 ' +
                'de la Ley N° 22.415 (Código Aduanero) y sus modificatorias.\n' +
                'ARTÍCULO 147.- Deróganse los artículos 756, 757 y 758 de la Ley N° 22.415 (Código Aduanero) y sus ' +
                'modificatorias.\n' +
                'ARTÍCULO 148.- Sustitúyese el artículo 789 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '“ARTÍCULO 789.- El pago de la obligación tributaria aduanera debe ser efectuado antes del libramiento de la ' +
                'mercadería quedando exceptuados los casos en que el libramiento fuere autorizado bajo el régimen de garantía o ' +
                'aquellos regímenes especiales respecto de los cuales la Administración Federal de Ingresos Públicos determinara ' +
                'lo contrario.\n' +
                'En los supuestos previstos en los artículos 245 y 343, no constituirá requisito necesario para el libramiento de la ' +
                'mercadería el pago o garantía de diferencias tributarias o multas." ' +
                'ARTÍCULO 149.- Sustitúyese el artículo 960 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por el ' +
                'siguiente:\n' +
                '"ARTÍCULO 960.- Cuando en cualquier destinación de importación o de exportación se declarare una mercadería ' +
                'en forma supeditada, en los términos previstos en los artículos 227 y 324, respectivamente, la eventual ' +
                'declaración inexacta efectuada en la declaración supeditada no será punible".\n' +
                'ARTÍCULO 150.- Sustitúyese el artículo 1024 de la Ley N° 22.415 (Código Aduanero) y sus modificatorias, por ' +
                'el siguiente:\n' +
                '“ARTÍCULO 1024.- Corresponderá conocer y decidir en forma originaria en el procedimiento de ejecución en ' +
                'sede judicial y en las demandas contenciosas que se interpusieren contra las resoluciones definitivas dictadas por ' +
                'el administrador en los procedimientos de repetición y para las infracciones, así como en el supuesto de retardo ' +
                'por no dictarse resolución en estos dos últimos procedimientos dentro de los plazos señalados al efecto en este ' +
                'Código, y en los previstos en el artículo 463, en la Capital Federal a los jueces nacionales en lo contencioso ' +
                'administrativo federal y en el interior del país a los jueces federales, dentro de sus respectivas competencias ' +
                'territoriales siempre que se cuestionare una suma mayor de 1.000 UVA.”\n' +
                'ARTÍCULO 151.- Incorpórase como inciso f) del apartado 1 del artículo 1025 a la Ley N° 22.415 (Código ' +
                'Aduanero) y sus modificatorias, el siguiente:\n' +
                '“f) de los recursos de apelación previstos en el artículo 463.”\n' +
                'ARTÍCULO 152.- Incorpóranse como incisos m) y n) del artículo 1037 de la Ley N° 22.415 (Código Aduanero) y ' +
                'sus modificatorias, los siguientes:\n' +
                '“m) el dictado del auto por el cual se ordenare la apertura del sumario;\n' +
                'n) el dictado de la resolución condenatoria en sede aduanera.”\n' +
                'ARTÍCULO 153.- El Poder Ejecutivo Nacional debe procurar la adhesión a convenios internacionales existentes ' +
                'que signifiquen para el sector aduanero una innovación y desburocratización de procedimientos administrativos y ' +
                'de control, con el objetivo de reducir costos y fomentar la inclusión Argentina en el mercado internacional.',
                delta: {
                    title: 'Ley N° 22.415 - Código Aduanero',
                    added: require('./ley22415-new').default,
                    removed: require('./ley22415').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Título VI – BIOECONOMÍA',
        articles: [
            {
                text: 'ARTÍCULO 154.- Derógase la Ley N° 26.737.',
                delta: {
                    title: 'Ley N° 26.737 - Tierras Rurales',
                    removed: require('./ley26737').default,
                },
            },
            {
                text: 'ARTÍCULO 155.- Derógase la Ley N° 18.600.',
                delta: {
                    title: 'Ley N° 18.600 - Vitivinicultura',
                    removed: require('./ley18600').default,
                },
            },
            {
                text: 'ARTÍCULO 156.- Derógase la Ley N° 18.770.',
                delta: {
                    title: 'Ley N° 18.770 - Régimen de entregas de azúcar para consumo en el mercado interno',
                    removed: require('./ley18770').default,
                },
            },
            {
                text: 'ARTÍCULO 157.- Derógase la Ley N° 18.905.',
                delta: {
                    title: 'Ley N° 18.905 - Politíca Nacional Vitivinícola',
                    removed: require('./ley18905').default,
                },
            },
            {
                text: 'ARTÍCULO 158.- Derógase la Ley N° 21.608.',
                delta: {
                    title: 'Ley N° 21.608 - Promoción Industrial',
                    removed: require('./ley21608').default,
                },
            },
            {
                text: 'ARTÍCULO 159.- Derógase la Ley N° 22.667.',
                delta: {
                    title: 'Ley N° 22.667 - Industria vitivinícola',
                    removed: require('./ley22667').default,
                },
            },
            {
                text: 'ARTÍCULO 160.- Derógase la Ley N° 27.114.',
                delta: {
                    title: 'Ley N° 27.114 - ',
                    removed: require('./ley27114').default,
                },
            },
            {
                text: 'ARTÍCULO 161.- Derógase la Ley N° 12.916.',
                delta: {
                    title: 'Ley N° 12.916 - ',
                    removed: require('./ley12916').default,
                },
            },
            {
                text: 'ARTÍCULO 162.- Derógase la Ley N° 18.859.',
                delta: {
                    title: 'Ley N° 18.859 - Sanidad Animal',
                    removed: require('./ley18859').default,
                },
            },
            {
                text: 'ARTÍCULO 163.- Derógase la Ley N° 19.990.',
                delta: {
                    title: 'Ley N° 19.990 - Política integral para el algodón',
                    removed: require('./ley19990').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I – Instituto Nacional de la Yerba Mate (Ley N° 25.564)',
        articles: [
            {
                text: 'ARTÍCULO 164.- Sustitúyese el artículo 3° de la Ley N° 25.564, por el siguiente:\n' +
                '“ARTÍCULO 3º.- Los objetivos del INYM serán promover y fortalecer el desarrollo de la producción, ' +
                'elaboración, industrialización, comercialización y consumo de la yerba mate y derivados en sus diferentes ' +
                'modalidades de consumo y usos, procurando proteger el carácter competitivo de la industria.”\n' +
                'ARTÍCULO 165.- Deróganse los incisos j), n) y r) del artículo 4° de la Ley N° 25.564 y sustitúyese el inciso i) ' +
                'del referido artículo 4°, por el siguiente:\n' +
                '“i) Realizar y compilar estadísticas, censos y relevamientos de la producción, elaboración, industrialización, ' +
                'comercialización y consumo de la yerba mate y derivados.”\n' +
                'ARTÍCULO 166.- Deróganse los incisos e) y f) del artículo 5° de la Ley N° 25.564.\n' +
                'ARTÍCULO 167.- Sustitúyese el quinto párrafo del artículo 21 de la Ley N° 25.564, por el siguiente:\n' +
                '“A las ventas de artículos que se hicieren sin las estampillas referidas le resultarán aplicables las sanciones ' +
                'establecidas en el artículo 28 de la presente ley en adición a las que la legislación aplique a la figura de evasión ' +
                'impositiva.”\n' +
                'ARTÍCULO 168.- Deróganse los artículos 22 y 24 de la Ley N° 25.564.',
                delta: {
                    title: 'Ley N° 25.564 - Instituto Nacional de la Yerba Mate',
                    added: require('./ley25564-new').default,
                    removed: require('./ley25564').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Título VII – MINERÍA',
        articles: [
            {
                text: 'ARTÍCULO 169.- Derógase la Ley N° 24.523.',
                delta: {
                    title: 'Ley N° 24.523 - Sistema Nacional de Comercio Minero',
                    removed: require('./ley24523').default,
                },
            },
            {
                text: 'ARTÍCULO 170.- Derógase la Ley N° 24.695.',
                delta: {
                    title: 'Ley N° 24.695 - Minería - Créase el Banco Nacional de Información',
                    removed: require('./ley24695').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Título VIII – ENERGÍA',
        articles: [
            {
                text: 'ARTÍCULO 171.- Derógase el Decreto N° 1060/00.',
                delta: {
                    title: 'Decreto N° 1060/00 - Combustibles',
                    removed: require('./decreto-1060-00').default,
                },
            },
            {
                text: 'ARTÍCULO 172.- Derógase el Decreto N° 1491/02.',
                delta: {
                    title: 'Decreto N° 1491/02 - Energía Eléctrica',
                    removed: require('./decreto-1491-02').default,
                },
            },
            {
                text: 'ARTÍCULO 173.- Derógase el Decreto N° 634/03.',
                delta: {
                    title: 'Decreto N° 634/03 - Ampliaciones de Transporte de Energía Eléctrica en Alta Tensión y por Distribución Troncal',
                    removed: require('./decreto-634-03').default,
                },
            },
            {
                text: 'ARTÍCULO 174.- Derógase la Ley N° 25.822.',
                delta: {
                    title: 'Ley N° 25.822 - Plan Federal de Transporte Eléctrico',
                    removed: require('./ley25822').default,
                },
            },
            {
                text: 'ARTÍCULO 175.- Derógase el Decreto N° 311/06.',
                delta: {
                    title: 'Decreto N° 311/06 - Energía Eléctrica',
                    removed: require('./decreto-311-06').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I - Régimen de Fomento a la generación distribuida de energía renovable integrada a la red eléctrica (Ley N° 27.424)',
        articles: [
            {
                text: 'ARTÍCULO 176.- Deróganse los artículos 16 a 37 de la Ley N° 27.424.',
                delta: {
                    title: 'Ley N° 27.424 - Régimen de Fomento a la Generación Distribuida de Energía Renovable Integrada a la Red Eléctrica Pública',
                    added: require('./ley27424-new').default,
                    removed: require('./ley27424').default,
                },
            },
            {
                text: 'ARTÍCULO 177.- Facúltase a la SECRETARÍA DE ENERGÍA del MINISTERIO DE ECONOMÍA a ' +
                'redeterminar la estructura de subsidios vigentes a fin de asegurar a los usuarios finales el acceso al consumo ' +
                'básico y esencial de:\n' +
                'i. energía eléctrica bajo las Leyes Nros.15.336 y 24.065, sus complementarias, modificatorias y reglamentarias; y\n' +
                'ii. de gas natural según las Leyes Nros. 17.319 y 24.076, sus complementarias, modificatorias y reglamentarias, ' +
                'respectivamente.\n' +
                'Dicho beneficio deberá considerar principalmente un porcentaje de los ingresos del grupo conviviente, en forma ' +
                'individual o conjunta para la energía eléctrica y el gas natural, a ser establecido por la reglamentación. A los ' +
                'efectos de calcular el costo de los consumos básicos, se considerarán las tarifas vigentes en cada punto de ' +
                'suministro. A los efectos de implementar la segmentación de la asignación de subsidios a los usuarios y las ' +
                'usuarias de servicios públicos de energía eléctrica y gas natural por red.\n' +
                'La referida SECRETARÍA DE ENERGÍA tendrá facultades para definir los mecanismos específicos que ' +
                'materialicen la asignación y efectiva percepción de los subsidios por parte de los usuarios, determinando los roles ' +
                'y tareas que desempeñarán de manera obligatoria los distintos actores públicos, empresas concesionarias, y otros ' +
                'actores o agentes que integren los sistemas del servicio público de que se trate, en su carácter de responsables ' +
                'primarios.',
            },
        ],
    },
    {
        type: 'block',
        title: 'TÍTULO IX - AEROCOMERCIAL',
        articles: [
            {
                text: 'ARTÍCULO 178.- Derógase el Decreto - Ley N° 12.507/56.',
                delta: {
                    title: 'Ley N° 12.507/56 - Política Nacional en Materia Aeronáutica',
                    removed: require('./ley12507').default,
                },
            },
            {
                text: 'ARTÍCULO 179.- Derógase la Ley N° 19.030.',
                delta: {
                    title: 'Ley N° 12.507/56 - Política Nacional en Materia Aeronáutica',
                    removed: require('./ley12507').default,
                },
            },
            {
                text: 'ARTÍCULO 180.- Derógase el Decreto N° 1654/02.',
                delta: {
                    title: 'Decreto N° 1654/02 - Transporte Aerocomercial',
                    removed: require('./decreto-1654-02').default,
                },
            },
        ],
    },
    {
        type: 'block',
        title: 'Capítulo I - Código Aeronáutico (Ley N° 17.285)',
        articles: [
            {
                text: 'ARTÍCULO 181.- Sustitúyese el artículo 1° de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 1°.- Este Código rige la aeronáutica civil en el territorio de la República Argentina, su mar ' +
                'territorial y aguas adyacentes y el espacio aéreo que los cubre.\n' +
                'El ámbito de aplicación de este Código se extiende asimismo a todos aquellos espacios en los que la República ' +
                'Argentina ejerza jurisdicción y/o derechos de soberanía, conforme a y en cumplimiento de los tratados ' +
                'internacionales de los que es parte.\n' +
                'A reserva de los tratados internacionales vigentes para la República, la Argentina tiene soberanía plena y ' +
                'exclusiva sobre el espacio aéreo que cubre su territorio, su mar territorial y sus aguas adyacentes. El ámbito ' +
                'espacial aéreo mencionado en el presente y en los párrafos precedentes se denomina en adelante “espacio aéreo ' +
                'argentino.”\n' +
                'ARTÍCULO 182.- Sustitúyese el artículo 2° de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 2°.- La aeronáutica civil aerocomercial es un servicio esencial. A los efectos de este Código, ' +
                'aeronáutica civil es el conjunto de actividades vinculadas con el empleo de aeronaves privadas y públicas, que ' +
                'involucran las actividades de navegación aérea y todas aquellas relaciones de derecho derivadas del comercio ' +
                'aéreo en general.\n' +
                'Las aeronaves militares y las operadas por las fuerzas de seguridad en ejercicio de las funciones propias de su ' +
                'competencia, quedan excluidas de la aplicación de esta Ley. Sin embargo, las normas relativas a circulación ' +
                'aérea, responsabilidad y búsqueda, asistencia y salvamento, le serán aplicables también a las aeronaves militares, ' +
                'y las operadas por las fuerzas de seguridad.\n' +
                'La aeronáutica civil en la REPÚBLICA ARGENTINA se rige por los Tratados e Instrumentos Internacionales ' +
                'ratificados por la Nación Argentina, la presente ley y sus normas reglamentarias, las Regulaciones Aeronáuticas ' +
                'de Aviación Civil y normas complementarias.\n' +
                'Si una cuestión no estuviese prevista en esta Ley ni en los tratados internacionales de los que la República ' +
                'Argentina es parte o en las leyes y reglamentos complementarios, se resolverá por los principios generales del ' +
                'derecho aeronáutico y por los usos y costumbres de la actividad aérea; y si aún la solución fuese dudosa, por las ' +
                'leyes análogas o por los principios generales del derecho común.”\n' +
                'ARTÍCULO 183.- Sustitúyese el artículo 3° de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 3°.- El despegue, la circulación y el aterrizaje de aeronaves es libre en el espacio aéreo argentino, ' +
                'en cuanto no fueren limitados por la legislación vigente.\n' +
                'El tránsito será regulado de manera que posibilite el movimiento seguro y ordenado de las aeronaves. A tal efecto, ' +
                'la autoridad aeronáutica establecerá las normas generales relativas a circulación aérea.\n' +
                'Las disposiciones relativas al aterrizaje se aplican al acuatizaje.”\n' +
                'ARTÍCULO 184.- Sustitúyese el artículo 13 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 13.- Los servicios esenciales de navegación aérea serán prestados conforme la reglamentación ' +
                'vigente. La autoridad regulatoria y de contralor fiscalizará a los prestadores de los servicios de navegación aérea, ' +
                'bajo los principios de garantía de la seguridad, libre competencia y acceso a los mercados. Los servicios estarán ' +
                'sujetos al pago de tasas, conforme reglamentación vigente. La defensa del espacio aéreo y su control policial es ' +
                'potestad exclusiva del Poder Ejecutivo Nacional.”\n' +
                'ARTÍCULO 185.- Sustitúyese el artículo 18 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 18.- Para realizar actividad aérea en territorio argentino, las aeronaves tripuladas o no tripuladas ' +
                'extranjeras deben estar provistas de documentación de ley, en el formato que disponga la autoridad aeronáutica y ' +
                'de los seguros obligatorios establecidos por ley y reglamentación vigente. Cuando existan acuerdos sobre la ' +
                'materia, regirán las cláusulas de éstos. La República Argentina fomentará el libre acceso reciproco de circulación ' +
                'y operación de aeronaves de aviación general y comercial.”\n' +
                'ARTÍCULO 186.- Sustitúyese el artículo 21 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 21.- Las aeronaves privadas que no se destinen a servicios de transporte aéreo, deberán cumplir los ' +
                'requisitos de fiscalización en el aeródromo o aeropuerto internacional más próximo a la frontera.\n' +
                'Dichas aeronaves podrán ser dispensadas de esta obligación por la autoridad aeronáutica, la que indicará ruta a ' +
                'seguir y aeródromo de fiscalización.”\n' +
                'ARTÍCULO 187.- Incorpórase como segundo párrafo al artículo 29 de la Ley N° 17.825 y sus modificatorias el ' +
                'siguiente:\n' +
                '“Los lugares aptos denunciados no son aeródromos. La operación se realizará siempre bajo responsabilidad del ' +
                'piloto al mando de la aeronave que operen en, desde o hacia ellos.”\n' +
                'ARTÍCULO 188.- Incorpórase como artículo 29 bis a la Ley Nº 17.285 y sus modificatorias el siguiente:\n' +
                '“ARTÍCULO 29 bis.- Los servicios aeroportuarios en la República Argentina, serán regulados y fiscalizados por ' +
                'la autoridad aeronáutica. La autoridad aeronáutica reglamentará la prestación de los servicios esenciales ' +
                'aeroportuarios, bajo los principios de garantía de la seguridad, libre competencia y acceso a los mercados.\n' +
                'Se considera como servicio aeroportuario a todo aquel prestado en el ámbito de un aeropuerto, con excepción de ' +
                'los servicios de navegación aérea tratados en el capítulo respectivo. Se entiende por servicios esenciales ' +
                'aeroportuarios a los servicios de rampa en general.”\n' +
                'ARTÍCULO 189.- Sustitúyese el artículo 34 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 34.- Si con posteridad a la aprobación de las superficies de despeje de obstáculos en un aeródromo ' +
                'se comprobase un delito o una infracción a la norma a que se refieren los artículos 30 y 31 de este código, ' +
                'violando la seguridad operacional, el propietario del aeródromo, la autoridad o un tercero interesado, intimará al ' +
                'infractor la eliminación del obstáculo. El intimado deberá, a su exclusivo costo e inmediatamente eliminarlo e ' +
                'indemnizar todos los daños ocasionados.”\n' +
                'ARTÍCULO 190.- Sustitúyese el artículo 36 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 36.- Se consideran aeronaves tripuladas y no tripuladas los aparatos o mecanismos que puedan ' +
                'circular en el espacio aéreo y que sean aptos para transportar personas o cosas.”\n' +
                'ARTÍCULO 191.- Sustitúyese el artículo 42 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 42.- Podrá inscribirse provisoriamente, a nombre del comprador, toda aeronave adquirida mediante ' +
                'cualquier tipo de contratos celebrados en el país o en el extranjero, por los cuales el vendedor se reserve el ' +
                'dominio de la aeronave hasta el pago total del precio de venta, el cumplimiento del plazo o hasta el cumplimiento ' +
                'de la respectiva condición. Para ello se requiere que: 1) El contrato se ajuste a la legislación del país de ' +
                'procedencia de la aeronave y se lo inscriba en el Registro Nacional de Aeronaves. 2) El contrato se formalice ' +
                'mientras la aeronave no posea matrícula argentina; 3) Se llenen los recaudos exigidos por este Código para ser ' +
                'propietario de una aeronave argentina.”\n' +
                'ARTÍCULO 192.- Sustitúyese el artículo 45 de la ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 45.- En el Registro de Aeronaves se inscribirán por medios electrónicos o en el formato que ' +
                'disponga la autoridad aeronáutica: 1) Los actos, contratos o resoluciones que acrediten la propiedad de la ' +
                'aeronave, la transfieran, modifiquen o extingan. 2) Las hipotecas sobre aeronaves y sobre motores. 3) Los ' +
                'embargos, medidas precautorias e interdicciones que pesen sobre las aeronaves o se decreten contra ellas. 4) Las ' +
                'matrículas con las especificaciones adecuadas para individualizar las aeronaves. 5) La cesación de actividades, la ' +
                'inutilización o la pérdida de las aeronaves y las modificaciones sustanciales que se hagan de ellas. 6) Los ' +
                'contratos de locación de aeronaves y todos aquellos que resulten oponibles a terceros. 7) En general toda ' +
                'inscripción o anotación de cualquier hecho o acto jurídico que pueda alterar o se vincule a la situación jurídica de ' +
                'la aeronave.”\n' +
                'ARTÍCULO 193.- Sustitúyese el artículo 47 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 47.- El Registro Nacional de Aeronaves es público y estará disponible para su acceso a través de ' +
                'medios electrónicos.”\n' +
                'ARTÍCULO 194.- Sustitúyese el artículo 48 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 48.- Para ser propietario de una aeronave argentina se requiere: ' +
                '1) Si se trata de una persona humana, tener domicilio legal en la República; ' +
                '2) Si se trata de varios copropietarios, la mayoría cuyos derechos exceden de la mitad del valor de la aeronave, ' +
                'deben mantener su domicilio legal en la República; ' +
                '3) Si se trata de una sociedad de personas, de capitales o asociaciones, estar constituida conforme a las leyes ' +
                'argentinas y tener su domicilio legal en la República.”\n' +
                'ARTÍCULO 195.- Sustitúyese el artículo 50 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 50.- La transferencia de dominio de las aeronaves, así como todo acto jurídico relacionado con las ' +
                'mismas previsto en el artículo 45 incisos 1°, 2°, 6° y 7°, no producirán efectos contra terceros si no van seguidos ' +
                'de la inscripción en el Registro Nacional de Aeronaves.”\n' +
                'ARTÍCULO 196.- Sustitúyese el artículo 51 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 51.- Los actos y contratos mencionados en el artículo 45 incisos 1°, 2° y 6°, realizados en el ' +
                'extranjero y destinados a producir efectos en la República, deberán ser formalizadas por instrumento público o ' +
                'ante la autoridad consular argentina.”\n' +
                'ARTÍCULO 197.- Sustitúyese el artículo 52 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 52.- Las aeronaves pueden ser hipotecadas y garantizadas en todo o en sus partes indivisas y aun ' +
                'cuando estén en construcción. También pueden hipotecarse los motores inscritos conforme al artículo 41 de este ' +
                'código. Ni las aeronaves ni los motores son susceptibles de afectación de prenda con registro. No podrá ser ' +
                'hipotecada ni afectada como garantía real de ningún crédito, la aeronave inscrita conforme al artículo 42 y ' +
                'concordantes de este código, hasta tanto se proceda a su inscripción y matriculación definitivas. Cuando los ' +
                'bienes hipotecados sean motores, el deudor deberá notificar al acreedor en qué aeronaves serán instalados y el uso ' +
                'que se haga de aquéllos. La hipoteca de motores mantiene sus efectos aun cuando ellos se instalen en una ' +
                'aeronave hipotecada a distinto acreedor.”\n' +
                'ARTÍCULO 198.- Sustitúyese el artículo 60 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 60.- Tendrán privilegio sobre la aeronave: 1) Los créditos por gastos causídicos que beneficien al ' +
                'acreedor hipotecario. 2) Los créditos derivados de tasas y tributos relacionados con la aviación civil limitándose ' +
                'al período de dos años anteriores a la fecha del reclamo del privilegio. 3) Los créditos provenientes de la ' +
                'búsqueda, asistencia o salvamento de la aeronave. 4) Los créditos por reparaciones extraordinarias hechas fuera ' +
                'del punto de destino, para continuar el viaje. 5) Los emolumentos de la tripulación por el último mes de trabajo.”\n' +
                'ARTÍCULO 199.- Sustitúyese el artículo 63 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 63.- Los privilegios se extinguen: 1) Por la extinción de la obligación principal. 2) Por el ' +
                'vencimiento del plazo de dos años desde su inscripción si ésta no fuese renovada. 3) Por la venta judicial de la ' +
                'aeronave, después de satisfechos los créditos privilegiados de mejor grado inscriptos conforme al artículo 58 de ' +
                'este código.”\n' +
                'ARTÍCULO 200.- Sustitúyese el nombre del CAPITULO IX del TITULO IV: AERONAVES, de la Ley N° ' +
                '17.285 y sus modificatorias por el siguiente: CAPITULO IX: CONTRATOS SOBRE AERONAVES.\n' +
                'ARTÍCULO 201.- Sustitúyese el artículo 68 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 68.- Las formas y tipos de contratos sobre aeronaves se rigen por el principio de la libertad ' +
                'contractual y serán válidos entre partes. Los contratos en que las partes acuerden, expresamente, transferir la ' +
                'calidad de explotador deben ser realizados por escrito e inscriptos en el Registro Nacional de Aeronaves, a los ' +
                'fines de los artículos 66 y 67 de este código.”\n' +
                'ARTÍCULO 202.- Sustitúyese el artículo 74 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 74.- Las aeronaves de bandera nacional o extranjera, accidentadas o inmovilizadas de hecho en el ' +
                'espacio aéreo argentino y sus partes o despojos, se reputarán abandonadas a favor del Estado nacional, cuando su ' +
                'dueño o explotador no se presentase a reclamarlas y retirarlas dentro del término de seis meses de producida la ' +
                'notificación del accidente o inmovilización.\n' +
                'El Poder Ejecutivo reglamentará la forma y procedimiento para efectuar la notificación del accidente o ' +
                'inmovilización al propietario o explotador y la intimación para que remueva la aeronave, sus partes o despojos.”\n' +
                'ARTÍCULO 203.- Sustitúyese el artículo 79 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 79.- Toda aeronave tripulada debe tener a bordo un piloto habilitado para conducirla, investido de ' +
                'las funciones de comandante. Su designación corresponde al explotador, de quien será representante. Cuando no ' +
                'exista persona específicamente designada, se presumirá que el piloto al mando es el comandante de la aeronave.\n' +
                'En las aeronaves no tripuladas el piloto a distancia será el comandante de aquellas.\n' +
                'Las aeronaves conducidas por inteligencia artificial serán objeto de una reglamentación especial.”\n' +
                'ARTÍCULO 204.- Sustitúyese el artículo 91 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 91.- El concepto aeronáutica comercial comprende los servicios esenciales de transporte aéreo y los ' +
                'de trabajo aéreo.”\n' +
                'ARTÍCULO 205.- Sustitúyese el artículo 95 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 95.- La explotación de toda actividad comercial aérea requiere autorización previa, conforme a las ' +
                'prescripciones de este código y su reglamentación. Cuando la autorización fuera a empresas de bandera extranjera ' +
                'la misma deberá sujetarse a las normas y Acuerdos internacionales de los que la Nación Argentina sea parte. A su ' +
                'vez el Poder Ejecutivo procurará obtener principios de reciprocidad.”\n' +
                'ARTÍCULO 206.- Sustitúyese el artículo 97 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 97.- La explotación de servicios de transporte aéreo interno será realizada por personas humanas o ' +
                'sociedades que se ajusten a las prescripciones de este código.”\n' +
                'ARTÍCULO 207.- Sustitúyese el artículo 98 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 98.- Las personas humanas que exploten servicios de transporte aéreo interno deben acreditar ' +
                'domicilio legal en la República.”\n' +
                'ARTÍCULO 208.- Sustitúyese el artículo 99 de la ley de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 99.- Las sociedades se constituirán en cualquiera de las formas que autoricen las leyes argentinas ' +
                'aplicables y vigentes, sujetas a la reglamentación aeronáutica y condicionadas en particular a las siguientes ' +
                'exigencias: 1) Tener domicilio permanente de la empresa en la República, 2) El control y la dirección de la ' +
                'empresa deben estar en manos de personas humanas con domicilio legal en la República, 3) El presidente del ' +
                'directorio o consejo de administración, los gerentes y por lo menos dos tercios de los directores o administradores ' +
                'deberán ser argentinos con domicilio legal en la REPÚBLICA ARGENTINA.”\n' +
                'ARTÍCULO 209.- Sustitúyese el artículo 102 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 102.- Los servicios de transporte aéreo regular o no regular serán ejecutados por empresas ' +
                'autorizadas por el Poder Ejecutivo Nacional.\n' +
                'El procedimiento para la tramitación de las autorizaciones será fijado por la autoridad competente de manera ' +
                'eficaz y digitalmente y deberá prever la posibilidad de prórroga de los plazos de estas autorizaciones.”\n' +
                'ARTÍCULO 210.- Sustitúyese el artículo 104 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 104.- La autorización para operar en una ruta no importa exclusividad. Las autoridades ' +
                'competentes promoverán reglas de sana competencia, conforme los principios de libertad de mercado.”\n' +
                'ARTÍCULO 211.- Sustitúyese el artículo 105 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 105.- No se otorgará autorización alguna sin la comprobación previa de la capacidad técnica y ' +
                'económico - financiera del explotador y de la posibilidad de utilizar en forma adecuada los aeropuertos, ' +
                'aeródromos, y cualquier lugar apto denunciado, servicios auxiliares y material de vuelo a emplear.”\n' +
                'ARTÍCULO 212.- Sustitúyese el artículo 106 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 106.- En los servicios aerocomerciales el personal que desempeña funciones aeronáuticas deberá ' +
                'ser argentino. El Poder Ejecutivo Nacional podrá autorizar un porcentaje de personal extranjero, estableciéndose ' +
                'un procedimiento gradual de reemplazo del personal extranjero por personal argentino.”\n' +
                'ARTÍCULO 213.- Sustitúyese el artículo 107 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 107.- Las aeronaves afectadas a los servicios aerocomerciales y de aviación general deberán tener ' +
                'matrícula argentina. Sin embargo, el Poder Ejecutivo Nacional permitirá la utilización de aeronaves de matrícula ' +
                'extranjera. Cuando esto ocurre el Poder Ejecutivo Nacional procurará obtener principios de reciprocidad y ' +
                'acuerdos de doble vigilancia de seguridad operacional donde se garantice que dichas aeronaves serán tripuladas, ' +
                'asistidas y mantenidas por personal argentino, con las autorizaciones de ley.”\n' +
                'ARTÍCULO 214.- Sustitúyese el artículo 108 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 108.- La autoridad aeronáutica, ejercida por la Administración Nacional de Aviación Civil o el ' +
                'organismo federal aeroespacial a constituir por el Poder Ejecutivo Nacional que en el futuro la sustituya o ' +
                'reemplace, será única y establecerá o adoptará todas las normas de seguridad operacional de la aviación civil y su ' +
                'sistematización. Dicha autoridad entiende y regula la totalidad de los Anexos Técnicos de los Convenios ' +
                'internacionales sobre la materia.”\n' +
                'ARTÍCULO 215.- Sustitúyese el artículo 109 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 109.- La aprobación de los itinerarios, frecuencias, capacidad del sistema y horarios ' +
                'correspondientes a los servicios de transporte aéreo regular interno e internacional en todos los casos, serán ' +
                'sometidos a autorización previa del poder ejecutivo nacional.\n' +
                'Las tarifas son libremente dispuestas por las empresas y sin ninguna restricción. Estas deberán ser registradas ante ' +
                'la autoridad competente al solo efecto de dar a conocer los términos, condiciones, penalidades y restricciones de ' +
                'cada una de ellas. Se entenderá por tarifa la contraprestación que recibe el transportador a cambio de servicio de ' +
                'transporte. Se excluye de dicho término, todo impuesto, tasa y/o penalidad que deba abonar el pasajero.”\n' +
                'ARTÍCULO 216.- Sustitúyese el artículo 110 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 110.- Los acuerdos empresarios de impacto operativo que impliquen compartir códigos de ' +
                'comercialización, conexión, consolidación o fusión de servicios o negocios, estarán regidos por la Ley de Defensa ' +
                'de la Competencia.”\n' +
                'ARTÍCULO 217.- Sustitúyese el artículo 112 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 112.- Toda empresa a la que se hubiese otorgado una autorización deberá depositar, como garantía ' +
                'del cumplimiento de sus obligaciones y dentro de los quince días de notificada, una suma equivalente al dos por ' +
                'ciento de su capital social en efectivo, en títulos nacionales de renta o garantía bancaria equivalente. Dicho ' +
                'depósito se efectuará a la orden de la autoridad aeronáutica.\n' +
                'La caución se extingue en un cincuenta por ciento cuando haya comenzado la explotación de la totalidad de los ' +
                'servicios autorizados y el resto una vez transcurrido un año a partir del momento indicado, siempre que la ' +
                'autorizada haya cumplido eficientemente sus obligaciones.\n' +
                'El incumplimiento de las obligaciones que establece la autorización dará lugar a la pérdida de la caución a que se ' +
                'refiere este artículo y su monto a cuenta de la autoridad aeronáutica.”\n' +
                'ARTÍCULO 218.- Sustitúyese el artículo 113 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 113.- El contrato de transporte de pasajeros debe ser probado por escrito o con formato electrónico.\n' +
                'Cuando se trate de transporte efectuado por servicios regulares dicho contrato se prueba con el billete de pasaje ' +
                'escrito o digital.”\n' +
                'ARTÍCULO 219.- Sustitúyese el artículo 116 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 116.- El transporte de equipajes registrados, se prueba con el talón de equipajes que el ' +
                'transportador deberá expedir con doble ejemplar por escrito o digitalmente; uno de éstos será entregado al ' +
                'pasajero y el otro lo conservará el transportador.\n' +
                'No se incluirán en el talón los objetos personales que el pasajero conserve bajo su custodia.”\n' +
                'ARTÍCULO 220.- Sustitúyese el artículo 120 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 120.- La carta de porte debe ser extendida en triple ejemplar en formato físico o electrónico; uno ' +
                'para el transportador, con la firma del remitente; otro para el destinatario, con la del transportador y del remitente; ' +
                'y otro para el remitente, con la del transportador.”\n' +
                'ARTÍCULO 221.- Derógase la Sección E: Transporte de Carga Postal en sus artículos 125, 126 y 127.\n' +
                'ARTÍCULO 222.- Incorpórase como artículo 128 bis a la Ley Nº 17.285 y sus modificatorias el siguiente:\n' +
                '“ARTÍCULO 128 bis.- El Poder Ejecutivo Nacional reglamentará y llevará adelante una política de aviación civil ' +
                'que permita su crecimiento, bajo los principios de la seguridad y la libertad de mercado, conforme a los acuerdos ' +
                'con terceros estados.\n' +
                'En el marco de los permisos aerocomerciales internos e internacionales, la República Argentina fomentará entre ' +
                'los operadores aerocomerciales nacionales y extranjeros el libre acceso recíproco a los mercados aerocomerciales ' +
                'y la conectividad internacional y de cabotaje.”\n' +
                'ARTÍCULO 223.- Sustitúyese el artículo 129 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 129.- Las empresas extranjeras podrán realizar servicios de transporte aéreo internacional, de ' +
                'conformidad con las convenciones o acuerdos internacionales en que la Nación sea parte, o mediante autorización ' +
                'previa del Poder Ejecutivo. El procedimiento para tramitar las solicitudes será fijado por el Poder Ejecutivo quien ' +
                'establecerá un régimen de autorizaciones donde se analice la conveniencia, necesidad y utilidad general de los ' +
                'servicios cuando corresponda, conforme a los principios de libertad de mercado y/o los acuerdos bilaterales o ' +
                'multilaterales suscriptos.\n' +
                'La autoridad aeronáutica establecerá las normas operativas a las que se ajustarán los servicios de transporte aéreo ' +
                'internacional que exploten las empresas extranjeras. Los itinerarios, capacidad, frecuencias y horarios ' +
                'correspondientes a los servicios de transporte aéreo internacional regular, en todos los casos, serán sometidas a la ' +
                'aprobación operativa previa de la autoridad aeronáutica.”\n' +
                'ARTÍCULO 224.- Incorporase como artículo 130 bis a la Ley Nº 17.285 y sus modificatorias el siguiente:\n' +
                '“ARTÍCULO 130 bis.- Atento la integridad y autonomía establecidas para la navegación y comercio aéreo y la ' +
                'propia operatoria comercial de la industria en el orden interno e internacional, la autoridad aeronáutica deberá ' +
                'sancionar un reglamento relativo a la protección de los derechos del pasajero.”\n' +
                'ARTÍCULO 225.- Sustitúyese el artículo 131 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 131.- Para realizar trabajo aéreo en cualquiera de sus especialidades, las personas o empresas ' +
                'deberán obtener autorización previa de la autoridad aeronáutica sujeta a los siguientes recaudos: 1) Reunir los ' +
                'requisitos establecidos en el artículo 48 para ser propietario de aeronave; 2) Poseer capacidad técnica y ' +
                'económica de acuerdo a la especialidad de que se trate; 3) Operar con aeronaves de matrícula argentina o con ' +
                'aeronaves de matrícula extranjera, sujeto a acuerdos de doble vigilancia de seguridad operacional.”\n' +
                'ARTÍCULO 226.- Sustitúyese el artículo 133 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 133.- Las actividades aeronáuticas comerciales están sujetas a fiscalización por la autoridad ' +
                'competente. Al efecto le corresponde: ' +
                '1) Exigir el cumplimiento de las obligaciones previstas en las autorizaciones otorgadas, así como las contenidas ' +
                'en el presente código, leyes, reglamentaciones, Tratados e Instrumentos Internacionales ratificados por la Nación ' +
                'Argentina, y demás normas que en su consecuencia se dicten.\n' +
                '2) Ejercer la fiscalización técnica-operativa, económica y financiera del explotador.\n' +
                '3) Suspender las actividades cuando considere que no estén cumplidas las condiciones de seguridad requeridas o ' +
                'cuando no estén asegurados los riesgos cuya cobertura sea legalmente obligatoria, y autorizar su reanudación, una ' +
                'vez subsanadas tales deficiencias o requisitos, siempre que no resultaren de ellos causales que traigan aparejada la ' +
                'caducidad o retiro de la autorización.\n' +
                '4) Autorizar la interrupción y la reanudación de los servicios solicitados por los prestatarios, cuando a su juicio, ' +
                'no se consideren afectadas las razones de necesidad o utilidad general que determinaron el otorgamiento de la ' +
                'autorización, o la continuidad de los servicios.\n' +
                '5) Prohibir el empleo de material de vuelo que no ofrezca seguridad.\n' +
                '6) Exigir que el personal aeronáutico llene las condiciones requeridas por las disposiciones vigentes.\n' +
                '7) Fiscalizar todo tipo de promoción y comercialización de billetes de pasaje, fletes y toda otra venta de ' +
                'capacidad de transporte aéreo llevado a cabo por los transportadores, sus representantes o agentes y por terceros, ' +
                'para garantizar el cumplimiento de la sana competencia y la adecuada protección de los derechos de los usuarios.\n' +
                '8) Autorizar y supervisar el funcionamiento de las representaciones y agencias de las empresas extranjeras de ' +
                'transporte aéreo internacional que no operen en el territorio nacional y se establezcan en el país, sin perjuicio del ' +
                'cumplimiento de las obligaciones que imponen las demás normas legales respecto de empresas extranjeras.\n' +
                '9) Calificar, conforme la ley vigente en materia de policía aérea, la aptitud de las aeronaves destinadas al ' +
                'transporte comercial de pasajeros y carga en función de los servicios a prestar para determinar la conveniencia de ' +
                'su incorporación a tales servicios y autorizar la afectación de las aeronaves a la flota de transportadores de ' +
                'bandera argentina. Intervenir en el trámite de autorización para su ingreso al país.\n' +
                '10) Desempeñar todas las otras funciones de fiscalización que confiera el Poder Ejecutivo nacional.\n' +
                '11) La autoridad aeronáutica procurará activamente detectar y someter a fiscalización a los explotadores u ' +
                'operadores clandestinos, entendiéndose por tales a quienes operen al margen de la normativa aeronáutica vigente.\n' +
                'A tal fin, podrán afectarse recursos propios o bien requerir el auxilio de las Fuerzas de Seguridad federales o ' +
                'provinciales, que en todos los casos deberán brindarlo.”\n' +
                'ARTÍCULO 227.- Sustitúyese el nombre del CAPITULO VI del TITULO VI: AERONAUTICA COMERCIAL ' +
                'de la Ley N° 17.285 y sus modificatorias por el siguiente: CAPITULO VI: SUSPENSION Y EXTINCION DE ' +
                'LAS AUTORIZACIONES.\n' +
                'ARTÍCULO 228.- Sustitúyese el artículo 135 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 135.- Las autorizaciones otorgadas por plazo determinado se extinguirán al vencimiento de éste. No ' +
                'obstante, haya o no plazo de vencimiento, el Poder Ejecutivo nacional o la autoridad aeronáutica según sea el ' +
                'caso, en cualquier momento podrá cancelar la autorización conferidas para la explotación de actividades ' +
                'aeronáuticas comerciales en las siguientes circunstancias: ' +
                '1) Si el explotador no cumpliese las obligaciones substanciales a su cargo o si faltase, reiteradamente, a ' +
		        'obligaciones de menor importancia.\n' +
                '2) Si el servicio no fuese iniciado dentro del término fijado en la autorización.\n' +
                '3) Si se interrumpiese el servicio, total o parcialmente, sin causas justificadas o permiso de la autoridad ' +
                'aeronáutica.\n' +
                '4) Si la empresa fuera declarada en estado de quiebra, liquidación o disolución por resolución judicial o cuando ' +
                'peticionando su concurso preventivo, no ofrezca a juicio de la autoridad de aplicación garantías que resulten ' +
                'adecuadas para asegurar la prestación de los servicios.\n' +
                '5) Si la autorización hubiese sido cedida en contravención a lo dispuesto en el artículo 96 de este Código.\n' +
                '6) Si no se hubiese dado cumplimiento a la cobertura de riesgos prevista por el título X (Seguros) y en el artículo ' +
                '112.\n' +
                '7) Si el explotador se opusiese a la fiscalización o inspecciones establecidas en este Código y su reglamentación.\n' +
                '8) Si el explotador dejase de reunir cualquiera de los requisitos exigidos para la autorización.\n' +
                '9) Si mediase renuncia del explotador, previa aceptación de la autoridad aeronáutica.\n' +
                'Cuando a juicio de la autoridad de aplicación se configure alguna de las causales previstas en los incisos ' +
                'precedentes que motiven el retiro de la autorización, dicha autoridad podrá disponer la suspensión preventiva de ' +
                'los servicios hasta tanto se substancien las actuaciones administrativas a las que se refiere el artículo 137.”\n' +
                'ARTÍCULO 229.- Sustitúyese el artículo 137 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 137.- Antes de la cancelación de la autorización, debe garantizarse la debida participación al ' +
                'interesado, a fin de que pueda producir la prueba de descargo. El procedimiento a seguir será determinado por la ' +
                'reglamentación respectiva, la cual deberá garantizar el ejercicio del derecho de defensa y el control judicial ' +
                'suficiente”\n' +
                'ARTÍCULO 230.- Sustitúyese el artículo 138 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 138.- El Poder Ejecutivo podrá subvencionar la demanda de servicios de transporte aéreo en ' +
                'aquellas rutas que resulten de interés general para la Nación. Asimismo, podrá subvencionar la explotación de ' +
                'servicios de trabajo aéreo que tengan igual carácter.”\n' +
                'ARTÍCULO 231.- Sustitúyese el artículo 185 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 185.- Todo accidente o incidente de aviación será investigado por la autoridad competente e ' +
                'independiente de investigación técnica de accidentes de aviación, para determinar sus causas y establecer las ' +
                'medidas tendientes a evitar su repetición. Dicha investigación no puede asignar responsabilidad oculpa ni es ' +
                'admisible como prueba judicial.”\n' +
                'ARTÍCULO 232.- Sustitúyese el artículo 186 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 186.- Toda persona que tomase conocimiento de cualquier accidente o incidente de aviación o de la ' +
                'existencia de restos o despojos de una aeronave, deberá comunicarlo a la autoridad más próxima por el medio ' +
                'más rápido y en el tiempo mínimo que las circunstancias permitan. La primera autoridad que tenga conocimiento ' +
                'del hecho o intervenga en él, lo comunicará de inmediato a la autoridad competente en materia de investigación ' +
                'técnica de accidentes de aviación, debiendo destacar o gestionar una guardia hasta el arribo de ésta.”\n' +
                'ARTÍCULO 233.- Sustitúyese el artículo 187 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 187.- La autoridad responsable de la vigilancia de los restos o despojos del accidente, evitará que ' +
                'en los mismos y en las zonas donde puedan haberse dispersado, intervengan personas no autorizadas. La ' +
                'remoción o liberación de la aeronave, de los elementos afectados y de los objetos que pudiesen haber concurrido ' +
                'a producir el accidente sólo podrá practicarse con el consentimiento de la autoridad competente en materia de ' +
                'investigación de accidentes de aviación. La intervención de aquella autoridad no impide la acción judicial ni la ' +
                'intervención policial, coordinadas, en los casos de accidentes vinculados con hechos ilícitos, en que habrá de ' +
                'actuarse conforme a las leyes de procedimiento penal, o cuando deban practicarse operaciones de asistencia o ' +
                'salvamento.”\n' +
                'ARTÍCULO 234.- Sustitúyese el artículo 188 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 188.- Toda persona está obligada a ser entrevistada por la autoridad competente en materia de ' +
                'investigación de accidentes, en todo cuanto se relacione con la investigación de accidentes de aviación.”\n' +
                'ARTÍCULO 235.- Sustitúyese el artículo 189 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 189.- Las autoridades, personas e instituciones tendrán obligación de producir los informes que les ' +
                'requiera la autoridad competente en materia de investigación de accidentes de aviación, así como permitir a ésta ' +
                'el examen de la documentación y de los antecedentes necesarios a los fines de la investigación de accidentes de ' +
                'aviación.”\n' +
                'ARTÍCULO 236.- Sustitúyese el artículo 190 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 190.- Las aeronaves privadas extranjeras que sufran accidentes en el espacio aéreo argentino y las ' +
                'aeronaves privadas argentinas que sufran accidentes en territorio extranjero, quedarán sujetas a la investigación ' +
                'técnica prevista en los convenios internacionales.”\n' +
                'ARTÍCULO 237.- Sustitúyese el artículo 199 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 199.- Los hechos ocurridos, los actos realizados y los delitos cometidos en una aeronave privada ' +
                'argentina sobre el espacio aéreo argentino o donde ningún estado ejerza soberanía, están regidos por las leyes de ' +
                'la Nación Argentina y serán juzgados por sus tribunales.\n' +
                'Corresponde igualmente la jurisdicción de los tribunales argentinos y la aplicación de las leyes de la Nación, en el ' +
                'caso de hechos ocurridos, actos realizados o delitos cometidos a bordo de una aeronave privada argentina, sobre ' +
                'territorio extranjero, si se hubiese lesionado un interés legítimo del Estado argentino o de personas domiciliadas ' +
                'en el o se hubiese realizado en la República el primer aterrizaje posterior al hecho, acto o delito.”\n' +
                'ARTÍCULO 238.- Sustitúyese el artículo 200 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 200.– En los hechos ocurridos, los actos realizados y los delitos cometidos en una aeronave privada ' +
                'extranjera en vuelo en el espacio aéreo argentino , la jurisdicción de los tribunales argentinos y la aplicación de ' +
                'las leyes de la Nación sólo corresponde en caso de: ' +
                '1) Que infrinjan leyes de seguridad pública, militares o fiscales.\n' +
                '2) Que infrinjan leyes o reglamentos de circulación aérea.\n' +
                '3) Que comprometan la seguridad o el orden público, o afecten el interés del Estado o de las personas ' +
                'domiciliadas en él, o se hubiese realizado en la República el primer aterrizaje posterior al hecho, acto o delito si ' +
                'no mediase, en este último caso, pedido de extradición.”\n' +
                'ARTÍCULO 239.- Sustitúyese el artículo 201 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 201.- Los hechos ocurridos, los actos realizados y los delitos cometidos en una aeronave pública ' +
                'extranjera en el espacio aéreo argentino están regidos por la ley del pabellón y serán juzgados por sus tribunales.”\n' +
                'ARTÍCULO 240.- Sustitúyese el artículo 202 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 202.- La fiscalización del espacio aéreo, infraestructura aeronáutica y demás servicios y lugares ' +
                'aeronáuticos en el espacio aéreo argentino, será ejercida por la autoridad aeronáutica, con excepción de la que ' +
                'corresponda a la materia estrictamente policial.”\n' +
                'ARTÍCULO 241.- Sustitúyese el artículo 208 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 208.- El Poder Ejecutivo Nacional dictará un Reglamento General de Infracciones de la Aviación ' +
                'Civil. Hasta que ello ocurra estará vigente el actual sistema de infracciones. Este reglamento deberá prever que ' +
                'las infracciones por inobservancia de este código, las leyes vigentes y sus reglamentaciones, y demás normas que ' +
                'dicte la autoridad aeronáutica, que no importen delito, serán sancionadas con: ' +
                'i. Apercibimiento, ' +
                'ii. Multa, hasta el máximo que determine la reglamentación vigente según el tipo de infracción, ' +
                'iii. Inhabilitación temporaria con plazos máximos, o definitiva, de certificados de idoneidad otorgados o ' +
                'convalidados por la autoridad aeronáutica, ' +
                'iv. Suspensión temporaria de las autorizaciones otorgadas a los operadores aéreos, con determinación de su ' +
                'plazo máximo, ' +
                'v. Retiro de las autorizaciones otorgadas para la explotación de servicios aerocomerciales.\n' +
                'Con relación al monto de las Multas se establece: ' +
                'a. Para las infracciones en el transporte aéreo comercial de 10 hasta la suma de hasta TRESCIENTOS (300) ' +
                'ARGENTINOS ORO, apreciando la gravedad de la acción cometida y antecedentes del infractor.\n' +
                'b. Para los titulares de certificados de idoneidad en el ejercicio de funciones aeronáuticas y aquellos que cuenten ' +
                'con poder de policía delegado, se establece la suma de hasta TRESCIENTOS (300) ARGENTINOS ORO, ' +
                'considerando la gravedad de la infracción y antecedentes del infractor.\n' +
                'c. Para el Prestador de los Servicios de la navegación aérea; y respecto de los titulares explotadores, ' +
                'concesionarios y/o responsables de la infraestructura de aeropuertos, aeródromos o lugares aptos denunciados, se ' +
                'establece la suma de hasta TRESCIENTOS (300) ARGENTINOS ORO.\n' +
                'd. Para las restantes actividades aeronáuticas se establece la suma de hasta Cincuenta (50) ARGENTINOS ORO, ' +
                'apreciando la gravedad de la acción cometida y antecedentes del infractor. La Autoridad Aeronáutica, se ' +
                'encontrará facultada para disminuir las sanciones previstas, hasta en un CINCUENTA POR CIENTO (50%) del ' +
                'monto que resultaría aplicable para la infracción de la cual se trate, previendo por vía reglamentaria un sistema de ' +
                'pago anticipado o voluntario, de carácter general y con principios de transparencia, por el cual el infractor ' +
                'reconozca la responsabilidad del hecho infraccional que se le endilgue. Dicha conducta, resultará igualmente ' +
                'computable como antecedente infraccional, a los efectos de la consideración de su condición de reincidente. Si el ' +
                'infractor fuese reincidente y la falta cometida se considerase grave, esta reincidencia será considerada como un ' +
                'agravante.\n' +
                'Se entiende con poder de policía delegado a aquellas personas humanas u organizaciones que, mediante acto ' +
                'administrativo, han sido investidos con facultades determinadas por las autoridades competentes. Por ejemplo, los ' +
                'inspectores de seguridad designados o delegados.”\n' +
                'ARTÍCULO 242.- Sustitúyese el artículo 209 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 209.- Las faltas previstas en este Código y su reglamentación, serán sancionadas por la autoridad ' +
                'aeronáutica.”\n' +
                'ARTÍCULO 243.- Sustitúyese el artículo 210 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 210.- La investigación de las faltas o infracciones previstas en este Código y/o en la reglamentación ' +
                'vigente estará a cargo de la autoridad aeronáutica. El procedimiento a seguir ante la comprobación de los hechos ' +
                'será de carácter sumario y escrito, asegurando la existencia de dos instancias y la garantía del debido proceso y ' +
                'derecho de defensa del supuesto infractor.\n' +
                'La autoridad aeronáutica establecerá los aspectos del procedimiento a seguir ante la comprobación o ' +
                'investigación de los hechos, así como la aplicación e imposición de sanciones y sus apelaciones.\n' +
                'Se deberá garantizar el ejercicio de defensa y la debida participación del supuesto infractor desde el principio de ' +
                'las actuaciones, ya sea de manera escrita u oral.”\n' +
                'ARTÍCULO 244.- Sustitúyese el artículo 215 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 215.- Serán recurribles ante la Justicia Federal en lo Contencioso Administrativo, una vez agotada ' +
                'la vía administrativa ante la autoridad aeronáutica, toda sanción, inhabilitación de certificados de idoneidad y/o ' +
                'habilitaciones, suspensión o retiro de autorizaciones. Todos estos recursos y acciones que seguirán el trámite de ' +
                'juicio ordinario. El recurso deberá interponerse dentro de los 15 días de notificado el acto administrativo. En el ' +
                'caso de hechos ilícitos que puedan importar actos punibles deberá intervenir la Justicia Federal en lo Criminal y ' +
                'Correccional competente para entender en las acciones penales.”\n' +
                'ARTÍCULO 245.- Sustitúyese el artículo 231 de la Ley Nº 17.285 y sus modificatorias por el siguiente:\n' +
                '“ARTÍCULO 231.- En la circulación aérea dentro del espacio aéreo argentino, serán de uso y aplicación las ' +
                'unidades de medidas adoptadas conforme a las disposiciones de los convenios internacionales de los que la ' +
                'Nación sea parte.”',
                delta: {
                    title: 'Ley N° 12.507/56 - Política Nacional en Materia Aeronáutica',
                    added: require('./ley17285-new').default,
                    removed: require('./ley17285').default,
                },
            },
        ],
    },
]
/*
Capítulo II – Rescate de Aerolíneas Argentinas y Austral Líneas Aéreas por el Estado Nacional (Ley N°
26.412)
ARTÍCULO 246.- Sustitúyese el artículo 4° de la Ley N° 26.412 y sus normas modificatorias y complementarias.
“ARTICULO 4º.- Autorízase la cesión, parcial o total, del paquete accionario de Aerolíneas Argentinas S.A. y
Austral Líneas Aéreas - Cielos del Sur S.A. y de sus empresas controladas, a los empleados de las respectivas
empresas de conformidad con el Programa de Propiedad Participada.”
ARTÍCULO 247.- Derógase el artículo 9° de la Ley N° 26.412.

Capítulo III – Utilidad Pública de Aerolíneas Argentinas (Ley N° 26.466)
ARTÍCULO 248.- Sustitúyese el artículo 5° de la Ley N° 26.466, por el siguiente:
“ARTÍCULO 5º.- Autorízase la cesión total o parcial de las acciones representativas del capital social a los
trabajadores de las empresas Aerolíneas Argentinas Sociedad Anónima y Austral Líneas Aéreas - Cielos del Sur
Sociedad Anónima y de sus empresas controladas (Optar S.A., Jet Paq S.A., Aerohandling S.A.) de conformidad
con el Programa de Propiedad Participada. La cesión de los nuevos derechos se prorrateará entre los empleados
que decidan participar en dicho programa de ampliación. Los empleados que participen de más de una de estas
empresas deberán optar por su participación en una de ellas.”

TÍTULO X- JUSTICIA
ARTÍCULO 249.- Derógase la Ley N° 27.551.

Capítulo I - Código Civil y Comercial de la Nación (Ley N° 26.994)
ARTÍCULO 250.- Sustitúyese el artículo 765 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 765.- Concepto. La obligación es de dar dinero si el deudor debe cierta cantidad de moneda,
determinada o determinable, al momento de constitución de la obligación, sea o no de curso legal en el país. El
deudor solo se libera si entrega las cantidades comprometidas en la moneda pactada. Los jueces no pueden
modificar la forma de pago o la moneda pactada por las partes.”
ARTÍCULO 251.- Sustitúyese el artículo 766 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 766.- Obligación del deudor. El deudor debe entregar la cantidad correspondiente de la especie
designada, tanto si la moneda tiene curso legal en la República como si no lo tiene.”
ARTÍCULO 252.- Sustitúyese el artículo 958 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 958.- Libertad de contratación. Las partes son libres para celebrar un contrato y determinar su
contenido, dentro de los límites impuestos por la ley o el orden público. Las normas legales siempre son de

aplicación supletoria a la voluntad de las partes expresada en el contrato, aunque la ley no lo determine en forma
expresa para un tipo contractual determinado, salvo que la norma sea expresamente imperativa, y siempre con
interpretación restrictiva.”
ARTÍCULO 253.- Sustitúyese el artículo 960 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 960.- Facultades de los jueces. Los jueces no tienen facultades para modificar las estipulaciones de
los contratos, excepto que sea a pedido de una de las partes cuando lo autoriza la ley.”
ARTÍCULO 254.- Sustitúyese el artículo 989 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 989.- Control judicial de las cláusulas abusivas. La aprobación administrativa de las cláusulas
generales no obsta a su control judicial.”
ARTÍCULO 255.- Sustitúyese el artículo 1196 del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 1196.- Fianza, garantía y periodicidad del pago. Las partes pueden determinar libremente las
cantidades y moneda entregadas en concepto de fianza o depósito en garantía, y la forma en que serán devueltas
al finalizar la locación.
Las partes pactaran libremente la periodicidad del pago, que no podrá ser inferior a mensual.”
ARTÍCULO 256.- Sustitúyese el artículo 1198 del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 1198. Plazo de la locación de inmueble. El plazo de las locaciones con cualquier destino será el que
las partes hayan establecido.
En caso que no se haya establecido plazo, (i) en los casos de locación temporal, se estará al que establezcan los
usos y costumbres del lugar donde se asiente el inmueble locado, (ii) en los contratos de locación con destino a
vivienda permanente, con o sin muebles, será de dos (2) años y (iii) para los restantes destinos será de tres (3)
años.”
ARTÍCULO 257.- Sustitúyese el artículo 1199 del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 1199. Moneda de pago y actualización. Los alquileres podrán establecerse en moneda de curso
legal o en moneda extranjera, al libre arbitrio de las partes. El locatario no podrá exigir que se le acepte el pago en
una moneda diferente a la establecida en el contrato.
Las partes podrán pactar el ajuste del valor de los alquileres. Será válido el uso de cualquier índice pactado por las
partes, público o privado, expresado en la misma moneda en la que se pactaron los alquileres. Si el índice elegido
dejara de publicarse durante la vigencia del contrato, se utilizará un índice oficial de características similares que
publique el Instituto Nacional de Estadística y Censos si el precio estuviera fijado en moneda nacional, o el que
cumpla las mismas funciones en el país que emita la moneda de pago pactada.

No será de aplicación a los contratos incluidos en este Capítulo el artículo 10 de la Ley N° 23.928.”
ARTÍCULO 258.- Derógase el artículo 1202 del Código Civil y Comercial de la Nación aprobado por la Ley N°
26.994 y sus modificatorias.
ARTÍCULO 259.- Deróganse los artículos 1204 y 1204 bis del Código Civil y Comercial de la Nación aprobado
por la Ley N° 26.994 y sus modificatorias.
ARTÍCULO 260.- Incorpórase como inciso d) del artículo 1219 al Código Civil y Comercial de la Nación
aprobado por la Ley N° 26.994 y sus modificatorias, el siguiente:
“d) por cualquier causa fijada en el contrato.”
ARTÍCULO 261.- Sustitúyese el artículo 1220 del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 1220.- Resolución imputable al locador. El locatario puede resolver el contrato si el locador
incumple:
a) la obligación de conservar la cosa con aptitud para el uso y goce convenido, salvo cuando el daño haya sido
ocasionado directa o indirectamente por el locatario;
b) la garantía de evicción o la de vicios redhibitorios.”
ARTÍCULO 262.- Sustitúyese el artículo 1221 del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias por el siguiente:
“ARTÍCULO 1221. Resolución anticipada. El locatario podrá, en cualquier momento, resolver la contratación
abonando el equivalente al diez por ciento (10%) del saldo del canon locativo futuro, calculado desde la fecha de
la notificación de la rescisión hasta la fecha de finalización pactada en el contrato.”
ARTÍCULO 263.- Derógase el artículo 1221 bis del Código Civil y Comercial de la Nación aprobado por la Ley
N° 26.994 y sus modificatorias.

Título XI – SALUD
ARTÍCULO 264.- Derógase la Ley N° 27.113.
ARTÍCULO 265.- Derógase el Decreto N° 743/22.

Capítulo I – Utilización de medicamentos por su nombre genérico (Ley N° 25.649)
ARTÍCULO 266.- Sustitúyese el artículo 2° de la Ley N° 25.649 por el siguiente:
“ARTÍCULO 2°.- Toda receta o prescripción médica deberá efectuarse en forma obligatoria expresando
exclusivamente el nombre genérico del medicamento o denominación común internacional que se indique,

seguida de forma farmacéutica y dosis/unidad, con detalle del grado de concentración.
El farmacéutico, debidamente autorizado por la autoridad competente, es el único responsable y capacitado para
la debida dispensa de especialidades farmacéuticas que requieran recetas en cualquiera de sus modalidades.”

Capítulo II – Marco regulatorio de la Medicina Prepaga (Ley N° 26.682)
ARTÍCULO 267.- Deróganse los artículos 5°, incisos g) y m), 6°, 18, 19, 25 inciso a) y 27 de la Ley N° 26.682.
ARTÍCULO 268.- Incorpórase a la Ley N° 26.682 como artículo 30 bis, el siguiente:
“ARTÍCULO 30 bis.- Las disposiciones de esta ley son aplicables únicamente a los asociados voluntarios cuyo
vínculo con el asegurador esté fuera del marco de la Ley N° 23.660.”
ARTÍCULO 269.- Sustitúyese el artículo 17 de la Ley N° 26.682, por el siguiente:
“ARTÍCULO 17.- Cuotas de Planes. Los sujetos comprendidos en el artículo 1º de la presente ley pueden
establecer precios diferenciales para los planes prestacionales, al momento de su contratación, según franjas
etarias con una variación máxima de TRES (3) veces entre el precio de la primera y la última franja etaria.”

Capítulo III – Obras sociales (Ley N° 23.660)
ARTÍCULO 270.- Incorpórase como inciso i) del artículo 1° a la Ley N° 23.660, el siguiente:
“i) Todas las entidades comprendidas en el artículo 1° de la Ley N° 26.682.”
ARTÍCULO 271.- Sustitúyese el artículo 2° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 2°.- Las entidades comprendidas en los incisos c), d) y h) del artículo 1° funcionarán como
entidades de derecho público no estatal, con individualidad jurídica, financiera y administrativa y tendrán el
carácter de sujeto de derecho, con el alcance que el Código Civil y Comercial de la Nación establece para las
personas jurídicas; las entidades señaladas en los incisos a), e) y f) de dicho artículo funcionarán con
individualidad administrativa, contable y financiera y tendrán el carácter de sujeto de derecho con el alcance que
el Código Civil y Comercial de la Nación establece en el artículo 148.
Las entidades señaladas en el inciso b) del artículo 1°, creadas por leyes especiales al efecto, vigentes a la sanción
de la presente ley, mantendrán sus modalidades administrativas, contables y financieras conforme a las leyes que
le dieron origen, con las salvedades especificadas en los artículos 37, 38, 39 y 40 de la presente ley.”
ARTÍCULO 272.- Sustitúyese el artículo 3° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 3°.- Las entidades del artículo 1° destinarán sus recursos en forma prioritaria a prestaciones de
salud. Deberán, asimismo, brindar otras prestaciones sociales.
En lo referente a las prestaciones de salud formarán parte del Sistema Nacional del Seguro de Salud -en calidad
de agentes naturales del mismo- sujetos a las disposiciones y normativas que lo regulan.”

ARTÍCULO 273.- Sustitúyese el artículo 4° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 4°.- Las entidades, cualquiera sea su naturaleza y forma de administración, presentarán anualmente,
en lo referente a su responsabilidad como agentes del seguro, la siguiente documentación ante la
Superintendencia de Servicios de Salud (SSS):
a) Programa de prestaciones médico-asistenciales para sus beneficiarios;
b) Presupuesto de gastos y recursos para su funcionamiento y la ejecución del programa;
c) Memoria general y balance de ingresos y egresos financieros del período anterior;
d) Registro electrónico de todos los contratos de prestaciones de salud que celebre durante el mismo período, a
efectos de confeccionar un registro de los mismos.”
ARTÍCULO 274.- Derógase el artículo 5° de la Ley N° 23.660.
ARTÍCULO 275.- Sustitúyese el artículo 6° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 6°.- Las entidades comprendidas en el régimen de la presente ley, como agentes del Seguro de
Salud, deberán inscribirse en el registro que funcionará en el ámbito de la SSS y en las condiciones que establezca
la ley del Sistema Nacional del Seguro de Salud y su decreto reglamentario.
El cumplimiento de este requisito será condición necesaria para aplicar los fondos percibidos con destino a las
prestaciones de salud.”
ARTÍCULO 276.- Sustitúyese el artículo 7° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 7°.- Las resoluciones que adopten el MINISTERIO DE SALUD y la Superintendencia de Servicios
de Salud (SSS), en ejercicio de las funciones, atribuciones y facultades otorgadas por la legislación, serán de
cumplimiento obligatorio para las entidades, exclusivamente en lo que atañe a su condición de agentes del Seguro
de Salud.”
ARTÍCULO 277.- Sustitúyese el artículo 8° de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 8°.- Quedan obligatoriamente incluidos en calidad de beneficiarios de las entidades:
a) Los trabajadores que presten servicios en relación de dependencia, sea en el ámbito privado o en el sector
público.
b) Los jubilados y pensionados nacionales;
c) Los beneficiarios de prestaciones no contributivas nacionales.”
ARTÍCULO 278.- Sustitúyese el último párrafo del artículo 9° de la Ley N° 23.660 por el siguiente:
“La Superintendencia de Servicios de Salud (SSS) podrá autorizar, con los requisitos que ella establezca, la
inclusión como beneficiarios, de otros ascendientes o descendientes por consanguinidad del beneficiario titular y
que se encuentren a su cargo, en cuyo caso se fija un aporte adicional del uno y medio por ciento (1,5%) por cada
una de las personas que se incluyan.”

ARTÍCULO 279.- Sustitúyese el inciso e) del artículo 10 de la Ley N° 23.660 por el siguiente:
“e) Los trabajadores de temporada podrán optar por mantener el carácter de beneficiarios durante el período de
inactividad y mientras subsista el contrato de trabajo cumpliendo durante ese período con las obligaciones del
aporte a su cargo y de la contribución a cargo del empleador que establece la presente ley. Este derecho cesará a
partir del momento en que, en razón de otro contrato de trabajo, pasen a ser beneficiarios titulares en los términos
previstos en el artículo 8 de la presente ley.”
ARTÍCULO 280.- Derógase el inciso f) del artículo 10 de la Ley N° 23.660.
ARTÍCULO 281.- Sustitúyese el artículo 11 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 11.- Cada entidad elaborará su propio estatuto conforme con la presente ley y las normas que se
dicten en consecuencia, el que presentará ante la Superintendencia de Servicios de Salud (SSS).”
ARTÍCULO 282.- Sustitúyese el inciso h) del artículo 12 de la Ley N° 23.660 por el siguiente:
“h) Las obras sociales y otras entidades que adhieran a la presente ley mantendrán su propio régimen de
administración y gobierno.”
ARTÍCULO 283.- Sustitúyese el artículo 15 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 15.- Cuando la Superintendencia de Servicios de Salud (SSS) realice tareas de control y
fiscalización en las obras sociales, en ejercicio y dentro de las facultades comprendidas por los artículos 7°, 8°,
9°, 21 y concordantes de la Ley del Sistema Nacional del Seguro Salud, aquéllas facilitarán el personal y
elementos necesarios para el cumplimiento de la aludida misión.”
ARTÍCULO 284.- Sustitúyese el artículo 19 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 19.- Los empleadores, dadores de trabajo o equivalentes en su carácter de agentes de retención
deberán depositar la contribución a su cargo junto con los aportes que hubieran debido retener -al personal a su
cargo-, dentro de los QUINCE (15) días corridos contados a partir de la fecha en que se deba abonar la
remuneración a la entidad seleccionada por el beneficiario y a través del mecanismo correspondiente del
organismo responsable de recaudación de fondos.
a) Para el caso de las Obras Sociales, el NOVENTA POR CIENTO (90%) de la suma de la contribución y los
aportes que prevén los incisos a) y b) del artículo 16 de esta Ley, cuando las remuneraciones brutas mensuales
sean de hasta PESOS UN MIL ($ 1.000.-) inclusive, y del OCHENTA Y CINCO POR CIENTO (85%) cuando
dichas remuneraciones superen los PESOS UN MIL ($ 1.000.-). Para el caso de las Obras Sociales del Personal
de Dirección y de las Asociaciones Profesionales de Empresarios o de otras entidades mencionadas en el inciso i
del artículo 1°, dicho porcentaje será del OCHENTA Y CINCO POR CIENTO (85 %) cuando las remuneraciones
brutas mensuales sean de hasta PESOS UN MIL ($ 1.000.-) inclusive, y del OCHENTA POR CIENTO (80 %)
cuando superen ese tope;
b) Conforme los niveles remunerativos mencionados, el DIEZ POR CIENTO (10 %) o el QUINCE POR
CIENTO (15 %), respectivamente, de la suma de la contribución y los aportes que prevén los incisos a) y b) del
artículo 16 de esta Ley, y cuando se trate de las Obras Sociales del Personal de Dirección y de las Asociaciones
Profesionales de Empresarios o de otras entidades mencionadas en el inciso i del artículo 1°, el QUINCE POR

CIENTO (15 %) o el VEINTE POR CIENTO (20 %), respectivamente, de la suma a depositarse se destinarán al
Fondo Solidario de Redistribución, a la orden de las cuentas recaudadoras que determine la reglamentación.
c) El cincuenta por ciento (50 %) de los recursos de distinta naturaleza que prevé la presente ley en su artículo 16,
a la orden de la obra social correspondiente;
d) El cincuenta por ciento (50 %) de los recursos de distinta naturaleza que prevé la presente ley en su artículo 16
a la orden de la SUPERINTENDENCIA DE SERVICIOS DE SALUD (SSS), en los mismos términos que los
indicados en el inciso b) precedente;
e) Cuando las modalidades de la actividad laboral lo hagan conveniente, la autoridad de aplicación podrá
constituir a entidades en agentes de retención de contribuciones y aportes calculados sobre la producción, que
equivalgan y reemplacen a los calculados sobre el salario, a cuyo efecto aprobará los convenios de
corresponsabilidad suscriptos entre dichas entidades y las respectivas obras sociales.”
ARTÍCULO 285.- Incorpórase como artículo 19 bis a la Ley N° 23.660, el siguiente:
“ARTÍCULO 19 bis.- Cuando las entidades reciban aportes adicionales a los de la suma de la contribución y los
aportes que prevén los incisos a) y b) del artículo 16 de esta Ley, deberán depositar el VEINTE (20 %) al Fondo
Solidario de Redistribución.”
ARTÍCULO 286.- Sustitúyese el artículo 21 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 21.- Para la fiscalización y verificación de las obligaciones emergentes de la presente ley por parte
de los responsables y obligados, los funcionarios e inspectores de la SUPERINTENDENCIA DE SERVICIOS
DE SALUD (SSS) y de las entidades tendrán, en lo pertinente, las facultades y atribuciones que la ley asigna a los
de la Dirección Nacional de Recaudación Previsional.
Las actas de inspección labradas por los funcionarios e inspectores mencionados en el párrafo anterior hacen
presumir, a todos los efectos legales, la veracidad de su contenido.”
ARTÍCULO 287.- Sustitúyese el primer párrafo del artículo 23 de la Ley N° 23.660 por el siguiente:
“Los fondos previstos por la presente ley como también los que por cualquier motivo correspondan a las
entidades deberán depositarse en instituciones bancarias y serán destinados exclusivamente a la atención de las
prestaciones y demás obligaciones de las mismas y de los gastos administrativos que demande su
funcionamiento.”
ARTÍCULO 288.- Sustitúyese el primer párrafo del artículo 24 de la Ley N° 23.660 por el siguiente:
“El cobro judicial de los aportes, contribuciones, recargos, intereses y actualizaciones adeudados a las entidades,
y de las multas establecidas en la presente ley se hará por la vía de apremio prevista en el Código Procesal Civil y
Comercial de la Nación, sirviendo de suficiente título ejecutivo el certificado de deuda expedido por las entidades
o los funcionarios en que aquéllas hubieran delegado esa facultad.”
ARTÍCULO 289.- Sustitúyese el artículo 25 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 25.- La SUPERINTENDENCIA DE SERVICIOS DE SALUD (SSS) actuará como Autoridad de
Aplicación de la presente ley, con jurisdicción sobre las entidades del artículo 1°.”

ARTÍCULO 290.- Sustitúyese el artículo 26 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 26.- La SUPERINTENDENCIA DE SERVICIOS DE SALUD (SSS) tendrá como fin promover,
coordinar e integrar las actividades de las entidades en todo aquello que no se encuentren obligadas por la Ley del
Sistema Nacional del Seguro de Salud. Actuará también como organismo de control para los aspectos
administrativos y contables de las obras sociales.”
ARTÍCULO 291.- Sustitúyese el artículo 27 de la Ley N° 23.660 por el siguiente:
“ARTÍCULO 27.- Para el cumplimiento de estos fines tendrá las siguientes atribuciones:
1° Requerirá y aprobará la memoria anual y balances de las obras sociales.
2° Requerirá y suministrará información adecuada para el mejor contralor de las obras sociales y otras entidades a
la Dirección Nacional de Recaudación Previsional.
3° Propondrá al Poder Ejecutivo Nacional la intervención de las obras sociales cuando se acrediten
irregularidades o graves deficiencias en su funcionamiento.
En este caso, cuando la denuncia provenga de la SUPERINTENDENCIA DE SERVICIOS DE SALUD (SSS),
por incumplimiento de sus obligaciones como agentes del seguro, se instrumentarán mecanismos sumarios para
asegurar las prestaciones de salud garantizadas por la ley del Sistema Nacional del Seguro de Salud.
4° Llevará un Registro de las entidades en el que deberán inscribirse todas las entidades comprendidas en la
presente ley, con los recaudos que establezca la autoridad de aplicación.
5° A los efectos de la verificación del cumplimiento de las disposiciones establecidas en la presente ley y demás
normas complementarias, la SUPERINTENDENCIA DE SERVICIOS DE SALUD (SSS) podrá solicitar de las
entidades la información necesaria, su ampliación y/o aclaraciones. Sin perjuicio de ello podrá requerir la
colaboración de su sindicatura para que, constituida en la entidad, constate y/u obtenga la información.
6° Resolver los conflictos sobre encuadramiento de los beneficiarios de las entidades, determinando el destino de
los aportes y contribuciones.”
ARTÍCULO 292.- Incorpórase como artículo 28 bis a la Ley N° 23.660, el siguiente:
“ARTÍCULO 28 bis.- Para las entidades comprendidas en el inciso i) del artículo 1° de esta Ley regirá el régimen
sancionatorio de la Ley N° 26.682.”
ARTÍCULO 293.- Sustitúyese el último párrafo del artículo 40 de la Ley N° 23.660 por el siguiente:
“El síndico será designado por el MINISTERIO DE SALUD a propuesta de la SUPERINTENDENCIA DE
SERVICIOS DE SALUD (SSS).”
ARTÍCULO 294.- Derógase el artículo 42 de la Ley N° 23.660.

Capítulo IV – Sistema Nacional del Seguro de Salud (Ley N° 23.661)

ARTÍCULO 295.- Sustitúyese el último párrafo del artículo 2° de la Ley N° 23.661 por el siguiente:
“Se consideran agentes del seguro a las obras sociales nacionales, cualquiera sea su naturaleza o denominación,
las obras sociales de otras jurisdicciones, las entidades incorporadas al inciso i) del artículo 1° de la Ley N°
23.660 y demás entidades que adhieran al sistema que se constituye, las que deberán adecuar sus prestaciones de
salud a las normas que se dicten y se regirán por lo establecido en la presente ley, su reglamentación y la ley de
Obras Sociales, en lo pertinente”.
ARTÍCULO 296.- Sustitúyese el inciso a) del artículo 5° de la Ley N° 23.661 por el siguiente:
“a) Todos los beneficiarios comprendidos en la Ley 23.660.”
ARTÍCULO 297.- Sustitúyese el artículo 15 de la Ley N° 23.661 por el siguiente:
“ARTÍCULO 15.- Las entidades comprendidas en la Ley N° 23.660 serán agentes naturales del seguro, así como
aquellas otras obras sociales que adhieran al régimen de la presente ley.”
ARTÍCULO 298.- Sustitúyese el inciso a) del artículo 17 de la Ley N° 23.661 por el siguiente:
“a) A las entidades comprendidas en la Ley N° 23.660.”
ARTÍCULO 299.- Sustitúyese el último párrafo del artículo 17 de la Ley N° 23.661 por el siguiente:
“La inscripción, habilitará el agente para aplicar los recursos destinados a las prestaciones de salud, previstos en
la Ley N° 23.660.”
ARTÍCULO 300.- Sustitúyese el inciso a) del artículo 21 de la Ley N° 23.661 por el siguiente:
“a) La cobertura de prestaciones que tienen que dar a sus beneficiarios las entidades comprendidas en la Ley N°
23.660.”
ARTÍCULO 301.- Sustitúyase el inciso a) del artículo 22 de la Ley N° 23.661 por el siguiente:
“a) los previstos en la Ley N° 23.660 y sus modificaciones.”

Capítulo V – Régimen de Trazabilidad y Verificación de Aptitud Técnica de los Productos Médicos Activos
de Salud en Uso. (Ley N° 26.906)
ARTÍCULO 302.- Deróganse los artículos 6°, 7°, 8° y 11 de la Ley N° 26.906.
ARTÍCULO 303.- Incorpóranse como artículo 5° bis y artículo 5° ter a la Ley N° 26.906, los siguientes:
“ARTÍCULO 5° bis.- La Autoridad de Aplicación determinará los productos médicos activos autorizados para su
uso en el territorio nacional. No podrán ser utilizados los productos activos que no hayan sido autorizados por la
Autoridad de Aplicación.
ARTÍCULO 5° ter.- Los usuarios de productos médicos activos deberán informar la instalación y uso de los
mismos a la autoridad de aplicación. La Autoridad de Aplicación determinará los requisitos y procedimientos

para el uso de productos médicos activos. Y se reserva el derecho de auditar su cumplimiento.”
ARTÍCULO 304.- Sustitúyese el artículo 9° de la Ley N° 26.906, por el siguiente:
“ARTÍCULO 9º.- Requisitos. La autorización de uso se debe otorgar en forma individual a cada producto médico
activo, cuando sea ensayado según las normas técnicas aplicables.
Los ensayos de verificación técnica deben ser realizados in situ por el Servicio de Tecnología Biomédica del
establecimiento de salud, región sanitaria o jurisdicción. En el caso exclusivo de no contar con los recursos
necesarios, la autoridad jurisdiccional debe designar la forma y medios para realizarla. A tal efecto podrá contar
con los laboratorios acreditados por el Organismo Argentino de Acreditación (O.A.A), el Instituto Nacional de
Tecnología Industrial (I.N.T.I.) o laboratorios asociados al I.N.T.I., o laboratorios de universidades públicas.”
ARTÍCULO 305.- Sustitúyase el inciso f) del artículo 15 de la Ley N° 26.906, por el siguiente:
“f) Brindar asesoramiento en lo que respecta a la instalación, puesta en marcha y mantenimiento de los servicios
asociados al equipamiento médico y el óptimo funcionamiento de los mismos a los fines de cumplir las
especificaciones técnicas establecidas por la autoridad de aplicación.”
ARTÍCULO 306.- Sustitúyese el artículo 16 de la Ley N° 26.906, por el siguiente:
“ARTÍCULO 16.- Funciones. Son funciones de la autoridad de aplicación:
a) Establecer el mecanismo identificatorio para la trazabilidad de los productos médicos activos y de sus
mediciones así como autorizarlos para su uso en todo el territorio nacional;
b) Definir las condiciones de uso de cada producto medico activo autorizado.
c) Promover la creación o fortalecimiento de los Servicios de Tecnología Biomédica, en todo el territorio de la
Nación;
d) Establecer las Buenas Prácticas de Funcionamiento de los Prestadores de Servicios de Reparaciones y
Mantenimiento de Productos Médicos Activos;
e) Coordinar con las autoridades sanitarias jurisdiccionales, las verificaciones técnicas de los productos médicos
activos en uso, que considere necesarias;
f) Promover la creación de un Registro Nacional de Productos Médicos Activos, en coordinación con las
autoridades jurisdiccionales y según los criterios establecidos por la Disposición N° 2318/02, texto ordenado
según Disposición N° 1285/04, de la Administración Nacional de Medicamentos, Alimentos y Tecnología
Médica, ANMAT, o la que en el futuro se dicte.”

Capítulo VI – Recetas electrónicas o digitales (Ley N° 27.553)
ARTÍCULO 307.- Sustitúyese el artículo 1° de la Ley N° 27.553 por el siguiente:
“ARTÍCULO 1°.- La presente ley tiene por objeto:

Establecer que la prescripción y dispensación de medicamentos, y toda otra prescripción, solo puedan ser
redactadas y firmadas a través de plataformas electrónicas habilitadas a tal fin.
Establecer que puedan utilizarse plataformas de teleasistencia en salud, en todo el territorio nacional, de
conformidad con la Ley N° 25.326 de Protección de los Datos Personales y la Ley N° 26.529 de Derechos del
Paciente.”
ARTÍCULO 308.- Sustitúyese el artículo 3° de la Ley N° 27.553 por el siguiente:
“ARTÍCULO 3°.- La Autoridad de Aplicación de la presente ley será establecida por el Poder Ejecutivo nacional,
coordinando su accionar con las autoridades jurisdiccionales competentes y los organismos con incumbencia en la
materia que dichas autoridades determinen.
El Poder Ejecutivo Nacional establece los plazos necesarios para alcanzar la digitalización total en prescripción y
dispensación de medicamentos y toda otra prescripción, el cual no podrá superar el 1° de julio de 2024, y regular
el uso de plataformas de teleasistencia en salud.
El INSTITUTO NACIONAL DE SERVICIOS SOCIALES PARA JUBILADOS Y PENSIONADOS deberá ser
convocado por la autoridad de aplicación a los fines de colaborar en la reglamentación que se dicte a tal efecto.”
ARTÍCULO 309.- Sustitúyese el artículo 13 de la Ley N° 27.553 por el siguiente:
“ARTÍCULO 13.- Los sistemas aludidos en la presente ley deben contemplar el cumplimiento de todas las
normativas vigentes que regulan toda la cadena de comercialización de medicamentos incluyendo los requisitos
de trazabilidad de éstos y de la firma electrónica o digital. También debe contemplarse la emisión de constancia
de teleasistencia, prescripción y dispensación para los pacientes, por vía informatizada o impresión de dicha
constancia y la posibilidad de bloqueo por el farmacéutico cuando exista error manifiesto en la prescripción, para
que el prescriptor pueda revisar, anular o reactivar según el caso.”

Capítulo VII – Ejercicio de la medicina, odontología y actividades de colaboración (Ley N° 17.132)
ARTÍCULO 310.- Sustitúyese el inciso 7°) del artículo 19 de la Ley N° 17.132 por el siguiente:
“7°) Prescribir o certificar en recetas cargadas en formularios electrónicos o digitales, en las que debe constar la
siguiente información en idioma nacional: nombre, apellido, profesión, número de matrícula, domicilio, número
telefónico y correo electrónico cuando corresponda. Solo podrán anunciarse cargos técnicos o títulos que consten
registrados en la autoridad competente y en las condiciones que se reglamenten. Las prescripciones y/o recetas
deberán ser formuladas en idioma nacional, fechadas y firmadas.
La prescripción podrá consignar únicamente con el nombre genérico del medicamento o denominación común
internacional.”

Capítulo VIII – Reglamentación del derecho de opción de cambio (Decreto N° 504/98)
ARTÍCULO 311.- Sustitúyese el artículo 13 del Decreto Nº 504 del 12 de mayo de 1998 y sus modificatorios, por

el siguiente:
“ARTÍCULO 13.- Los trabajadores que inicien una relación laboral podrán ejercer el derecho de elección de
agente del seguro de la Ley N° 23.661”.
ARTÍCULO 312.- Sustitúyese el artículo 14 del Decreto Nº 504 del 12 de mayo de 1998 y sus modificatorios, por
el siguiente:
“ARTÍCULO 14.- Los afiliados que hubieren cambiado de agente de seguro deberán permanecer en ella el
tiempo mínimo que determine la Autoridad de Aplicación, el que nunca podrá ser superior a UN (1) año, y
vencido ese plazo, podrán volver a ejercer esa opción.”

Capítulo IX – Régimen legal del ejercicio de la actividad farmacéutica y de la habilitación de las farmacias,
droguerías y herboristerías (Ley N° 17.565)
ARTÍCULO 313.- Sustitúyense el primer y el segundo párrafo del artículo 1° de la Ley N° 17.565 por el siguiente
texto:
“ARTÍCULO 1°.- La preparación de recetas, la dispensa de drogas, medicamentos, y de especialidades
farmacéuticas que requieren recetas, solo podrán ser efectuadas en todo el territorio de la Nación en farmacias
habilitadas.
La autoridad sanitaria competente podrá disponer la incorporación de otro tipo de productos al presente régimen.”
ARTÍCULO 314.- Incorpórase como último párrafo al artículo 2° de la Ley N° 17.565, el siguiente:
“Las farmacias podrán constituirse mediante cualquier figura jurídica permitida por la legislación vigente.”
ARTÍCULO 315.- Sustitúyese el artículo 4° de la Ley N° 17.565 por el siguiente:
“ARTÍCULO 4°.- Una vez acordada la habilitación a que se refieren los artículos precedentes, en las farmacias no
se podrá introducir modificación en las modalidades de sus prestaciones, sin autorización previa de la autoridad
sanitaria. Los cambios en denominación o razón social deberán ser notificados a la autoridad sanitaria.”
ARTÍCULO 316.- Sustitúyese el artículo 6° de la Ley N° 17.565, por el siguiente:
“ARTÍCULO 6°.- Las farmacias podrán operar en los horarios que decidan sin restricción alguna, sin más
obligación que la de comunicarlos a la autoridad sanitaria y respetar los horarios comunicados.
Deberá efectuarse despacho nocturno al público, cuando les sea requerido por casos de urgencia. La autoridad
sanitaria podrá establecer turnos de cumplimiento obligatorio, nocturnos o para días feriados, cuando lo estime
conveniente.
Cuando por razones de turno, esté cerrada la farmacia, deberá colocarse en lugar visible un cartel en el que
consten las más próximas que se encuentren de guardia.”
ARTÍCULO 317.- Sustitúyese el artículo 9° de la Ley N° 17.565 por el siguiente:

“ARTÍCULO 9°.- En las farmacias el expendio de drogas, medicamentos o especialidades medicinales se ajusta a
las siguientes formas de acuerdo a lo que establezca la legislación vigente o determine la autoridad sanitaria:
1. Expendio legalmente restringido;
2. Expendio bajo receta archivada;
3. Expendio bajo receta;
Deben conservarse las recetas correspondientes a los puntos 1 y 2, en formato digital, durante un plazo no menor
de tres (3) años, después de dicho plazo pueden ser borradas, previa comunicación a la autoridad sanitaria.”
ARTÍCULO 318.- Sustitúyese el artículo 10 de la Ley N° 17.565 por el siguiente:
ARTÍCULO 10.- En las farmacias deben llevarse los siguientes archivos digitales habilitados por la autoridad
sanitaria:
a) Recetario;
b) Contralor de estupefacientes;
c) Contralor de psicotrópicos;
d) Inspecciones;
e) Otros archivos digitales que la autoridad competente estime pertinentes. Éstos deben ser aprobados por la
autoridad sanitaria.
Los libros electrónicos, la firma electrónica o digital y los demás requisitos técnicos y legales deben adecuarse a
lo que establezca la autoridad de aplicación, asegurando la inalterabilidad de los registros.”
ARTÍCULO 319.- Deróganse los artículos 13, 20, 27, 40, 41, 42, 43 y 44 de la Ley N° 17.565.
ARTÍCULO 320.- Sustitúyese el artículo 25 de la Ley N° 17.565 por el siguiente:
“ARTÍCULO 25.- Cuando un profesional farmacéutico sea director técnico de más de una farmacia, estará
obligado a vigilar la preparación y expendio de los medicamentos en todos los locales a su cargo, debiendo firmar
diariamente el libro recetario al final de la última receta despachada.”
ARTÍCULO 321.- Sustitúyese el artículo 26 de la Ley N° 17.565 por el siguiente:
“ARTÍCULO 26.- Toda vez que el director técnico no esté presente en la farmacia, la atención de las farmacias
podrá quedar a cargo de:
a) farmacéuticos auxiliares, pudiéndose en estos casos despachar recetas médicas:
b) auxiliares de despacho, en estos solo podrán despachar recetas médicas con la autorización del director técnico,
conforme lo establezca la reglamentación.”
ARTÍCULO 322.- Sustitúyese el inciso d) del artículo 28 de la Ley N° 17.565 por el siguiente:

“d) tener las constancias de la habilitación del establecimiento.”
ARTÍCULO 323.- Sustitúyese el artículo 36 de la Ley N° 17.565 por el siguiente:
“ARTÍCULO 36. Las droguerías podrán despachar recetas. En caso de hacerlo quedarán sujetas en un todo a lo
estipulado por los títulos I, II y III de esta norma. La venta de especialidades, drogas y medicamentos a farmacias
y laboratorios será efectuada dentro de las condiciones que establezca la autoridad sanitaria.”
ARTÍCULO 324.- Sustitúyese el inciso a) del artículo 38 de la Ley N° 17.565 por el siguiente:
“a) que las drogas y productos que sean objeto de las actividades del establecimiento, sean adquiridos
exclusivamente a personas autorizadas para su expendio y a su vez expendidos únicamente a farmacias y
laboratorios o directamente al público si deciden también constituirse como farmacias de venta al público.”
ARTÍCULO 325.- Sustitúyese el último párrafo del artículo 40 de la Ley N° 17.565 por el siguiente:
“Estos libros deberán ser electrónicos, sin alterar el orden de los asientos de las ventas efectuadas.”

Título XII – COMUNICACIÓN
Capítulo I - Ley de Servicios de Comunicación Audiovisual (Ley N° 26.522)
ARTÍCULO 326.- Sustitúyese el artículo 45 de la Ley Nº 26.522, modificado por el Decreto 267 del 29 de
diciembre de 2015, por el siguiente:
“ARTICULO 45.- Multiplicidad de Licencias. A fin de garantizar los principios de diversidad, pluralidad y
respeto por lo local las personas humanas o jurídicas podrán ser titulares o tener participación en sociedades
titulares de licencias de servicios de comunicación audiovisual, con sujeción a los siguientes límites, en el orden
local:
a)

UNA (1) licencia de radiodifusión sonora por modulación de amplitud (AM);

b)
UNA (1) licencia de radiodifusión sonora por modulación de frecuencia (FM) o hasta DOS (2) licencias
cuando existan más de OCHO (8) licencias en el área primaria de servicio;
c)

UNA (1) licencia de radiodifusión televisiva abierta.

En ningún caso la suma total de licencias otorgadas en la misma área primaria de servicio o conjunto de ellas que
se superpongan de modo mayoritario podrá exceder la cantidad de CUATRO (4) licencias.”
ARTÍCULO 327.- Derógase el artículo 46 de la Ley Nº 26.522.

Capítulo II – Argentina Digital (Ley N° 27.078)
ARTÍCULO 328.- Sustitúyese el inciso a) del artículo 6º de la Ley Nº 27.078, modificado por el Decreto Nº 267
del 29 de diciembre de 2015, por el siguiente:

“a) Radiodifusión por suscripción: Toda forma de comunicación primordialmente unidireccional destinada a la
transmisión de señales para ser recibidas por público determinable, mediante la utilización del espectro
radioeléctrico o mediante vinculo físico o satelital, indistintamente. Incluye el servicio de radiodifusión ofrecido
por un prestador de servicios TIC que utilice la tecnología de transmisión de contenidos audiovisuales basados en
el protocolo IP (IPTV), para el acceso de los programas en vivo y/o televisión lineal.”
ARTÍCULO 329.- Sustituyese el artículo 10 de la Ley Nº 27.078, modificado por el Decreto Nº 267 del 29 de
diciembre de 2015, por el siguiente:
“ARTÍCULO 10. - Incorpórase como servicio que podrán registrar los prestadores de TIC, al servicio de
Radiodifusión por suscripción mediante cualquier vínculo. El servicio de Radiodifusión por suscripción se regirá
por los requisitos que establecen los artículos siguientes de la presente ley y los demás que establezca la
reglamentación, no resultándole aplicables las disposiciones de la Ley N° 26.522.
El plazo de otorgamiento del uso de las frecuencias del espectro radioeléctrico de los titulares de licencias de
Radiodifusión por Suscripción conferidas bajo las Leyes Nros. 22.285 y 26.522 será el de su título original, o de
DIEZ (10) años contados a partir del 1° de enero de 2016, siempre el que sea mayor para aquellos que tuvieren a
dicha fecha una licencia vigente.”
ARTÍCULO 330.- Sustitúyese el artículo 34 de la Ley Nº 27.078, modificado por Decreto Nº 267 del 29 de
diciembre de 2015, por el siguiente:
“ARTÍCULO 34.- Registro. La provisión de facilidades de los sistemas satelitales de comunicaciones será libre.
Se requerirá a los titulares de tales sistemas el correspondiente registro para su operación, al solo efecto de
coordinar el uso de las frecuencias radioeléctricas y evitar interferencias sobre otros sistemas conforme a la
reglamentación que dicte la Autoridad de Aplicación. La prestación de cualquier Servicio de TIC por satélite
estará sometida al régimen general de prestación de Servicios de TIC establecido en la presente ley.”

Título XIII – LEY DE DEPORTES (Ley N° 20.655)
ARTÍCULO 331.- Sustitúyese el segundo párrafo del artículo 16 de la Ley N° 20.655, por el siguiente:
“Los sujetos de tales recursos podrán ser las organizaciones deportivas previstas en el artículo 19 bis de la
presente ley, los clubes de barrio y de pueblo previstos en la Ley Nº 27.098, las Provincias, la Ciudad Autónoma
de Buenos Aires y los Municipios, los atletas, técnicos/as y entrenadores/as y demás profesionales previstos en la
presente ley, que en todos los casos reúnan los requisitos formales y sustanciales establecidos en las disposiciones
legales respectivas.”
ARTÍCULO 332.- Sustitúyese el artículo 17 de la Ley N° 20.655, por el siguiente:
“ARTÍCULO 17.- Las personas que desempeñen cargos directivos y de fiscalización en las organizaciones
deportivas contraerán responsabilidad personal y solidaria por las rendiciones de cuentas de los recursos previstos
en el artículo 15 de la presente ley, como también por el cumplimiento de los fines para los cuales fueron
concedidos los mismos.”
ARTÍCULO 333.- Sustitúyese el artículo 19 de la Ley N° 20.655, por el siguiente:

“ARTÍCULO 19.- A los fines de la presente ley, se entiende por Sistema Institucional del Deporte y la Actividad
Física al conjunto de organizaciones deportivas incluidas en la presente ley, estructuras asociativas intermedias y
superiores y normas y procesos organizativos que interactúan coordinadamente a fin de coadyuvar a la práctica,
desarrollo, sostenimiento, organización y representación del deporte y la actividad física, a las cuales se denomina
en la presente ley como organizaciones deportivas.
Sólo podrán ser sujeto de las medidas de promoción, asistencia y ordenamiento de las actividades físicas y
deportivas y de los beneficios impositivos y previsionales previstos en la presente ley, en la Ley N° 26.573 y en
las normas de esa materia, las organizaciones que integran el Sistema Institucional del Deporte y la Actividad
Física.”
ARTÍCULO 334.- Sustitúyese el artículo 19 bis de la Ley N° 20.655 por el siguiente:
“ARTÍCULO 19 bis.- Se consideran asociaciones civiles deportivas integrantes del Sistema Institucional del
Deporte y la Actividad Física, a las:
a) Personas jurídicas previstas en el artículo 168 del Código Civil y Comercial de la Nación, que tienen como
objeto la práctica, desarrollo, sostenimiento, organización o representación del deporte y la actividad física, de
acuerdo con los principios generales enunciados en el Capítulo I de la presente ley y reúnen las características que
se indican en los artículos 20 y 20 bis;
b) Personas jurídicas constituidas como sociedades anónimas reguladas en la Sección V de la Ley N° 19.550 y
sus modificatorias, que tienen como objeto social la práctica, desarrollo, sostenimiento, organización o
representación del deporte y la actividad física, de acuerdo con los principios generales enunciados en el Capítulo
I de la presente ley.”
ARTÍCULO 335.- Incorpórase como artículo 19 ter a la Ley N° 20.655, el siguiente:
“ARTÍCULO 19 ter.- No podrá impedirse, dificultarse, privarse o menoscabarse cualquier derecho a una
organización deportiva, incluyendo su derecho de afiliación a una confederación, federación, asociación, liga o
unión, con fundamento en su forma jurídica, si la misma está reconocida en esta ley y normas complementarias.”
ARTÍCULO 336.- Sustitúyense los párrafos primero y segundo del artículo 20 de la Ley N° 20.655 por los
siguientes:
“ARTÍCULO 20.- El Sistema Institucional del Deporte y la Actividad Física se estructura con las organizaciones
integrantes clasificadas como de primer grado, de segundo grado, de representación nacional y superiores.
Las organizaciones de primer grado son entidades que tienen como finalidad esencial o subsidiaria la práctica,
desarrollo, sostenimiento u organización del deporte y la actividad física y que se clasifican, según el objeto al
que se dirigen sus acciones, en deporte educativo, deporte social y comunitario, deporte para adultos mayores,
deporte de ámbito laboral, deporte universitario, deporte federado, deporte militar, deporte de alto rendimiento, o
deporte adaptado.”
ARTÍCULO 337.- Sustitúyese el inciso a) del artículo 33 de la Ley N° 20.655 por el siguiente:
“a) Un (1) subsistema de acreditación de los integrantes del Sistema Institucional del Deporte y la Actividad
Física;”

ARTÍCULO 338.- Sustitúyese el artículo 34 de la Ley N° 20.655, por el siguiente:
“ARTÍCULO 34.- El subsistema de acreditación de organizaciones deportivas es el proceso mediante el cual se
evalúa si una institución reúne las características estipuladas en la presente ley y se le otorga un reconocimiento
formal de su integración al Sistema Institucional del Deporte y la Actividad Física.
Las instituciones acreditadas y los integrantes de sus comisiones directivas o directorios serán incorporados al
Registro permanente del Sistema Institucional del Deporte y la Actividad Física que prevé el inciso b) del artículo
33 de la presente ley.”
ARTÍCULO 339.- Sustitúyese el artículo 35 de la Ley N° 20.655, por el siguiente:
“ARTÍCULO 35.- El censo de atletas federados/as, árbitros/as, técnicos/as y entrenadores/as consiste en un
conjunto de actividades estadísticas, coordinadas entre los organismos competentes y los integrantes del Sistema
Institucional del Deporte y la Actividad Física, tendientes a asegurar un padrón permanente de las personas atletas
vinculadas a través de una ficha federativa con los árbitros/as, técnicos/as y entrenadores/as que se encuentren
relacionados con las organizaciones deportivas que integran el Sistema Institucional del Deporte y la Actividad
Física. Las fichas federativas serán incorporadas al Registro permanente que prevé el inciso d) del artículo 34 de
la presente ley, con excepción de los contratos deportivos profesionales, los que se regirán por las normas del
derecho común o las que regulen esa actividad deportiva.”
ARTÍCULO 340.- Sustitúyese el artículo 39 de la Ley N° 20.655 por el siguiente:
“ARTÍCULO 39.- Pueden ser sujetos beneficiarios del régimen promocional previsto en el presente capítulo, los
integrantes del Sistema Institucional del Deporte y la Actividad Física, establecidas en el Capítulo VII y los
agentes del deporte y la actividad física.”
ARTÍCULO 341.- Sustitúyese el artículo 41 de la Ley N° 20.655 por el siguiente:
“ARTÍCULO 41.- Los atletas que perciban las becas que prevé el Capítulo VI de la presente ley, revestirán, a los
efectos del Sistema Integrado Previsional Argentino la categoría de pequeño contribuyente adherido al Régimen
Simplificado para Pequeños Contribuyentes aprobado por el artículo 1° de la ley 24.977 y sus modificatorias, que
prevé el artículo 39 del citado régimen y cotizarán al Sistema Integrado Previsional Argentino (SIPA), mediante
el aporte contemplado en los incisos a) y b) del artículo 39 de la Ley N° 24.977 y sus modificatorias, cuyo pago
estará a cargo de los respectivos organismos subvencionantes, a excepción de aquellos atletas que perciban becas
otorgadas por el Ente Nacional de Alto Rendimiento Deportivo (ENARD), quienes deberán ingresarlo en forma
directa, conforme lo establecen los incisos a) y b) del artículo 39 de la Ley N° 24.977 y sus modificatorias,
eximiéndolos del ingreso del componente impositivo del régimen.
Las personas atletas no becadas que se encuentren relacionadas con organizaciones integrantes del Sistema
Institucional del Deporte y la Actividad Física, a través de una ficha federativa, que no estén incluidos en una
convención colectiva de trabajo o un régimen especial de seguridad social o de salud y participen en campeonatos
argentinos, campeonatos clasificatorios para campeonatos argentinos, en las divisiones o categorías superiores de
los campeonatos anuales regulares de deportes por equipo o en las divisiones o categorías de ascensos de estos
campeonatos, revestirán por propia elección, a los efectos del Sistema Integrado Previsional Argentino, la
categoría prevista en el párrafo anterior y deberán ingresar el aporte allí contemplado, excepto que percibieran
retribuciones que excedan el Régimen Simplificado para Pequeños Contribuyentes, caso en el cual revestirán la
categoría de autónomos, con las obligaciones correspondientes a ese régimen. El pago de los aportes previstos en

los incisos a) y b) del artículo 39 de la Ley N° 24.977 y sus modificatorias, estará a cargo de los propios atletas
quedando exceptuados del componente impositivo. A los fines de la presente ley, se entiende por ficha federativa
al instrumento que acredita la titularidad registral que tiene una organización integrante del Sistema Institucional
del Deporte y la Actividad Física de primer grado frente a una asociación civil deportiva de segundo grado o una
asociación civil deportiva de representación nacional, respecto de un atleta, para que este participe en
determinada competencia oficial, en nombre y representación de aquella entidad.”
ARTÍCULO 342.- Sustitúyese en el artículo 42 de la Ley N° 20.655 la frase “asociaciones civiles deportivas” por
“organizaciones integrantes”.
ARTÍCULO 343.- Sustitúyese en el artículo 43 de la Ley N° 20.655 la frase “asociaciones civiles deportivas que
integran el Sistema Institucional del Deporte y la Actividad Física” por “organizaciones integrantes del Sistema
Institucional del Deporte y la Actividad Física”.
ARTÍCULO 344.- Sustitúyese el artículo 44 de la Ley N° 20.655 por el siguiente:
“ARTÍCULO 44.- Conforme los incisos b), c) y d) del artículo 40 de la presente ley, se fijará una escala de
reducción de VEINTICINCO POR CIENTO (25%) a CIEN POR CIENTO (100%) de las contribuciones
patronales del régimen general de las organizaciones integrantes del Sistema Institucional del Deporte y la
Actividad Física de acuerdo al coeficiente que establezca la reglamentación de la presente ley.”
ARTÍCULO 345.- CLÁUSULA TRANSITORIA. Las asociaciones, federaciones y confederaciones deportivas
dispondrán de un año, contado a partir de la reglamentación del presente, para modificar sus estatutos a efectos de
adecuarse a los términos previstos por aquel, lo que deberá ser aplicado sin perjuicio del cumplimiento de los
mandatos preexistentes.

Título XIV – LEY GENERAL DE SOCIEDADES N° 19.550, T.O. 1984 Y SUS MODIFICATORIAS
ARTÍCULO 346.- Sustitúyese el artículo 30 de la Ley General de Sociedades N° 19.550, T.O. 1984 y sus
modificatorias, por el siguiente:
“ARTÍCULO 30.- Las sociedades anónimas y en comandita por acciones solo pueden formar parte de sociedades
por acciones y de responsabilidad limitada. Las asociaciones y entidades sin fines de lucro sólo pueden formar
parte de sociedades anónimas. Podrán ser parte de cualquier contrato asociativo.”
ARTÍCULO 347.- Sustitúyese el inciso 1) del artículo 77 de la Ley General de Sociedades N° 19.550, T.O. 1984
y sus modificatorias por el siguiente:
“1) Cuando se tratare de sociedades comerciales, acuerdo unánime de los socios, salvo pacto en contrario a lo
dispuesto para algunos tipos societarios. Cuando se tratare de asociación civil que se transformare en sociedad
comercial o resolviera ser socia de sociedades anónimas, voto de los dos tercios de los asociados;”

Título XV – TURISMO
ARTÍCULO 348.- Derógase Ley N° 18.828.

ARTÍCULO 349.- Derógase Ley N° 18.829.
ARTÍCULO 350.- Derógase Ley N° 26.356.

Título XVI – REGISTRO AUTOMOTOR (Decreto - Ley N° 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias)
ARTÍCULO 351.- Deróganse los artículos 11, 12 y 21 del Decreto-Ley Nº 6582/58 ratificado por la Ley N°
14.467 (t.o. 1997) y sus modificatorias.
ARTÍCULO 352.- Sustitúyese el tercer párrafo del artículo 6° del Decreto-Ley Nº 6582/58 ratificado por la Ley
N° 14.467 (t.o. 1997) y sus modificatorias por el siguiente:
“A todo automotor se le asignará al inscribirse en el Registro por primera vez un documento individualizante en
formato físico o digital que será expedido por el Registro respectivo y se denominará "Título del Automotor".
Este tendrá carácter de instrumento público respecto de la individualización del automotor y de la existencia en el
Registro de las inscripciones que en él se consignen, pero solo acreditará las condiciones del dominio y de los
gravámenes que afecten al automotor, hasta la fecha de anotación de dichas constancias en el mismo.”
ARTÍCULO 353.- Sustitúyese el cuarto párrafo del artículo 7° del Decreto-Ley Nº 6582/58 ratificado por la Ley
N° 14.467 (t.o. 1997) y sus modificatorias por los siguientes:
“Dichas inscripciones o anotaciones también podrán realizarse directamente ante la Dirección Nacional, que
deberá establecer a tal efecto un servicio de inscripción remoto, abierto, accesible y estandarizado, bajo
jurisdicción nacional, que permita las inscripciones o anotaciones ordenadas por los titulares o por intermediarios
autorizados de manera fehaciente por ellos. A tal efecto, el Poder Ejecutivo Nacional dictará la reglamentación
correspondiente.
La Dirección Nacional recabará toda la información necesaria para poner en funcionamiento ese registro tanto a
automotores por registrarse como a los ya registrados.
El Poder Ejecutivo Nacional podrá disponer que determinadas inscripciones y anotaciones se cumplan
únicamente ante la Dirección Nacional cuando fuere aconsejable para el mejor funcionamiento del sistema
registral.”
ARTÍCULO 354.- Sustitúyese el artículo 8° del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 8º.- La Dirección Nacional controlará el funcionamiento de los Registros Seccionales, realizará las
tareas registrales específicas que determine la reglamentación, y dispondrá el archivo ordenado de copias de los
instrumentos que se registren. Dicho registro será electrónico y de acceso público.”
ARTÍCULO 355.- Sustitúyese el artículo 9° del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 9º.- Los trámites que se realicen ante los Registros Seccionales de la Propiedad del Automotor
deberán abonar el arancel que fije el Poder Ejecutivo Nacional, salvo los casos expresamente exceptuados por

esta norma y la reglamentación.
Los aranceles que establezca el Poder Ejecutivo Nacional para los trámites digitales ante la Dirección Nacional no
podrán superar el valor del arancel a que se refiere el párrafo anterior.
No podrá restringirse o limitarse la inmediata inscripción del dominio de los automotores o de sus transmisiones
por normas de carácter administrativo ajenas a los aranceles del Registro. La existencia de deudas en situación
regular por multas o patentes tampoco podrá impedir la inscripción o transmisión de automotores en el Registro.
Las personas humanas o jurídicas registradas en el Organismo de Aplicación como comerciantes habituales en la
compraventa de automotores deberán inscribir a su nombre los automotores usados que adquieran para la reventa
posterior.
El Organismo de Aplicación establecerá los requisitos que deberán cumplir los interesados para inscribirse como
comerciantes habituales en la compraventa de automotores y las causas por las cuales se suspenderá o cancelará
esa inscripción.”
ARTÍCULO 356.- Sustitúyese el artículo 10 del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 10.- En las inscripciones de dominio de automotores armados fuera de fábrica, o de sus plantas de
montaje, deberá justificarse fehacientemente el origen de los elementos utilizados, los que podrán ser de
fabricación artesanal, en la forma en que lo determine el organismo de aplicación, quien resolverá en definitiva
acerca de la procedencia o no de las inscripciones de estos tipos de automotores.
El titular que transfiera un automotor podrá asimismo dejar sentado en el Registro el cumplimiento de las
condiciones de seguridad activa y pasiva para circular en la forma que determine la normativa específica en la
materia. La ausencia de esta anotación en ningún caso podrá impedir la inscripción o transferencia del
automotor.”
ARTÍCULO 357.- Sustitúyese el párrafo primero del artículo 13 del Decreto-Ley Nº 6582/58 ratificado por la
Ley N° 14.467 (t.o. 1997) y sus modificatorias por el siguiente:
“ARTÍCULO 13.- Los pedidos de inscripción o anotación en el Registro, y en general los trámites que se realicen
ante él, solo podrán efectuarse mediante la utilización de las solicitudes tipo que determine el Organismo de
Aplicación, el que fijará su contenido y demás requisitos de validez. Estos documentos podrán ser de carácter
electrónico.”
ARTÍCULO 358.- Sustitúyese el artículo 14 del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 14.- Los contratos de transferencia de automotores que se formalicen por instrumento privado se
inscribirán en el Registro mediante la utilización de las solicitudes tipo mencionadas en el artículo anterior,
suscriptos por las partes.
Cuando la transferencia se formalice por instrumento público o haya sido dispuesta por orden judicial o
administrativa, se presentará para su inscripción junto con el testimonio u oficio correspondiente, la solicitud tipo
de inscripción suscripta por el autorizante o por la autoridad judicial o administrativa.

En todos los casos se presentará el título de propiedad del automotor, en forma física o digital.
En las transferencias dispuestas por autoridad judicial, se transcribirá textualmente la parte pertinente del auto que
la ordena.
La Municipalidad en donde se domicilie la persona humana o jurídica titular del automotor inscripto será
notificada del contrato de transferencia.”
ARTÍCULO 359.- Sustitúyese el artículo 16 del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 16.- A los efectos de la buena fe previstos en los artículos 2º, 3º y 4º del presente, se presume que
los que adquieren derechos sobre un automotor, conocen las constancias de su inscripción y de las demás
anotaciones que respecto de aquel obran en el Registro de la Propiedad del Automotor, aun cuando no hayan
exigido del titular o del disponente del bien, la exhibición del certificado de dominio que se establece en este
artículo.
Durante un período de QUINCE (15) días los embargos y demás anotaciones que se soliciten con respecto al
automotor tendrán carácter condicional y solo quedarán firmes y producirán sus efectos legales una vez vencido
dicho plazo, siempre que no hayan modificado el dominio o la situación jurídica del automotor.”
ARTÍCULO 360.- Sustitúyense los incisos d) y e) del artículo 19 del Decreto-Ley Nº 6582/58 ratificado por la
Ley N° 14.467 (t.o. 1997) y sus modificatorias por los siguientes:
“d) La anotación de los endosos de contratos de prenda podrá hacerse en cualquier Registro Seccional o
directamente en el servicio de inscripción remoto de la Dirección Nacional;
e) Los trámites ulteriores correspondientes a contratos de prenda inscriptos hasta el día anterior al cambio de
régimen que disponga el Poder Ejecutivo Nacional seguirán a cargo del Registro Nacional de Créditos
Prendarios.”
ARTÍCULO 361.- Sustitúyese el artículo 22 del Decreto-Ley Nº 6582/58 ratificado por la Ley N° 14.467 (t.o.
1997) y sus modificatorias por el siguiente:
“ARTÍCULO 22.- Sin perjuicio de la expedición del título a que se refiere el artículo 20, juntamente con la
inscripción originaria, o con cada una de las correspondientes a las sucesivas transferencias de dominio, el
Registro entregará al titular del automotor una o más cédulas de identificación de este, en las que se consignarán
los datos que, con respecto al automotor y a su propietario, establezca la autoridad de aplicación.
Las cédulas se entregarán digitalmente, las que tendrán la misma validez que las físicas. El adquirente podrá pedir
una o varias cédulas físicas las que podrán tener un costo. Dichas cédulas deberán ser devueltas por el enajenante
del automotor, expidiéndose nuevas para el adquirente.
Su tenencia acreditará derecho o autorización para usar el automotor, pero no eximirá de la obligación de
justificar la habilitación personal para conducir. La cédula, la licencia para conducir y el comprobante de pago de
patente son los únicos documentos exigibles para circular con el automotor, y las autoridades provinciales o
municipales no podrán establecer otros requisitos para su uso legítimo.
Será obligatorio exhibir esos documentos a la autoridad competente, pero no podrán ser retenidos si no mediare

denuncia de hurto o robo del automotor u orden de autoridad judicial.”
ARTÍCULO 362.- Sustitúyese el párrafo primero del artículo 23 del Decreto-Ley Nº 6582/58 ratificado por la
Ley N° 14.467 (t.o. 1997) y sus modificatorias por el siguiente:
“ARTÍCULO 23.- El Organismo de Aplicación determinará los distintos tipos de cédulas que se expedirán, las
cuales no caducarán mientras no haya cambios en la titularidad del vehículo. También podrá requerir la
colaboración de las autoridades que determine el Poder Ejecutivo Nacional para controlar que los automotores
circulen con la documentación correspondiente, para verificar cambios o adulteraciones en las partes que lo
conforman como tal, y para fiscalizar que las transferencias se inscriban en el Registro dentro del término fijado
por esta ley. Asimismo, podrá disponer la exhibición de los automotores y su documentación y la presentación de
declaraciones juradas al respecto.”
ARTÍCULO 363.- Sustitúyese el párrafo quinto del artículo 27 del Decreto-Ley Nº 6582/58 ratificado por la Ley
N° 14.467 (t.o. 1997) y sus modificatorias por el siguiente:
“Efectuada la denuncia de la tradición del automotor, se procederá a la sustitución del sujeto obligado al tributo
(patente, impuestos, multas, etcétera) desde la fecha de la denuncia, desligando a partir de la misma al titular
transmitente de todo tipo de responsabilidad legal sobre el mismo.”
ARTÍCULO 364.- Incorpórase la siguiente Cláusula Transitoria al Decreto-Ley Nº 6582/58 ratificado por la Ley
N° 14.467 (t.o. 1997) y sus modificatorias:
“Cláusula transitoria. La Dirección Nacional deberá hacer efectiva la puesta en marcha de su registro remoto,
abierto, estandarizado y accesible a más tardar el 2 de mayo de 2024.”
ARTÍCULO 365.- Dese cuenta a la COMISIÓN BICAMERAL PERMANENTE del HONORABLE
CONGRESO DE LA NACIÓN.
ARTÍCULO 366.- Comuníquese, publíquese, dese a la DIRECCIÓN NACIONAL DEL REGISTRO OFICIAL y
archívese.

Digitally signed by MONDINO Diana Elena
Date: 2023.12.20 12:46:48 ART
Location: Ciudad Autónoma de Buenos Aires

Digitally signed by RUSSO Mario Antonio
Date: 2023.12.20 12:48:21 ART
Location: Ciudad Autónoma de Buenos Aires

Diana Mondino
Ministro
Ministerio de Relaciones Exteriores, Comercio Internacional y Culto

Mario Antonio Russo
Ministro
Ministerio de Salud

Digitally signed by CUNEO LIBARONA Mariano
Date: 2023.12.20 12:48:54 ART
Location: Ciudad Autónoma de Buenos Aires

Digitally signed by CAPUTO Luis Andres
Date: 2023.12.20 12:52:45 ART
Location: Ciudad Autónoma de Buenos Aires

Mariano Cúneo Libarona
Ministro
Ministerio de Justicia

Luis Andres Caputo
Ministro
Ministerio de Economía

Digitally signed by FRANCOS Guillermo Alberto
Date: 2023.12.20 12:56:59 ART
Location: Ciudad Autónoma de Buenos Aires

Digitally signed by PETTOVELLO Sandra Viviana
Date: 2023.12.20 12:57:31 ART
Location: Ciudad Autónoma de Buenos Aires

Guillermo Francos
Ministro
Ministerio del Interior

Sandra Pettovello
Ministra
Ministerio de Capital Humano

Digitally signed by BULLRICH Patricia
Date: 2023.12.20 13:09:29 ART
Location: Ciudad Autónoma de Buenos Aires

Digitally signed by FERRARO Guillermo Jose
Date: 2023.12.20 13:17:31 ART
Location: Ciudad Autónoma de Buenos Aires

Patricia Bullrich
Ministra
Ministerio de Seguridad

Guillermo José Ferraro
Ministro
Ministerio de Infraestructura

Digitally signed by POSSE Nicolas José
Date: 2023.12.20 13:20:50 ART
Location: Ciudad Autónoma de Buenos Aires

Digitally signed by PETRI Luis Alfonso
Date: 2023.12.20 13:21:34 ART
Location: Ciudad Autónoma de Buenos Aires

Nicolás Posse
Jefe de Gabinete de Ministros
Jefatura de Gabinete de Ministros

Luis Petri
Ministro
Ministerio de Defensa

Digitally signed by MILEI Javier Gerardo
Date: 2023.12.20 20:58:16 ART
Location: Ciudad Autónoma de Buenos Aires

Javier Milei
Presidente
Presidencia de la Nación

Digitally signed by GESTION DOCUMENTAL
ELECTRONICA - GDE
Date: 2023.12.20 21:00:09 -03:00

*/
export { text };
