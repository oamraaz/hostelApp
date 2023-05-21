<template>
    <div class="rooms flex justify-center">
        <div class="room flex flex-col">
            <img src="../assets/rooms/root-1.png" alt="">
            <div class="room-content flex flex-col">
                <div class="flex justify-between items-center">
                    <div class="room-type">Lux</div>
                    <div class="room-price">35$ per day</div>
                </div>
                <div class="room-description">Lux rooms are the epitome of comfort and style. Designed with elegance and luxury in mind, these rooms offer the perfect retreat for travelers seeking a truly exceptional experience. From the plush bedding and high-end furnishings to the state-of-the-art technology and breathtaking views, every detail has been carefully selected to create a serene and sophisticated atmosphere.</div>
                <div class="flex justify-between items-center">
                    <a href="#" class="room-more">Read more</a>
                    <button class="room-book" @click="$emit('show-modal')">BOOK</button>
                </div>
            </div>
        </div>
        <div class="room flex flex-col">
            <img src="../assets/rooms/root-2.png" alt="">
            <div class="room-content flex flex-col">
                <div class="flex justify-between items-center">
                    <div class="room-type">Delux</div>
                    <div class="room-price">30$ per day</div>
                </div>
                <div class="room-description">Lux rooms are the epitome of comfort and style. Designed with elegance and luxury in mind, these rooms offer the perfect retreat for travelers seeking a truly exceptional experience. From the plush bedding and high-end furnishings to the state-of-the-art technology and breathtaking views, every detail has been carefully selected to create a serene and sophisticated atmosphere.</div>
                <div class="flex justify-between items-center">
                    <a href="#" class="room-more">Read more</a>
                    <button class="room-book" @click="$emit('show-modal')">BOOK</button>
                </div>
            </div>
        </div>
        <div class="room flex flex-col">
            <img src="../assets/rooms/root-3.png" alt="">
            <div class="room-content flex flex-col">
                <div class="flex justify-between items-center">
                    <div class="room-type">Standard</div>
                    <div class="room-price">25$ per day</div>
                </div>
                <div class="room-description">Lux rooms are the epitome of comfort and style. Designed with elegance and luxury in mind, these rooms offer the perfect retreat for travelers seeking a truly exceptional experience. From the plush bedding and high-end furnishings to the state-of-the-art technology and breathtaking views, every detail has been carefully selected to create a serene and sophisticated atmosphere.</div>
                <div class="flex justify-between items-center">
                    <a href="#" class="room-more">Read more</a>
                    <button class="room-book" @click="$emit('show-modal')">BOOK</button>
                </div>
            </div>
        </div>
        <div class="room flex flex-col">
            <img src="../assets/rooms/root-4.png" alt="">
            <div class="room-content flex flex-col">
                <div class="flex justify-between items-center">
                    <div class="room-type">Economy</div>
                    <div class="room-price">22$ per day</div>
                </div>
                <div class="room-description">Lux rooms are the epitome of comfort and style. Designed with elegance and luxury in mind, these rooms offer the perfect retreat for travelers seeking a truly exceptional experience. From the plush bedding and high-end furnishings to the state-of-the-art technology and breathtaking views, every detail has been carefully selected to create a serene and sophisticated atmosphere.</div>
                <div class="flex justify-between items-center">
                    <a href="#" class="room-more">Read more</a>
                    <button class="room-book" @click="$emit('show-modal')">BOOK</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

.rooms {
    margin-top: 138px;
}

.room {
    margin: 0 17.5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.358);
    border-radius: 15px;
    max-width: 326px;
    font-family: 'Roboto';
    font-size: 14px;
}

.room-content {
    padding: 15px 25px 25px;
}

.room-description {
    line-height: 16px;
    margin-top: 20px;
    margin-bottom: 15px;
}

.room-type {
    font-weight: 600;
}

.room-more {
    font-size: 13px;
    text-decoration: underline;
}

.room-book {
    height: 30px;
    padding: 0 35px;
    display: flex;
    align-items: center;

    color: #FFFFFF;
    background: #8CAA14;
    border-radius: 4px;
}
</style>
