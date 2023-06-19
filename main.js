document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var weight = document.getElementById('weightInput').value;
    var height = document.getElementById('heightInput').value / 100; // convert height to meters
  
    var bmi = weight / (height * height);
    var resultDiv = document.getElementById('result');
  
    if (!isNaN(bmi)) {
      resultDiv.textContent = 'Your BMI is ' + bmi.toFixed(2);
    } else {
      resultDiv.textContent = 'Please enter valid values for weight and height.';
    }
  });
  