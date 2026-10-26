<script setup>
import BioCard from "../components/BioCard.vue";
</script>

<template>
    <main class="flex OurTeam">
        <section class="fixed OurteamTxt">
            <h2
                class="font-extrabold text-gray-200 text-6xl mt-32 ourTeamTitle"
            >
                Our Team:
            </h2>
            <h3
                class="text-lg font-bold py-10 ourTeam-desc text-gray-300 OurTeamDesc"
            >
                This is the team of founders, developers, and teachers behind
                Warrior Robotics
                <br />
                Our diverse and dynamic team is the driving force behind the
                continued development and improvment of Team4169. With a
                perfect blend of visionary founders, brilliant developers, and
                creative minds, our team has a passion for providing excellent
                teaching material and improving. Meet the team:
            </h3>
        </section>
        <section class="line"></section>
        <section class="flex flex-col gap-20 mt-36 mb-10 cards">
            <BioCard
                name="Grady"
                pos="Captain"
                discord="mayg27@lsrhs.net"
                imgurl="gmail.png"
            />
            <BioCard
                name="Marcus"
                pos="Captain"
                discord="sciamettam27@lsrhs.net"
                imgurl="gmail.png"
            />
            <BioCard
                name="Owen"
                pos="Asst Captain"
                discord="jacksono28@lsrhs.net"
                imgurl="gmail.png"
            />
            <BioCard
                name="George"
                pos="Asst Captain"
                discord="ehrhorng28@lsrhs.net"
                imgurl="gmail.png"
            />

            <BioCard
                name="Neil"
                pos="Program Manager"
                discord="gamin27@lsrhs.net"
                imgurl="gmail.png"
            />

            <BioCard
                name="Mr. Shultz"
                pos="Mentor"
                discord="paul_shultz@lsrhs.net"
                imgurl="gmail.png"
            />
        </section>
    </main>
</template>

<style scoped>
body {
    padding: 0;
    margin: 0;
}

.wrapper {
    display: flex;
}

nav {
    flex: 0 0 50vw;
    background: gray;
}

.nav-wrapper {
    position: fixed;
    top: 0;
    left: 0;
}

section {
    flex: 1 1;
}

/* media 1350 */

@media (max-width: 1350px) {
    .line {
        display: none;
    }

    .OurteamTxt {
        position: inherit;
    }

    .OurTeam {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .cards {
        margin-top: 1rem;
    }

    .OurTeamDesc {
        width: 800px !important;
        max-width: 800px !important;
        text-align: center;
    }

    .ourTeamTitle {
        text-align: center;
    }

    /* media 1000px */
    @media (max-width: 1000px) {
        .OurTeamDesc {
            width: 600px !important;
            max-width: 600px !important;
        }
    }

    /* media 650px */
    @media (max-width: 650px) {
        .OurTeamDesc {
            width: 400px !important;
            max-width: 400px !important;
        }
    }

    /* media 450px */
    @media (max-width: 450px) {
        .OurTeamDesc {
            width: 370px !important;
            max-width: 370px !important;
        }
    }
}
</style>
