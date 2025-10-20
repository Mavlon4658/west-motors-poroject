document.addEventListener("DOMContentLoaded", () => {
    /* === car-card toggle === */
    document.querySelectorAll(".car-card").forEach((el) => {
        const btn = el.querySelector(".car-card__toggle-btn");
        const content = el.querySelector(".car-card__body");
        const icon = el.querySelector(".car-card__toggle-icon");

        btn.addEventListener("click", () => {
            const isOpen = !content.hasAttribute("hidden");

            if (isOpen) {
                content.setAttribute("data-visible", "false");
                content.style.opacity = 0;
                content.style.transform = "translateY(-8px)";
                setTimeout(() => content.setAttribute("hidden", ""), 200);
                icon.style.transform = "rotateZ(0)";
            } else {
                content.removeAttribute("hidden");
                requestAnimationFrame(() => {
                    content.setAttribute("data-visible", "true");
                    content.style.opacity = 1;
                    content.style.transform = "translateY(0)";
                });
                icon.style.transform = "rotateZ(180deg)";
            }
        });
    });

    /* === filters__range === */
    document.querySelectorAll(".filters__range").forEach((range) => {
        const rangeInputs = range.querySelectorAll(".filters__range-input");
        const numberInputs = range.querySelectorAll(".filters__field");

        const min = parseFloat(rangeInputs[0].min);
        const max = parseFloat(rangeInputs[0].max);

        const handleRange = () => {
            let slide1 = parseFloat(rangeInputs[0].value);
            let slide2 = parseFloat(rangeInputs[1].value);
            if (slide1 > slide2) [slide1, slide2] = [slide2, slide1];

            numberInputs[0].value = slide1;
            numberInputs[1].value = slide2;
        };

        const handleNumber = () => {
            let num1 = parseFloat(numberInputs[0].value);
            let num2 = parseFloat(numberInputs[1].value);
            if (num1 > num2) [num1, num2] = [num2, num1];

            rangeInputs[0].value = num1;
            rangeInputs[1].value = num2;

            handleRange();
        };

        handleRange();

        rangeInputs.forEach((input) =>
            input.addEventListener("input", handleRange)
        );
        numberInputs.forEach((input) =>
            input.addEventListener("input", handleNumber)
        );
    });

    /* === filters__accordion === */
    document.querySelectorAll(".filters__accordion").forEach((el) => {
        const header = el.querySelector(".accordion__header");
        const content = el.querySelector(".accordion__panel");
        const chevron = el.querySelector(".accordion__chevron");

        const checkAccordionOpen = () => {
            const isOpen = !content.hasAttribute("hidden");

            if (isOpen) {
                content.setAttribute("data-visible", "false");
                content.style.opacity = 0;
                content.style.transform = "translateY(-8px)";
                setTimeout(() => content.setAttribute("hidden", ""), 200);
                chevron.style.transform = "rotateZ(0deg)";
            } else {
                content.removeAttribute("hidden");
                requestAnimationFrame(() => {
                    content.setAttribute("data-visible", "true");
                    content.style.opacity = 1;
                    content.style.transform = "translateY(0)";
                });
                chevron.style.transform = "rotateZ(180deg)";
            }
        };

        checkAccordionOpen();

        header.addEventListener("click", () => {
            checkAccordionOpen();
        });
    });

    /* === filters toggle === */
    const filters = document.querySelector(".filters");
    const sortBtn = document.querySelector(".results__sort-btn");
    const filtersBg = document.querySelector(".filters__bg");
    const filtersApply = document.querySelector(".filters__apply");

    if (filters && sortBtn) {
        sortBtn.addEventListener("click", () => {
            filters.classList.add("active");
        });
    }

    if (filters && filtersBg) {
        filtersBg.addEventListener("click", () => {
            filters.classList.remove("active");
        });
    }

    if (filters && filtersApply) {
        filtersApply.addEventListener("click", () => {
            filters.classList.remove("active");
        });
    }
});
