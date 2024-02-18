// console.log('connected');


const allSeatNumber = document.getElementsByClassName('seat-number');

let seatCount = 0;


for (const seat of allSeatNumber) {
    seat.addEventListener('click', function (e) {
        const seatBg = e.target.parentNode.classList.remove('bg-[#F7F8F8]');
        const seatBg2 = e.target.parentNode.classList.add('bg-[#1DD100]');

        seatCount = seatCount + 1;
        document.getElementById('seat-count').innerText = seatCount;

        e.target.disabled = true;
        const seatNumber = e.target.parentNode.childNodes[1].innerText;

        const seatDetail = document.getElementById('seat-details');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatNumber;

        const p2 = document.createElement('p');
        p2.innerText = 'Economoy';

        const p3 = document.createElement('p');
        p3.innerText = '550';

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        seatDetail.appendChild(li);

        const totalSeat = document.getElementById('total-seat').innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        const updateSeat = convertedTotalSeat - 1;
        document.getElementById('total-seat').innerText = updateSeat;
    })
}
