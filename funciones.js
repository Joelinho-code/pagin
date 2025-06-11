function calculatePay() {
    const name = document.getElementById('name').value;
    const rate = parseFloat(document.getElementById('rate').value);
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let totalHours = 0;
  
    days.forEach(day => {
      const inTime = document.getElementById(`${day}-in`).value;
      const outTime = document.getElementById(`${day}-out`).value;
  
      if (inTime && outTime) {
        const hoursWorked = calculateHours(inTime, outTime);
        totalHours += hoursWorked;
      }
    });
  
    const totalPay = totalHours * rate;
  
    document.getElementById('result').innerHTML = `
      <h3>Resultados</h3>
      <p>Nombre del Empleado: ${name}</p>
      <p>Total Horas Trabajadas: ${totalHours.toFixed(2)} horas</p>
      <p>Total a Pagar: $${totalPay.toFixed(2)}</p>
    `;
  }
  
  function calculateHours(inTime, outTime) {
    const [inHours, inMinutes] = inTime.split(':').map(Number);
    const [outHours, outMinutes] = outTime.split(':').map(Number);
  
    const start = inHours * 60 + inMinutes; // Calcular minutos desde la entrada
    const end = outHours * 60 + outMinutes; // Calcular minutos desde la salida
  
    return (end - start) / 60; // Devuelve las horas trabajadas
  }