<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <div class="booking flex flex-col" @click.stop>
            <div class="flex">
                <div class="flex flex-col">
                    <div class="booking-contact flex flex-col">
                        <div class="name">Иван Иванов</div>
                        <a href="mailto: ivaninvanov@mail.com" class="contact">ivaninvanov@mail.com</a>
                        <a href="tel: +0 (848) 894-32-32" class="contact">+0 (848) 894-32-32</a>
                    </div>
                    <div class="flex items-center">
                        <img src="../assets/admin/booking-icon.svg" alt="">
                        <div class="buildig-type">Lux</div>
                        <div class="buildig-name">12 - B1</div>
                        <div class="status"></div>
                    </div>
                    <div class="booking-period flex">
                        <div class="flex flex-col m-r-30">
                            <span>Check-in</span>
                            <input type="date" value="12-06-2023">
                        </div>
                        <div class="flex flex-col">
                            <span>Check-out</span>
                            <input type="date" value="12-06-2023">
                        </div>
                    </div>
                    <div class="booking-info flex flex-col">
                        <div class="flex">
                            <span class="w-300">Взрослых:</span>
                            <span>2</span>
                        </div>
                        <div class="flex">
                            <span class="w-300">Детей:</span>
                            <span>2</span>
                        </div>
                        <div class="flex">
                            <span class="w-300">Питание:</span>
                            <span>трехразовое</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col ml-auto">
                    <div class="ml-auto">
                        <span class="status_info">Частично оплачено</span>
                    </div>
                    <div class="card">
                        <div class="card-title">Доп. услуги</div>
                        <div class="card-content">
                            <div class="card-client flex items-center justify-between">
                                <div class="username">Уборка номера</div>
                                <div class="flex flex-col items-center">
                                    <span class="mini-status_info paid">Оплачено</span>
                                    <div class="building">12 - B1</div>
                                </div>
                            </div>
                            <div class="card-client flex items-center justify-between">
                                <div class="username">Еда в номер</div>
                                <div class="flex flex-col items-center">
                                    <span class="mini-status_info unpaid">Не оплачено</span>
                                    <div class="building">12 - B1</div>
                                </div>
                            </div>
                            <div class="create-card-client">+ Добавить услугу</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="booking-footer flex justify-between items-center mt-auto">
                <div class="price">К оплате: <span>25$</span></div>
                <button class="booking-btn" @click="$emit('showPayModal')">Принять оплату</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.status_info {
    display: inline-flex;
    align-items: center;
    height: 25px;
    white-space: nowrap;
    border-radius: 3px;
    padding: 0 15px;
    background: rgba(234, 238, 13, 0.25);
    color: #A6B40DE5;
}
.booking-info {
    margin-top: 26px;
    margin-bottom: 36px;
}
.w-300 {
    width: 90px;
}
.fixed {
    background: rgba(0, 0, 0, 0.571);
}
.m-r-30 {
    margin-right: 30px;
}
.booking-period {
    margin-top: 15px;
}
.booking-period input {
    padding: 0 0 1px 5px;
    width: 90px;
    border-radius: 3px;
    font-size: 14px;
}
.booking-period span {
    font-family: 'Inter';
    font-weight: 600;
}

h2 {
    text-align: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 25px;
}

.booking {
    background: white;
    padding: 45px 45px 20px;
    width: 700px;
    border-radius: 10px;
    color: #3A3943;
}
.buildig-type {
    font-size: 16px;
}

.booking-contact {
    margin-bottom: 40px;
}

.booking-contact .name {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    line-height: 16px;
}

.booking-contact .contact {
    margin-top: 20px;
    font-family: 'Inter';
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    /*border-bottom: 1px solid #8CAA14;*/
}

.price {
    padding: 20px;

    font-family: 'Roboto';
    font-weight: 700;
    line-height: 28px;
}

.price span {
    margin-left: 30px;
}

.booking-btn {
    font-family: 'Roboto';
    line-height: 14px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    padding: 0 13px;

    color: rgba(56, 180, 13, 0.9);
    background: rgba(13, 238, 76, 0.25);
    border-radius: 3px;
}

.mini-status_info {
    display: inline-flex;

    /*height: 12px;*/
    align-items: center;
    padding: 0 5px;
    margin-top: 11px;
    margin-bottom: 7px;

    border-radius: 3px;
}
.paid {
    background: #0DEE4C40;
    color: #38B40DE5;
}
.unpaid {
    background: #EE0D0D3D;
    color: #B40D0DE5;
}
.partially_paid {
    background: #EAEE0D40;
    color: #A6B40DE5;
}

.card {
    margin-top: 30px;
    background: #ccc;
    padding: 8px;
    max-width: 230px;
    min-width: 230px;
}

.card-title {
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Inter';
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
}

.card-client {
    background: white;
    padding: 5px 8px 8px;
    border-radius: 3px;

    font-family: 'Inter';
    font-size: 11px;
    line-height: 13px;
    margin-bottom: 8px;
}
.create-card-client {
    background: white;
    display: flex;
    align-items: center;
    padding-left: 5px;

    font-family: 'Inter';
    line-height: 13px;
    margin-bottom: 8px;
    height: 16px;
    font-size: 12px;

    border-radius: 3px;

    cursor: pointer;
}

</style>
