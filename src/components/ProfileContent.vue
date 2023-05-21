<template>
    <div class="flex">
        <div class="profile">
            <h3>PROFILE</h3>
            <div class="flex">
                <img src="../assets/profile-black.png" class="profile-black-img" alt="">
                <div class="profile-info flex flex-col">
                    <input type="text" value="Иван Иванов">
                    <input type="email" value="ivaninvanov@mail.com">
                    <input type="tel" value="+0 (848) 894-32-32">
                    <input type="text" value="Возраст: 18">
                    <input type="text" value="Дата рождения: 08.12.2001">
                </div>
            </div>
        </div>
        <div class="profile">
            <h3>BOOKINGS</h3>
            <div class="booking-table">
                <table class="w-full">
                    <tr>
                        <th>STATUS</th>
                        <th>CHECK-IN</th>
                        <th>CHECK-OUT</th>
                        <th>ROOM</th>
                        <th>PRICE</th>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>NEW</td>
                        <td>01.02.2023</td>
                        <td>10.02.2023</td>
                        <td>DELUX</td>
                        <td class="booking-td-price">270 $</td>
                        <td class="border-none"><i class="fa-solid fa-pen"></i></td>
                    </tr>
                    <tr>
                        <td>CANCELED</td>
                        <td>01.02.2023</td>
                        <td>10.02.2023</td>
                        <td>DELUX</td>
                        <td class="booking-td-price">270 $</td>
                        <td class="border-none"></td>
                    </tr>
                    <tr>
                        <td>CONFIRMED</td>
                        <td>01.02.2023</td>
                        <td>10.02.2023</td>
                        <td>DELUX</td>
                        <td class="booking-td-price">270 $</td>
                        <td class="border-none"><i class="fa-solid fa-pen"></i></td>
                    </tr>
                    <tr>
                        <td class="border-none">ACTIVE</td>
                        <td class="border-none">01.02.2023</td>
                        <td class="border-none">10.02.2023</td>
                        <td class="border-none">DELUX</td>
                        <td class="border-none booking-td-price">270 $</td>
                        <td class="border-none"><i class="fa-solid fa-pen"></i></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<style>

h3 {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

.profile {
    width: 50%;
    margin-top: 138px;
}
.profile > div {
    padding-top: 35px;
}
.profile-black-img {
    margin: 0 50px auto;
}
.profile-info input {
    background: transparent;
    border: none;
    border-bottom: 1px solid #8CAA14;
    width: 342px;
    height: 24px;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;

    margin-bottom: 35px;
}
.profile-info input:focus {
    outline: none !important;
}
.booking-table {
    border-left: 1px solid #3A3943;
    padding: 30px 10px 30px 30px;
}

th {
    text-align: center;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;

    color: #5C5C5C;
}
.booking-td-price {
    border-left: 1px solid #8CAA14;
}
td {
    height: 85px;
    text-align: center;
    border-bottom: 1px solid #8CAA14;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 18px;
}

.fa-pen {
    width: 25px;
    color: #8CAA14;
    cursor: pointer;
}
</style>
