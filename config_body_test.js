var Transaction = 'Commande B2B';
var Catalog = 'B2B'
var blocks_config = {
    'free_shipping': {
        text: "Frais de port offert \u00e0 partir de 200\u20ac HT d'achat",
        field: "",
        svg: "https://storage.pepperi.com/General/Icons/truck.svg"
    },
    'account_balance': {
        text: "Programme fidélité :",
        field: "InternalID",
        measure_unit: "Points",
        svg: "https://storage.pepperi.com/General/Icons/balance.svg"
    },
    'active-order':
    {
        name: "Commande en cours",
        buttonText: "Retour Commande",
        table: [{
            text: "Sous-Total",
            field: "SubTotal",
            measure_unit: "\u20ac"
        }, {
            text: "Total Quantit\u00e9",
            field: "QuantitiesTotal"
        }, {
            text: "Total HT",
            field: "GrandTotal",
            measure_unit: "\u20ac"
        }]
    }
    ,
    'submitted_orders': {
        name: "Derni\u00e9re commande",
        statuses: ["2"],
        table: ["ActionDateTime", "InternalID"]
    }
}
var Brands = [
    
    ]

//Promotions block
var Promotions = [
    {
        title: "MOANA",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2299207e51-47b5-4f30-8271-c364a6882050%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/MOANA.jpg'
    }
    ]
var Promotions2 = [
    {
        title: "DELIRIUM FLORAL",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%221fed1213-9371-4267-8e07-c83c56b057e1%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/delirium floral home.png'
    }
    ]
var Promotions3 = [    
    {
        title: "EAUX DE PARFUM",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?SearchString=&CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%225332e389-e1f9-421e-bc33-689bdfbca16c%5C%22,%5C%22Parent%5C%22:%5C%22%7B%5C%5C%5C%22JsonFilter%5C%5C%5C%22:%5C%5C%5C%2209fd1d0b-e9f8-414f-9c10-e3e4b72049ee%5C%5C%5C%22%7D%5C%22%7D%22&TopPadding=0&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/Présentoir eau parfums.png'
    }
    ]
var Promotions4 = [
    {
        title: "CR\u00c8MES MAINS",
        buttonText: "Cliquez ici",
        link: 'Transactions/scope_items/{{UUID}}?CurrentTab="%7B%5C"JsonFilter%5C":%5C"5332e389-e1f9-421e-bc33-689bdfbca16c%5C",%5C"Parent%5C":%5C"%7B%5C%5C%5C"DynamicFilter%5C%5C%5C":%5C%5C%5C"Item.MainCategory%5C%5C%5C",%5C%5C%5C"Value%5C%5C%5C":%5C%5C%5C"CROISIERE%20CELANDON%20-%20THE%20VERT%20JASMIN%5C%5C%5C"%7D%5C"%7D"&TopPadding=0&SearchString=&SearchAll=false',
        image: 'https://ludopepperi.github.io/test/P1140485-LIGHT.png'
    }
]

var CaruselData = [
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/bainetnature/1.BANNIÈRE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/test/2.BANNIÈRE.png ',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/test/3.BANNIÈRE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
    {

        title: '',
        imageURL: 'https://ludopepperi.github.io/test/4.BANNIERE.png',
        description: '',
        buttonText: '',
        time: 5000,
        deepLink: '/Transactions/scope_items/{{UUID}}?CurrentTab=%22%7B%5C%22JsonFilter%5C%22:%5C%22defaef5e-e6d3-4b1e-b53c-2fa41f700168%5C%22%7D%22&ViewType=%7B%22Key%22:%22OrderCenterView3%22,%22Value%22:%22Medium%22%7D&TopPadding=0&SearchAll=false'
    },
];
customHomepage.test = "test"
