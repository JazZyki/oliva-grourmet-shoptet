const titles = ['.homepage-products-heading-1.h4', '.homepage-products-heading-2.h4'];

titles.forEach((title) => {
    const titleElement = document.querySelector(title);
    if (titleElement) {
        const titleText = titleElement.textContent.trim();
        const titleTextSplit = titleText.split(' ');
        const titleTextLength = titleTextSplit.length;
        console.log(titleTextLength);
        switch (titleTextLength) {
            case 2:
                titleElement.innerHTML = `${titleTextSplit[0]} <strong>${titleTextSplit[1]}</strong>`;
                break;
            case 3:
                titleElement.innerHTML = `${titleTextSplit[0]} ${titleTextSplit[1]} <strong>${titleTextSplit[2]}</strong>`;
                break;
            case 4:
                titleElement.innerHTML = `${titleTextSplit[0]} ${titleTextSplit[1]} ${titleTextSplit[2]} <strong>${titleTextSplit[3]}</strong>`;
                break;
            case 5:
                titleElement.innerHTML = `${titleTextSplit[0]} ${titleTextSplit[1]} ${titleTextSplit[2]} ${titleTextSplit[3]} <strong>${titleTextSplit[4]}</strong>`;
                break;
            default:
                // Do nothing if the title has 1 or more than 5 words
                break;
        }
    }
})