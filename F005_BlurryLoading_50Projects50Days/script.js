const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// load 表示当前进度的百分比数字
let load = 0;

// 每隔20ms 调用 blurring 函数，增加进度，并渲染进度数字和北京模糊程度
let int = setInterval(blurring, 30);

function blurring(){
    // 增加进度
    load ++;

    // 如果进度达到100，表示渲染完成，不用再增加了
    if(load > 99){
        clearInterval(int);
    }

    // 修改进度百分数
    loadText.innerText = `${load}%`;

    // 修改数字的透明度，表现为文字逐渐隐形
    loadText.style.opacity = scale(load, 0, 100, 1, 0)

    // 修改背景图片的模糊程度
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// 这个函数的作用是，获取1个某范围内的值，映射到另一个范围时的值
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min))/(in_max - in_min) + out_min
}