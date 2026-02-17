const questions = [
    {
        "num": 1,
        "question": "PER QUANTO TEMPO È VALIDO IL TESSERINO REGIONALE PER L'ESERCIZIO DELLA CACCIA?",
        "options": [
            "Per una stagione venatoria.",
            "Per un anno solare.",
            "Per sei anni, come il porto d’armi."
        ],
        "correct": 0
    },
    {
        "num": 2,
        "question": "COSA È NECESSARIO PER ESERCITARE LA CACCIA DA APPOSTAMENTO FISSO?",
        "options": [
            "Essere residenti nella provincia in cui è ubicato l’appostamento.",
            "L’apposita autorizzazione dell’ente pubblico individuato dalla legge.",
            "Essere proprietario del terreno o del sito preparato."
        ],
        "correct": 1
    },
    {
        "num": 3,
        "question": "COSA SUCCEDE A CHI, PUR ESSENDONE MUNITO, NON ESIBISCE, SE LEGITTIMAMENTE RICHIESTO, LA LICENZA?",
        "options": [
            "Il cacciatore è soggetto a sanzione, applicata al minimo se il cacciatore esibisce la licenza entro cinque giorni.",
            "Il cacciatore non è soggetto a sanzione, se dimostra il possesso della licenza.",
            "Nulla, se altri cacciatori garantiscono il possesso della licenza."
        ],
        "correct": 0
    },
    {
        "num": 4,
        "question": "CHE COMPITI HANNO GLI A.T.C. (AMBITI TERRITORIALI DI CACCIA)?",
        "options": [
            "Compiti di pianificazione faunistico venatoria.",
            "Compiti di gestione faunistica e organizzazione della caccia nel rispetto del territorio.",
            "Coordinano tutta l’attività di vigilanza volontaria."
        ],
        "correct": 1
    },
    {
        "num": 5,
        "question": "QUALI SONO GLI APPOSTAMENTI CONSIDERATI FISSI AI FINI E PER GLI EFFETTI DELL’OPZIONE DELLA FORMA DI CACCIA DA ESERCITARE IN VIA ESCLUSIVA?",
        "options": [
            "Appostamenti senza uso di richiami vivi.",
            "Appostamenti per i colombacci.",
            "Appostamenti realizzati con strutture fisse che comportano modifica delle condizioni del luogo."
        ],
        "correct": 2
    },
    {
        "num": 6,
        "question": "QUALE DURATA HA L’AUTORIZZAZIONE AD ALLEVARE FAUNA SELVATICA AI SENSI DELL’ART. 13 DELLA L.R. 26/2012?",
        "options": [
            "7 anni.",
            "1 anno ed è rinnovata tacitamente.",
            "10 anni."
        ],
        "correct": 2
    },
    {
        "num": 7,
        "question": "DOVE DEVONO ESSERE SITUATE LE AZIENDE AGRITURISTICO VENATORIE?",
        "options": [
            "Nei territori di scarso rilievo ambientale e faunistico.",
            "In pianura.",
            "Nei territori a forte richiamo turistico."
        ],
        "correct": 0
    },
    {
        "num": 8,
        "question": "PER POTER IMPIANTARE UN APPOSTAMENTO FISSO DI CHI OCCORRE IL CONSENSO?",
        "options": [
            "Dell’associazione venatoria di appartenenza.",
            "Del comune.",
            "Del proprietario o del conduttore del terreno."
        ],
        "correct": 2
    },
    {
        "num": 9,
        "question": "CHI ABBATTE SELVAGGINA MIGRATORIA IN UNA AZIENDA FAUNISTICA VENATORIA, È TENUTO A SEGNARLA SUL TESSERINO REGIONALE?",
        "options": [
            "No.",
            "Sì.",
            "Sì, ma solo la beccaccia."
        ],
        "correct": 1
    },
    {
        "num": 10,
        "question": "LE OASI DI PROTEZIONE DELLA FAUNA SELVATICA SONO:",
        "options": [
            "Ambiti territoriali dove l’esercizio venatorio è ammesso solo a chi è in possesso di apposita autorizzazione.",
            "Ambiti territoriali dove la fauna selvatica è oggetto di cattura per scopi amatoriali.",
            "Ambiti territoriali destinati al rifugio, alla riproduzione ed alla sosta della fauna selvatica."
        ],
        "correct": 2
    },
    {
        "num": 11,
        "question": "DA CHI PUÒ ESSERE AUTORIZZATA UNA GARA CINOFILA NELLE ZONE DI RIPOPOLAMENTO E CATTURA?",
        "options": [
            "Dalla regione.",
            "Dall’Istituto Superiore per la Protezione e la Ricerca Ambientale (I.S.P.R.A. ex I.N.F.S.).",
            "Dall’associazione che stipula la convenzione per la gestione, sentito il C.T.F.V.R."
        ],
        "correct": 2
    },
    {
        "num": 12,
        "question": "CHE COSA È L’ISTITUTO SUPERIORE PER LA PROTEZIONE E LA RICERCA AMBIENTALE (I.S.P.R.A.)?",
        "options": [
            "È l’organo tecnico consultivo in materia di caccia fra le associazioni venatorie regionali e nazionali.",
            "È l’organo scientifico e tecnico di ricerca e consulenza per lo Stato, le regioni e le province.",
            "È un centro di allevamento selvaggina."
        ],
        "correct": 1
    },
    {
        "num": 13,
        "question": "QUALE È LA SUPERFICIE MASSIMA CHE DEVE ESSERE DESTINATA A PROTEZIONE DELLA FAUNA?",
        "options": [
            "Il 10% del territorio agro silvo pastorale.",
            "Il 20% del territorio agro silvo pastorale.",
            "Il 30% del territorio agro silvo pastorale."
        ],
        "correct": 2
    },
    {
        "num": 14,
        "question": "A QUALE DISTANZA DA UN AMBITO PROTETTO (OASI, ZONA DI RIPOPOLAMENTO ECC.) È CONSENTITA LA CACCIA VAGANTE?",
        "options": [
            "Non deve osservare alcuna distanza purché l’azione di caccia si esaurisca fuori dalla zona.",
            "Ad una distanza di almeno 150 metri.",
            "Ad una distanza di almeno 100 metri."
        ],
        "correct": 1
    },
    {
        "num": 15,
        "question": "QUAL È L’ENTE CHE STABILISCE IL CALENDARIO VENATORIO?",
        "options": [
            "La regione.",
            "Il comune.",
            "La provincia."
        ],
        "correct": 0
    },
    {
        "num": 16,
        "question": "UN CACCIATORE, CHE PER UN ANNO INTENDA NON ESERCITARE L’ATTIVITÀ VENATORIA, È TENUTO AL PAGAMENTO DELLA TASSA DI CONCESSIONE REGIONALE?",
        "options": [
            "Sì, il pagamento è dovuto per il possesso della licenza.",
            "No.",
            "Deve pagare solo la quota proporzionale al tempo di utilizzo."
        ],
        "correct": 1
    },
    {
        "num": 17,
        "question": "CHE COSA DEVE FARE CHI VUOLE ESERCITARE LA CACCIA DA APPOSTAMENTO FISSO CON RICHIAMI VIVI?",
        "options": [
            "Deve effettuare l’opzione per la scelta della forma di caccia in via esclusiva.",
            "Deve possedere dei richiami autorizzati dalla provincia.",
            "Deve avere l’autorizzazione dal vicino del fondo."
        ],
        "correct": 0
    },
    {
        "num": 18,
        "question": "NEI 12 MESI SUCCESSIVI AL RILASCIO DELLA PRIMA LICENZA IL CACCIATORE PUÒ:",
        "options": [
            "Esercitare la caccia solo da appostamento fisso o temporaneo opportunamente autorizzato.",
            "Esercitare la caccia solo alla selvaggina stanziale.",
            "Esercitare la caccia unitamente ad altro cacciatore in possesso di licenza da almeno 3 anni."
        ],
        "correct": 2
    },
    {
        "num": 19,
        "question": "CHI DISTRIBUISCE IL TESSERINO REGIONALE PER L’ESERCIZIO DELLA CACCIA?",
        "options": [
            "La prefettura.",
            "Il comune di residenza.",
            "La questura."
        ],
        "correct": 1
    },
    {
        "num": 20,
        "question": "QUALE È L’ETÀ MINIMA RICHIESTA DALLA LEGGE PER ESERCITARE LA CACCIA?",
        "options": [
            "16 anni.",
            "18 anni.",
            "21 anni."
        ],
        "correct": 1
    },
    {
        "num": 21,
        "question": "QUALE È LA DURATA DELLA LICENZA DI CACCIA?",
        "options": [
            "Dieci anni.",
            "Due anni.",
            "Sei anni."
        ],
        "correct": 2
    },
    {
        "num": 22,
        "question": "A CHI DEVE ESSERE INOLTRATA LA DENUNCIA DI POSSESSO DI UN’ARMA DA CACCIA?",
        "options": [
            "Alla provincia.",
            "All’autorità di polizia competente per territorio.",
            "Alla prefettura."
        ],
        "correct": 1
    },
    {
        "num": 23,
        "question": "LA FAUNA SELVATICA A CHI APPARTIENE?",
        "options": [
            "È patrimonio della regione.",
            "È patrimonio indisponibile dello Stato.",
            "È patrimonio dell’A.T.C. in cui si trova."
        ],
        "correct": 1
    },
    {
        "num": 24,
        "question": "ENTRO QUANTI GIORNI SI DEVE ESIBIRE, AGLI ORGANI DI CONTROLLO, LA LICENZA DI CACCIA DIMENTICATA A CASA?",
        "options": [
            "Tre giorni.",
            "Cinque giorni.",
            "Otto giorni."
        ],
        "correct": 1
    },
    {
        "num": 25,
        "question": "CHI PROVVEDE AL CONTROLLO DELLE SPECIE DI SELVAGGINA CHE, MOLTIPLICANDOSI ECCESSIVAMENTE, ARRECHINO DANNI ALLE COLTURE AGRICOLE?",
        "options": [
            "La questura.",
            "La regione.",
            "Il sindaco."
        ],
        "correct": 1
    },
    {
        "num": 26,
        "question": "DA CHI VIENE ADOTTATO IL PROVVEDIMENTO DI ISTITUZIONE DI ZONE PER L’ADDESTRAMENTO E PER LE PROVE DI QUALIFICAZIONE DEI CANI DA CACCIA?",
        "options": [
            "Dall’A.T.C. competente per territorio.",
            "Dall’ente pubblico individuato dalla vigente normativa regionale.",
            "Dal comune competente per territorio."
        ],
        "correct": 1
    },
    {
        "num": 27,
        "question": "CHI AUTORIZZA L’ISTITUZIONE DI CENTRI PRIVATI DI RIPRODUZIONE DELLA FAUNA SELVATICA?",
        "options": [
            "L’A.T.C. (Ambito territoriale di caccia).",
            "La regione.",
            "La provincia."
        ],
        "correct": 1
    },
    {
        "num": 28,
        "question": "COSA È IL CALENDARIO VENATORIO?",
        "options": [
            "L’elenco delle giornate in cui è consentita la caccia.",
            "Il documento annuale, pubblicato dalla regione, che stabilisce, tra l’altro, i periodi di caccia per le varie specie.",
            "Il documento, pubblicato ogni due anni dalla provincia, che indica le date di apertura e chiusura della caccia e le norme da rispettare."
        ],
        "correct": 1
    },
    {
        "num": 29,
        "question": "DA CHI VIENE RILASCIATO IL PORTO D’ARMI PER USO CACCIA?",
        "options": [
            "Dal questore.",
            "Dal sindaco.",
            "Dalla provincia."
        ],
        "correct": 0
    },
    {
        "num": 30,
        "question": "L’AUTORIZZAZIONE RILASCIATA DALL’ENTE PUBBLICO INDIVIDUATO DALLA VIGENTE NORMATIVA PER LA COSTITUZIONE DI UN APPOSTAMENTO HA LA DURATA DI:",
        "options": [
            "Almeno 5 anni.",
            "Due annate venatorie.",
            "Per sempre."
        ],
        "correct": 0
    },
    {
        "num": 31,
        "question": "CHI RILASCIA LA LICENZA DI PORTO DI FUCILE AI SENSI DELLA LEGISLAZIONE VIGENTE?",
        "options": [
            "La regione.",
            "La provincia.",
            "L’autorità di pubblica sicurezza."
        ],
        "correct": 2
    },
    {
        "num": 32,
        "question": "IL TESSERINO REGIONALE PER L’ESERCIZIO DELLA CACCIA PER QUANTE STAGIONI VENATORIE È VALIDO?",
        "options": [
            "Per una stagione venatoria.",
            "Per sei stagioni venatorie.",
            "Finché è valida la licenza."
        ],
        "correct": 0
    },
    {
        "num": 33,
        "question": "PER ANDARE A CACCIA È OBBLIGATORIO ESSERE ASSICURATI PER LA RESPONSABILITÀ CIVILE VERSO TERZI?",
        "options": [
            "Sì.",
            "No, è facoltativo.",
            "Sì, solo per determinate forme di caccia."
        ],
        "correct": 0
    },
    {
        "num": 34,
        "question": "CHE COSA COMPORTA CACCIARE SENZA LICENZA?",
        "options": [
            "Una sanzione amministrativa.",
            "Una denuncia penale per porto abusivo di arma da fuoco.",
            "Nessuna sanzione."
        ],
        "correct": 1
    },
    {
        "num": 35,
        "question": "PER POTER IMPIANTARE UN APPOSTAMENTO FISSO OCCORRE IL CONSENSO DI CHI?",
        "options": [
            "Della regione.",
            "Della provincia.",
            "Del proprietario o del conduttore del terreno."
        ],
        "correct": 2
    },
    {
        "num": 36,
        "question": "PER ALLEVARE FAUNA SELVATICA OCCORRE L’AUTORIZZAZIONE?",
        "options": [
            "No, è sufficiente comunicarlo alla questura.",
            "Sì, del comitato direttivo dell’A.T.C. (Ambito territoriale di caccia) competente.",
            "Sì, della regione."
        ],
        "correct": 2
    },
    {
        "num": 37,
        "question": "CHE COSA SI INTENDE PER CARTA REGIONALE DELLE VOCAZIONI FAUNISTICHE DEL TERRITORIO?",
        "options": [
            "La carta che indica la presenza dei diversi tipi di selvaggina.",
            "La delimitazione geografica dei territori aventi condizioni ambientali idonee alla riproduzione naturale delle specie.",
            "La carta che indica le località dove possono essere cacciate determinate specie selvatiche oggetto di prelievo venatorio."
        ],
        "correct": 1
    },
    {
        "num": 38,
        "question": "DA QUANTI ANNI, COME MINIMO, DEVE AVERE LA LICENZA DI CACCIA IL CACCIATORE CHE ACCOMPAGNA UN ALTRO CACCIATORE CHE HA LA PRIMA LICENZA?",
        "options": [
            "Due anni.",
            "Tre anni.",
            "Cinque anni."
        ],
        "correct": 1
    },
    {
        "num": 39,
        "question": "CHI PUÒ AUTORIZZARE GLI IMPIANTI DI CATTURA E INANELLAMENTO DELLE SPECIE SELVATICHE AD USO DI RICHIAMO?",
        "options": [
            "L’ente pubblico individuato dalla vigente normativa.",
            "Il comune.",
            "L’associazione venatoria."
        ],
        "correct": 0
    },
    {
        "num": 40,
        "question": "A QUALE CONTROLLO DEVE ESSERE SOGGETTA LA SELVAGGINA, PRIMA DI ESSERE IMMESSA PER SCOPI DI RIPOPOLAMENTO?",
        "options": [
            "Al controllo veterinario che certifichi che la selvaggina è esente da malattie.",
            "Al controllo delle guardie venatorie presenti.",
            "Al controllo dei rappresentanti delle associazioni zoofile."
        ],
        "correct": 0
    },
    {
        "num": 41,
        "question": "IL CALENDARIO VENATORIO RISPETTO ALLE SPECIE CACCIABILI SECONDO LA LEGGE 157/92, PUÒ:",
        "options": [
            "Ampliarne il numero.",
            "Solo mantenerle invariate.",
            "Ridurne il numero."
        ],
        "correct": 2
    },
    {
        "num": 42,
        "question": "È CONSENTITO L’ESERCIZIO VENATORIO NELLE OASI DI PROTEZIONE DELLA FAUNA?",
        "options": [
            "Sì, ma solamente per i cacciatori di selezione.",
            "Sì, ma solamente per i proprietari dei terreni.",
            "No, essendo vietato a chiunque."
        ],
        "correct": 2
    },
    {
        "num": 43,
        "question": "È CONSENTITO CATTURARE O UCCIDERE SELVAGGINA CON L’AUSILIO DEI FARI?",
        "options": [
            "No, in nessun caso.",
            "Sì, soltanto prima della levata del sole.",
            "Sì, ma solo per fini amatoriali."
        ],
        "correct": 0
    },
    {
        "num": 44,
        "question": "COSA SI INTENDE PER CACCIA CONTROLLATA?",
        "options": [
            "La caccia effettuata sotto il controllo degli agenti di vigilanza.",
            "La caccia soggetta a limitazione di capi, di specie, di tempi e luoghi.",
            "La caccia effettuata nei fondi recintati."
        ],
        "correct": 1
    },
    {
        "num": 45,
        "question": "SI POSSONO IMPIANTARE APPOSTAMENTI FISSI DI CACCIA SUI VALICHI MONTANI?",
        "options": [
            "No, mai.",
            "Sì, ma solo a distanza di 100 metri da essi.",
            "Sì, ma solo nella zona Alpi."
        ],
        "correct": 0
    },
    {
        "num": 46,
        "question": "È SEMPRE CONSENTITO L’ADDESTRAMENTO DEI CANI DA CACCIA?",
        "options": [
            "Sì, sempre.",
            "No, solo in determinati periodi.",
            "No, solo nelle giornate di silenzio venatorio."
        ],
        "correct": 1
    },
    {
        "num": 47,
        "question": "LE OASI DI PROTEZIONE DELLA FAUNA QUALI FINALITÀ PERSEGUONO?",
        "options": [
            "Una finalità privata a favore dei proprietari dei terreni.",
            "Una finalità pubblica a favore dell’intera comunità.",
            "Una finalità privata a favore dei naturalisti."
        ],
        "correct": 1
    },
    {
        "num": 48,
        "question": "QUALE QUOTA DEL TERRITORIO AGRO SILVO PASTORALE PUÒ ESSERE DESTINATO ALLA GESTIONE PRIVATA DELLA CACCIA, AI SENSI DELL’ART. 9 DELLA L.R. 26/2012?",
        "options": [
            "Massimo 10%.",
            "Minimo 10%.",
            "Massimo 20%."
        ],
        "correct": 0
    },
    {
        "num": 49,
        "question": "NELLE ZONE DI RIPOPOLAMENTO E CATTURA, L’ASSOCIAZIONE CHE STIPULA LA CONVENZIONE PER LA GESTIONE PUÒ AUTORIZZARE GARE PER CANI DA CACCIA?",
        "options": [
            "Sì, sentito il C.T.F.V.R.",
            "No, non è mai possibile.",
            "Sì, purché siano presenti le guardie venatorie."
        ],
        "correct": 0
    },
    {
        "num": 50,
        "question": "QUAL È L’ESTENSIONE DEI TERRENI CHE SI POSSONO INCLUDERE COATTIVAMENTE NELLE AZIENDE VENATORIE?",
        "options": [
            "Minimo 10% della superficie dell’azienda.",
            "Massimo 10% della superficie dell’azienda.",
            "Dal 10 al 20% della superficie dell’azienda."
        ],
        "correct": 1
    },
    {
        "num": 51,
        "question": "IL CACCIATORE CHE INTENDA REALIZZARE UN APPOSTAMENTO FISSO CON REALIZZAZIONE DI STRUTTURE FISSE SU UN FONDO PRIVATO:",
        "options": [
            "Deve avere il consenso scritto del proprietario e del conduttore del terreno.",
            "Non necessita di alcuna autorizzazione.",
            "Incorre in una sanzione amministrativa."
        ],
        "correct": 0
    },
    {
        "num": 52,
        "question": "QUALE DISTANZA DEVE ESSERCI TRA DUE APPOSTAMENTI TEMPORANEI IN EFFETTUO ESERCIZIO DI CACCIA?",
        "options": [
            "50 metri.",
            "100 metri.",
            "150 metri."
        ],
        "correct": 2
    },
    {
        "num": 53,
        "question": "CHE COSA È UN FONDO CHIUSO?",
        "options": [
            "Un allevamento di selvaggina protetta.",
            "Un appezzamento di terreno recintato nel quale la caccia è vietata.",
            "Una riserva privata di caccia tabellata e recintata a cura del proprietario."
        ],
        "correct": 1
    },
    {
        "num": 54,
        "question": "QUANTO DEVE ESSERE ALTA LA RECINZIONE DI UN FONDO CHIUSO?",
        "options": [
            "1,20 metri.",
            "1,50 metri.",
            "1,80 metri."
        ],
        "correct": 0
    },
    {
        "num": 55,
        "question": "CHE COSA SI INTENDE PER ZONA DI RIPOPOLAMENTO E CATTURA?",
        "options": [
            "Una zona dove è vietato l’abbattimento della selvaggina.",
            "Una zona destinata alla riproduzione della selvaggina.",
            "Una zona delimitata per la cattura di volatili e mammiferi."
        ],
        "correct": 1
    },
    {
        "num": 56,
        "question": "NELLE AZIENDE FAUNISTICO VENATORIE, A CHI È CONSENTITA LA CACCIA?",
        "options": [
            "Ai residenti nel comune in cui si trova l’azienda.",
            "Ai proprietari dei terreni inclusi nell’azienda.",
            "Solo agli autorizzati dal concessionario."
        ],
        "correct": 2
    },
    {
        "num": 57,
        "question": "SI PUÒ PREDISPORRE UN APPOSTAMENTO TEMPORANEO ALL’INTERNO DI UNA ZONA DI RIPOPOLAMENTO E CATTURA?",
        "options": [
            "Sì, se c’è il consenso del proprietario del terreno.",
            "No.",
            "Sì, purché non vi sia disturbo della selvaggina."
        ],
        "correct": 1
    },
    {
        "num": 58,
        "question": "IN QUALE PERIODO DELL’ANNO È CONSENTITO CACCIARE LA VOLPE AI SENSI DELLA LEGGE 157/1992?",
        "options": [
            "Dal 18 agosto al 10 marzo.",
            "Dalla terza domenica di settembre al 31 gennaio.",
            "Dalla prima domenica di dicembre al 10 marzo."
        ],
        "correct": 0
    },
    {
        "num": 59,
        "question": "È CONSENTITO CACCIARE LA GRU?",
        "options": [
            "Sì, in quanto specie migratoria.",
            "Sì, ma solo dal 18 agosto al 31 dicembre.",
            "Mai, perché specie particolarmente protetta."
        ],
        "correct": 2
    },
    {
        "num": 60,
        "question": "È CONSENTITO CACCIARE L’AQUILA?",
        "options": [
            "Sì, se arreca danni agli animali domestici.",
            "No, in nessun caso.",
            "Sì se sta predando specie selvatiche oggetto di caccia."
        ],
        "correct": 1
    },
    {
        "num": 61,
        "question": "È CONSENTITA LA CACCIA DA APPOSTAMENTO AL BECCACCINO?",
        "options": [
            "Sì, ma esclusivamente nelle marcite recintate.",
            "Sì, ma soltanto prima della levata del sole.",
            "No, perché vietato dalla legge."
        ],
        "correct": 2
    },
    {
        "num": 62,
        "question": "È CONSENTITO FARE USO DEI RICHIAMI ELETTROACUSTICI DURANTE LA CACCIA?",
        "options": [
            "Sì, se vengono adoperati per la caccia da appostamento.",
            "No, perché la legge lo vieta.",
            "Sì, purché i riproduttori del suono siano amplificati."
        ],
        "correct": 1
    },
    {
        "num": 63,
        "question": "QUANDO LA CACCIA COSÌDDETTA A RASTRELLO È VIETATA?",
        "options": [
            "Se praticata a più di tre persone in linea.",
            "Se praticata con più di tre cani.",
            "Se praticata a più specie di selvatici contemporaneamente."
        ],
        "correct": 0
    },
    {
        "num": 64,
        "question": "IN QUALI ORE DEL GIORNO È CONSENTITA LA CACCIA?",
        "options": [
            "Dall’alba al tramonto.",
            "Da un’ora prima della levata del sole al tramonto.",
            "Dalla levata del sole ad un’ora dopo il tramonto."
        ],
        "correct": 1
    },
    {
        "num": 65,
        "question": "IL TESSERINO REGIONALE PER LA CACCIA DOVE È VALIDO?",
        "options": [
            "Nell’ambito della provincia di residenza.",
            "In tutto il territorio nazionale.",
            "Nell’ambito della regione di residenza."
        ],
        "correct": 1
    },
    {
        "num": 66,
        "question": "A CHE COSA SERVE IL TESSERINO REGIONALE DI CACCIA?",
        "options": [
            "A segnare i giorni nei quali si va a caccia e la selvaggina abbattuta.",
            "Come documento di riconoscimento.",
            "Per andare a caccia solo fuori regione."
        ],
        "correct": 0
    },
    {
        "num": 67,
        "question": "A CHI APPARTIENE LA SELVAGGINA ABBATTUTA?",
        "options": [
            "A chi la trova.",
            "A colui che l’ha cacciata.",
            "Al proprietario del cane che se ne impossessa per primo."
        ],
        "correct": 1
    },
    {
        "num": 68,
        "question": "CHE DIFFERENZA PASSA TRA LA CACCIA D’ATTESA E LA CACCIA DA APPOSTAMENTO?",
        "options": [
            "Nessuna differenza.",
            "Nella caccia d’attesa il cacciatore se si nasconde sfrutta elementi naturali, nella caccia d’appostamento costruisce un nascondiglio.",
            "Nella caccia d’attesa si possono cacciare solo uccelli, in quella d’appostamento solo mammiferi."
        ],
        "correct": 1
    },
    {
        "num": 69,
        "question": "GLI AGENTI CHE ESERCITANO ANCHE FUNZIONE DI POLIZIA GIUDIZIARIA IN CASO DI INFRAZIONE ALLA LEGGE SULLA CACCIA COSA POSSONO SEQUESTRARE?",
        "options": [
            "Il fucile e il cane.",
            "Solo il fucile.",
            "Il fucile, gli altri mezzi di caccia e la selvaggina, escluso il cane e i richiami vivi autorizzati."
        ],
        "correct": 2
    },
    {
        "num": 70,
        "question": "QUANDO PUÒ ESSERE PRATICATA, AI SENSI DELLA LEGGE 157/1992, LA CACCIA AL BECCACCINO E AL COLOMBACCIO?",
        "options": [
            "Dal 18 agosto al 10 marzo.",
            "Dalla terza domenica di settembre al 31 gennaio.",
            "Dal 1° novembre al 30 novembre."
        ],
        "correct": 1
    },
    {
        "num": 71,
        "question": "IN QUALE PERIODO DELL’ANNO È CONSENTITO CACCIARE LA CESENA, AI SENSI DELLA LEGGE 157/1992?",
        "options": [
            "Dal 18 agosto al 10 marzo.",
            "Dalla terza domenica di settembre al 31 gennaio.",
            "Dal 1° novembre al 30 novembre."
        ],
        "correct": 1
    },
    {
        "num": 72,
        "question": "CHE DIFFERENZA PASSA TRA UN’OASI DI PROTEZIONE E UN PARCO NAZIONALE?",
        "options": [
            "Nell’oasi è possibile cacciare, nel parco no.",
            "Nell’oasi si trovano uccelli. Nel parco nazionale solo mammiferi.",
            "Sia nell’oasi che nel parco nazionale la selvaggina è protetta. Il parco è di dimensione più vasta e in esso si trovano mammiferi e uccelli particolarmente protetti."
        ],
        "correct": 2
    },
    {
        "num": 73,
        "question": "IN QUALE PERIODO DELL’ANNO È CONSENTITA LA CACCIA ALLE ALLODOLE, AI SENSI DELLA LEGGE 157/1992?",
        "options": [
            "Dal 18 agosto al 10 marzo.",
            "Dalla terza domenica di settembre al 31 dicembre.",
            "Dal 1° novembre al 31 gennaio."
        ],
        "correct": 1
    },
    {
        "num": 74,
        "question": "A CHI APPARTIENE LA FAUNA SELVATICA ITALIANA?",
        "options": [
            "Allo Stato che la tutela nell’interesse della comunità nazionale ed internazionale.",
            "È res nullius (cosa di nessuno).",
            "Ai proprietari dei terreni su cui vive."
        ],
        "correct": 0
    },
    {
        "num": 75,
        "question": "LA LEGGE CONSENTE L’UCCELLAGIONE?",
        "options": [
            "Sì, con reti particolari.",
            "Non è consentita.",
            "È consentita solo in alcuni periodi."
        ],
        "correct": 1
    },
    {
        "num": 76,
        "question": "IL TESSERINO REGIONALE È OBBLIGATORIO PER TUTTI I CACCIATORI?",
        "options": [
            "No, solo per le guardie giurate.",
            "No, solo per i cittadini non residenti nella regione.",
            "Sì, è obbligatorio per tutti i cacciatori."
        ],
        "correct": 2
    },
    {
        "num": 77,
        "question": "QUALI SONO I MASSIMALI PER L’ASSICURAZIONE E PER LA RESPONSABILITÀ VERSO TERZI?",
        "options": [
            "€ 387.342,67 per danni a persone e € 129.144,22 per danni a cose e animali.",
            "€ 25.822,84 per persone e € 7.746,85 per cose e animali.",
            "€ 20.658,28 per persone e € 5.164,57 per cose e animali."
        ],
        "correct": 0
    },
    {
        "num": 78,
        "question": "IN QUALE PERIODO È CONSENTITA, AI SENSI DELLA LEGGE 157/1992, LA CACCIA AL GERMANO REALE?",
        "options": [
            "Dalla terza domenica di settembre al 31 gennaio.",
            "Dalla terza domenica di settembre alla fine di febbraio.",
            "Tutto l’anno."
        ],
        "correct": 0
    },
    {
        "num": 79,
        "question": "COSA FARE NEL CASO IN CUI SI ABBATTE UN UCCELLO INANELLATO?",
        "options": [
            "Informare l’I.S.P.R.A. (ex I.N.F.S.) o il comune del territorio dove è avvenuto il fatto.",
            "Informare l’assessorato caccia della provincia.",
            "Informare l’associazione venatoria alla quale si è iscritti."
        ],
        "correct": 0
    },
    {
        "num": 80,
        "question": "QUALI SONO LE SPECIE PER LE QUALI È POSSIBILE AVERE ESEMPLARI PER USO “RICHIAMI VIVI”?",
        "options": [
            "Quaglia, tortora dal collare, porciglione, cardellino e verdone.",
            "Allodola, cesena, tordo sassello, tordo bottaccio, merlo, pavoncella e colombaccio.",
            "Civetta, barbagianni, upupa, germano reale, fagiano."
        ],
        "correct": 1
    },
    {
        "num": 81,
        "question": "QUANTI ESEMPLARI DI RICHIAMI VIVI, PER OGNI SPECIE CONSENTITA, SI POSSONO TENERE PER LA CACCIA DA APPOSTAMENTO FISSO?",
        "options": [
            "Fino a cinque esemplari per specie e fino al massimo di trenta unità in totale.",
            "Fino a dieci esemplari per specie e fino al massimo di quaranta unità in totale.",
            "Fino a tre esemplari per specie e fino al massimo di trenta unità in totale."
        ],
        "correct": 1
    },
    {
        "num": 82,
        "question": "QUANTI ESEMPLARI DI RICHIAMI VIVI, FRA LE SPECIE CONSENTITE, SI POSSONO TENERE PER LA CACCIA DA APPOSTAMENTO TEMPORANEO?",
        "options": [
            "Fino a dieci.",
            "Fino a cinque.",
            "Fino a quindici."
        ],
        "correct": 0
    },
    {
        "num": 83,
        "question": "CHE COSA SONO LE OASI DI PROTEZIONE?",
        "options": [
            "Sono zone destinate al rifugio, alla riproduzione ed alla sosta della fauna selvatica.",
            "Sono zone ricoperte da vegetazione in aree deserte.",
            "Sono zone interdette all’accesso umano."
        ],
        "correct": 0
    },
    {
        "num": 84,
        "question": "A CHE DISTANZA SI PUÒ CACCIARE DA UN TRATTORE IN FUNZIONE?",
        "options": [
            "150 mt.",
            "75 mt.",
            "100 mt."
        ],
        "correct": 2
    },
    {
        "num": 85,
        "question": "SI PUÒ CACCIARE IN UNO STAGNO GHIACCIATO?",
        "options": [
            "No.",
            "Sì.",
            "Sì, solo se non piove."
        ],
        "correct": 0
    },
    {
        "num": 86,
        "question": "SI PUÒ CACCIARE IN UN TERRENO ALLAGATO DA UNA PIENA DI UN FIUME?",
        "options": [
            "Sì.",
            "No.",
            "Sì, solo se si conosce approfonditamente il territorio."
        ],
        "correct": 1
    },
    {
        "num": 87,
        "question": "È CONSENTITO PREDISPORRE IL FUCILE CON SCATTO PROVOCATO DALLA PREDA NELLA CACCIA AL CINGHIALE?",
        "options": [
            "Sì.",
            "Sì, solo se si rimane ad una distanza massima di 5 mt. dal fucile.",
            "No."
        ],
        "correct": 2
    },
    {
        "num": 88,
        "question": "QUANTI ANNI DURA LA LICENZA PER PORTO DI FUCILE AD USO CACCIA?",
        "options": [
            "3 anni.",
            "6 anni.",
            "9 anni."
        ],
        "correct": 1
    },
    {
        "num": 89,
        "question": "DOPO QUANTI MESI DAL RILASCIO DELLA LICENZA DI PORTO DI FUCILE AD USO CACCIA, IL CACCIATORE PUÒ ANDARE A CACCIA DA SOLO?",
        "options": [
            "10 mesi.",
            "12 mesi.",
            "14 mesi."
        ],
        "correct": 1
    },
    {
        "num": 90,
        "question": "DOPO QUANTI MESI DAL RILASCIO DELLA LICENZA DI PORTO DI FUCILE AD USO CACCIA, IL CACCIATORE PUÒ ANDARE A CACCIA DA SOLO, CON ARCO O CON IL FALCO?",
        "options": [
            "10 mesi.",
            "12 mesi.",
            "14 mesi."
        ],
        "correct": 1
    },
    {
        "num": 91,
        "question": "IL FROSONE È MIGRATORE?",
        "options": [
            "Sì, passa in autunno e in marzo.",
            "Sì, passa a fine estate.",
            "No, è stanziale."
        ],
        "correct": 0
    },
    {
        "num": 92,
        "question": "QUAL È L’AMBIENTE NATURALE DEL VERDONE?",
        "options": [
            "Campagne coltivate a pascolo, cespugli, siepi.",
            "Campagne alberate, boschi, boschetti, giardini, frutteti, parchi.",
            "Zone sassose e rocciose, torrenti, fiumi."
        ],
        "correct": 1
    },
    {
        "num": 93,
        "question": "IL VERDONE È UN INSETTIVORO?",
        "options": [
            "Sì.",
            "No, è prevalentemente granivoro.",
            "No, si ciba di frutta."
        ],
        "correct": 1
    },
    {
        "num": 94,
        "question": "QUAL È L’AMBIENTE NATURALE DEL PICCHIO ROSSO MAGGIORE?",
        "options": [
            "Campagne coltivate e cespugliate con boschetti.",
            "Boschi di latifoglie e conifere, parchi e giardini.",
            "Basse colline aride e rocciose."
        ],
        "correct": 1
    },
    {
        "num": 95,
        "question": "DOVE NIDIFICA LA CICOGNA?",
        "options": [
            "Nei canneti di palude.",
            "Sul terreno.",
            "Su alberi ed edifici."
        ],
        "correct": 2
    },
    {
        "num": 96,
        "question": "QUAL È L’AMBIENTE NATURALE DELLA TORTORA DAL COLLARE?",
        "options": [
            "Parchi, giardini, pianure alberate, boschi cedui.",
            "Boschi di alta montagna.",
            "Grandi pianure cespugliate."
        ],
        "correct": 0
    },
    {
        "num": 97,
        "question": "QUAL È L’AMBIENTE NATURALE DEL RONDONE?",
        "options": [
            "Boschi con ampie radure in montagna.",
            "Boschi di alta montagna.",
            "Città e villaggi con edifici anche diroccati, rocce e foreste."
        ],
        "correct": 2
    },
    {
        "num": 98,
        "question": "QUAL È L’AMBIENTE NATURALE DELL’UPUPA?",
        "options": [
            "Campagne alberate, boschetti con radure, margini di boschi, parchi, ecc.",
            "Campagne coltivate, cespugliate o senza copertura arborea.",
            "Zone rocciose o arbustive di alta collina."
        ],
        "correct": 0
    },
    {
        "num": 99,
        "question": "QUAL È L’AMBIENTE NATURALE DEL PICCHIO VERDE?",
        "options": [
            "Colline con boschi folti.",
            "Boschi, campagne con alberi, giardini e parchi.",
            "Folti boschi di alta montagna."
        ],
        "correct": 1
    },
    {
        "num": 100,
        "question": "CHE COSA SI INTENDE PER SELVAGGINA MIGRATORIA?",
        "options": [
            "Quella selvaggina che vive tutto l’anno in un determinato territorio.",
            "Quella selvaggina che viene allevata in voliera.",
            "Quella selvaggina che compie spostamenti periodici da un territorio ad un altro."
        ],
        "correct": 2
    },
    {
        "num": 101,
        "question": "QUAL È L’AMBIENTE NATURALE DEL GUFO DI PALUDE?",
        "options": [
            "Zone coltivate con piccoli boschi.",
            "Zone di pianura coltivate e cespugliate.",
            "Canali, risaie, brughiere, ecc."
        ],
        "correct": 2
    },
    {
        "num": 102,
        "question": "QUAL È L’AMBIENTE NATURALE DELL’ALLOCCO?",
        "options": [
            "Boschi di alta montagna di conifere e latifoglie.",
            "Grotte, zone rocciose e cespugliate.",
            "Boschi, parchi, case di campagna, rovine."
        ],
        "correct": 2
    },
    {
        "num": 103,
        "question": "QUAL È L’AMBIENTE NATURALE DELLA BECCACCIA?",
        "options": [
            "Vive in boschi con alberi ad alto fusto, sottobosco e radure.",
            "Vive solo in boschi di alta montagna, folti, con erbe alte e fitte.",
            "Vive solo in boschi di pianura con folto sottobosco percorso dal fuoco."
        ],
        "correct": 0
    },
    {
        "num": 104,
        "question": "QUALI SONO GLI ELEMENTI DETERMINANTI PER LA SCELTA DI UN HABITAT?",
        "options": [
            "L’acqua, l’erba per fare il nido, i vermi/insetti.",
            "Il clima, la presenza di cibo, il luogo dove nidificare.",
            "Il clima, l’acqua, i vermi/insetti."
        ],
        "correct": 1
    },
    {
        "num": 105,
        "question": "QUAL È L’AMBIENTE NATURALE DEL CHIURLO?",
        "options": [
            "Lagune con canneti e fiumi con abbondante ed intricata vegetazione.",
            "Brughiere con muschio, torbiere e stagni, estuari melmosi e sabbiosi.",
            "Laghi e valli salmastre."
        ],
        "correct": 1
    },
    {
        "num": 106,
        "question": "PERCHÉ GLI UCCELLI MIGRANO?",
        "options": [
            "Per ricercare condizioni ambientali più favorevoli per riprodursi.",
            "Per ricercare condizioni ambientali più favorevoli per riprodursi e alimentarsi.",
            "Per ricercare condizioni ambientali più favorevoli per alimentarsi."
        ],
        "correct": 1
    },
    {
        "num": 107,
        "question": "QUAL È L’AMBIENTE NATURALE DEL RIGOGOLO?",
        "options": [
            "Vaste pianure a pascolo con irrigazione.",
            "Pianure cespugliate assolate.",
            "Boschi di essenze miste, parchi, giardini, querceti, frutteti."
        ],
        "correct": 2
    },
    {
        "num": 108,
        "question": "IL RIGOGOLO È MIGRATORE?",
        "options": [
            "Sì, passa da aprile ai primi di maggio e a settembre.",
            "Sì, passa a marzo e a novembre.",
            "No, è erratico e nidifica."
        ],
        "correct": 0
    },
    {
        "num": 109,
        "question": "I LUÍ SONO UCCELLI UTILI ALL’AGRICOLTURA?",
        "options": [
            "No, sono granivori e possono danneggiare l’agricoltura.",
            "Sì, in quanto nidificano nelle cavità.",
            "Sì, perché sono insettivori."
        ],
        "correct": 2
    },
    {
        "num": 110,
        "question": "QUALE È L’AMBIENTE NATURALE DELLA BALLERINA GIALLA?",
        "options": [
            "Colline boscose e rocciose.",
            "Pianure prative e cespugliate.",
            "Rive di torrenti, stagni e rive del mare."
        ],
        "correct": 2
    },
    {
        "num": 111,
        "question": "LE PAVONCELLE SONO:",
        "options": [
            "Erratici.",
            "Migratori.",
            "Stanziali."
        ],
        "correct": 1
    },
    {
        "num": 112,
        "question": "CHE COSA È UN QUARTIERE DI RIPRODUZIONE?",
        "options": [
            "Un territorio nel quale le specie migratorie passano l’inverno.",
            "Tutti i territori sorvolati dagli uccelli durante la migrazione.",
            "Un territorio nel quale le specie migratorie si riproducono e allevano la prole."
        ],
        "correct": 2
    },
    {
        "num": 113,
        "question": "QUAL È L’AMBIENTE NATURALE DELLA TACCOLA?",
        "options": [
            "Ambienti antropizzati.",
            "Boschi cedui, campagne alberate, frutteti, cespugli.",
            "Zone umide, risaie, paludi."
        ],
        "correct": 0
    },
    {
        "num": 114,
        "question": "IN CHE PERIODO SI PUÒ TROVARE IL BECCAFICO?",
        "options": [
            "In inverno, lungo le direttrici migratorie.",
            "A fine estate ed in autunno.",
            "Dalla primavera alla fine dell’estate."
        ],
        "correct": 1
    },
    {
        "num": 115,
        "question": "QUAL È LA DIFFERENZA MORFOLOGICA FRA IL CONIGLIO SELVATICO E LA LEPRE?",
        "options": [
            "Il coniglio selvatico ha zampe più lunghe, coda più grossa e cranio più pesante.",
            "Nel coniglio selvatico le zampe anteriori sono più grosse e lunghe; inoltre il pelo è più chiaro e folto.",
            "Nella lepre le orecchie e le zampe posteriori sono più lunghe e il cranio più grosso."
        ],
        "correct": 2
    },
    {
        "num": 116,
        "question": "QUAL È IL CIBO PRINCIPALE DEL TASSO?",
        "options": [
            "Graminacee, semi ed erbe.",
            "Esclusivamente frutta e tuberi.",
            "Radici, frutta e piccoli animali."
        ],
        "correct": 2
    },
    {
        "num": 117,
        "question": "L’ISTRICE È NOTTURNO O DIURNO? DI COSA SI CIBA?",
        "options": [
            "Ha abitudini crepuscolari. Si ciba di erbe.",
            "Ha abitudini diurne. Si ciba prevalentemente di frutta.",
            "Ha abitudini notturne. Si ciba di radici, bulbi e cortecce."
        ],
        "correct": 2
    },
    {
        "num": 118,
        "question": "CHE COSA È UN QUARTIERE DI TRANSITO?",
        "options": [
            "Un territorio nel quale le specie migratorie si riproducono e allevano la prole.",
            "Un territorio nel quale le specie migratorie passano l’inverno.",
            "Tutti i territori sorvolati dagli uccelli durante la migrazione."
        ],
        "correct": 2
    },
    {
        "num": 119,
        "question": "DOVE COSTRUISCE IL NIDO LA STARNA?",
        "options": [
            "Sugli alberi di alto fusto.",
            "Sul terreno.",
            "Sugli arbusti."
        ],
        "correct": 1
    },
    {
        "num": 120,
        "question": "LA DONNOLA È UTILE O DANNOSA ALL’AMBIENTE?",
        "options": [
            "È utile per il controllo dei topi e delle arvicole, che caccia con assiduità.",
            "È dannosa perché si ciba dei piccoli uccelli e di altri selvatici, utili per il controllo dei topi e delle arvicole.",
            "È dannosa perché si ciba degli animali domestici come i polli e le anatre."
        ],
        "correct": 0
    },
    {
        "num": 121,
        "question": "LA FAINA E LA MARTORA SONO UTILI?",
        "options": [
            "Sì, poiché si cibano particolarmente di arvicole, topi, toporagni e altri roditori.",
            "No, possono arrecare notevoli danni alla selvaggina ed agli allevamenti domestici.",
            "No, perché predano animali di poco conto."
        ],
        "correct": 0
    },
    {
        "num": 122,
        "question": "QUAL È L’AMBIENTE NATURALE DELLA PERNICE ROSSA?",
        "options": [
            "Zone rocciose di bassa altitudine, arbusteti di tipo mediterraneo.",
            "Foreste folte di alta montagna con radure coltivate; foreste coperte di densa vegetazione.",
            "Boschi radi alternati a sassaie e cespugliati; macchia mediterranea; zone asciutte coperte da densa vegetazione."
        ],
        "correct": 0
    },
    {
        "num": 123,
        "question": "QUALE DIFFERENZA SOMATICA DISTINGUE LA PERNICE SARDA DALLA PERNICE ROSSA?",
        "options": [
            "Il colore delle zampe.",
            "Le striature alla base del collo, di colore diverso.",
            "Il colore del mantello dorsale e addominale."
        ],
        "correct": 1
    },
    {
        "num": 124,
        "question": "CHE COSA È UN QUARTIERE DI SVERNAMENTO?",
        "options": [
            "Tutti i territori sorvolati dagli uccelli durante la migrazione.",
            "Un territorio nel quale le specie migratorie passano l’inverno.",
            "Un territorio nel quale le specie migratorie si riproducono e allevano la prole."
        ],
        "correct": 1
    },
    {
        "num": 125,
        "question": "QUALE È LA CARATTERISTICA PRINCIPALE DEL MANTELLO DEL MERLO DAL COLLARE?",
        "options": [
            "Un lungo collare bianco alla base della gola.",
            "La testa ed il collo completamente bianchi.",
            "Il collo ed il dorso bianchi con striature grigie."
        ],
        "correct": 0
    },
    {
        "num": 126,
        "question": "QUAL È L’AMBIENTE NATURALE DEL CUCULO?",
        "options": [
            "Pianure incolte e cespugliate con sassaie.",
            "Campi coltivati a prato.",
            "Campagne alberate, foreste con radure, savane, canneti."
        ],
        "correct": 2
    },
    {
        "num": 127,
        "question": "IL CUCULO È MIGRATORE?",
        "options": [
            "Sì.",
            "No.",
            "È selvaggina stanziale delle nostre pianure."
        ],
        "correct": 0
    },
    {
        "num": 128,
        "question": "QUAL È L’ALIMENTO PRINCIPALE DELLA LONTRA?",
        "options": [
            "Vegetazione acquatica lungo le rive dei fiumi.",
            "Trote, anguille, gamberi, arvicole d’acqua.",
            "Pesci e gamberi."
        ],
        "correct": 1
    },
    {
        "num": 129,
        "question": "CHE COSA È IL PASSO?",
        "options": [
            "Il passaggio dai quartieri di riproduzione a quelli di svernamento.",
            "Il passaggio dai quartieri di svernamento a quelli di riproduzione.",
            "Il passaggio dai luoghi ventilati a quelli non ventilati."
        ],
        "correct": 0
    },
    {
        "num": 130,
        "question": "IL GATTO SELVATICO È PROTETTO? DI CHE COSA SI CIBA?",
        "options": [
            "No, è cacciabile e si ciba di tutti gli animali che può trovare.",
            "Sì, è parzialmente protetto. Si ciba di uccelli e anche di frutta.",
            "Sì, è particolarmente protetto. Si ciba specialmente di roditori, ma anche di uccelli, rane e occasionalmente di pesci."
        ],
        "correct": 2
    },
    {
        "num": 131,
        "question": "LA FOCA MONACA È PRESENTE IN ITALIA? È PROTETTA?",
        "options": [
            "Soltanto in Sicilia. È specie non protetta, perché dannosa alla pesca.",
            "Sì, lungo le coste del mare Adriatico e Tirreno. È specie protetta.",
            "Sì, in Sicilia e Sardegna. È specie particolarmente protetta."
        ],
        "correct": 2
    },
    {
        "num": 132,
        "question": "CHE PARTICOLARITÀ HANNO LE CORNA DEL MUFLONE?",
        "options": [
            "Sono caduche e non ramificate.",
            "Sono perenni, non ramificate e spiralate.",
            "Sono corna ramificate perenni."
        ],
        "correct": 1
    },
    {
        "num": 133,
        "question": "LO STAMBECCO È PRESENTE IN ITALIA? DOVE È PRESENTE IN MAGGIORE NUMERO?",
        "options": [
            "Sì, nelle Alpi. Nel Parco del Gran Paradiso.",
            "Sì, su tutte le Alpi e sugli Appennini. Nel Parco del Gran Sasso.",
            "Sì, sulle Alpi Orientali. Nel Parco dello Stelvio."
        ],
        "correct": 0
    },
    {
        "num": 134,
        "question": "CHE DIFFERENZA C'È DAL PUNTO DI VISTA VENATORIO TRA IL CAMOSCIO E IL CAMOSCIO D'ABRUZZO?",
        "options": [
            "Il Camoscio d'Abruzzo particolarmente protetto, mentre il camoscio delle Alpi cacciabile.",
            "Sono ambedue particolarmente protetti.",
            "Sono ambedue cacciabili secondo norme particolari."
        ],
        "correct": 0
    },
    {
        "num": 135,
        "question": "CHE PARTICOLARE HANNO LE CORNA DEI CERVIDI?",
        "options": [
            "Sono perenni e lisce.",
            "Sono perenni.",
            "Sono caduche e ramificate."
        ],
        "correct": 2
    },
    {
        "num": 136,
        "question": "QUALE È L'AMBIENTE NATURALE DEL FISCHIONE?",
        "options": [
            "Laghi, fiumi, stagni, brughiere, palude e tundre.",
            "Piccole zone paludose ad acque basse.",
            "Zone costiere con vegetazione."
        ],
        "correct": 1
    },
    {
        "num": 137,
        "question": "CHE COSA È IL RIPASSO?",
        "options": [
            "Il passaggio dai quartieri di riproduzione a quelli di svernamento.",
            "Il passaggio dai quartieri di svernamento a quelli di riproduzione.",
            "Il passaggio dai luoghi ventilati a quelli non ventilati."
        ],
        "correct": 1
    },
    {
        "num": 138,
        "question": "QUALE È L'AMBIENTE NATURALE DEL MESTOLONE?",
        "options": [
            "Zone umide con acque basse dolci o salmastre, stagni, paludi, prati allagati.",
            "Zone umide con acque profonde e salmastre.",
            "Zone umide con acque profonde dolci e prive di vegetazione."
        ],
        "correct": 0
    },
    {
        "num": 139,
        "question": "QUAL È L'AMBIENTE NATURALE DELL'ALLODOLA?",
        "options": [
            "Pianure aperte erbose e cespugliate, dune e brughiere.",
            "Pianure alberate e assolate.",
            "Boschi di alto fusto, in pianura, collina e montagna."
        ],
        "correct": 0
    },
    {
        "num": 140,
        "question": "QUAL È L'AMBIENTE NATURALE DELLA RONDINE?",
        "options": [
            "Medie colline coltivate e prive di edifici.",
            "Pianure e colline con boschi folti.",
            "Luoghi aperti, campagne con edifici, città e villaggi."
        ],
        "correct": 2
    },
    {
        "num": 141,
        "question": "QUALE È L'AMBIENTE NATURALE DEL TOPINO?",
        "options": [
            "Rive dei fiumi, cave di sabbia o ghiaia.",
            "Pianure boscate e cespugliate.",
            "Colline coltivate e rocciose ricche di abitazioni."
        ],
        "correct": 0
    },
    {
        "num": 142,
        "question": "QUAL È L'AMBIENTE NATURALE DEL BALESTRUCCIO?",
        "options": [
            "Pianure con boschetti e cespugli.",
            "Campagne coltivate con insediamenti umani.",
            "Colline e montagne con boschi di alto fusto."
        ],
        "correct": 1
    },
    {
        "num": 143,
        "question": "QUAL È L'AMBIENTE NATURALE DELLA CORNACCHIA GRIGIA?",
        "options": [
            "specie adattabile ai più diversi ambienti coltivi, macchie ecc.",
            "Rocce di alta collina e montagna con boschetti.",
            "Pianure intensamente coltivate, marcite, paludi e canneti."
        ],
        "correct": 0
    },
    {
        "num": 144,
        "question": "QUAL È L'AMBIENTE NATURALE DEL CORVO IMPERIALE?",
        "options": [
            "Zone coltivate e prative con gruppi di alberi, zone di collina con pochi alberi.",
            "Montagne boscate e rocciose.",
            "Pianure umide, risaie, paludi e canneti."
        ],
        "correct": 1
    },
    {
        "num": 145,
        "question": "QUANDO UNA SPECIE È DETTA MIGRATORE TOTALE?",
        "options": [
            "Quando i componenti del gruppo percorrono grandi distanze.",
            "Quando tutti i componenti del gruppo abbandonano il territorio.",
            "Quando una parte dei componenti del gruppo abbandonano il territorio."
        ],
        "correct": 1
    },
    {
        "num": 146,
        "question": "QUAL È L'AMBIENTE NATURALE DEL MUFLONE?",
        "options": [
            "Pianure.",
            "Boschi ad alto fusto e con fitto sottobosco con presenze di pianure.",
            "Zone boscate con ampi spazi privi di vegetazione e terreni rocciosi."
        ],
        "correct": 2
    },
    {
        "num": 147,
        "question": "QUAL È L'AMBIENTE NATURALE DELLO STAMBECCO?",
        "options": [
            "Montagne rocciose alpine.",
            "Boschi fitti appenninici.",
            "Altopiani con boschi e fitto sottobosco di erica."
        ],
        "correct": 0
    },
    {
        "num": 148,
        "question": "QUANDO UNA SPECIE È DETTA MIGRATORE PARZIALE?",
        "options": [
            "Quando una parte dei componenti del gruppo abbandona il territorio.",
            "Quando i componenti del gruppo percorrono grandi distanze.",
            "Quando tutti i componenti del gruppo abbandonano il territorio."
        ],
        "correct": 0
    },
    {
        "num": 149,
        "question": "QUAL È L'AMBIENTE NATURALE DELLA MARTORA?",
        "options": [
            "Vive nelle zone aperte di pianura e nelle valli salse.",
            "Vive nelle foreste miste o di conifere.",
            "Vive in montagna nelle zone prative."
        ],
        "correct": 1
    },
    {
        "num": 150,
        "question": "QUAL È L'AMBIENTE NATURALE DELLA FAINA?",
        "options": [
            "Vive solo nelle basse colline coltivate.",
            "Vive nei boschi e nelle colline vicino alle abitazioni.",
            "Vive solo nelle pianure coltivate e umide."
        ],
        "correct": 1
    },
    {
        "num": 151,
        "question": "PERCHÉ ALCUNE SPECIE DI SELVAGGINA SI DICONO INSETTIVORE?",
        "options": [
            "Perché sono divorate da grossi mammiferi.",
            "Perché hanno le ali come gli insetti.",
            "Perché si cibano prevalentemente di insetti."
        ],
        "correct": 2
    },
    {
        "num": 152,
        "question": "QUANDO UNA SPECIE È DETTA MIGRATRICE A LUNGO RAGGIO?",
        "options": [
            "Quando percorre grandi distanze.",
            "Quando percorre medie distanze.",
            "Quando percorre brevi distanze."
        ],
        "correct": 0
    },
    {
        "num": 153,
        "question": "L’AIRONE È UN:",
        "options": [
            "Trampoliere.",
            "Palmipede.",
            "Rapace."
        ],
        "correct": 0
    },
    {
        "num": 154,
        "question": "DOVE NIDIFICANO I PICCHI?",
        "options": [
            "Sulle rocce.",
            "Nelle cavità degli alberi.",
            "Nei prati di montagna."
        ],
        "correct": 1
    },
    {
        "num": 155,
        "question": "CHE COSA SI INTENDE PER SELVAGGINA STANZIALE?",
        "options": [
            "Quella che viene allevata in voliere.",
            "Quella che vive tutto l’anno in un determinato territorio.",
            "Quella che si può incontrare solo d’inverno."
        ],
        "correct": 1
    },
    {
        "num": 156,
        "question": "QUANDO UNA SPECIE È DETTA MIGRATRICE A BREVE RAGGIO O ERRATICA?",
        "options": [
            "Quando percorre grandi distanze.",
            "Quando percorre medie distanze.",
            "Quando percorre brevi distanze."
        ],
        "correct": 2
    },
    {
        "num": 157,
        "question": "CHE COSA È L’HABITAT?",
        "options": [
            "È una zona di ripopolamento.",
            "È una zona di montagna dove vivono gli uccelli.",
            "È l’ambiente in cui un organismo trova le condizioni adatte a vivere."
        ],
        "correct": 2
    },
    {
        "num": 158,
        "question": "DOVE NIDIFICA PREFERIBILMENTE LA CIVETTA?",
        "options": [
            "Nelle cavità di vecchi alberi o in mura diroccate.",
            "Nei prati e nei pascoli.",
            "Sulle chiome degli alberi."
        ],
        "correct": 0
    },
    {
        "num": 159,
        "question": "CHE COSA SONO I TRAMPOLIERI?",
        "options": [
            "Mammiferi molto alti.",
            "Uccelli caratterizzati da zampe, becco e collo lunghi.",
            "Uccelli rapaci."
        ],
        "correct": 1
    },
    {
        "num": 160,
        "question": "IN QUALE AMBIENTE VIVE LA COTURNICE?",
        "options": [
            "Nei boschi di pianura.",
            "Nei terreni paludosi.",
            "In montagna."
        ],
        "correct": 2
    },
    {
        "num": 161,
        "question": "IL CORMORANO (UCCELLO PROTETTO) QUALI AMBIENTI FREQUENTA?",
        "options": [
            "Pianura arida.",
            "Ambiente montano.",
            "Ambiente costiero e lagune."
        ],
        "correct": 2
    },
    {
        "num": 162,
        "question": "QUANDO UNA SPECIE È DETTA MIGRATRICE A MEDIO RAGGIO?",
        "options": [
            "Quando percorre grandi distanze.",
            "Quando percorre medie distanze.",
            "Quando percorre brevi distanze."
        ],
        "correct": 1
    },
    {
        "num": 163,
        "question": "QUANTO È GRANDE IL COLOMBACCIO RISPETTO AL COLOMBO SELVATICO?",
        "options": [
            "È più piccolo.",
            "È più grande.",
            "È della stessa grandezza."
        ],
        "correct": 1
    },
    {
        "num": 164,
        "question": "È CACCIABILE LA POIANA?",
        "options": [
            "Sì.",
            "Solo sulle barche a remi.",
            "No."
        ],
        "correct": 2
    },
    {
        "num": 165,
        "question": "QUAL È LA SCIENZA CHE STUDIA IL COMPORTAMENTO DEGLI ANIMALI?",
        "options": [
            "La zoologia.",
            "La biologia.",
            "L’etologia."
        ],
        "correct": 2
    },
    {
        "num": 166,
        "question": "QUALE DEI CARNIVORI SOTTOINDICATI È FORNITO DI DITA PALMATE?",
        "options": [
            "La donnola.",
            "La lontra.",
            "La faina."
        ],
        "correct": 1
    },
    {
        "num": 167,
        "question": "CHE COSA È LA MUTA DEGLI UCCELLI?",
        "options": [
            "Il cambio delle penne.",
            "Uccelli che non cinguettano.",
            "Alcune specie di anatre."
        ],
        "correct": 0
    },
    {
        "num": 168,
        "question": "CHE COSA SONO I CIGNI?",
        "options": [
            "Mammiferi.",
            "Trampolieri.",
            "Palmipedi."
        ],
        "correct": 2
    },
    {
        "num": 169,
        "question": "LE PENNE REMIGANTI SONO QUELLE DELL’A:",
        "options": [
            "Testa.",
            "Ala.",
            "Coda."
        ],
        "correct": 1
    },
    {
        "num": 170,
        "question": "LE PENNE TIMONIERE SONO QUELLE DELLA:",
        "options": [
            "Coda.",
            "Testa.",
            "Ala."
        ],
        "correct": 0
    },
    {
        "num": 171,
        "question": "LE PENNE COPRITRICI SONO:",
        "options": [
            "Corte e morbide.",
            "Lunghe e morbide.",
            "Corte e rigide."
        ],
        "correct": 0
    },
    {
        "num": 172,
        "question": "LA QUAGLIA A CHE ORDINE APPARTIENE?",
        "options": [
            "Columbiformi.",
            "Anseriformi.",
            "Galliformi."
        ],
        "correct": 2
    },
    {
        "num": 173,
        "question": "LA FAMIGLIA DEI CORVIDI A CHE ORDINE APPARTIENE?",
        "options": [
            "Rapaci.",
            "Galliformi.",
            "Passeriformi."
        ],
        "correct": 2
    },
    {
        "num": 174,
        "question": "LA TORTORA A CHE ORDINE APPARTIENE?",
        "options": [
            "Anseriformi.",
            "Gruiformi.",
            "Columbiformi."
        ],
        "correct": 2
    },
    {
        "num": 175,
        "question": "QUAL È L’ORDINE DEI FRINGILLIDI?",
        "options": [
            "Caradriformi.",
            "Lagomorfi.",
            "Passeriformi."
        ],
        "correct": 2
    },
    {
        "num": 176,
        "question": "LA VOLPE A CHE FAMIGLIA APPARTIENE?",
        "options": [
            "Canidi.",
            "Cervidi.",
            "Ploceidi."
        ],
        "correct": 0
    },
    {
        "num": 177,
        "question": "LA LONTRA È UN ANIMALE:",
        "options": [
            "Omeoterma.",
            "Eteroterma.",
            "Anfibio."
        ],
        "correct": 0
    },
    {
        "num": 178,
        "question": "QUAL È L’HABITAT DELLA LONTRA?",
        "options": [
            "Bosco ceduo.",
            "Corsi d’acqua.",
            "Marcite."
        ],
        "correct": 1
    },
    {
        "num": 179,
        "question": "IL CAMOSCIO A CHE FAMIGLIA APPARTIENE?",
        "options": [
            "Cervidi.",
            "Caradridi.",
            "Bovidi."
        ],
        "correct": 2
    },
    {
        "num": 180,
        "question": "IL MIGNATTAIO È:",
        "options": [
            "Un verme.",
            "Un mammifero.",
            "Un uccello."
        ],
        "correct": 2
    },
    {
        "num": 181,
        "question": "COSA SONO LA PIEGA E LA DEVIAZIONE DI UN CALCIO?",
        "options": [
            "L’inclinazione della sua parte terminale.",
            "L’entità del disassamento orizzontale e verticale del calcio dall’interasse delle canne, espressa in millimetri.",
            "Lo spessore di un calcio rispetto all’astina."
        ],
        "correct": 1
    },
    {
        "num": 182,
        "question": "QUALI VANTAGGI OFFRE L’USO DELL’OTTICA RISPETTO A MIRINO E TACCA DI MIRA?",
        "options": [
            "Nessuno in particolare.",
            "Visione ingrandita del bersaglio e reticolo di mira sul piano focale del bersaglio stesso.",
            "Visione ingrandita del bersaglio."
        ],
        "correct": 1
    },
    {
        "num": 183,
        "question": "COM’È L’ANDAMENTO DELLA RIGATURA, ALL’INTERNO DELLA CANNA DI UNA CARABINA?",
        "options": [
            "A spirale.",
            "Elicoidale.",
            "Retto."
        ],
        "correct": 1
    },
    {
        "num": 184,
        "question": "QUAL È IN GENERE IL TIRO UTILE DI UN FUCILE A CANNA LISCIA CALIBRO 12, CARICATO A MUNIZIONE SPEZZATA?",
        "options": [
            "Varia dai 50 ai 90 metri, a seconda del numero di pallini usati.",
            "Varia dai 20 agli 80 metri, a seconda del numero di pallini usati.",
            "Varia dai 35 ai 50 metri, a seconda del numero di pallini usati."
        ],
        "correct": 2
    },
    {
        "num": 185,
        "question": "CHE COSA OCCORRE PER POTER CACCIARE CON UNA CARABINA CALIBRO .270 WINCHESTER, DOTATA DI CANNOCCHIALE?",
        "options": [
            "La licenza di caccia.",
            "Uno speciale tesserino per zone montane.",
            "Una speciale autorizzazione di polizia."
        ],
        "correct": 0
    },
    {
        "num": 186,
        "question": "A CHE COSA SERVE LA STROZZATURA DELLE CANNE?",
        "options": [
            "Ad aumentare la portata.",
            "A concentrare la rosata.",
            "A diminuire la portata."
        ],
        "correct": 1
    },
    {
        "num": 187,
        "question": "QUALI ADEMPIMENTI SONO IMPOSTI DALLA LEGGE AL DETENTORE DI CARTUCCE A PALLA?",
        "options": [
            "Denunciarle all’Autorità di Pubblica Sicurezza.",
            "Custodirle in apposito contenitore metallico.",
            "Custodirle in luogo chiuso a chiave."
        ],
        "correct": 0
    },
    {
        "num": 188,
        "question": "UN FUCILE CALIBRO 8 AD ANIMA LISCIA È ARMA DA CACCIA O ARMA COMUNE DA SPARO?",
        "options": [
            "Arma comune da sparo.",
            "Arma da caccia.",
            "Arma da caccia agli ungulati."
        ],
        "correct": 0
    },
    {
        "num": 189,
        "question": "COSA COMPORTA L’AUMENTO DELLA DOSE DI PIOMBO NELLA CARTUCCIA PER FUCILE AD ANIMA LISCIA?",
        "options": [
            "Aumento della pressione dei gas e del rinculo.",
            "Difficoltà di combustione della polvere.",
            "Aumento del rumore dello sparo e danno biologico."
        ],
        "correct": 0
    },
    {
        "num": 190,
        "question": "QUAL È LA LUNGHEZZA MINIMA DELLA CAMERA DI SCOPPIO NEI FUCILI CALIBRO 12?",
        "options": [
            "60 mm.",
            "70 mm.",
            "76 mm."
        ],
        "correct": 1
    },
    {
        "num": 191,
        "question": "COME SI VERIFICA SE IL FUCILE È IDONEO A SPARARE POLVERE NERA (OVVERO POLVERE SENZA FUMO)?",
        "options": [
            "Sparando diversi tipi di cartuccia.",
            "Esaminando i punzoni del Banco di prova.",
            "Sparando una carica doppia con minore quantità di piombo."
        ],
        "correct": 1
    },
    {
        "num": 192,
        "question": "LA PROVA DELLE ARMI PRESSO IL BANCO NAZIONALE DI PROVA È OBBLIGATORIA?",
        "options": [
            "Sì, sempre.",
            "Sì, per le armi a canna rigata.",
            "Sì, per le armi ad anima liscia."
        ],
        "correct": 0
    },
    {
        "num": 193,
        "question": "COME FUNZIONA IL CARICAMENTO DI UN FUCILE CALIBRO 12 SEMIAUTOMATICO DEL TIPO A “CANNA FISSA”?",
        "options": [
            "Allo sparo il fucile si ricarica spontaneamente.",
            "Allo sparo canna e otturatore nell’asta espellono il bossolo, provocando automaticamente la ricarica.",
            "Per sottrazione di gas o per funzionamento inerziale."
        ],
        "correct": 2
    },
    {
        "num": 194,
        "question": "NEL FUCILE A CANNE RIGATE QUALI MUNIZIONI VENGONO IMPIEGATE?",
        "options": [
            "Munizioni a pallini.",
            "Munizioni miste.",
            "Munizioni a palla."
        ],
        "correct": 2
    },
    {
        "num": 195,
        "question": "QUANDO SI PULISCE E LUBRIFICA UN’ARMA PERCHÉ SIA SEMPRE EFFICIENTE?",
        "options": [
            "Una volta all’anno.",
            "Una volta al mese.",
            "Ogni volta che si usa."
        ],
        "correct": 2
    },
    {
        "num": 196,
        "question": "IN CHE MODO SI CHIUDE UN’ARMA CARICA?",
        "options": [
            "Di scatto, per maggiore sicurezza.",
            "Dolcemente e voltando le spalle a persone o cose.",
            "Come capita."
        ],
        "correct": 1
    },
    {
        "num": 197,
        "question": "SI PUÒ PUNTARE UN’ARMA IN DIREZIONE DELLE PERSONE?",
        "options": [
            "Mai.",
            "Solo se è certamente scarica.",
            "Solo se è in sicura."
        ],
        "correct": 0
    },
    {
        "num": 198,
        "question": "PROCEDENDO IN FILA INDIANA, COME SI TIENE UN’ARMA?",
        "options": [
            "Con le canne verso il basso.",
            "Bilanciata.",
            "Con le canne verso l’alto ed in sicura."
        ],
        "correct": 2
    },
    {
        "num": 199,
        "question": "IN QUALE CASO UN’ARMA È CLASSIFICATA “DA GUERRA”?",
        "options": [
            "Quando è di grosso calibro.",
            "Quando è di grosso calibro e molto potente.",
            "Quando essa è a raffica o in dotazione a Forze Armate o Eserciti."
        ],
        "correct": 2
    },
    {
        "num": 200,
        "question": "SECONDO LA LEGGE 157/92, QUANTI COLPI PUÒ AL MASSIMO CONTENERE IL CARICATORE DI UN FUCILE SEMIAUTOMATICO A CANNA LISCIA?",
        "options": [
            "Due.",
            "Tre.",
            "Cinque."
        ],
        "correct": 0
    },
    {
        "num": 201,
        "question": "DURANTE UNA PAUSA DI CACCIA, COME DEVE ESSERE DEPOSITATA L’ARMA?",
        "options": [
            "In sicura.",
            "Scarica, con otturatore ovvero canne aperte.",
            "Scarica."
        ],
        "correct": 1
    },
    {
        "num": 202,
        "question": "QUALE ARMA A PARITÀ DI LUNGHEZZA DELLE CANNE HA MAGGIORE GITTATA?",
        "options": [
            "Fucile a canna liscia strozzata.",
            "Fucile a canna cilindrica.",
            "Carabina a canna rigata."
        ],
        "correct": 2
    },
    {
        "num": 203,
        "question": "PER QUALI ARMI È OBBLIGATORIA LA PUNZONATURA DEL B.N.P. (BANCO NAZIONALE DI PROVA)?",
        "options": [
            "Per tutte.",
            "Per quelle a canna liscia.",
            "Per quelle a canna rigata."
        ],
        "correct": 0
    },
    {
        "num": 204,
        "question": "PER LA CACCIA AGLI UNGULATI È PIÙ EFFICACE UNA PALLA TIPO “BRENNEKE” O QUELLA DI UN’ARMA A CANNA RIGATA “.270 WINCHESTER”?",
        "options": [
            "La “Brenneke”.",
            "Quella dell’arma a canna rigata.",
            "Sono parimenti efficaci."
        ],
        "correct": 1
    },
    {
        "num": 205,
        "question": "COME DEVE CONSERVARE LE CARTUCCE IL CACCIATORE CHE POSSIEDE ARMI DI CALIBRO DIVERSO?",
        "options": [
            "Tutte assieme in scatola metallica.",
            "Separate e nelle loro scatole originali.",
            "Sfuse."
        ],
        "correct": 1
    },
    {
        "num": 206,
        "question": "PER QUALE FINALITÀ IL PIOMBO DEI PALLINI PUÒ ESSERE LEGATO ALL’ANTIMONIO O PUÒ ESSERE RIVESTITO DI NICHEL O RAME?",
        "options": [
            "Per renderne minime le deformazioni durante lo sparo e ottenere rosate compatte e regolari.",
            "Per impedirne l’ossidazione e la coesione.",
            "Per evitare che il piombo contamini l’ambiente, quando i pallini siano caduti a terra o in acqua."
        ],
        "correct": 0
    },
    {
        "num": 207,
        "question": "IN QUALE PARTE DELLA CARTUCCIA È SCRITTO IL CALIBRO?",
        "options": [
            "Sul fondello.",
            "Sulla chiusura.",
            "Sul bossolo."
        ],
        "correct": 0
    },
    {
        "num": 208,
        "question": "DOVE SI RIVELA LA GRANATURA (PESO DELLA PALLA) DI UNA CARTUCCIA PER UN’ARMA A CANNA RIGATA?",
        "options": [
            "Sulla confezione.",
            "Sul fondello.",
            "Sul bossolo."
        ],
        "correct": 0
    },
    {
        "num": 209,
        "question": "DOVE È PUNZONATO IL CALIBRO SULLE ARMI A CANNA LISCIA?",
        "options": [
            "Solo sulle canne.",
            "Sulle cartelle laterali.",
            "Sui piani di culatta e di bascula."
        ],
        "correct": 2
    },
    {
        "num": 210,
        "question": "COM’È COMUNEMENTE CHIAMATO IL FUCILE A CANNA LISCIA A DUE CANNE GIUSTAPPOSTE?",
        "options": [
            "Sovrapposto.",
            "Doppietta.",
            "Bicanna."
        ],
        "correct": 1
    },
    {
        "num": 211,
        "question": "CON QUALI DEI SEGUENTI PALLINI IL FUCILE CALIBRO 12 PERMETTE UNA MAGGIORE GITTATA?",
        "options": [
            "N.7.",
            "N.11.",
            "N.2."
        ],
        "correct": 2
    },
    {
        "num": 212,
        "question": "L’INTERNO DI UNA CANNA DA FUCILE DEL TIPO “LISCIA” SI SUDDIVIDE FONDAMENTALMENTE IN:",
        "options": [
            "Camera di scoppio, raccordo, anima, bindella, vivo di volata.",
            "Camera di scoppio, raccordo, anima, sottomano, vivo di volata.",
            "Camera di scoppio, raccordo, anima, strozzatura."
        ],
        "correct": 2
    },
    {
        "num": 213,
        "question": "SONO LEGALI LE ARMI DA CACCIA PRIVE DEI PUNZONI DEL B.N.P. (BANCO NAZIONALE DI PROVA)?",
        "options": [
            "Sì, purché di marche note.",
            "Sì.",
            "No."
        ],
        "correct": 2
    },
    {
        "num": 214,
        "question": "CHE COSA SI INTENDE CON L’ESPRESSIONE “FUCILE CALIBRO 20”?",
        "options": [
            "Che ha una canna la cui anima accoglie una sfera di piombo del peso di un ventesimo di libbra.",
            "Che ha una canna del diametro di venti millimetri.",
            "Che ha una canna del diametro di duecento centesimi di pollice."
        ],
        "correct": 0
    },
    {
        "num": 215,
        "question": "DOVE SI MISURA LA “STROZZATURA” IN UN FUCILE DA CACCIA?",
        "options": [
            "Nella camera di scoppio ed al raccordo.",
            "Nella parte terminale della canna (volata).",
            "A metà canna."
        ],
        "correct": 1
    },
    {
        "num": 216,
        "question": "IN UN FUCILE A CANI INTERNI, QUAL È L’ELEMENTO CHE DÀ STABILITÀ ALLE CANNE?",
        "options": [
            "La chiave di apertura dell’arma.",
            "L’astina.",
            "La bindella."
        ],
        "correct": 1
    },
    {
        "num": 217,
        "question": "COME SI CHIAMA LA PARTE POSTERIORE DELLA CANNA?",
        "options": [
            "Mirino.",
            "Bindella.",
            "Culatta."
        ],
        "correct": 2
    },
    {
        "num": 218,
        "question": "A CHI DEVE ESSERE INOLTRATA LA DENUNCIA DI UN’ARMA?",
        "options": [
            "Al Commissariato di Polizia o alla stazione dei Carabinieri.",
            "All’Ufficio provinciale competente.",
            "All’ufficio regionale competente per ciascuna Provincia."
        ],
        "correct": 0
    },
    {
        "num": 219,
        "question": "LA LUNGHEZZA DEL CALCIO SI MISURA:",
        "options": [
            "Dalla punta dell’impugnatura al fondo del calcio.",
            "Dal grilletto alla parte mediana del calcio.",
            "Dal grilletto al fondo del calcio."
        ],
        "correct": 2
    },
    {
        "num": 220,
        "question": "È CONSENTITO AL CACCIATORE IL PORTO DEL COLTELLINO NELLE ESERCIZI VENATORI?",
        "options": [
            "No.",
            "Sì.",
            "Sì, ma solo nel caso di circostanze di tempo e luogo che lo giustifichino."
        ],
        "correct": 1
    },
    {
        "num": 221,
        "question": "CHE FUNZIONE HA IL GRILLETTO IN UN FUCILE DA CACCIA?",
        "options": [
            "Premendolo si agisce sulla molla che percuote la capsula della cartuccia.",
            "Premendolo si agisce sulla leva di arresto del cane percussore che, liberato, andrà a percuotere la capsula della cartuccia.",
            "Premendolo si agisce sulla croce del cane che, spinto dalla molla, percuote la capsula della cartuccia facendola esplodere."
        ],
        "correct": 1
    },
    {
        "num": 222,
        "question": "CHE COS’È IL “DRILLING”?",
        "options": [
            "Fucile a due canne lisce ed una rigata.",
            "Fucile con una canna liscia ed una rigata.",
            "Fucile basculante con una sola canna rigata."
        ],
        "correct": 0
    },
    {
        "num": 223,
        "question": "A COSA SERVE L’INNESCO?",
        "options": [
            "Ad accendere la polvere nella cartuccia.",
            "A separare la polvere dal piombo nella cartuccia.",
            "A sigillare la cartuccia."
        ],
        "correct": 0
    },
    {
        "num": 224,
        "question": "NEL FUCILE COSA SI INTENDE PER BASCULA?",
        "options": [
            "La parte del calcio che poggia alla spalla.",
            "La parte del calcio su cui si inseriscono le canne.",
            "I punti di attacco della cinghia."
        ],
        "correct": 1
    },
    {
        "num": 225,
        "question": "PER INDICARE UNA MAGGIORE STROZZATURA QUANTE STELLETTE DEVONO ESSERVI SULLE CANNE DEL FUCILE?",
        "options": [
            "Una stella.",
            "Due stelle.",
            "Quattro stelle."
        ],
        "correct": 0
    },
    {
        "num": 226,
        "question": "È CONSENTITO L’USO DELL’ARCO PER CACCIARE?",
        "options": [
            "Sì.",
            "No.",
            "Soltanto a caccia degli ungulati."
        ],
        "correct": 0
    },
    {
        "num": 227,
        "question": "QUAL È LA VELOCITÀ INIZIALE NORMALE DELLE PALLE NEI MODERNI FUCILI A CANNA RIGATA?",
        "options": [
            "700-1000 metri al secondo.",
            "2000 metri al secondo.",
            "330 metri al secondo."
        ],
        "correct": 0
    },
    {
        "num": 228,
        "question": "CHE COS’È LA CANNA “MONOBLOC”?",
        "options": [
            "La canna in un unico blocco di acciaio.",
            "La canna costituita da un tubo innestato in culatta, in un manicotto o monoblocco.",
            "La canna unica."
        ],
        "correct": 1
    },
    {
        "num": 229,
        "question": "CHE COSA OCCORRE PER L’ACQUISTO DI CARTUCCE A PALLA?",
        "options": [
            "Il porto d’armi o nulla osta della Questura.",
            "L’età di 25 anni.",
            "L’età di 18 anni e l’autorizzazione del proprio genitore."
        ],
        "correct": 0
    },
    {
        "num": 230,
        "question": "QUALI FUCILI PUÒ USARE A CACCIA IL NEO-CACCIATORE, TITOLARE DELLA PRIMA LICENZA?",
        "options": [
            "Tutti i calibri consentiti dalle leggi vigenti.",
            "Solo quelli a canna liscia, e di calibro 16, 20, 24, 28.",
            "Solo il calibro 12, a canna liscia e munizione spezzata."
        ],
        "correct": 0
    },
    {
        "num": 231,
        "question": "QUALE FENOMENO SI PUÒ VERIFICARE CON L’USO DI CARTUCCE CON BOSSOLO PIÙ LUNGO DELLA CAMERA DI SCOPPIO NEL FUCILE A CANNA LISCIA?",
        "options": [
            "Maggior dispersione della rosata.",
            "Minor rinculo.",
            "Scoppio della canna."
        ],
        "correct": 2
    },
    {
        "num": 232,
        "question": "QUAL È IL PRINCIPALE SCOPO PER CUI TALVOLTA I PALLINI SONO SOTTOPOSTI A CROMATURA?",
        "options": [
            "Garantire una maggiore resistenza.",
            "Evitarne l’ossidazione del piombo.",
            "Aumentarne il peso e il diametro."
        ],
        "correct": 0
    },
    {
        "num": 233,
        "question": "UNA CANNA CONTRASSEGNATA CON 1 STELLA, RISPETTO A UNA CANNA CONTRASSEGNATA CON 4 STELLE È:",
        "options": [
            "Più strozzata.",
            "Meno strozzata.",
            "Fabbricata con un acciaio di miglior qualità."
        ],
        "correct": 0
    },
    {
        "num": 234,
        "question": "VIENE IN QUALCHE MODO CONTRADDISTINTA LA STROZZATURA PRESENTE IN ALCUNI TIPI DI FUCILI DA CACCIA?",
        "options": [
            "No.",
            "Sì, in tutti quelli a canna liscia.",
            "Sì, solo nei fucili a canna rigata."
        ],
        "correct": 1
    },
    {
        "num": 235,
        "question": "CHE TIPO DI MUNIZIONE SI PUÒ USARE NELLA CACCIA AL CINGHIALE?",
        "options": [
            "A palla unica.",
            "A munizione spezzata.",
            "A palla e munizione spezzata."
        ],
        "correct": 0
    },
    {
        "num": 236,
        "question": "SINO A QUALE DISTANZA DEVE RITENERSI PERICOLOSO IL PROIETTILE A PALLA UNICA SPARATO DA UN FUCILE A CANNA LISCIA?",
        "options": [
            "200-500 metri.",
            "600-900 metri.",
            "1500 metri."
        ],
        "correct": 0
    },
    {
        "num": 237,
        "question": "IN QUANTE CATEGORIE SI DIVIDONO I FUCILI DA CACCIA IN RELAZIONE AL TIPO DI CANNA?",
        "options": [
            "Due: a canna liscia e canna rigata.",
            "Tre: a canna liscia, a canna rigata e canna mista.",
            "Cinque: a canna liscia, a canna rigata, a canne miste, a canne a recupero di gas e a canna monoblock."
        ],
        "correct": 0
    },
    {
        "num": 238,
        "question": "È CONSENTITA LA CACCIA CON LA CARABINA A CANNA RIGATA?",
        "options": [
            "Sì, ma solo per gli ungulati di grande taglia.",
            "No, tutte le carabine sono vietate.",
            "Sì, se di calibro non inferiore a 5,6 mm con bossolo a vuoto di altezza non inferiore a 40 mm."
        ],
        "correct": 2
    },
    {
        "num": 239,
        "question": "COSA SI FA DI UNA CARTUCCIA INESPLOSA PERCHÉ GONFIA DI UMIDITÀ?",
        "options": [
            "Si abbandona sul terreno.",
            "Si nasconde in un cespuglio.",
            "Si conserva e poi si scarica."
        ],
        "correct": 2
    },
    {
        "num": 240,
        "question": "CHE COS’È LA BINDELLA?",
        "options": [
            "La fascia metallica che protegge il grilletto.",
            "Il meccanismo che aziona il percussore.",
            "La striscia metallica che va dal mirino alla culatta."
        ],
        "correct": 2
    },
    {
        "num": 241,
        "question": "ACQUISTATA UN’ARMA DA CACCIA QUALE OBBLIGO INCOMBE AL CACCIATORE?",
        "options": [
            "Tenerla ben conservata.",
            "Fare immediatamente denuncia all’Autorità di Polizia di residenza.",
            "Pulirla spesso."
        ],
        "correct": 1
    },
    {
        "num": 242,
        "question": "IN QUALE TIPO DI FUCILE È PREVISTO IL SERBATOIO PER LE CARTUCCE?",
        "options": [
            "Nel fucile a canne sovrapposte.",
            "Nel fucile automatico e semiautomatico.",
            "Nel fucile a cani esterni."
        ],
        "correct": 1
    },
    {
        "num": 243,
        "question": "A COSA SERVE L’ASTA DEL FUCILE?",
        "options": [
            "Ad assicurare stabilità alle canne.",
            "Per una migliore estetica dell’arma.",
            "Per diminuire il rinculo dell’arma."
        ],
        "correct": 0
    },
    {
        "num": 244,
        "question": "CHE COSA SI INTENDE PER ROSATA DI UN FUCILE?",
        "options": [
            "Il cerchio immaginario in cui va a collocarsi il maggior numero di pallini espulsi dalla cartuccia.",
            "Il punto massimo dove giungono i pallini.",
            "La strozzatura massima del fucile."
        ],
        "correct": 0
    },
    {
        "num": 245,
        "question": "COSA INDICA IL CALIBRO DEI FUCILI?",
        "options": [
            "Il diametro interno della canna.",
            "La circonferenza esterna della canna.",
            "La lunghezza della culatta."
        ],
        "correct": 0
    },
    {
        "num": 246,
        "question": "QUALE DELLE SEGUENTI ARMI NON È CONSENTITA PER LA CACCIA AI SENSI DELLA NORMATIVA VIGENTE?",
        "options": [
            "Fucile a canne sovrapposte.",
            "Fucile a cani esterni.",
            "Fucile di calibro superiore a 12."
        ],
        "correct": 2
    },
    {
        "num": 247,
        "question": "A COSA SERVE L’OTTURATORE NEI FUCILI AUTOMATICI?",
        "options": [
            "Ad aumentare la gittata dell’arma.",
            "A rendere il fucile più consistente.",
            "A permettere il caricamento automatico durante lo sparo ed estrarre la cartuccia esplosa dalla canna."
        ],
        "correct": 2
    },
    {
        "num": 248,
        "question": "A COSA SERVE IL MIRINO NEL FUCILE?",
        "options": [
            "A migliorare la visibilità nei luoghi bui.",
            "A bilanciare il fucile.",
            "A perfezionare la mira."
        ],
        "correct": 2
    },
    {
        "num": 249,
        "question": "COME VIENE CHIAMATA LA PARTE ANTERIORE DELLA CANNA?",
        "options": [
            "Volata.",
            "Astina.",
            "Calibro."
        ],
        "correct": 0
    },
    {
        "num": 250,
        "question": "COSA SI INTENDE PER PORTATA UTILE DI UN FUCILE?",
        "options": [
            "La distanza massima dove giungono i pallini.",
            "La distanza utile dei pallini per abbattere un selvatico.",
            "La capacità del serbatoio delle cartucce."
        ],
        "correct": 1
    },
    {
        "num": 251,
        "question": "CHE COSA SI INTENDE PER FUCILE COMBINATO O BILLING?",
        "options": [
            "Un fucile a due canne, una liscia e l’altra rigata.",
            "Un fucile a due canne lisce e dello stesso calibro.",
            "Un fucile a due canne rigate e di calibro diverso."
        ],
        "correct": 0
    },
    {
        "num": 252,
        "question": "A COSA SERVE L’ESTRATTORE DEL FUCILE?",
        "options": [
            "A rafforzare la chiusura.",
            "A tirar fuori le cartucce dalla canna.",
            "A proteggere la camera di scoppio."
        ],
        "correct": 1
    },
    {
        "num": 253,
        "question": "DURANTE L’ESERCIZIO VENATORIO SI POSSONO UTILIZZARE ARMI AD ARIA O GAS COMPRESSI?",
        "options": [
            "No, è assolutamente vietato.",
            "Sì, se l’esercizio è effettuato nei fondi chiusi.",
            "Sì, se è consentito portare dette armi."
        ],
        "correct": 0
    },
    {
        "num": 254,
        "question": "CON REGOLARE LICENZA DI CACCIA, QUANTE CARTUCCE A PIOMBO SPEZZATO SI POSSONO DETENERE?",
        "options": [
            "Fino a 500 con specifica denuncia.",
            "Fino a 1000 senza denuncia; da 1001 a 1500 con specifica denuncia.",
            "Fino a 1500 senza specifica denuncia, oltre con specifica denuncia."
        ],
        "correct": 1
    },
    {
        "num": 255,
        "question": "COME VIENE CHIAMATA LA PARTE POSTERIORE DELLA CANNA DEL FUCILE?",
        "options": [
            "Bascula.",
            "Bindella.",
            "Culatta."
        ],
        "correct": 2
    },
    {
        "num": 256,
        "question": "CHI PUÒ ACQUISTARE UN FUCILE DA CACCIA?",
        "options": [
            "Chi è munito di porto d’armi o di nulla osta rilasciato dal Questore.",
            "Chiunque.",
            "Solo chi ha compiuto 18 anni."
        ],
        "correct": 0
    },
    {
        "num": 257,
        "question": "IN QUALE TIPO DI FUCILE VANNO USATE LE MUNIZIONI A PIOMBO SPEZZATO?",
        "options": [
            "Fucile a canne rigate.",
            "Carabine a ripetizione.",
            "Fucile a canne lisce."
        ],
        "correct": 2
    },
    {
        "num": 258,
        "question": "QUALE DELLE SEGUENTI ARMI NON È CONSENTITA PER LA CACCIA?",
        "options": [
            "Fucile a canne sovrapposte.",
            "Fucile a cani esterni.",
            "Fucile di calibro superiore a 12."
        ],
        "correct": 2
    },
    {
        "num": 259,
        "question": "SI POSSONO DETENERE CARTUCCE IN ASSENZA DI ARMI DENUNCIATE?",
        "options": [
            "Sì fino a 1000.",
            "Sì fino a 1500.",
            "No, nessuna."
        ],
        "correct": 2
    },
    {
        "num": 260,
        "question": "QUANTI FUCILI DA CACCIA PUÒ DETENERE COLUI CHE È MUNITO DI PORTO D’ARMI?",
        "options": [
            "In numero illimitato purché denunciati e custoditi.",
            "Fino a 5 fucili semiautomatici e 3 a canne rigate.",
            "Fino a 10 fucili purché denunciati e custoditi."
        ],
        "correct": 0
    },
    {
        "num": 261,
        "question": "UN CACCIATORE FINO A QUANTI KG DI POLVERE DA SPARO PUÒ DETENERE?",
        "options": [
            "Fino a 10 kg per chi ha il porto d’armi da più di tre anni.",
            "Fino a 3 kg con l’obbligo della denuncia per chi non possiede il porto d’armi.",
            "Fino a 5 kg con regolare denuncia."
        ],
        "correct": 2
    },
    {
        "num": 262,
        "question": "PER QUALI ARMI È CONSENTITO IL COMODATO?",
        "options": [
            "Per tutti i tipi di armi.",
            "Per le armi comuni da sparo e da caccia.",
            "Per armi sportive e da caccia."
        ],
        "correct": 2
    },
    {
        "num": 263,
        "question": "COME SI TRASPORTA UN’ARMA IN MACCHINA?",
        "options": [
            "Carica ma in sicura.",
            "Scarica ed in custodia.",
            "Carica solo nel serbatoio."
        ],
        "correct": 1
    },
    {
        "num": 264,
        "question": "QUANTE ARMI COMUNI DA SPARO SI POSSONO DETENERE?",
        "options": [
            "Solo 3, custodite e denunciate.",
            "Nessun limite, purché custodite e denunciate.",
            "Solo 5 denunciate e non custodite."
        ],
        "correct": 0
    },
    {
        "num": 265,
        "question": "QUALE TRA LE SEGUENTI È UN’ARMA CLANDESTINA?",
        "options": [
            "Un’arma priva dei segni distintivi previsti dall’art. 11 della L. 110/1975.",
            "Un’arma detenuta senza autorizzazione.",
            "Un’arma da guerra."
        ],
        "correct": 0
    },
    {
        "num": 266,
        "question": "IN QUALE TIPO DI FUCILE SI PUÒ TROVARE IL SELETTORE?",
        "options": [
            "Nei fucili monogrillo a canne sovrapposte e parallele.",
            "Nei fucili a cani esterni.",
            "Nei fucili a canne lisce."
        ],
        "correct": 0
    },
    {
        "num": 267,
        "question": "CHE COS’È UN FUCILE A POMPA?",
        "options": [
            "Un fucile automatico.",
            "Un fucile a cani interni.",
            "Un fucile a caricamento manuale."
        ],
        "correct": 2
    },
    {
        "num": 268,
        "question": "QUAL È LA LUNGHEZZA DELLA CAMERA DI SCOPPIO DI UN FUCILE MAGNUM?",
        "options": [
            "76 mm.",
            "70 mm.",
            "65 mm."
        ],
        "correct": 0
    },
    {
        "num": 269,
        "question": "DI QUALE TIPO DI SICURA SONO DOTATI I FUCILI A CANI ESTERNI?",
        "options": [
            "Non hanno sicura, essa è costituita dai cani.",
            "Tipo Hanser.",
            "Tipo Granner."
        ],
        "correct": 0
    },
    {
        "num": 270,
        "question": "QUANTE ARMI SPORTIVE E ANTICHE SI POSSONO DETENERE CON REGOLARE LICENZA DI CACCIA?",
        "options": [
            "Fino a 3 armi sportive e 7 armi antiche custodite e denunciate.",
            "Fino a 6 armi sportive e 5 armi antiche custodite e denunciate.",
            "Fino a 6 armi sportive e 8 armi antiche custodite e denunciate."
        ],
        "correct": 2
    },
    {
        "num": 271,
        "question": "QUALI DEI SEGUENTI AMBIENTI RIVESTONO PRIORITARIO INTERESSE AI FINI DEGLI INTERVENTI DI TUTELA O DI RIPRISTINO?",
        "options": [
            "Le zone umide.",
            "Le campagne coltivate.",
            "Le zone calanchive."
        ],
        "correct": 0
    },
    {
        "num": 272,
        "question": "PUÒ UN AGRICOLTORE RECINTARE IL PROPRIO FONDO?",
        "options": [
            "No, mai.",
            "Sì.",
            "Solo durante la stagione venatoria."
        ],
        "correct": 1
    },
    {
        "num": 273,
        "question": "CHI DEVE PROGRAMMARE IL RIPRISTINO DEGLI HABITAT NEI TERRITORI DESTINATI ALL’ESERCIZIO VENATORIO?",
        "options": [
            "Le organizzazioni professionali e agricole.",
            "I proprietari ed i conduttori dei fondi rustici.",
            "L’A.T.C. (Ambito Territoriale di Caccia) o l’Azienda faunistico-venatoria territoriale competente."
        ],
        "correct": 2
    },
    {
        "num": 274,
        "question": "A QUALE CONTROLLO DEVE ESSERE SOGGETTA LA SELVAGGINA, PRIMA DI ESSERE LIBERATA PER SCOPI DI RIPOPOLAMENTO?",
        "options": [
            "Al controllo della provenienza.",
            "Al controllo di un agente venatorio.",
            "Al controllo sanitario."
        ],
        "correct": 2
    },
    {
        "num": 275,
        "question": "NEL CASO CHE ALCUNE SPECIE SELVATICHE, MOLTIPLICANDOSI ECCESSIVAMENTE, ARRECHINO GRAVI DANNI ALL’AGRICOLTURA, POSSONO ESSERE ABBATTUTE?",
        "options": [
            "Sì.",
            "No.",
            "Sì, ma con le autorizzazioni del caso."
        ],
        "correct": 2
    },
    {
        "num": 276,
        "question": "CHI VIENE IN POSSESSO DI UOVA O DI PICCOLI NATI, ENTRO QUANTE ORE DEVE DARNE AVVISO ALL’AUTORITÀ COMPETENTE?",
        "options": [
            "Quarantotto ore.",
            "Trentasei ore.",
            "Ventiquattro ore."
        ],
        "correct": 2
    },
    {
        "num": 277,
        "question": "PERCHÉ LA LEGGE PROIBISCE L’USO DI SOSTANZE TOSSICHE PER LA RIDUZIONE NUMERICA DI ANIMALI, ANCHE QUANDO QUESTI SONO DANNOSI?",
        "options": [
            "Per scopi umanitari.",
            "Perché le sostanze tossiche sono strumenti non selettivi, nonché capaci di produrre inquinamenti ambientali.",
            "Per motivi scientifici."
        ],
        "correct": 1
    },
    {
        "num": 278,
        "question": "PER CONTENERE I DANNI ALLA SELVAGGINA, LO SFALCIO MECCANIZZATO DI UN PRATO DOVREBBE…",
        "options": [
            "Avvenire alla fine di luglio.",
            "Iniziare dal centro dell’appezzamento e svolgersi a velocità limitata.",
            "Iniziare da est, procedendo a velocità limitata."
        ],
        "correct": 1
    },
    {
        "num": 279,
        "question": "DA CHI DEVE ESSERE ATTUATA LA DIFESA DELLE PRODUZIONI AGRICOLE DALLA SELVAGGINA?",
        "options": [
            "Dal proprietario.",
            "Dal cacciatore.",
            "Dall’ente pubblico e/o dall’organismo venatorio competente per territorio (A.T.C. / Azienda faunistico-venatoria competente per la gestione faunistica del territorio interessato)."
        ],
        "correct": 2
    },
    {
        "num": 280,
        "question": "IL DIVIETO DI CACCIA IMPOSTO DALLA LEGISLAZIONE REGIONALE PER I RIMBOSCHIMENTI DI RECENTE IMPIANTO, A CHE MIRA?",
        "options": [
            "Ad impedire l’asporto delle giovani piante non custodite.",
            "Ad evitare il disturbo alla nidificazione.",
            "A salvaguardare le piantine dagli eventuali danni."
        ],
        "correct": 2
    },
    {
        "num": 281,
        "question": "PER “CACCIA DI SELEZIONE” SI INTENDE LA CACCIA:",
        "options": [
            "A scopo di studio.",
            "A specie di particolare interesse scientifico.",
            "Finalizzata all’abbattimento di individui identificati per sesso e classe di età."
        ],
        "correct": 2
    },
    {
        "num": 282,
        "question": "QUANDO È CONCESSA LA CATTURA DI SELVAGGINA NEI FONDI CHIUSI?",
        "options": [
            "A scopo di studio da parte di ornitologi autorizzati.",
            "A specie di particolare interesse scientifico.",
            "Solo quando la selvaggina arreca danno alle colture."
        ],
        "correct": 2
    },
    {
        "num": 283,
        "question": "QUANDO UN CAMPO DI ERBA MEDICA PER LA PRODUZIONE DI SEMI È IN ATTUALITÀ DI COLTIVAZIONE?",
        "options": [
            "Dall’impianto al raccolto.",
            "Dopo la fioritura.",
            "Dopo il primo raccolto."
        ],
        "correct": 0
    },
    {
        "num": 284,
        "question": "QUANDO È IN ATTUALITÀ DI COLTIVAZIONE UN CAMPO COLTIVATO A CEREALI?",
        "options": [
            "Dalla semina al raccolto.",
            "Dopo la fioritura.",
            "Dopo la levata delle piantine fino al raccolto."
        ],
        "correct": 0
    },
    {
        "num": 285,
        "question": "LE COLTIVAZIONI A PIENO CAMPO DI FIORI ED ORTAGGI SONO INTERDETTE ALLA CACCIA, IN QUANTO RITENUTE COLTURE IN ATTO SUSCETTIBILI DI DANNO?",
        "options": [
            "Sì.",
            "No, vi può cacciare chiunque.",
            "Sì, solo se occupano una superficie di più di 3.000 mq."
        ],
        "correct": 0
    },
    {
        "num": 286,
        "question": "UN PRATO IRRIGATO ARTIFICIALMENTE COSTITUISCE UNA:",
        "options": [
            "Marcita.",
            "Maremma.",
            "Zona umida."
        ],
        "correct": 0
    },
    {
        "num": 287,
        "question": "UN TERRITORIO RICOPERTO DA ACQUE DOLCI STAGNANTI, POCO PROFONDE E RICOPERTO DA VEGETAZIONE SUBACQUEA O EMERGENTE È:",
        "options": [
            "Una laguna.",
            "Una palude.",
            "Una marcita."
        ],
        "correct": 1
    },
    {
        "num": 288,
        "question": "GLI ANTICRITTOGAMICI SERVONO PER:",
        "options": [
            "Combattere le epidemie fra gli animali domestici.",
            "Combattere le epidemie fra la selvaggina di immissione.",
            "Combattere alcune malattie delle piante coltivate."
        ],
        "correct": 2
    },
    {
        "num": 289,
        "question": "PERCHÉ GLI UCCELLI RAPACI RISENTONO IN MODO PARTICOLARE DELL’INQUINAMENTO DA INSETTICIDI?",
        "options": [
            "Perché spesso fanno il nido sul terreno o su alberi da frutta.",
            "Perché non trovano prede idonee.",
            "Perché, trovandosi all’apice della catena alimentare, li accumulano nei grassi."
        ],
        "correct": 2
    },
    {
        "num": 290,
        "question": "PER “EQUILIBRIO NATURALE” SI INTENDE:",
        "options": [
            "Una pari consistenza nel territorio di erbivori e carnivori.",
            "Un rapporto ottimale tra le specie di un territorio e l’ambiente.",
            "L’equilibrato utilizzo del territorio da parte dell’agricoltore."
        ],
        "correct": 1
    },
    {
        "num": 291,
        "question": "PER “ZONA UMIDA” S’INTENDE:",
        "options": [
            "Un’area ove annualmente cadano più di 600 mm di pioggia.",
            "Una zona ove l’umidità relativa dell’atmosfera non discenda mai sotto il 70%.",
            "Un’area caratterizzata da uno o più specchi d’acqua dolce, salmastra o salata."
        ],
        "correct": 2
    },
    {
        "num": 292,
        "question": "QUALI ISTITUZIONI PROMUOVONO IL RIPRISTINO DEI BIOTOPI PER REALIZZARE AMBIENTI IDONEI A GARANTIRE LA SOPRAVVIVENZA DI SPECIE ANIMALI TUTELATE?",
        "options": [
            "La C.E., lo Stato, le Regioni e le Province.",
            "L’I.S.P.R.A.",
            "Le associazioni ambientalistiche e venatorie."
        ],
        "correct": 0
    },
    {
        "num": 293,
        "question": "NEI FRUTTETI, A RACCOLTO COMPIUTO, L’ESERCIZIO VENATORIO È CONSENTITO:",
        "options": [
            "Sempre.",
            "Solo da appostamento temporaneo.",
            "Solo a seguito del consenso del proprietario o del conduttore del fondo."
        ],
        "correct": 0
    },
    {
        "num": 294,
        "question": "LA REGIONE PROMUOVE LA TUTELA E IL RIPRISTINO DEI BIOTOPI AL FINE DI:",
        "options": [
            "Una gestione programmata della caccia.",
            "Una efficace tutela della fauna.",
            "Tutela delle attività agricole."
        ],
        "correct": 1
    },
    {
        "num": 295,
        "question": "IN QUALE DEI CASI SEGUENTI SI REALIZZA “DISSESTO IDROGEOLOGICO”?",
        "options": [
            "Quando le acque meteoriche scorrono provocando forte erosione.",
            "Quando il deflusso delle acque è regimentato da opere idrauliche.",
            "Quando la copertura vegetale è rada o assente."
        ],
        "correct": 0
    },
    {
        "num": 296,
        "question": "AI FINI DELL’ESERCIZIO VENATORIO È CONSENTITO IL TAGLIO DI PIANTE ARBOREE?",
        "options": [
            "No, neppure parziale.",
            "Sì, solo per l’appostamento temporaneo.",
            "Sì, solo di piante non coltivate e a foglia caduca."
        ],
        "correct": 0
    },
    {
        "num": 297,
        "question": "COSA SI DEFINISCE IN GENERE PER LE “STOPPIE”?",
        "options": [
            "I residui delle coltivazioni.",
            "I residui colturali che permangono sul terreno dopo le operazioni di raccolta dei cereali.",
            "I residui colturali che permangono sui terreni dopo la falciatura delle leguminose."
        ],
        "correct": 1
    },
    {
        "num": 298,
        "question": "NEI RIGUARDI DELLA SELVAGGINA CACCIABILE, QUALI FUNZIONI SVOLGONO LE ZONE UMIDE?",
        "options": [
            "Favoriscono la sosta e la nidificazione degli uccelli.",
            "Favoriscono la nidificazione dell’avifauna protetta.",
            "Riducono la dispersione della selvaggina stanziale."
        ],
        "correct": 0
    },
    {
        "num": 299,
        "question": "L’ESERCIZIO DELL’ATTIVITÀ VENATORIA È CONSENTITO PURCHÉ:",
        "options": [
            "Non arrechi danno effettivo alle produzioni agricole.",
            "Non contrasti con l’esigenza di conservazione della fauna selvatica e preservi le specie in via di estinzione.",
            "Non contrasti con l’esigenza di conservazione della fauna selvatica e non arrechi danno alle produzioni agricole."
        ],
        "correct": 2
    },
    {
        "num": 300,
        "question": "CHI DEVE ESSERE OBBLIGATORIAMENTE CONSULTATO, PRIMA DELL’APPROVAZIONE DI UN PIANO DI LIMITAZIONE NUMERICA DI UNA SPECIE DANNOSA PER LE COLTIVAZIONI?",
        "options": [
            "Il servizio provinciale competente.",
            "L’Università e il Consiglio Nazionale delle Ricerche (C.N.R.).",
            "L’Istituto Superiore per la Protezione e la Ricerca Ambientale (I.S.P.R.A., ex I.N.F.S.)."
        ],
        "correct": 2
    },
    {
        "num": 301,
        "question": "CHI HA IL COMPITO DI APPROVARE GLI INTERVENTI DI CONTROLLO NUMERICO DI UNA SPECIE LOCALMENTE RESPONSABILE DI DANNI ALLE COLTIVAZIONI?",
        "options": [
            "La Regione, sentiti i pareri degli organismi di competenza.",
            "L’Università.",
            "L’Istituto Superiore per la Protezione e la Ricerca Ambientale (I.S.P.R.A., ex I.N.F.S.)."
        ],
        "correct": 0
    },
    {
        "num": 302,
        "question": "LA PIANIFICAZIONE FAUNISTICO-VENATORIA FINALIZZATA ALLA CONSERVAZIONE DELLE EFFETTIVE CAPACITÀ RIPRODUTTIVE DELLE SPECIE È:",
        "options": [
            "Limitata agli ambiti territoriali protetti.",
            "Estesa a tutto il territorio agro-silvo-pastorale.",
            "Estesa a tutto il territorio nazionale."
        ],
        "correct": 1
    },
    {
        "num": 303,
        "question": "TUTTE LE SPECIE ANIMALI SELVATICHE SONO ESSENZIALI AL MANTENIMENTO DELL’EQUILIBRIO NATURALE?",
        "options": [
            "Tutte, tranne quelle troppo numerose.",
            "No, solo quelle “non esotiche”.",
            "Tutte indistintamente."
        ],
        "correct": 2
    },
    {
        "num": 304,
        "question": "CHE COSA È LA MACCHIA MEDITERRANEA?",
        "options": [
            "È un’associazione vegetale di alberi e arbusti, tipica delle isole del mar Mediterraneo meridionale.",
            "È un’associazione di alberi e arbusti tipica di una fascia altimetrica che comprende la pianura fino all’alta collina, prossima al mare.",
            "È un’associazione vegetale di alberi e arbusti esclusiva della Sicilia, della Sardegna e delle Isole Eolie."
        ],
        "correct": 1
    },
    {
        "num": 305,
        "question": "COSA S’INTENDE PER “CICLO DELL’ACQUA”?",
        "options": [
            "Il moto circolare delle acque nei mari e nei laghi.",
            "La circolazione delle masse d’acqua attraverso atmosfera, terre emerse e mari, grazie all’evaporazione e alle precipitazioni.",
            "La circolazione sotterranea delle acque fino alle sorgenti di superficie."
        ],
        "correct": 1
    },
    {
        "num": 306,
        "question": "CHE COSA È L’HUMUS?",
        "options": [
            "Un composto derivato dalla trasformazione degli escrementi degli animali.",
            "Un terreno costituito dalla trasformazione di sostanze animali e vegetali, ad opera di microrganismi.",
            "Lo stadio finale della trasformazione dei vegetali decomposti."
        ],
        "correct": 1
    },
    {
        "num": 307,
        "question": "QUALI TRA LE SEGUENTI SPECIE DI UCCELLI PREDATORI SONO PREVALENTEMENTE NECROFAGHE?",
        "options": [
            "Le gazze.",
            "Le poiane.",
            "Le cornacchie."
        ],
        "correct": 2
    },
    {
        "num": 308,
        "question": "IL PIANO FAUNISTICO-VENATORIO REGIONALE HA VALIDITÀ?",
        "options": [
            "Decennale e può essere sottoposto a revisione con periodicità quinquennale.",
            "Annuale.",
            "Triennale."
        ],
        "correct": 0
    },
    {
        "num": 309,
        "question": "PRIMA DI POTER ADOTTARE UN PIANO DI CONTROLLO NUMERICO DI UNA SPECIE RESPONSABILE DI DANNI ALLE COLTIVAZIONI, OCCORRE:",
        "options": [
            "Aver riscontrato danni insopportabili.",
            "Ottenere il parere favorevole di uno zoologo abilitato.",
            "Aver prima verificato l’inefficacia di metodi ecologici di intervento, previa adeguata attività di censimento."
        ],
        "correct": 2
    },
    {
        "num": 310,
        "question": "UN METODO ECOLOGICO DI PREVENZIONE O CONTENIMENTO DEI DANNI CAUSATI DALLE LEPRI AD UN FRUTTETO POTREBBE CONSISTERE:",
        "options": [
            "Nella recinzione del frutteto con materiale idoneo.",
            "Nell’uso di detonatori a gas liquido o “cannoncini”, per spaventare le lepri.",
            "Nell’uso di detonatori a gas liquido o “cannoncini”, associato all’uso frequente di cani segugi."
        ],
        "correct": 0
    },
    {
        "num": 311,
        "question": "PER PROTEGGERE LA SEMINA DEL MAIS DAI DANNI ARRECATI DALLA CORNACCHIA GRIGIA O DAL FAGIANO È CONSIGLIABILE:",
        "options": [
            "Sorvegliare i campi, soprattutto subito dopo l’alba.",
            "Irrigare abbondantemente il seminativo.",
            "Aggiungere ai chicchi, prima della semina, un idoneo prodotto ad azione repellente."
        ],
        "correct": 2
    },
    {
        "num": 312,
        "question": "DURANTE GLI INTERVENTI DI PREVENZIONE DEI DANNI CAUSATI DALLE LEPRI, CHI DOVREBBE OPPORTUNAMENTE PARTECIPARVI?",
        "options": [
            "Gli organismi direttivi degli A.T.C. (Ambiti Territoriali di Caccia).",
            "I cacciatori localmente interessati allo sfruttamento della specie.",
            "Le guardie dipendenti e volontarie."
        ],
        "correct": 2
    },
    {
        "num": 313,
        "question": "UNA RECINZIONE POSTA A DIFESA DI UNA COCOMERAIA, IN UNA ZONA IN CUI SIANO NORMALMENTE PRESENTI LEPRI, È EFFICACE QUANDO:",
        "options": [
            "Sia stata correttamente montata.",
            "Sia stata montata a regola d’arte, con la collaborazione dei cacciatori e dell’agricoltore.",
            "Sia stata correttamente montata e ne venga attuata un’attenta manutenzione."
        ],
        "correct": 2
    },
    {
        "num": 314,
        "question": "IL PROPRIETARIO O IL CONDUTTORE DI UN FONDO PUÒ VIETARE CHE NELLO STESSO SI ESERCITI LA CACCIA?",
        "options": [
            "Sì, se ha richiesto ed ottenuto autorizzazione dalla Provincia ed apposto tabelle di divieto.",
            "No, mai.",
            "Sì, solo per alcuni periodi."
        ],
        "correct": 0
    },
    {
        "num": 315,
        "question": "L’ACCESSO DI UN CANE IN UN APPEZZAMENTO DI SOIA PRONTA PER IL RACCOLTO, COSA PUÒ PROVOCARE?",
        "options": [
            "Il mancato raccolto delle piante calpestate.",
            "Il mancato raccolto delle piante calpestate e il rischio di imbrattamento fecale della coltivazione.",
            "L’apertura dei baccelli e la conseguente perdita dei semi di tutte le piante pestate o urtate dal cane."
        ],
        "correct": 2
    },
    {
        "num": 316,
        "question": "LA FAUNA SELVATICA È TUTELATA DALLE LEGGI ITALIANE NELL’INTERESSE:",
        "options": [
            "Dei cacciatori.",
            "Degli agricoltori.",
            "Di tutti i cittadini."
        ],
        "correct": 2
    },
    {
        "num": 317,
        "question": "POSSONO ESSERE PRESI E DETENUTI UOVA, NIDI E PICCOLI NATI DI SELVAGGINA?",
        "options": [
            "Sì, sempre.",
            "No.",
            "Sì, solo per scopi scientifici."
        ],
        "correct": 2
    },
    {
        "num": 318,
        "question": "LE DISCARICHE INCONTROLLATE DI RIFIUTI SOLIDI URBANI, ANCHE SE DI PICCOLE DIMENSIONI, FAVORISCONO LE SPECIE:",
        "options": [
            "Più adattabili, compromettendo così l’equilibrio faunistico.",
            "Utili all’uomo.",
            "Dannose per i soli uomini (es. ratti)."
        ],
        "correct": 0
    },
    {
        "num": 319,
        "question": "LA CORRETTA APPLICAZIONE DELLE LEGGI SUL POSSESSO E SULLA CUSTODIA DEI CANI E DEI GATTI CONTRIBUISCE O MENO ALLA BUONA GESTIONE FAUNISTICA?",
        "options": [
            "Qualche volta.",
            "Non vi contribuisce.",
            "Vi contribuisce in modo particolare."
        ],
        "correct": 2
    },
    {
        "num": 320,
        "question": "QUANDO SI POSSONO PRENDERE GLI UCCELLI DAL NIDO?",
        "options": [
            "Quando li si vuole allevare per farne richiami vivi.",
            "Solo quando sono idonei al volo.",
            "Solo per sottrarli da sicura distruzione o morte."
        ],
        "correct": 2
    },
    {
        "num": 321,
        "question": "SE VEDI UN NIDO CHE COSA FAI?",
        "options": [
            "Mi allontano.",
            "Lo raccolgo.",
            "Lo proteggo."
        ],
        "correct": 0
    },
    {
        "num": 322,
        "question": "SE INCONTRI UN CUCCIOLO DI CAPRIOLO COSA FAI?",
        "options": [
            "Lo raccolgo e lo porto al sicuro.",
            "Lo accarezzo per tranquillizzarlo.",
            "Evito di toccarlo e mi allontano."
        ],
        "correct": 2
    },
    {
        "num": 323,
        "question": "UN “FONDO CHIUSO” PUÒ ESSERE DELIMITATO DA UN CORSO D’ACQUA PERENNE SE QUEST’ULTIMO, OLTRE AD ESSERE PROFONDO UN METRO E MEZZO, È ANCHE:",
        "options": [
            "Largo almeno 2 metri.",
            "Largo almeno 3 metri.",
            "Largo almeno un metro e mezzo."
        ],
        "correct": 1
    },
    {
        "num": 324,
        "question": "COSA DEVONO INDICARE I CARTELLI VIETANTI LA CACCIA NEI FONDI CHIUSI?",
        "options": [
            "Articolo 72 legge quadro.",
            "Fondo chiuso – divieto di caccia.",
            "Divieto di caccia art. 33 T.U."
        ],
        "correct": 1
    },
    {
        "num": 325,
        "question": "IN ZONA DI RIPOPOLAMENTO E CATTURA È CONSENTITA LA CACCIA DA APPOSTAMENTO?",
        "options": [
            "No.",
            "Sì.",
            "Solo se appostamenti autorizzati."
        ],
        "correct": 0
    },
    {
        "num": 326,
        "question": "IL PROPRIETARIO O CONDUTTORE DI UN FONDO PUÒ RICHIEDERE DI VIETARE L’ATTIVITÀ VENATORIA SULLA SUA AZIENDA QUANDO:",
        "options": [
            "Sia documentato il danno e svolga attività di rilevante interesse economico.",
            "Sia provato che la caccia vi si svolge accedendo alle coltivazioni.",
            "Il proprietario o conduttore sia personalmente contrario alla caccia."
        ],
        "correct": 0
    },
    {
        "num": 327,
        "question": "IN UN FONDO SOTTRATTO ALLA GESTIONE PROGRAMMATA DELLA CACCIA, L’ESERCIZIO DELL’ATTIVITÀ VENATORIA:",
        "options": [
            "È consentito solo da appostamento fisso.",
            "È vietato a chiunque.",
            "È consentito secondo una specifica programmazione."
        ],
        "correct": 1
    },
    {
        "num": 328,
        "question": "LA COSTITUZIONE E IL MANTENIMENTO DEGLI APPOSTAMENTI FISSI DI CACCIA RICHIEDE:",
        "options": [
            "L’autorizzazione ed il consenso del proprietario del fondo.",
            "L’autorizzazione della Provincia, previo consenso del proprietario del fondo.",
            "L’autorizzazione dell’A.T.C. (Ambito Territoriale di Caccia) di competenza ed il consenso del proprietario."
        ],
        "correct": 1
    },
    {
        "num": 329,
        "question": "CHE COS’È L’ECOLOGIA?",
        "options": [
            "La scienza che tratta il comportamento degli animali.",
            "La scienza che studia le relazioni tra esseri viventi e l’ambiente in cui vivono.",
            "La scienza che studia il fenomeno delle migrazioni."
        ],
        "correct": 1
    },
    {
        "num": 330,
        "question": "CHE COS’È LO SMOG?",
        "options": [
            "È un insetticida.",
            "È un tipo di abito da sera.",
            "È una conseguenza dell’inquinamento atmosferico."
        ],
        "correct": 2
    },
    {
        "num": 331,
        "question": "QUANDO SONO IN ATTUALITÀ DI COLTIVAZIONE LE COLTURE CEREALICOLE?",
        "options": [
            "Al momento della semina.",
            "Al momento della raccolta.",
            "Dalla semina al raccolto."
        ],
        "correct": 2
    },
    {
        "num": 332,
        "question": "SI PUÒ CACCIARE IN UN TERRENO DI RECENTE IMBOSCHIMENTO?",
        "options": [
            "Mai.",
            "Col consenso del Comune.",
            "Sempre."
        ],
        "correct": 0
    },
    {
        "num": 333,
        "question": "DOPO UN PIC NIC IN UN BOSCO COSA FAI DELLA TUA CARTA STRACCIA?",
        "options": [
            "La lascio sul posto.",
            "La raccolgo.",
            "La nascondo in qualche cespuglio."
        ],
        "correct": 1
    },
    {
        "num": 334,
        "question": "A COSA SONO DESTINATE LE OASI DI PROTEZIONE?",
        "options": [
            "Alla caccia di appostamento fisso.",
            "Al rifugio e alla riproduzione della selvaggina.",
            "Alla cattura di selvaggina stanziale."
        ],
        "correct": 1
    },
    {
        "num": 335,
        "question": "CHI SONO GLI AGENTI PREPOSTI ALLA SORVEGLIANZA DEL PATRIMONIO BOSCHIVO?",
        "options": [
            "Le guardie zoofile.",
            "Le guardie forestali.",
            "Le guardie volontarie venatorie."
        ],
        "correct": 1
    },
    {
        "num": 336,
        "question": "CHE TIPO DI PRATO È L’ERBA MEDICA?",
        "options": [
            "Un prato naturale.",
            "Un prato artificiale.",
            "Una brughiera."
        ],
        "correct": 1
    },
    {
        "num": 337,
        "question": "UN “FONDO CHIUSO” PUÒ ESSERE DELIMITATO DA UN CORSO D’ACQUA PERENNE SE QUEST’ULTIMO, OLTRE AD ESSERE LARGO 3 METRI, È ANCHE:",
        "options": [
            "Profondo almeno 1 metro.",
            "Profondo almeno 1,20 metri.",
            "Profondo almeno un metro e mezzo."
        ],
        "correct": 2
    },
    {
        "num": 338,
        "question": "QUALE PIANTA UTILIZZERESTI, COL CONSENSO DEL PROPRIETARIO, PER COSTRUIRE UN CAPANNO?",
        "options": [
            "Le ortiche.",
            "Le felci.",
            "Le piante di alto fusto."
        ],
        "correct": 1
    },
    {
        "num": 339,
        "question": "QUANDO È IN ATTUALITÀ DI COLTIVAZIONE L’ORTO?",
        "options": [
            "Sempre.",
            "Mai.",
            "Quando maturano i prodotti."
        ],
        "correct": 0
    },
    {
        "num": 340,
        "question": "IN UN BACINO IDROGRAFICO, UNA RICCA VEGETAZIONE, CHE COSA ASSICURA?",
        "options": [
            "Regola l’assorbimento delle acque piovane.",
            "Provoca le piene di fiumi e torrenti.",
            "Causa la siccità."
        ],
        "correct": 0
    },
    {
        "num": 341,
        "question": "QUANDO IL VIGNETO È IN ATTUALITÀ DI COLTIVAZIONE?",
        "options": [
            "Durante la potatura.",
            "Durante l’aratura.",
            "Dalla germogliazione alla maturazione dell’uva."
        ],
        "correct": 2
    },
    {
        "num": 342,
        "question": "CHE COSA PRODUCE LA MARCITA?",
        "options": [
            "Erba.",
            "Frumento.",
            "Avena."
        ],
        "correct": 0
    },
    {
        "num": 343,
        "question": "CHE COSA SONO GLI ANTICRITTOGAMICI E GLI INSETTICIDI?",
        "options": [
            "Sono sostanze utili contro le epidemie della selvaggina.",
            "Sono sostanze solitamente dannose alla selvaggina.",
            "Sono sostanze usate per la vaccinazione del cane da caccia."
        ],
        "correct": 1
    },
    {
        "num": 344,
        "question": "A CHE SERVE L’INANELLAMENTO DEGLI UCCELLI?",
        "options": [
            "A studiare il comportamento degli uccelli migratori.",
            "A catturare gli uccelli vivi.",
            "Ad ingabbiare gli uccelli per farli cantare."
        ],
        "correct": 0
    },
    {
        "num": 345,
        "question": "QUAL È IL COMPITO DEL CANE DA CACCIA?",
        "options": [
            "Di addentare la preda.",
            "Di avventarsi sulla preda.",
            "Di seguire la pista e spingere la preda alla fuga o al frullo."
        ],
        "correct": 2
    },
    {
        "num": 346,
        "question": "SE DEVI COSTRUIRE UN APPOSTAMENTO TEMPORANEO DI CACCIA COSA FAI?",
        "options": [
            "Recuperi arbusti già tagliati.",
            "Ti rivolgi al proprietario del fondo.",
            "Prelevi i rami da un altro appostamento."
        ],
        "correct": 0
    },
    {
        "num": 347,
        "question": "SE VEDI UN NIDO COSA FAI?",
        "options": [
            "Lo raccolgo.",
            "Mi allontano.",
            "Lo distruggo."
        ],
        "correct": 1
    },
    {
        "num": 348,
        "question": "GLI AGRICOLTORI ED I CACCIATORI QUALI INTERESSI HANNO IN COMUNE?",
        "options": [
            "Le coltivazioni.",
            "La selvaggina.",
            "La conservazione dell’ambiente."
        ],
        "correct": 2
    },
    {
        "num": 349,
        "question": "IL VIVAIO È UNA COLTIVAZIONE IN ATTO…",
        "options": [
            "Mai.",
            "Sempre.",
            "Solo in parte."
        ],
        "correct": 1
    },
    {
        "num": 350,
        "question": "CHE COSA SI INTENDE PER AGRICOLTURA BIOLOGICA?",
        "options": [
            "Un metodo di lavorazione del terreno che non fa uso di prodotti chimici di sintesi per la concimazione.",
            "Un metodo di lavorazione del terreno che si avvale dell’aiuto tecnico dei biologi.",
            "Un metodo di lavorazione del terreno che essenzialmente fa ricorso agli anticrittogamici."
        ],
        "correct": 0
    },
    {
        "num": 351,
        "question": "QUALE TIPO DI COLTURA È PREFERITA COME PASTURA DAL FAGIANO?",
        "options": [
            "Trifoglio.",
            "Barbabietola.",
            "Granturco."
        ],
        "correct": 2
    },
    {
        "num": 352,
        "question": "COME SONO CONSIDERATE LE COLTIVAZIONI FLOREALI AI FINI VENATORI?",
        "options": [
            "Fondi chiusi.",
            "Terreni in attualità di coltivazione.",
            "Oasi di protezione."
        ],
        "correct": 1
    },
    {
        "num": 353,
        "question": "IL PROPRIETARIO PUÒ ESERCITARE LA CACCIA NEI SUOI TERRENI IN ATTUALITÀ DI COLTIVAZIONE?",
        "options": [
            "No, perché è vietato dalla legge.",
            "Sì, purché non si serva dell’ausilio del cane.",
            "Sì."
        ],
        "correct": 0
    },
    {
        "num": 354,
        "question": "CHE COSA SONO GLI ERBICIDI?",
        "options": [
            "Sostanze usate per concimare il grano.",
            "Sostanze usate per distruggere le erbe nocive.",
            "Sostanze usate per combattere i parassiti delle piante."
        ],
        "correct": 1
    },
    {
        "num": 355,
        "question": "IL CONTADINO PUÒ USARE BOCCONI AVVELENATI PER SALVAGUARDARE LE SUE COLTURE?",
        "options": [
            "Sì, se le circostanze lo richiedono.",
            "Sì, purché autorizzato.",
            "No, perché vietato dalla legge."
        ],
        "correct": 2
    },
    {
        "num": 356,
        "question": "IN UN’AZIENDA AGRICOLA CON PRODUZIONE BIOLOGICA È…",
        "options": [
            "Vietato l’allevamento di più di 50 capi di bestiame per ettaro.",
            "Consentito l’uso della fecondazione artificiale.",
            "Proibito l’allevamento in gabbie di pollame e altri animali da cortile."
        ],
        "correct": 2
    },
    {
        "num": 357,
        "question": "CHE COS’È UN BOSCO CEDUO?",
        "options": [
            "Un bosco soggetto a particolari vincoli.",
            "Una formazione forestale che viene tagliata a intervalli regolari.",
            "Una formazione forestale che viene tagliata quando necessita il legname."
        ],
        "correct": 1
    },
    {
        "num": 358,
        "question": "QUAL È PER ECCELLENZA LA PIANTA DELLA FORESTA MEDITERRANEA?",
        "options": [
            "La ginestra.",
            "Il leccio.",
            "Il carrubo."
        ],
        "correct": 1
    },
    {
        "num": 359,
        "question": "LA MACCHIA BASSA È FORMATA…",
        "options": [
            "Prevalentemente da piante da rimboschimento.",
            "Prevalentemente da piante che non superano i due metri di altezza.",
            "Prevalentemente da corbezzoli e ginepri."
        ],
        "correct": 1
    },
    {
        "num": 360,
        "question": "LA MACCHIA ALTA È FORMATA…",
        "options": [
            "Prevalentemente da alberi d’alto fusto.",
            "Prevalentemente da arbusti che non superano i quattro metri di altezza.",
            "Prevalentemente da piante di lentisco, erica e mirto."
        ],
        "correct": 1
    },
    {
        "num": 361,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI MAL DI MONTAGNA (IPOBAROPATIA)?",
        "options": [
            "Allontanare immediatamente il soggetto dall’altezza critica e farlo riposare.",
            "Allontanare il soggetto dall’altezza e farlo passeggiare effettuando atti respiratori profondi.",
            "Non allontanare il soggetto dall’altezza critica e somministrare ossigeno."
        ],
        "correct": 0
    },
    {
        "num": 362,
        "question": "IN CASO DI EMORRAGIA, IL LACCIO EMOSTATICO È POSTO CORRETTAMENTE QUANDO:",
        "options": [
            "È a pochi centimetri dalla ferita.",
            "È a circa 20 centimetri dalla ferita.",
            "È stretto fino ad impedire la fuoriuscita di sangue."
        ],
        "correct": 2
    },
    {
        "num": 363,
        "question": "IL TRASPORTO IN AUTO DI UN INFORTUNATO DEVE ESSERE EFFETTUATO:",
        "options": [
            "Seduto e immobilizzato.",
            "Comunque, ma velocemente.",
            "Possibilmente sdraiato, senza bruschi movimenti."
        ],
        "correct": 2
    },
    {
        "num": 364,
        "question": "NEL COLPO DI SOLE, LA CUTE È:",
        "options": [
            "Pallida e fredda.",
            "Asciutta e calda.",
            "Sudorante e calda."
        ],
        "correct": 2
    },
    {
        "num": 365,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI TRAUMA CHIUSO DELL’ADDOME?",
        "options": [
            "Far camminare il soggetto e sospendere l’introduzione di liquidi, poi ricovero in ospedale.",
            "Far riposare il soggetto e applicare una borsa d’acqua calda sull’addome, poi ricovero in ospedale.",
            "Far bere al soggetto abbondante quantità di soluzione polisalina, poi ricovero in ospedale."
        ],
        "correct": 2
    },
    {
        "num": 366,
        "question": "IN CASO DI TRAUMA DA AVULSIONE DELLA MANO NECESSITA:",
        "options": [
            "Rapido tamponamento dell’emorragia mediante compressione locale e applicazione di laccio emostatico per un periodo limitato.",
            "Immobilizzare la mano e mettere un laccio emostatico per un periodo prolungato.",
            "Tenere il polso piegato per non far uscire il sangue e fasciare."
        ],
        "correct": 0
    },
    {
        "num": 367,
        "question": "LA LIPOTIMIA È:",
        "options": [
            "Una fugace perdita di coscienza.",
            "Improvviso arresto cardiaco.",
            "Prolungata perdita di coscienza."
        ],
        "correct": 0
    },
    {
        "num": 368,
        "question": "LA SETE INTENSA PUÒ ESSERE SINTOMO DI:",
        "options": [
            "Colpo di sole.",
            "Colpo di calore.",
            "Assideramento."
        ],
        "correct": 1
    },
    {
        "num": 369,
        "question": "UNA PERSONA COLPITA DA INFARTO:",
        "options": [
            "Va sempre incontro ad un arresto cardiaco.",
            "Non necessariamente è in arresto cardiaco.",
            "È sempre in arresto cardiaco se la temperatura esterna è elevata."
        ],
        "correct": 1
    },
    {
        "num": 370,
        "question": "COME SI CURANO LE DISTORSIONI LIEVI?",
        "options": [
            "Con una gessatura di 15 giorni e successive riabilitazioni.",
            "Con riposo dell’articolazione, impacchi freddi e fasciatura compressiva.",
            "Con massaggi continuati, acqua tiepida e movimenti continui per riabilitarla."
        ],
        "correct": 1
    },
    {
        "num": 371,
        "question": "SU DI UNA FERITA, UNA VOLTA DISINFETTATA E PULITA, APPLICHIAMO:",
        "options": [
            "Cotone idrofilo di prima scelta.",
            "Fascia di garza elasticizzata.",
            "Compressa sterile."
        ],
        "correct": 2
    },
    {
        "num": 372,
        "question": "IN CASO DI GRAVE CONTUSIONE ADDOMINALE, DOBBIAMO:",
        "options": [
            "Mettere una borsa d’acqua calda sull’addome.",
            "Somministrare analgesici.",
            "Ospedalizzare al più presto."
        ],
        "correct": 2
    },
    {
        "num": 373,
        "question": "IN CASO DI SOSPETTA INGESTIONE DI CIBI VELENOSI, DOBBIAMO:",
        "options": [
            "Provocare vomito comunque.",
            "Provocare vomito, solo se è trascorso poco tempo dall’ingestione.",
            "Somministrare abbondante latte."
        ],
        "correct": 1
    },
    {
        "num": 374,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI ASSIDERAMENTO?",
        "options": [
            "Massaggiare il soggetto con olio caldo e somministrare bevande alcoliche.",
            "Trasportare il soggetto in ambiente riscaldato e somministrare bevande alcoliche calde in abbondanza.",
            "Trasportare il soggetto in ambiente riscaldato e somministrare bevande non alcoliche calde."
        ],
        "correct": 2
    },
    {
        "num": 375,
        "question": "NEL CASO DEL CLASSICO SVENIMENTO (LIPOTIMIA), PONIAMO IL SOGGETTO:",
        "options": [
            "Seduto.",
            "Sdraiato a gambe aperte.",
            "Sdraiato a gambe sollevate."
        ],
        "correct": 2
    },
    {
        "num": 376,
        "question": "IN CASO DI SOSPETTA FRATTURA DELLA COLONNA VERTEBRALE, IL TRASPORTO SARÀ EFFETTUATO:",
        "options": [
            "Immobilizzando gli arti.",
            "Su un piano rigido.",
            "Immobilizzando testa e bacino."
        ],
        "correct": 1
    },
    {
        "num": 377,
        "question": "L’ASSIDERAMENTO È CARATTERIZZATO NEL III STADIO DA:",
        "options": [
            "Torpore fino al coma, allucinazioni a sfondo gradevole, convulsioni e morte.",
            "Pallore, paralisi, morte.",
            "Tachicardia, allucinazioni, paralisi e morte."
        ],
        "correct": 0
    },
    {
        "num": 378,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI AMPUTAZIONI?",
        "options": [
            "Fasciare la ferita, recuperare e lavare la parte lesa, avvolgerla in un panno con ghiaccio e trasportare in ospedale.",
            "Fasciare la ferita, recuperare e lavare la parte lesa, avvolgerla in un panno caldo e trasportare in ospedale.",
            "Attaccare la parte amputata alla meglio e fasciare molto stretto."
        ],
        "correct": 0
    },
    {
        "num": 379,
        "question": "QUALE DEI SEGUENTI SINTOMI NON È PRESENTE NEL COLPO DI SOLE?",
        "options": [
            "Cefalea e vertigini.",
            "Abbassamento della temperatura corporea.",
            "Sudorazione profusa."
        ],
        "correct": 1
    },
    {
        "num": 380,
        "question": "IL COLPO DI CALORE SI VERIFICA:",
        "options": [
            "Per esposizioni prolungate al sole.",
            "Per permanenze in ambienti caldi, umidi e poco ventilati.",
            "Per contatto prolungato con sorgenti di calore."
        ],
        "correct": 1
    },
    {
        "num": 381,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI USTIONI?",
        "options": [
            "Ventilare la parte e applicare acqua molto fredda e trasportare in ospedale.",
            "Applicare una pomata antinfiammatoria e trasportare in ospedale.",
            "Lavare abbondantemente con una soluzione di ammonio quaternario e applicare garze sterili imbevute di vaselina, quindi trasportare in ospedale."
        ],
        "correct": 2
    },
    {
        "num": 382,
        "question": "PER EVITARE IL COLPO DI SOLE È MEGLIO PROTEGGERE DAI RAGGI:",
        "options": [
            "La fronte.",
            "La nuca.",
            "Gli occhi."
        ],
        "correct": 1
    },
    {
        "num": 383,
        "question": "IN CASO DI CONGELAMENTO NON BISOGNA:",
        "options": [
            "Massaggiare la parte colpita.",
            "Somministrare bevande alcoliche.",
            "Riscaldare con sorgenti di calore o borse calde."
        ],
        "correct": 1
    },
    {
        "num": 384,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI FERITA DA PALLINI DA CACCIA?",
        "options": [
            "Detergere con acqua ossigenata i fori prodotti dai pallini, applicare una garza sterile e trasportare in ospedale.",
            "Sciacquare abbondantemente con acqua i fori prodotti dai pallini e trasportare in ospedale.",
            "Applicare dell’erba asciutta pulita sui fori prodotti dai pallini, comprimendo energicamente, e trasportare in ospedale."
        ],
        "correct": 0
    },
    {
        "num": 385,
        "question": "LA DISTORSIONE È:",
        "options": [
            "La permanente fuoriuscita di un capo articolare.",
            "L’insieme delle lesioni della capsula e dei legamenti di un’articolazione.",
            "Allungamento eccessivo di un muscolo."
        ],
        "correct": 1
    },
    {
        "num": 386,
        "question": "IN CASO DI USTIONE DI SECONDO GRADO CON COMPARSA DI BOLLE, DOBBIAMO:",
        "options": [
            "Forarle e far uscire il liquido.",
            "Non toccarle.",
            "Tagliarle e asportarle."
        ],
        "correct": 1
    },
    {
        "num": 387,
        "question": "È PIÙ GRAVE UNA USTIONE:",
        "options": [
            "Di terzo grado localizzata.",
            "Di secondo grado al torace.",
            "Di primo grado su tutto il corpo."
        ],
        "correct": 2
    },
    {
        "num": 388,
        "question": "IN CASO DI EPISTASSI (SANGUE DAL NASO) È CONSIGLIABILE:",
        "options": [
            "Rovesciare indietro la testa.",
            "Tappare il naso con cotone idrofilo.",
            "Tenere le dita premute sulle cartilagini del naso con la testa leggermente chinata in avanti."
        ],
        "correct": 2
    },
    {
        "num": 389,
        "question": "IN CASO DI FRATTURA DELL’AVAMBRACCIO DOBBIAMO IMMOBILIZZARE:",
        "options": [
            "Il polso.",
            "Il gomito.",
            "Il polso e il gomito."
        ],
        "correct": 2
    },
    {
        "num": 390,
        "question": "SE DOPO UN GRAVE TRAUMA CRANICO ABBIAMO EMORRAGIA DALL’ORECCHIO O DAL NASO, DOBBIAMO:",
        "options": [
            "Tamponare.",
            "Pulire e disinfettare.",
            "Lasciare fuoriuscire il sangue."
        ],
        "correct": 2
    },
    {
        "num": 391,
        "question": "IL DOLORE PIÙ TIPICO DELL’INFARTO CARDIACO È:",
        "options": [
            "Al centro inferiore del torace.",
            "A sinistra, sul cuore.",
            "Tra le scapole."
        ],
        "correct": 0
    },
    {
        "num": 392,
        "question": "IN CASO DI EMORRAGIA ARTERIOSA DA FERITA DA ARMA DA FUOCO SU UN ARTO, LA COMPRESSIONE EMOSTATICA LA FAREMO:",
        "options": [
            "Sulla ferita.",
            "A monte della ferita.",
            "A valle della ferita."
        ],
        "correct": 1
    },
    {
        "num": 393,
        "question": "IN CASO DI USTIONE È NECESSARIO INNANZITUTTO:",
        "options": [
            "Lavare l’ustione con acqua fredda.",
            "Applicare cerotti o utilizzare cotone per coprire l’ustione.",
            "Asportare le vesciche dopo averle perforate."
        ],
        "correct": 0
    },
    {
        "num": 394,
        "question": "IN CASO DI INIZIALE CONGELAMENTO DELLE DITA DI UN PIEDE, BISOGNA:",
        "options": [
            "Frizionare e massaggiare.",
            "Immergere in acqua fredda.",
            "Immergere in acqua calda."
        ],
        "correct": 0
    },
    {
        "num": 395,
        "question": "I SEGNI CLINICI DI UNA SOSPETTA FRATTURA COSTALE SONO:",
        "options": [
            "Lieve dolore localizzato non accentuato dagli atti respiratori.",
            "Assenza di dolore localizzato che compare e si acuisce con gli atti respiratori.",
            "Intenso dolore localizzato che si accentua con gli atti respiratori."
        ],
        "correct": 2
    },
    {
        "num": 396,
        "question": "IN CASO DI ASFISSIA DOVUTA AD OSTRUZIONE DELLE VIE AEREE, DOBBIAMO:",
        "options": [
            "Dare da bere acqua.",
            "Praticare respirazione artificiale e massaggio cardiaco.",
            "Liberare le vie aeree."
        ],
        "correct": 2
    },
    {
        "num": 397,
        "question": "COME SI DISTINGUE UNA EMORRAGIA ARTERIOSA DA UNA VENOSA?",
        "options": [
            "Il colore del sangue è più rosso nella venosa ed è maggiore la velocità di fuoriuscita.",
            "Nell’arteriosa la velocità di uscita del sangue è maggiore e a volte ritmica.",
            "Il colore del sangue è più scuro nell’arteriosa."
        ],
        "correct": 1
    },
    {
        "num": 398,
        "question": "QUALE COMPORTAMENTO BISOGNA ADOTTARE IN CASO DI FRATTURA DEGLI ARTI?",
        "options": [
            "Immobilizzare con qualsiasi mezzo a disposizione per evitare gli spostamenti dei frammenti ossei e trasportare in ospedale.",
            "Non immobilizzare i frammenti ossei per il rischio di bloccare la circolazione sanguigna.",
            "Far camminare il soggetto con l’aiuto di un bastone e trasportare in ospedale."
        ],
        "correct": 0
    },
    {
        "num": 399,
        "question": "QUALE COMPORTAMENTO BISOGNA ADOTTARE IN CASO DI USTIONI?",
        "options": [
            "Ventilare la parte e applicare acqua molto fredda e trasportare in ospedale.",
            "Applicare una pomata antinfiammatoria e trasportare in ospedale.",
            "Lavare abbondantemente con una soluzione di ammonio quaternario e applicare garze sterili imbevute di vaselina, quindi trasportare in ospedale."
        ],
        "correct": 2
    },
    {
        "num": 400,
        "question": "IN CASO DI FRATTURA ESPOSTA, DOPO LA MEDICAZIONE, È UTILE EFFETTUARE COMUNQUE L’IMMOBILIZZAZIONE?",
        "options": [
            "Sì.",
            "No.",
            "Solo se consiste emorragia."
        ],
        "correct": 0
    },
    {
        "num": 401,
        "question": "COSA FAI IN CASO DI SOSPETTO TRAUMA CRANICO SENZA PERDITA DI COSCIENZA?",
        "options": [
            "Tranquillizzo il soggetto, lo faccio riposare e poi lo lascio andare a casa.",
            "Applico comunque del ghiaccio sul punto di lesione e poi lo accompagno a casa.",
            "Accompagno sempre il soggetto in ospedale per un controllo medico ed eventuali esami."
        ],
        "correct": 2
    },
    {
        "num": 402,
        "question": "LA LEPTOSPIROSI SI CONTRAE SOLITAMENTE CON UNA FERITA, ANCHE PICCOLA, CHE VIENE A CONTATTO CON:",
        "options": [
            "Metalli arrugginiti.",
            "Terriccio.",
            "Acqua stagnante."
        ],
        "correct": 2
    },
    {
        "num": 403,
        "question": "CHE SINTOMI DÀ IL MORSO DI VIPERA?",
        "options": [
            "Svenimento dopo 15 minuti.",
            "Immediato intenso dolore locale.",
            "Delirio dopo 1 ora."
        ],
        "correct": 1
    },
    {
        "num": 404,
        "question": "IN CASO DI VIOLENTO TRAUMA DELL’ADDOME BISOGNA PENSARE AD UNA ROTTURA DI MILZA SE:",
        "options": [
            "Compare un violento dolore su tutto l’addome.",
            "Al forte dolore si accompagna sensazione di vomito.",
            "Sempre, anche in assenza del dolore tipico in ipocondrio sinistro."
        ],
        "correct": 2
    },
    {
        "num": 405,
        "question": "SE UNA FERITA È CAUSATA DA UNA FRECCIA DI UN ARCO RIMASTA INSERITA, DOBBIAMO:",
        "options": [
            "Estrarla al più presto.",
            "Medicare e fasciare lasciandola dov’è, e ospedalizzare al più presto.",
            "Estrarla e tamponare."
        ],
        "correct": 1
    },
    {
        "num": 406,
        "question": "IN CASO DI CONTATTO DELL’OCCHIO CON SOSTANZE CHIMICHE, DOBBIAMO:",
        "options": [
            "Lavare abbondantemente con acqua e ospedalizzare.",
            "Instillare gocce di collirio disinfettante per più volte.",
            "Bendare e ospedalizzare."
        ],
        "correct": 0
    },
    {
        "num": 407,
        "question": "IN CASO DI FERITA PROFONDA DA ARMA DA FUOCO ALLA COSCIA, CON EMORRAGIA ARTERIOSA, È GIUSTO:",
        "options": [
            "Comprimere fortemente l’inguine dallo stesso lato.",
            "Comprimere fortemente a monte della ferita, mantenere al caldo e trasportare in ospedale.",
            "Posizionare laccio emostatico e trasportare in ospedale."
        ],
        "correct": 1
    },
    {
        "num": 408,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI EDEMA POLMONARE DOVUTO AD ALTA QUOTA?",
        "options": [
            "Trasportare il soggetto ad un’altezza compresa tra 2500 e 2000 metri e chiedere l’intervento immediato di un medico.",
            "Trasportare il soggetto ad un’altezza compresa tra 2000 e 1500 metri e chiedere l’intervento immediato di un medico.",
            "Trasportare il soggetto ad un’altezza sempre inferiore a 1500 metri e chiedere l’intervento immediato di un medico."
        ],
        "correct": 2
    },
    {
        "num": 409,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI COLPO DI CALORE?",
        "options": [
            "Somministrare bevande gelate.",
            "Somministrare bevande fresche alcoliche.",
            "Somministrare bevande fresche non alcoliche."
        ],
        "correct": 2
    },
    {
        "num": 410,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI AVVELENAMENTO DA INALAZIONE?",
        "options": [
            "Portare il soggetto all’aperto e praticare respirazione bocca a bocca e subito ricovero in ospedale.",
            "Ventilare il soggetto e indurre vomito e subito ricovero in ospedale.",
            "Far tossire il soggetto e somministrare abbondanti liquidi, poi ricovero subito in ospedale."
        ],
        "correct": 0
    },
    {
        "num": 411,
        "question": "COME SI CURANO LE PUNTURE D’INSETTI?",
        "options": [
            "Si lascia in sede il pungiglione e si preme fortemente con una moneta.",
            "Se presente, si cerca di estrarre delicatamente il pungiglione, si disinfetta e si mette una pomata antistaminica.",
            "Si lava bene, si disinfetta, si fa un piccolo taglio nella zona e si mette pomata antistaminica."
        ],
        "correct": 1
    },
    {
        "num": 412,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI SHOCK?",
        "options": [
            "Tenere il soggetto in piedi e mettere acqua fresca sul collo e sulla fronte, poi trasportare in ospedale.",
            "Tenere il soggetto seduto e portare la testa in avanti, poi trasportare in ospedale.",
            "Tenere il soggetto sdraiato, liberare la bocca dal muco e trasportare in ospedale."
        ],
        "correct": 2
    },
    {
        "num": 413,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI PUNTURA DI APE?",
        "options": [
            "Togliere il pungiglione, disinfettare e applicare impacchi freddi.",
            "Premere energicamente la zona della puntura, applicare acqua fredda e fasciare forte.",
            "Togliere il pungiglione, premere forte la parte colpita applicando acqua calda."
        ],
        "correct": 0
    },
    {
        "num": 414,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI AVVELENAMENTO DA INGESTIONE DI CIBI?",
        "options": [
            "Far rimanere immobile il soggetto senza bere e trasportare in ospedale.",
            "Far vomitare il soggetto e somministrare alcolici, poi trasportare in ospedale.",
            "Far vomitare il soggetto e somministrare soluzioni polisaline, poi trasportare in ospedale."
        ],
        "correct": 2
    },
    {
        "num": 415,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI DISTORSIONE DELLA CAVIGLIA O DEL GINOCCHIO?",
        "options": [
            "Massaggiare e muovere energicamente la parte lesa.",
            "Immobilizzare e applicare la borsa di ghiaccio sulla parte lesa.",
            "Camminare a piedi scalzi fino a regressione della sintomatologia dolorosa."
        ],
        "correct": 1
    },
    {
        "num": 416,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI FERITA DA PUNTA E/O TAGLIO DELLA MANO?",
        "options": [
            "Applicare dell’erba asciutta pulita sulla lesione e avvolgere con un fazzoletto.",
            "Far muovere la mano al fine di far uscire del sangue e poi medicare.",
            "Pulire accuratamente la ferita e immobilizzare con una fasciatura."
        ],
        "correct": 2
    },
    {
        "num": 417,
        "question": "IN CASO DI MORSO DI VIPERA È CONSIGLIABILE:",
        "options": [
            "Tranquillizzare il paziente, farlo distendere e coprirlo con panni caldi.",
            "Far muovere il paziente e applicare ghiaccio intorno all’area del morso.",
            "Tranquillizzare il paziente e applicare ghiaccio intorno all’area del morso."
        ],
        "correct": 0
    },
    {
        "num": 418,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI MORSO DI VIPERA?",
        "options": [
            "Incidere la ferita, succhiare il sangue con succhiaveleno e trasportare in ospedale.",
            "Disinfettare la ferita con alcol e immergere l’arto in acqua calda, poi trasporto in ospedale.",
            "Applicare un laccio a monte della ferita per più di 2 ore e trasportare in ospedale."
        ],
        "correct": 0
    },
    {
        "num": 419,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI ARRESTO CARDIACO?",
        "options": [
            "Picchiare forte sul torace e aspettare che riprenda conoscenza, poi trasportare in ospedale.",
            "Praticare massaggio cardiaco esterno e respirazione bocca a bocca, poi trasporto in ospedale.",
            "Mettere il paziente seduto e portare la testa all’indietro per respirazione bocca a bocca, poi trasportare in ospedale."
        ],
        "correct": 1
    },
    {
        "num": 420,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI ANNEGAMENTO?",
        "options": [
            "Favorire l’emissione del liquido ingoiato flettendo la testa del soggetto e picchiettandolo sul dorso.",
            "Disporre il soggetto su di un lato e attendere che l’acqua ingoiata fuoriesca.",
            "Favorire l’emissione del liquido ingoiato iperestendendo la testa del soggetto e comprimendo sull’addome."
        ],
        "correct": 2
    },
    {
        "num": 421,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI STRAPPO MUSCOLARE?",
        "options": [
            "Mettere il soggetto a riposo massaggiando con pomata antinfiammatoria o olio caldo.",
            "Far muovere il soggetto quando più è possibile e applicare pomata di vaselina.",
            "Applicare borsa di ghiaccio sulla zona colpita entro un’ora dalla comparsa dell’incidente."
        ],
        "correct": 0
    },
    {
        "num": 422,
        "question": "QUALE COMPORTAMENTO ADOTTARE SE ENTRA UN CORPO ESTRANEO IN UN OCCHIO?",
        "options": [
            "Estroflettere la palpebra e asportare il corpo estraneo con un batuffolo di cotone bagnato con acqua.",
            "Estroflettere la palpebra e asportare il corpo estraneo con punta di fazzoletto rigido.",
            "Estroflettere la palpebra e asportare il corpo estraneo sciacquando con acqua calda."
        ],
        "correct": 0
    },
    {
        "num": 423,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI SVENIMENTO (LIPOTIMIA)?",
        "options": [
            "Sollevare il soggetto in piedi e ventilare energicamente.",
            "Lasciare il soggetto disteso e sollevare le gambe.",
            "Mettere il soggetto seduto e slacciare il colletto della camicia."
        ],
        "correct": 1
    },
    {
        "num": 424,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI CONGELAMENTO?",
        "options": [
            "Esporre il soggetto colpito al sole con le gambe sollevate.",
            "Liberare la parte congelata dagli indumenti e massaggiare con le mani calde e disporre il ricovero in ospedale.",
            "Far bere alcol al soggetto e versare acqua calda sulla parte congelata."
        ],
        "correct": 1
    },
    {
        "num": 425,
        "question": "QUALE COMPORTAMENTO ADOTTARE IN CASO DI FOLGORAZIONE?",
        "options": [
            "Allontanare entro 10 minuti il soggetto dal conduttore e disporre riposo assoluto in luogo asciutto in attesa del ricovero in ospedale.",
            "Allontanare entro 5 minuti il soggetto dal conduttore ed effettuare respirazione bocca a bocca e massaggio cardiaco fino al momento del ricovero in ospedale.",
            "Allontanare il soggetto dal conduttore appena è possibile, farlo riposare in un luogo asciutto per almeno 15 minuti e poi ricovero in ospedale."
        ],
        "correct": 1
    },
    {
        "num": 426,
        "question": "UNA MALATTIA DA USTIONE, SE NON TRATTATA SUBITO, PUÒ CAUSARE:",
        "options": [
            "Un danno permanente alla cute senza pericolo di vita.",
            "La morte per grave shock ipovolemico.",
            "Nulla, in quanto è una patologia destinata a guarigione spontanea."
        ],
        "correct": 1
    },
    {
        "num": 427,
        "question": "IN CASO DI FORTE TRAUMA CONTUSIVO AL BULBO DELL’OCCHIO È CONSIGLIABILE:",
        "options": [
            "Applicare ghiaccio sull’occhio senza preoccuparsi ulteriormente.",
            "Inviare subito il soggetto in ospedale per scongiurare un eventuale distacco di retina.",
            "Applicare delle gocce antistaminiche e far riposare l’occhio con una benda oculistica."
        ],
        "correct": 1
    },
    {
        "num": 428,
        "question": "IN CASO DI VIOLENTO DOLORE SUL CALCAGNO DURANTE UNO SFORZO È CONSIGLIABILE:",
        "options": [
            "Ospedalizzare il soggetto per una sospetta rottura del tendine di Achille.",
            "Immobilizzare l’arto e consigliare riposo per qualche giorno.",
            "Applicare ghiaccio e benda elasticizzata."
        ],
        "correct": 0
    },
    {
        "num": 429,
        "question": "IN CASO DI DISTORSIONE DEL GINOCCHIO È OPPORTUNO:",
        "options": [
            "Far camminare il soggetto per evitare il versamento di liquido.",
            "Immobilizzare l’articolazione e applicare borsa di ghiaccio.",
            "Applicare una crema riscaldante massaggiando la parte lesa."
        ],
        "correct": 1
    },
    {
        "num": 430,
        "question": "IN CASO DI LUSSAZIONE DELLA CLAVICOLA È CONSIGLIABILE:",
        "options": [
            "Applicare borsa di ghiaccio sulla parte e ospedalizzare.",
            "Tentare di mettere a posto l’osso facendo ruotare la spalla.",
            "Immobilizzare e tenere al caldo il soggetto."
        ],
        "correct": 2
    },
    {
        "num": 431,
        "question": "IN CASO DI TRAUMA DA SCHIACCIAMENTO DELLA MANO BISOGNA PREOCCUPARSI SE:",
        "options": [
            "La mano appare rossa, dolente e con formicolii.",
            "La mano appare di colorito normale, molto dolente ed intorpidita.",
            "La mano appare pallida, edematosa e molto dolente."
        ],
        "correct": 2
    },
    {
        "num": 432,
        "question": "IN CASO DI FERITA CON PROIETTILE RITENUTO, LE COMPLICANZE PIÙ FREQUENTI SONO:",
        "options": [
            "Infezione ed emorragia.",
            "Formazione di tessuto cicatriziale.",
            "Lesioni gravi di muscolo e nervi."
        ],
        "correct": 0
    },
    {
        "num": 433,
        "question": "IN CASO DI PENETRAZIONE DI UN INSETTO NEL NASO BISOGNA:",
        "options": [
            "Applicare un getto di acqua sterile per aiutare la fuoriuscita.",
            "Far soffiare con forza il naso e applicare una pomata al cortisone.",
            "Dilatare il vestibolo nasale con uno speculo e applicare gocce decongestionanti."
        ],
        "correct": 2
    },
    {
        "num": 434,
        "question": "IN CASO DI TRAUMA NASALE È CONSIGLIABILE:",
        "options": [
            "Applicare borsa di ghiaccio e raggiungere il pronto soccorso per scongiurare un’eventuale frattura.",
            "Applicare borsa di ghiaccio senza ulteriori indagini.",
            "Applicare una pomata antidolorifica e mettere un tampone nel naso."
        ],
        "correct": 0
    },
    {
        "num": 435,
        "question": "IN CASO DI PUNTURA DI CALABRONE È OPPORTUNO:",
        "options": [
            "Applicare una pomata antinfiammatoria e somministrare antibiotico.",
            "Applicare borsa di ghiaccio e trasportare in ospedale per evitare shock allergico.",
            "Applicare soluzione al bicarbonato e fasciare strettamente il punto di inoculo."
        ],
        "correct": 1
    },
    {
        "num": 436,
        "question": "IN CASO DI CONTATTO DELL’OCCHIO CON SOSTANZE IRRITANTI NON IDENTIFICATE È CONSIGLIABILE:",
        "options": [
            "Applicare gocce vasocostrittrici e bendare.",
            "Lavare con acqua di rubinetto e applicare pomata cortisonica.",
            "Lavare con soluzione fisiologica sterile ed inviare al controllo medico."
        ],
        "correct": 2
    },
    {
        "num": 437,
        "question": "IN CASO DI PRURITO DIFFUSO, A RAPIDA INSORGENZA, BISOGNA PENSARE A:",
        "options": [
            "Un’eventuale allergia da agenti esterni.",
            "Un’eventuale infezione della pelle.",
            "Un’eventuale intossicazione da fumo."
        ],
        "correct": 0
    },
    {
        "num": 438,
        "question": "IL SOSPETTO AVVELENAMENTO DA FUNGHI SI PRESENTA CON:",
        "options": [
            "Gonfiore al viso e al tronco, con sensazione di sete intensa.",
            "Aumento della pressione arteriosa, vomito ed aumento dell’emissione di urina.",
            "Malessere generale, diarrea violenta con sangue, diminuzione della pressione arteriosa."
        ],
        "correct": 2
    },
    {
        "num": 439,
        "question": "IN CASO DI LUSSAZIONE TRAUMATICA DI SPALLA BISOGNA:",
        "options": [
            "Tentare di ridurla al più presto stirando l’arto.",
            "Immobilizzare l’arto e ospedalizzare entro 12 ore.",
            "Immobilizzare l’arto e ospedalizzare entro 6 ore."
        ],
        "correct": 2
    },
    {
        "num": 440,
        "question": "IN CASO DI LESIONE DELLA COLONNA DORSO-LOMBARE BISOGNA:",
        "options": [
            "Tenere sempre il soggetto adagiato su un piano rigido e trasportare in ospedale.",
            "Tenere sempre il soggetto con capo iperesteso e trasportare in ospedale.",
            "Tenere sempre il soggetto seduto con testa immobile e trasportare in ospedale."
        ],
        "correct": 0
    },
    {
        "num": 441,
        "question": "IN CASO DI ORTICARIA DA CONTATTO CON DERIVATI ANIMALI BISOGNA:",
        "options": [
            "Somministrare al più presto antibiotici e cortisonici.",
            "Somministrare al più presto antistaminici e antibiotici.",
            "Somministrare al più presto antistaminici e cortisonici."
        ],
        "correct": 2
    },
    {
        "num": 442,
        "question": "IN CASO DI TRAUMA CONTUSIVO DEL TESTICOLO E DELLO SCROTO BISOGNA:",
        "options": [
            "Applicare borsa d’acqua calda ed antinfiammatori.",
            "Applicare borsa di ghiaccio ed antinfiammatori.",
            "Applicare pomata lenitiva e vasodilatatori."
        ],
        "correct": 1
    },
    {
        "num": 443,
        "question": "IN CASO DI PUNTURE DI ZECCHE SI PUÒ MANIFESTARE:",
        "options": [
            "La malattia di Lyme con eritema cutaneo, febbre, astenia, rigidità nucale.",
            "La malattia dei legionari con febbre e polmonite.",
            "La malattia da Campylobacter con diarrea acuta e febbre."
        ],
        "correct": 0
    },
    {
        "num": 444,
        "question": "L’EDEMA CEREBRALE DA ALTITUDINI ELEVATE PUÒ VERIFICARSI PER:",
        "options": [
            "Nelle ascensioni a quote fra 1500 e 2700 metri.",
            "Nelle ascensioni a quote fra 2700 e 3900 metri.",
            "Nelle ascensioni a quote fra 4000 e 4700 metri."
        ],
        "correct": 2
    },
    {
        "num": 445,
        "question": "L’EDEMA POLMONARE DA ALTITUDINI ELEVATE PUÒ VERIFICARSI PER:",
        "options": [
            "Nelle ascensioni a quote fra 1000 e 1500 metri.",
            "Nelle ascensioni a quote fra 1500 e 2700 metri.",
            "Nelle ascensioni a quote fra 2700 e 3700 metri."
        ],
        "correct": 2
    },
    {
        "num": 446,
        "question": "IL NUOVO PROTOCOLLO PER MORSI DI SERPENTI PREVEDE:",
        "options": [
            "Applicare laccio emostatico, ghiaccio e siero antiofidico intorno al morso.",
            "Applicare bendaggio compressivo a livello della morsicatura, sedare e immobilizzare il soggetto.",
            "Applicare laccio emostatico, somministrare morfina e ghiaccio intorno alla morsicatura."
        ],
        "correct": 1
    },
    {
        "num": 447,
        "question": "LE COMPLICAZIONI PIÙ GRAVI IN CASO DI INTOSSICAZIONE ACUTA DA ALCOL ETILICO SONO:",
        "options": [
            "Edema polmonare acuto, traumi, ipertensione endocranica.",
            "Edema laringeo, delirio, vertigini.",
            "Edema viscerale, ipertensione arteriosa, shock."
        ],
        "correct": 0
    },
    {
        "num": 448,
        "question": "LA SINCOPE DA CALORE È CARATTERIZZATA DA:",
        "options": [
            "Sete intensa, cute asciutta, iperventilazione.",
            "Secchezza della cute, ipertensione arteriosa, vertigini.",
            "Cefalea, vertigini, nausea, perdita di coscienza."
        ],
        "correct": 2
    },
    {
        "num": 449,
        "question": "L’ESAURIMENTO DI CALORE DA DEPLEZIONE IDRICA È CARATTERIZZATO DA:",
        "options": [
            "Secchezza delle fauci, sete intensa, iperventilazione, ipertermia.",
            "Secchezza delle fauci, ipoventilazione, vertigini.",
            "Secchezza delle fauci, cute sudata, ipoventilazione."
        ],
        "correct": 0
    },
    {
        "num": 450,
        "question": "L’ASSIDERAMENTO È CARATTERIZZATO NEL I E II STADIO DA:",
        "options": [
            "Oliguria, bradicardia, ipertensione arteriosa, coma.",
            "Poliuria, tachicardia, sonnolenza, riduzione dell’udito e della vista.",
            "Allucinazioni sgradevoli, irritabilità, bradicardia."
        ],
        "correct": 1
    }
];


let currentQuiz = [];
let userAnswers = {};
let quizResults = { passed: 0, failed: 0 };
let quizSubmitted = false;

// Load counters from localStorage with error handling
try {
    if (localStorage.getItem('quizResults')) {
        quizResults = JSON.parse(localStorage.getItem('quizResults'));
        updateCounters();
    }
} catch (error) {
    console.error('Errore nel caricamento dei risultati:', error);
}

function switchTab(tab) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    if (tab === 'quiz') {
        document.querySelector('.nav-tab:nth-child(1)')?.classList.add('active');
        document.getElementById('quiz-tab')?.classList.add('active');
    } else {
        document.querySelector('.nav-tab:nth-child(2)')?.classList.add('active');
        document.getElementById('database-tab')?.classList.add('active');
        loadDatabase();
    }
}

function startQuiz() {
    const startScreen = document.getElementById('start-screen');
    const quizScreen = document.getElementById('quiz-screen');
    
    if (!startScreen || !quizScreen) return;
    
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    // Select 15 random questions
    currentQuiz = [];
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    currentQuiz = shuffled.slice(0, 15);

    userAnswers = {};
    quizSubmitted = false;

    renderQuestions();
    document.getElementById('result-container')?.classList.add('hidden');
    document.getElementById('restart-btn')?.classList.add('hidden');
    document.getElementById('confirm-btn')?.classList.remove('hidden');
}

function renderQuestions() {
    const container = document.getElementById('questions-container');
    if (!container) return;
    
    container.innerHTML = '';

    currentQuiz.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${index}`;

        const questionNumber = document.createElement('div');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Domanda ${index + 1} di 15`;

        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${q.num}. ${q.question}`;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach((opt, optIndex) => {
            const option = document.createElement('div');
            option.className = 'option';
            option.id = `option-${index}-${optIndex}`;
            option.addEventListener('click', () => selectOption(index, optIndex));

            const letter = document.createElement('span');
            letter.className = 'option-letter';
            letter.textContent = String.fromCharCode(65 + optIndex) + ')';

            const text = document.createElement('span');
            text.textContent = opt;

            option.appendChild(letter);
            option.appendChild(text);
            optionsDiv.appendChild(option);
        });

        card.appendChild(questionNumber);
        card.appendChild(questionText);
        card.appendChild(optionsDiv);
        container.appendChild(card);
    });
}

function selectOption(questionIndex, optionIndex) {
    if (quizSubmitted) return;

    // Remove previous selection
    const options = document.querySelectorAll(`#question-${questionIndex} .option`);
    options.forEach(opt => opt.classList.remove('selected'));

    // Add new selection
    const selectedOption = document.getElementById(`option-${questionIndex}-${optionIndex}`);
    if (selectedOption) {
        selectedOption.classList.add('selected');
        userAnswers[questionIndex] = optionIndex;
    }
}

function confirmAnswers() {
    if (Object.keys(userAnswers).length < 15) {
        alert('Per favore, rispondi a tutte le domande prima di confermare!');
        return;
    }

    quizSubmitted = true;
    let wrongCount = 0;
    const wrongQuestions = [];

    currentQuiz.forEach((q, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = q.correct;
        const options = document.querySelectorAll(`#question-${index} .option`);

        options.forEach((opt, optIndex) => {
            opt.style.cursor = 'default';
            opt.removeEventListener('click', () => selectOption(index, optIndex));
            opt.onclick = null;

            if (optIndex === correctAnswer) {
                opt.classList.add('correct');
            }

            if (optIndex === userAnswer && userAnswer !== correctAnswer) {
                opt.classList.add('wrong');
                wrongCount++;
                wrongQuestions.push(index + 1);
            }
        });
    });

    const resultContainer = document.getElementById('result-container');
    if (!resultContainer) return;
    
    resultContainer.innerHTML = '';
    resultContainer.classList.remove('hidden');

    const resultMsg = document.createElement('div');
    resultMsg.className = 'result-message';

    if (wrongCount <= 2) {
        resultMsg.classList.add('pass');
        resultMsg.innerHTML = `✅ <strong>PROMOSSO!</strong><br>Hai commesso ${wrongCount} ${wrongCount === 1 ? 'errore' : 'errori'}`;
        quizResults.passed++;
    } else {
        resultMsg.classList.add('fail');
        resultMsg.innerHTML = `❌ <strong>NON SUPERATO</strong><br>Hai commesso ${wrongCount} errori (massimo 2 consentiti)`;
        quizResults.failed++;
    }

    if (wrongQuestions.length > 0) {
        const wrongList = document.createElement('p');
        wrongList.style.marginTop = '15px';
        wrongList.style.fontSize = '0.95rem';
        wrongList.innerHTML = `Domande sbagliate: ${wrongQuestions.join(', ')}`;
        resultMsg.appendChild(wrongList);
    }

    resultContainer.appendChild(resultMsg);

    // Update counters
    try {
        localStorage.setItem('quizResults', JSON.stringify(quizResults));
        updateCounters();
    } catch (error) {
        console.error('Errore nel salvataggio dei risultati:', error);
    }

    // Hide confirm button, show restart
    document.getElementById('confirm-btn')?.classList.add('hidden');
    document.getElementById('restart-btn')?.classList.remove('hidden');

    // Scroll to result
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function updateCounters() {
    const passedCount = document.getElementById('passed-count');
    const failedCount = document.getElementById('failed-count');
    
    if (passedCount) passedCount.textContent = quizResults.passed;
    if (failedCount) failedCount.textContent = quizResults.failed;
}

function restartQuiz() {
    // Clear in-memory quiz state
    currentQuiz = [];
    userAnswers = {};
    quizSubmitted = false;

    // Clear UI selections and results
    const questionsContainer = document.getElementById('questions-container');
    if (questionsContainer) questionsContainer.innerHTML = '';
    const resultContainer = document.getElementById('result-container');
    if (resultContainer) resultContainer.classList.add('hidden');

    // Reset buttons
    const confirmBtn = document.getElementById('confirm-btn');
    const restartBtn = document.getElementById('restart-btn');
    if (confirmBtn) confirmBtn.classList.remove('hidden');
    if (restartBtn) restartBtn.classList.add('hidden');

    // Show start screen
    document.getElementById('quiz-screen')?.classList.add('hidden');
    document.getElementById('start-screen')?.classList.remove('hidden');
}

function goBackToStart() {
    // If a quiz is in progress and not yet submitted, ask confirmation
    if (currentQuiz && currentQuiz.length > 0 && !quizSubmitted) {
        const confirmLeave = confirm('Se torni indietro perderai il quiz corrente. Vuoi continuare?');
        if (!confirmLeave) return;
    }
    restartQuiz();
}

function loadDatabase() {
    const container = document.getElementById('database-container');
    if (!container) return;
    
    container.innerHTML = '';

    questions.forEach(q => {
        const card = document.createElement('div');
        card.className = 'database-question';
        card.dataset.text = (`${q.num} ${q.question}`).toLowerCase();
        card.dataset.num = String(q.num);

        const num = document.createElement('div');
        num.className = 'database-question-num';
        num.textContent = `Domanda #${q.num}`;

        const text = document.createElement('div');
        text.className = 'database-question-text';
        text.textContent = `${q.num}. ${q.question}`;

        const options = document.createElement('div');
        options.className = 'database-options';

        q.options.forEach((opt, idx) => {
            const optDiv = document.createElement('div');
            optDiv.className = 'database-option';
            if (idx === q.correct) {
                optDiv.classList.add('correct-answer');
            }

            const letter = document.createElement('strong');
            letter.textContent = String.fromCharCode(65 + idx) + ')';

            const optText = document.createElement('span');
            optText.textContent = opt;

            optDiv.appendChild(letter);
            optDiv.appendChild(optText);
            options.appendChild(optDiv);
        });

        card.appendChild(num);
        card.appendChild(text);
        card.appendChild(options);
        container.appendChild(card);
    });
}

function filterQuestions() {
    const searchTerm = document.getElementById('search-input')?.value.trim().toLowerCase() || '';
    const allQuestions = document.querySelectorAll('.database-question');

    allQuestions.forEach(q => {
        const text = q.dataset.text || '';
        const qnum = q.dataset.num || '';

        if (searchTerm === '') {
            q.style.display = 'block';
            return;
        }

        // If the user typed only digits, treat as question number search (exact match)
        if (/^\d+$/.test(searchTerm)) {
            q.style.display = qnum === searchTerm ? 'block' : 'none';
            return;
        }

        // Otherwise search in the question text
        q.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

// Initialize database on load
loadDatabase();