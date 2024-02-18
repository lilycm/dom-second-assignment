// console.log('connected');


const allSeatNumber = document.getElementsByClassName('seat-number');

let seatCount = 0;
let totalSeatBuy = 0;


for (const seat of allSeatNumber) {
    seat.addEventListener('click', function (e) {
        const seatBg = e.target.parentNode.classList.remove('bg-[#F7F8F8]');
        const seatBg2 = e.target.parentNode.classList.add('bg-[#1DD100]');

        totalSeatBuy++;
        if (totalSeatBuy > 4) {
            alert('Oops!!! You can only buy 4 seat');
            const seatBg2 = e.target.parentNode.classList.remove('bg-[#1DD100]')
            return;
        }

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
        p3.innerText = 550;

        li.appendChild(p);
        li.appendChild(p2);
        li.appendChild(p3);
        seatDetail.appendChild(li);

        // check coupon

        const fixedPrice = document.getElementById('fixed-price').innerText;
        const convertedFixedPrice = parseInt(fixedPrice);
        document.getElementById('fixed-price').innerText = convertedFixedPrice;

        // total budget
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        const sum = convertedTotalPrice + convertedFixedPrice;
        document.getElementById('total-price').innerText = sum;

        //grand total
        const grandTotal = document.getElementById('grand-total').innerText;
        const convertedGrandTotal = parseInt(grandTotal);
        const sum2 = convertedGrandTotal + parseInt(fixedPrice);
        document.getElementById('grand-total').innerText = sum2;

        const totalSeat = document.getElementById('total-seat').innerText;
        const convertedTotalSeat = parseInt(totalSeat);
        const updateSeat = convertedTotalSeat - 1;
        document.getElementById('total-seat').innerText = updateSeat;

    })
}


const aplyCouponButton = document.getElementById('aply');
aplyCouponButton.addEventListener('click', function () {
    // total price

    const fixedPrice = document.getElementById('fixed-price').innerText;
    let totalBudget = 0;

    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    let sum = convertedTotalPrice + parseInt(fixedPrice);


    // grand total

    // const grandTotal = document.getElementById('grand-total').innerText;
    // const convertedGrandTotal = parseInt(grandTotal);
    // let sum2 = convertedGrandTotal + parseInt(fixedPrice);
    // document.getElementById('grand-total').innerText = sum2;

    const couponCodeElement = document.getElementById('coupon-code').value;
    if (couponCodeElement === "Coupon 20") {
        totalBudget = sum * 0.2;
        document.getElementById('total-price').innerText = totalBudget;
    }
    else if (couponCodeElement === "NEW15") {
    }
    else {
        console.log('invalid coupon');
    }
})


document.getElementById('buy-ticket').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#booking-seat').scrollIntoView({
        behavior: "smooth"
    })
})


