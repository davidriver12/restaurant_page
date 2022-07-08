const printHome = () => {
    const contentDiv = document.querySelector('#content');
    let main = document.createElement('div');
    contentDiv.innerHTML = '';
    main.setAttribute('id', 'main');
    let chefImg = document.createElement('img');
    chefImg.setAttribute('src', "../src/chef.jpeg");
    chefImg.setAttribute('alt', 'Chef image');
    chefImg.setAttribute('id', 'chef-img');
    main.appendChild(chefImg);
    let textDiv = document.createElement('div');
    textDiv.setAttribute('id', 'text')
    let h1a = document.createElement('h1');
    let h3a = document.createElement('h3');
    let h3b = document.createElement('h3');
    h1a.textContent = 'Genuine Texas Barbecue';
    h3a.textContent = 'The best of the best since 1893';
    h3b.textContent = 'Order online or visit us!';
    textDiv.appendChild(h1a);
    textDiv.appendChild(h3a);
    textDiv.appendChild(h3b);
    main.appendChild(textDiv);
    contentDiv.appendChild(main);
};

export {printHome};