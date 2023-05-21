<template>
    <div class="about_us flex">
        <div class="images">
            <div class="flex">
                <div class="flex flex-col" style="margin-right: 15px;">
                    <div class="images-info m-b-15 box-shadow">
                        <img src="../assets/pillow.png" width="50" alt="">
                        <h3>Cozy Room</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                    <img class="box-shadow" src="../assets/room.png" alt="">
                </div>
                <div class="flex flex-col">
                    <img src="../assets/room.png" class="box-shadow m-b-15" alt="">
                    <div class="images-info info-bg-gray box-shadow">
                        <img src="../assets/rating.png" width="50" alt="">
                        <h3>Special Offers</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="description" style="margin-right: 75px;margin-left: 75px;">
            <span>ABOUT US</span>
            <h2>Ak-Danis Boarding House</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
                repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto
                fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur
                iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit
                sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. </p>
        </div>
    </div>
    <div class="about_us flex" style="margin-top: 63px;">
        <div class="description" style="margin-right: 75px;">
            <span>LOCATION</span>
            <h2>Sary-Oy village</h2>
            <p>Welcome to our lovely boarding house!
                Our location is truly one-of-a-kind. We are nestled in the heart of a charming coastal town, just a stone's
                throw away from the beach. You'll love being able to stroll along the picturesque streets and soak in the
                relaxed vibe of the community.
                From our boarding house, you can easily explore all that this town has to offer. Take a short walk to the
                beach and spend the day lounging in the sun, swimming in the ocean, or even trying out some watersports. Or,
                head out to the local shops and boutiques, where you can find unique souvenirs, fashionable clothing, and
                handmade items.
                And when it's time to eat, you won't be disappointed. Our boarding house is situated near a variety of
                delicious restaurants, from casual cafes to fine dining establishments. You can indulge in fresh seafood,
                regional cuisine, and even international fare.</p>
        </div>
        <div class="images">
            <img src="../assets/map.png" class="w-full h-full" alt="">
        </div>
    </div>
</template>

<style>

.about_us {
    margin: auto;
    width: 1347px;
    margin-top: calc(75px + 63px);
}

.about_us .images {
    width: 50%;
}

.about_us .images .flex {
    width: 629px;
    height: 531px;
}

.about_us .description {
    width: 50%;
}

.about_us .description span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #8CAA14;
    margin-bottom: 15px;
    margin-top: 65px;
}

.about_us .description h2 {
    font-family: 'Inria Serif';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #3A3943;
    margin-bottom: 20px;
}

.about_us .description p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;

    color: #000000;
}

.images-info h3 {
    font-family: 'Inria Serif';
    font-size: 22px;
    font-weight: 300;
    text-align: center;
}

.images-info p {
    color: rgb(180, 180, 180);
    text-align: center;
}

.images-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 30px 10px;
    height: 265px;
    background: white;
}

.m-b-15 {
    margin-bottom: 15px;
}

.info-bg-gray {
    background: rgb(228, 228, 228);
}

.box-shadow {
    box-shadow: 0 0 5px rgb(206, 206, 206);
}
</style>
