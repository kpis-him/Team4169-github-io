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
                Programmatic
                <br />
                Our diverse and dynamic team is the driving force behind the
                continued development and improvment of Programmatic. With a
                perfect blend of visionary founders, brilliant developers, and
                creative minds, our team has a passion for providing excellent
                teaching material and improving Programmatic and creating
                impactful experiences for our students. Meet the team:
            </h3>
        </section>
        <section class="line"></section>
        <section class="flex flex-col gap-20 mt-36 mb-10 cards">
            <BioCard
                name="Ofir"
                pos="Founder, Front-End Developer"
                desc=" Hi, I'm Ofir and im the founder of Programmatics. I have over 5 years of coding experience in Python and recently started working with Unity and Dart, making many practical applications."
                langs="Python, Dart, C#, JavaScript"
                discord="@.ofish"
                imgurl="discord.png"
            />
            <BioCard
                name="Zain"
                desc="Hello, my name is Zain. I am looking forward to teaching you all about programming! Currently, I have 3 years of experience in both Python and Raspberry Pi."
                langs="Python"
                discord="@zaindaman"
                pos="Founder, Electrical Engineer"
                imgurl="discord.png"
            />
            <BioCard
                name="Zyam"
                pos="Founder, Electrical Engineer"
                desc="Hi, I'm Zyam. I've been working with circuits, Raspberry Pi, and Arduino for 3 years, with experience in Python, Java, and Javscript."
                langs="JavaScript, Python, Java"
                discord="@hackaz"
                imgurl="discord.png"
            />
            <BioCard
                name="Adam"
                desc="Hello, I'm Adam. I have about 4 years of experience in Unity and making video games."
                langs="Python, C#"
                discord="@yourmom"
                pos="Founder, Graphic Designer"
                imgurl="discord.png"
            />

            <BioCard
                name="Ethan"
                desc="Website Developer"
                langs="Python, C++, Java, JavaScript"
                discord="N/A"
                pos="Full-Stack Developer, Dev of the Programmatic Discord Bot"
                imgurl="discord.png"
            />

            <BioCard
                name="Kushal"
                pos="Co-director of Programmatic"
                desc=" Hi, I'm Kushal and im the co-director of Programmatics. I have over 5 years of coding experience in Python and recently started working with Java, making many practical applications."
                langs="Python, Java, JavaScript, HTML"
                discord="N/A"
                imgurl="discord.png"
            />

            <BioCard
                name="Leo"
                pos="Co-director of Programmatic"
                desc=" Hi, I'm Leo and im the co-director of Programmatics. I have over 5 years of coding experience in Python and recently started working with Java, making many practical applications."
                langs="Python, Java, JavaScript, HTML"
                discord="N/A"
                imgurl="discord.png"
            />
            <BioCard
                name="Neil"
                pos="Co-director of Programmatic"
                desc=" Hi, I'm Neil and im the co-director of Programmatics. I have over 5 years of coding experience in Python and recently started working with Java, making many practical applications."
                langs="Python, Java, JavaScript, HTML"
                discord="N/A"
                imgurl="discord.png"
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
