export const debuger = (function () {

    const colors = ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970', '#2ECC40', '#01FF70', '#FFDC00', '#AAAAAA'];
    const colorsLength = colors.length;

    let count = -1;

    let debugMode = false;
    if(window.localStorage) {
        debugMode = !!window.localStorage.getItem('debugCyra');
    }

    if(debugMode) {
        return (prefix: string) => {

            count++;
            if(count >= colorsLength) count = 0;

            let colorConf = 'background: #fff; color: ' + colors[count];
            return console.log.bind(console, '%c' + prefix, colorConf);

        }
    } else {
        return () => {
            return () => {};
        }
    }


})();
