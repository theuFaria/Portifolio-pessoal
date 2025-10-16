const projects = $(".projeto");
const overlay = $(".overlay");

projects.each(function (i) {
    $(this).on("mouseenter", () => {
        overlay.eq(i).addClass("animationDragUp");
        overlay.eq(i).removeClass("hide");
        setTimeout(() => overlay.eq(i).removeClass("aniamtionDragUp"), 300)
        iconsLinksAppear();
    })
})

projects.each(function (i) {
    $(this).on("mouseleave", () => {
        overlay.eq(i).addClass("animationDragDown");
        iconsLinksDesapear();
        setTimeout(() => {
            overlay.eq(i).addClass("hide");
            overlay.eq(i).removeClass("animationDragDown");
        }, 280)
    })
});

const linksProject = $(".linksProject");
function iconsLinksAppear() {
    linksProject.each(function (i) {
        linksProject.eq(i).addClass("actived");
    })
};
function iconsLinksDesapear() {
    linksProject.filter(() => linksProject.hasClass("actived")).removeClass("actived");
}

$(window).on("resize", function () {
    if ($(window).width() < 500) {
        $("#welcome").html("Eu sou o Matheus Faria <br> <span>Seja bem vindo ao meu portifólio website!</span>");
    } else if ($(window).width() > 500) {
        $("#welcome").html("Eu sou o Matheus Faria, <br> <span>Seja bem vindo ao meu portifólio website!</span>");
    }
})

$(window).on("scroll", function () {
    const posScroll = $(window).scrollTop();

    $("section").each(function () {
        const top = $(this).offset().top - 100;
        const bottom = top + $(this).outerHeight();

        if(posScroll > top & posScroll < bottom){
            const ativa = $(this).attr("id");
            $("li div.activedSection").removeClass("activedSection");
            $(`a[href="#${ativa}"] +`).addClass("activedSection");
        }
    })
})

