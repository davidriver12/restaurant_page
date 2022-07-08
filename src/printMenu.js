const printMenu = () => {
    const contentDiv = document.querySelector('#content');
    let main = document.createElement('div');
    contentDiv.innerHTML = '';
    main.setAttribute('id', 'main');
    let title = document.createElement('h1');
    title.textContent = 'MENU';
    main.appendChild(title);
    let list = document.createElement('ul');
    for  (let x=0; x<6; x++){
        let item = document.createElement('li');
        item.setAttribute('id', `item${x}`);
        let itemTitle = document.createElement('h3');
        itemTitle.setAttribute('id', `item${x}Title`);
        itemTitle.textContent = 'xd';
        item.appendChild(itemTitle);
        let itemP = document.createElement('p');
        itemP.setAttribute('id', `item${x}P`);
        item.appendChild(itemP);
        list.appendChild(item);
    };
    main.appendChild(list);
    contentDiv.appendChild(main);
    let item0Title = document.querySelector('#item0Title');
    item0Title.textContent = 'Chicken Steak';
    let item1Title = document.querySelector('#item1Title');
    item1Title.textContent = 'American Beef Steak';
    let item2Title = document.querySelector('#item2Title');
    item2Title.textContent = 'Twin Beef Steak';
    let item3Title = document.querySelector('#item3Title');
    item3Title.textContent = 'Special Steak';
    let item4Title = document.querySelector('#item4Title');
    item4Title.textContent = 'Lamb Chops';
    let item5Title = document.querySelector('#item5Title');
    item5Title.textContent = 'Beef Burger';
    let item0P = document.querySelector('#item0P');
    item0P.textContent = 'Juicy and tender chicken breast with sauteed vegetables.'
    let item1P = document.querySelector('#item1P');
    item1P.textContent = 'Juicy beef, well, medium or well done served with sauteed vegetables.'
    let item2P = document.querySelector('#item2P');
    item2.textContent = 'Rare, medium or well done beef steak served with sauteed vegetables and 2 sauces.'
    let item3P = document.querySelector('#item3P');
    item3P.textContent = 'Our specialty beef steak served with sauteed vegetables and sauce of your choice.'
    let item4P = document.querySelector('#item4P');
    item4P.textContent = 'BBQ chops served with vegetables';
    let item5P = document.querySelector('#item5P');
    item5P.textContent = 'Juicy and delicious grilled patty.'
    
};

export {printMenu};