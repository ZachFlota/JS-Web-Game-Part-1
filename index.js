function newImage(location, leftpos, bottompos) {
    let image = document.createElement('img')
    image.src = location
    image.style.position = 'fixed'
    image.style.left = leftpos
    image.style.bottom = bottompos
    document.body.append(image)
}

function newItem(location, leftpos, bottompos){
    newImage(location, leftpos, bottompos)
}

newImage('assets/green-character.gif', '100px', '100px');
newImage('assets/pine-tree.png', '450px', '200px');
newImage('assets/tree.png', '200px', '300px');
newImage('assets/pillar.png', '350px', '100px');
newImage('assets/crate.png', '150px', '200px');
newImage('assets/well.png', '500px', '425px');
newItem('assets/sword.png', '500px', '405px');
newItem('assets/sheild.png', '165px', '185px');
newItem('assets/staff.png', '600px', '100px');


