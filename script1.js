document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 동작 방지

    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    const message = `출발지: ${departure}, 목적지: ${destination}, 여행 날짜: ${date}`;
    document.getElementById('message').textContent = message;
});
