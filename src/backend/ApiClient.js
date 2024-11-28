const { ApiClient, DefaultApi } = require('amazon-pa-api50');

const client = new ApiClient({
    accessKey: 'DEIN_ACCESS_KEY', // Amazon Access Key
    secretKey: 'DEIN_SECRET_KEY', // Amazon Secret Key
    host: 'webservices.amazon.de', // Amazon API-Host für Deutschland
    region: 'eu-west-1', // Region für Deutschland
});

const api = new DefaultApi(client);

async function getProductDetails() {
    try {
        const response = await api.getItems({
            PartnerTag: 'DEINE_TRACKING_ID', // Dein Affiliate-Tracking-Tag
            PartnerType: 'Associates',
            ItemIds: ['B09F2C5K9J'], // Amazon ASIN (Produkt-ID)
            Resources: [
                'Images.Primary.Large', // Produktbilder
                'ItemInfo.Title',       // Titel
                'Offers.Listings.Price' // Preis
            ],
        });

        console.log(JSON.stringify(response, null, 2));
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

// API-Aufruf starten
getProductDetails();
