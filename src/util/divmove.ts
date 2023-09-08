export function divmove(a: string, b: string, c: number, d: string) {
    //在某一容器内移动子元素
    //a:容器父元素，b:子元素,c:位移次数，d:位移方向
    const el1: any = document.querySelector(a)
    const el2: any = document.querySelector(b)
    let distance
    switch (d) {
        case 'column':
            distance = (el2.offsetHeight + 0.025 * (el1.clientHeight)) * c
            el1.style.left = -(distance) + 'px'
            break;
        case 'row':
            distance = (el2.offsetWidth + 0.025 * (el1.clientWidth)) * c
            el1.style.left = -(distance) + 'px'
            break;

    }

}