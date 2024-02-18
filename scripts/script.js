// console.log('connected');


const allSeatNumber = document.getElementsByClassName('seat-number');

let seatCount = 0;

for (const seat of allSeatNumber) {
    seat.addEventListener('click', function (e) {
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
        
    })
}

function setBackgroundColor(elementId) {
    const element = document.getElementsByClassName(elementId);
    element.classlist.add('bg-green-500');
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#F7F8F8]')
}