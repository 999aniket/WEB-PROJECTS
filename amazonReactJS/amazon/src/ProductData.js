
const ProductData = {
    title: 'FitBit 19 - The Smartest Watch',
    description : 'This watch comes with 48mm dialer and support watchOS version-2.34. Supports audio and video calling.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://images.dailyobjects.com/marche/product-images/1801/black-silicone-apple-watchband-38-40mm-images/Black-Silicone-Apple-WatchBand-38-40mm-3.png?tr=cm-pad_resize,w-412,h-490,dpr-2'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6Y3ref_VW_PF+watch-41-alum-red-cell-8s_VW_PF_WF_SI?wid=2000&hei=2000&fmt=png-alpha&.v=1660779463098,1661972310126'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://e7.pngegg.com/pngimages/813/534/png-clipart-apple-watch-series-2-smartwatch-heart-rate-monitor-rose-gold-apple-watch-blue-rectangle.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default ProductData;
