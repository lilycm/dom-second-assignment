// console.log('connected');


const allSeatNumber = document.getElementsByClassName('seat-number');

for(const seat of allSeatNumber){
    seat.addEventListener('click', function(e){

        const seatNumber = e.target.parentNode.childNodes[1].innerText
        console.log();

        const seatDetail = document.getElementById('seat-details');

        const li = document.createElement('li');

        const p = document.createElement('p');
        p.innerText = seatNumber;

        const p2= document.createElement('p');
        p2.innerText= 'Economoy';

        const p3= document.createElement('p');
        p3.innerText= '550';

        li.appendChild(p)
        seatDetail.appendChild(li);
        // seatDetail.appendChild(p2);
        // seatDetail.appendChild(p3);
    })
}