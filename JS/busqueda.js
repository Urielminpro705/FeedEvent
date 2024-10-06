$(document).ready(function() {
    let filter_btn = $(".filter-btn")
    let isOpenPanelFilter = false

    function openAndClose() {
        if (isOpenPanelFilter) {
            filter_btn.removeClass("filter-btn-activated")
            $(".cont-search-input").removeClass("cont-search-input-activated")
            $("#filter-btn-x-icon").css("display","none")
            $("#filter-btn-filter-icon").css("display","block")
            isOpenPanelFilter = false
        } else {
            filter_btn.addClass("filter-btn-activated")
            $(".cont-search-input").addClass("cont-search-input-activated")
            $("#filter-btn-x-icon").css("display","block")
            $("#filter-btn-filter-icon").css("display","none")
            isOpenPanelFilter = true
        }
    }

    filter_btn.click(function() {
        openAndClose()
    })
})