<template>
    <div class="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center" @click.stop="$emit('hideModal')">
        <div class="booking flex flex-col" @click.stop>
            <h2>BOOKING</h2>
            <div class="flex">
                <div class="booking-contact flex flex-col">
                    <div class="name">Иван Иванов</div>
                    <a href="mailto: ivaninvanov@mail.com" class="contact">ivaninvanov@mail.com</a>
                    <a href="tel: +0 (848) 894-32-32" class="contact">+0 (848) 894-32-32</a>
                </div>
                <div class="booking-info flex flex-col">
                    <div class="booking-title">Standard</div>
                    <div class="booking-description">Standard rooms are the epitome of comfort and style. Designed with elegance and luxury in mind, these rooms offer the perfect retreat for travelers seeking a truly exceptional experience. From the plush bedding and high-end furnishings to the state-of-the-art technology and breathtaking views, every detail has been carefully selected to create a serene and sophisticated atmosphere.</div>
                </div>
                <img src="../assets/rooms/room-booking.png" alt="">
            </div>
            <div class="flex" style="margin-top: 46px;">
                <div class="flex flex-col" style="margin-right: 120px;">
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Adults</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">2</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">20$ per day</div>
                        </div>
                    </div>
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Kids under 12</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">0</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">16$ per day</div>
                        </div>
                    </div>
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Kids under 6</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">1</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">Free</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col">
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Adults</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">2</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">20$ per day</div>
                        </div>
                    </div>
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Kids under 12</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">0</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">16$ per day</div>
                        </div>
                    </div>
                    <div class="param flex justify-between items-center">
                        <div class="param-name">Kids under 6</div>
                        <div class="flex items-center">
                            <div class="param-minus">-</div>
                            <div class="param-count">1</div>
                            <div class="param-plus">+</div>
                            <div class="param-price">Free</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="booking-footer flex justify-between items-center">
                <div class="price">Total price: <span>75$</span></div>
                <button class="booking-btn" @click="$emit('hideModal')">BOOKING</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useVModel } from "@vueuse/core"

const props = defineProps({
  modelValue: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])
const booking = useVModel(props, 'modelValue', emit)
</script>
<style scoped>
.fixed {
    background: rgba(0, 0, 0, 0.571);
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
    padding: 45px 45px 35px;
    width: 1064px;
    height: 610px;
    border-radius: 10px;
    color: #3A3943;
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
    border-bottom: 1px solid #8CAA14;
}
.booking-info {
    margin-left: 150px;
}
.booking-title {
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 20px;
}
.booking-description {
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
}

.booking img {
    width: 289px;
    height: 193px;

    border-radius: 4px;
    margin-left: 50px;
}

.param {
    width: 275px;
    margin-bottom: 18px;
}

.param-name {
    font-family: 'Inter';
    font-weight: 600;
}

.param-price {
    width: 81px;
    margin-left: 12px;
    font-family: 'Roboto';
    font-weight: 600;
    font-size: 14px;
    color: #8CAA14;
}
.param-count {
    margin: 0 6px;
}
.param-plus,
.param-minus {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    color: #8CAA14;
    background: rgba(140, 170, 20, 0.3);
    padding-bottom: 4px;
    cursor: pointer;
}

.booking-footer {
    margin-top: auto;
}
.price {
    padding: 20px;
    border-top: 2px solid #8CAA14;
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
}
.price span {
    margin-left: 30px;
}

.booking-btn {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8CAA14;
    border-radius: 4px;
    color: white;
    height: 44px;
    padding: 0 40px;
}
</style>
