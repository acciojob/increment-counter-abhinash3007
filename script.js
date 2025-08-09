//your JS code here. If required.
function increment(){
	const counterElement = document.getElementById("counter");
      const currentValue = parseInt(counterElement.textContent);
      alert(currentValue); // Show un-incremented value
      counterElement.textContent = currentValue + 1;
}