import {Dimensions, Platform} from 'react-native';

const AppSettings = {
    endpoint : 'http://localhost:8000/api/',
    formatHeight : (formatHeight) => {
        let {height, width} = Dimensions.get('window');
        return height*formatHeight/100;
    },
    formatWidth : (formatWidth) => {
        let {height, width} = Dimensions.get('window');
        return width*formatWidth/100;
    },
    woocommerse : {
        consumer_key : 'ck_d929cdccf54eb2facfce868c3c3f89f2ea782f5c',
        consumer_secret : 'cs_0b68adc515738ae5fc7de887fdc43c9ba4b4e0b2'
    },
    font : Platform.OS === 'ios' ? 'Avenir Next' : 'circular',
    throttle : (func, wait, ctx, immediate = true) => {
        let timeoutRefId;
        let args;
        let context;
        let timestamp;
        let result;
        const later = () => {
            const last = Date.now() - timestamp;
            if (last < wait && last >= 0) {
                timeoutRefId = setTimeout(later, wait - last);
            } else {
                timeoutRefId = null;
                if (!immediate) {
                    result = func.apply(context, args);
                    if (!timeoutRefId) context = args = null;
                }
            }
        };
        return () => {
            context = ctx || this;
            args = arguments;
            timestamp = Date.now();
            const callNow = immediate && !timeoutRefId;
            if (!timeoutRefId) timeoutRefId = setTimeout(later, wait);
            if (callNow) {
                result = func.apply(context, args);
                context = args = null;
            }
            return result;
        };
    }
};
export default AppSettings;