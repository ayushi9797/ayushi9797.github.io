export const footer = () => {
    return ` 
    <style>
        /* footer section starts */

       

        .footer {
            min-height: auto;
            padding-top: 0;
            background: black;
        }

        .footer .box-container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .footer .box-container .box {
            flex: 1 1 25rem;
            margin: 2.5rem;
        }

        .footer .box-container .box h3 {
            font-size: 2.5rem;
            color: rgb(247, 83, 110);
            padding-bottom: 1rem;
            font-weight: normal;
        }

        .footer .box-container .box p {
            font-size: 1.5rem;
            color: pink;
            padding: 0.7rem 0;
            text-transform: none;
        }

        .footer .box-container .box p i {
            padding-right: 1rem;
            color: hotpink;
        }

        .footer .box-container .box a {
            font-size: 1.5rem;
            color: pink;
            padding: 0.3rem 0;
            display: block;
        }

        .footer .box-container .box a:hover {
            color: white;
        }

        .footer .box-container .box .share {
            display: flex;
            flex-wrap: wrap;
            padding: 0rem 0;
        }


        .footer .box-container .box .share a {
            height: 4rem;
            width: 4rem;
            padding: 1rem;
            text-align: center;
            border-radius: 5rem;
            font-size: 1.7rem;
            margin-right: 1rem;
            transition: 0.2s;
            background: rgb(230, 230, 230);
            color: hotpink;
            border: none;
        }

        .footer .box-container .box .share a:hover {
            background: transparent;
            transform: scale(0.98);
            border: 0.1rem solid rgb(180, 178, 178);
            color: white;
        }

        .footer .credit {
            padding: 1rem 0 0 0;
            text-align: center;
            font-size: 1.5rem;
            font-family: "Nunito", sans-serif;
            font-weight: 600;
            color: #fff;
            border-top: 0.1rem solid #fff3;
        }

        .footer .credit a {
            color: pink;
        }

        .footer .fa {
            color: #e90606;
            margin: 0 0.3rem;
            font-size: 1.5rem;
            animation: pound 0.35s infinite alternate;
        }

        
        
        @-webkit-keyframes pound {
            to {
                transform: scale(1.1);
            }
        }

        @keyframes pound {
            to {
                transform: scale(1.1);
            }
        }

        @media (max-width: 450px) {
            .footer .box-container .box {
                margin: 1.5rem;
            }

            .footer .box-container .box p {
                padding: 0.7rem;
            }

            .footer .box-container .box .share a {
                padding: 1.2rem;
            }
        }

        /* footer section ends */

        /* common media queries starts*/
        @media (max-width: 450px) {
            html {
                font-size: 55%;
            }

            body {
                padding-right: 0;
            }

            section {
                padding: 2rem;
            }
        }
    </style>
    
    <footer class="footer">
    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>AYUSHI's Portfolio</h3>
                <p>
                    Thank you for visiting my personal portfolio website. Connect with
                    me over socials. <br />
                    <br />
                    Thank You
                </p>
                <img alt="Coding" width="400"
                    src="https://storage.googleapis.com/media.helloumi.com/125042/channels/FJ3DZITWCY268043HGFACIP9CFUA9XM6.gif" />
            </div>

            <div class="box">
                <h3>Connect me</h3>
                <a href="#home"><i class="fas fa-chevron-circle-right"></i> home</a>
                <a href="#about"><i class="fas fa-chevron-circle-right"></i> about</a>
                <a href="#skills"><i class="fas fa-chevron-circle-right"></i> skills</a>
                <a href="#education"><i class="fas fa-chevron-circle-right"></i> education</a>
                <a href="#work"><i class="fas fa-chevron-circle-right"></i> work</a>
                <a href="#experience"><i class="fas fa-chevron-circle-right"></i> experience</a>
            </div>

            <div class="box">
                <h3>contact info</h3>
                <p><i class="fas fa-phone"></i>+91</p>
                <p><i class="fas fa-envelope"></i>soniayushi345@gmail.com</p>
                <p><i class="fas fa-map-marked-alt"></i>Jhansi, India</p>
               
            </div>
        </div>

        <h1 class="credit">
            Designed with <i class="fa fa-heart pulse"></i> by
            <a href=""> Ayushi</a>
        </h1>

    </section>

    </footer>
    
    `;
};
