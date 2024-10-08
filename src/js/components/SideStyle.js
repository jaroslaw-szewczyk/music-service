class SideStyle{
  constructor(elements){

    if (!elements || elements.length === 0) {
      console.warn('No elements.');
      return;
    }
    this.elements = elements;
    this.upperCase();
  }

  upperCase() {
    for(const element of this.elements){
      element.innerText = element.innerText.toUpperCase();
    }
  }
}

export default SideStyle;