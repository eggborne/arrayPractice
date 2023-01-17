let generateInputs = (number) => {
  for (let i = 0; i < number; i++) {
    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = ("favoriteThing" + i);
    let newLabel = document.createElement("label");
    newLabel.for = (`favoriteThing${i}`);
    newLabel.innerText = (`favorite things ${i}`)
    document.getElementById("favoriteThingsForm").append(newLabel, newInput);
    newInput.style.display = "block";
    newInput.style.marginBottom = "10px";

  }
  let submitFavThings = document.createElement("button");
  submitFavThings.type = "submit";
  submitFavThings.id = "submitFavThings";
  submitFavThings.innerText = "submit";
  let favoriteThingsForm = document.getElementById("favoriteThingsForm");
  favoriteThingsForm.append(submitFavThings);
};

window.onload = () => {
  document.getElementById("howManyForm").addEventListener("submit",(e) => {
    e.preventDefault();
    
    let howManyInput = document.getElementById("howMany").value;
    generateInputs(howManyInput);
    let howManyForm = document.getElementById("howManyForm");
    howManyForm.style.marginBottom = "10px";
  });

  document.getElementById("favoriteThingsForm").addEventListener("submit",(e) => {
    e.preventDefault();
    let thingsArray = [];
    let childArray = [...e.target.children];
    //let childArray = Array.from(e.target.children);
    childArray.forEach(child => {
      if (child.tagName === 'INPUT') {
        thingsArray.push(child.value);
      }
    });
    const newArray = [];
    newArray.push(thingsArray[1],thingsArray[0], thingsArray[2]);
    let outputDiv = document.createElement('div');
    document.body.append(outputDiv);
    outputDiv.style.position = "absolute";
    outputDiv.style.top = "10px";
    outputDiv.style.right = "10px";
    unorderedlist = document.createElement("ul");
    unorderedlist.id = "finalList";
    newArray.forEach(thing => {
      console.log('appending entered thing', thing)
      let newItem = document.createElement("li");
      newItem.innerText = thing;
      unorderedlist.append(newItem);
    })
    outputDiv.append(unorderedlist);
    document.body.append(outputDiv);



  });

}