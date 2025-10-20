$(document).ready(function () {
    $(".car-card").each((index, el) => {
        $(el).find(".car-card__toggle-btn").on("click", function () {
            const $content = $(el).find(".car-card__body");
            const isOpen = !$content.attr("hidden");
    
            if (isOpen) {
                $content
                    .attr("data-visible", "false")
                    .css("opacity", 0)
                    .css("transform", "translateY(-8px)");
    
                setTimeout(() => {
                    $content.attr("hidden", "");
                }, 200);
                $(el).find(".car-card__toggle-icon").css("transform", "rotateZ(0)")
            } else {
                $content.removeAttr("hidden");
                
                requestAnimationFrame(() => {
                    $content
                    .attr("data-visible", "true")
                    .css("opacity", 1)
                    .css("transform", "translateY(0)");
                });
                $(el).find(".car-card__toggle-icon").css("transform", "rotateZ(180deg)")
            }
        });
    })

    const $ranges = $(".filters__range");
    
    if ($ranges.length) {
        $ranges.each(function () {
            const $range = $(this);
            const $rangeInputs = $range.find('.filters__range-input');
            const $numberInputs = $range.find(".filters__field");
            const min = parseFloat($rangeInputs.eq(0).attr("min"));
            const max = parseFloat($rangeInputs.eq(0).attr("max"));
        
            const handleRange = () => {
                let slide1 = parseFloat($rangeInputs.eq(0).val());
                let slide2 = parseFloat($rangeInputs.eq(1).val());
        
                if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];
        
                $numberInputs.eq(0).val(slide1);
                $numberInputs.eq(1).val(slide2);
            };
        
            const handleNumber = () => {
                let num1 = parseFloat($numberInputs.eq(0).val());
                let num2 = parseFloat($numberInputs.eq(1).val());
        
                if (num1 > num2) [num1, num2] = [num2, num1];
        
                $rangeInputs.eq(0).val(num1);
                $rangeInputs.eq(1).val(num2);
        
                handleRange();
            };
        
            handleRange();
        
            $rangeInputs.on("input", handleRange);
            $numberInputs.on("input", handleNumber);
        });
    }

    $(".filters__accordion").each((index, el) => {
        const checkAccordionOpen = () => {
            const $content = $(el).find(".accordion__panel");
            const isOpen = !$content.attr("hidden");
    
            if (isOpen) {
                $content
                    .attr("data-visible", "false")
                    .css("opacity", 0)
                    .css("transform", "translateY(-8px)");
    
                setTimeout(() => {
                    $content.attr("hidden", "");
                }, 200);
                $(el).find(".accordion__chevron").css("transform", "rotateZ(0deg)")
            } else {
                $content.removeAttr("hidden");
                
                requestAnimationFrame(() => {
                    $content
                    .attr("data-visible", "true")
                    .css("opacity", 1)
                    .css("transform", "translateY(0)");
                });
                $(el).find(".accordion__chevron").css("transform", "rotateZ(180deg)")
            }
        }

        checkAccordionOpen();

        $(el).find(".accordion__header").on("click", function () {
            checkAccordionOpen();
        });
    })

    $('.results__sort-btn').on("click", () => {
        $('.filters').addClass('active');
    })

    $('.filters__bg').on("click", () => {
        $('.filters').removeClass('active');
    })

    $('.filters__apply').on("click", () => {
        $('.filters').removeClass('active');
    })
});