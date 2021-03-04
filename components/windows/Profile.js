import PageIcon from '../icons/PageIcon'

const Profile = () => {
    return (
        <>
            <style jsx>{`
                .welcomeContainer {
                    display: flex;
                    flex-direction: column;
                }
                img {
                    max-width: 100%;
                    width: 40%;
                }
                article {
                    display: flex;
                    margin:7.5px;
                }
                .infoContainer {
                    width: 100%;
                    padding-left: 15px;
                    display: flex;
                    flex-direction: column;
                }
                p,h2{
                    margin :0px;
                }
                .skillsContainer {
                    display:flex;
                    flex-direction: column;
                }
                .skillsIconsContainer {
                    display:flex;
                    flex-wrap:wrap;
                    align-items: space-between;

                }
            `}</style>
            <section className="projetsContainer">
                <article>
                    <img src="/images/photo-nicolas.jpg"></img>
                    <div className="infoContainer">
                        <h2>OUDEA NICOLAS</h2>
                        <p>
                            Développeur Web basé à Nantes. Titulaire d'un bac+2
                            développeur intégrateur en réalisation d'application
                            web, entament une 3ème année d'études en alternance
                            à MyDigitalSchool
                        </p>
                    </div>
                </article>
                    <article className='skillsContainer'>
                        <h2>Mes Compétences</h2>
                        <div className='skillsIconsContainer'>
                            <PageIcon width='70px' height='70px' src='svg/skills/javascript-original.svg' name='Javascript' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/react-original.svg' name='React' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/composer-original.svg' name='Composer' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/css3-original.svg' name='Css3' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/express-original-wordmark.svg' name='Express' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/git-original.svg' name='Git' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/html5-original.svg' name='Html5' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/mongodb-original.svg' name='Mongo Db' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/mysql-original.svg' name='MySql' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/nodejs-original.svg' name='NodeJs' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/npm-original-wordmark.svg' name='Npm' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/php-original.svg' name='Php' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/symfony-original.svg' name='Symfony' ></PageIcon>
                            <PageIcon width='70px' height='70px' src='svg/skills/visualstudio-plain.svg' name='Visual Studio' ></PageIcon>
                            
                        </div>
                    </article>
            </section>
        </>
    )
}

export default Profile
