const config = {
    emailGenerator: (emailKey, name, region) => {
        const templates = {
            DEFUNDLAPD: { 
                web: `Hello,\n\nMy name is ${name} and I am a resident of ${region}. We are in the midst of a health pandemic with severe economic consequences. Over 50% of Angelenos are unemployed — and we can expect 42% lasting unemployment. Over 50% of this city is renters — and if folx are unemployed, they cannot pay rent. Prior to the pandemic, there were around 60k unhoused folx; after evictions and economic insecurity due to COVID-19 and its fall out, we can expect thousands more. In this context, the Mayor is proposing an increase to LAPD, despite the fact that crime has fallen considerably during the past few months. LAPD has seen a rise in overtime which, more often than not, is paid out to officers harassing unhoused folx, and Black, Indigenous, people of color.\n\nWe are also in the midst of widespread upheaval over the systemic violence — embodied by the LAPD — which murders Black folx. We will no longer accept empty gestures and suggestions of “reform.”\n\nWe need to defund the LAPD. We need to #DefundThePolice. We need a budget that adequately and effectively meets the needs of Angelenos during this trying and uncertain time; and we need a budget that supports communities and supports their wellbeing, not which empowers the force(s) that tear them apart.\n\nAfter City Council cowardly avoided voting or revising your draconian budget proposal, the document is back in your hands. I am urging you to completely revise the LA budget for 2020-2021 and fund #CareNotCops. You need to adopt a People’s Budget.\n\nThank you for your time,\n\n${name}`,
                encoded: `mailto:mayor.helpdesk@lacity.org?bcc=councilmember.cedillo@la.org,councilmember.Krekorian@lacity.org,councilmember.blumenfield@lacity.org,david.ryu@lacity.org,paul.koretz@lacity.org,councilmember.martinez@lacity.org,councilmember.rodriguez@lacity.org,councilmember.harris-dawson@lacity.org,councilmember.price@lacity.org,councilmember.wesson@lacity.org,councilmember.bonin@lacity.org,councilmember.Lee@lacity.org,councilmember.ofarrell@lacity.org,councilmember.huizar@lacity.org,councilmember.buscaino@lacity.org&subject=Adopt%20a%20People's%20Budget&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20We%20are%20in%20the%20midst%20of%20a%20health%20pandemic%20with%20severe%20economic%20consequences.%20Over%2050%25%20of%20Angelenos%20are%20unemployed%20%E2%80%94%20and%20we%20can%20expect%2042%25%20lasting%20unemployment.%20Over%2050%25%20of%20this%20city%20is%20renters%20%E2%80%94%20and%20if%20folx%20are%20unemployed%2C%20they%20cannot%20pay%20rent.%20Prior%20to%20the%20pandemic%2C%20there%20were%20around%2060k%20unhoused%20folx%3B%20after%20evictions%20and%20economic%20insecurity%20due%20to%20COVID-19%20and%20its%20fall%20out%2C%20we%20can%20expect%20thousands%20more.%20In%20this%20context%2C%20the%20Mayor%20is%20proposing%20an%20increase%20to%20LAPD%2C%20despite%20the%20fact%20that%20crime%20has%20fallen%20considerably%20during%20the%20past%20few%20months.%20LAPD%20has%20seen%20a%20rise%20in%20overtime%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20harassing%20unhoused%20folx%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.%0D%0A%0D%0AWe%20are%20also%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%20violence%20%E2%80%94%20embodied%20by%20the%20LAPD%20%E2%80%94%20which%20murders%20Black%20folx.%20We%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20%E2%80%9Creform.%E2%80%9D%0D%0A%0D%0AWe%20need%20to%20defund%20the%20LAPD.%20We%20need%20to%20%23DefundThePolice.%20We%20need%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20Angelenos%20during%20this%20trying%20and%20uncertain%20time%3B%20and%20we%20need%20a%20budget%20that%20supports%20communities%20and%20supports%20their%20wellbeing%2C%20not%20which%20empowers%20the%20force(s)%20that%20tear%20them%20apart.%0D%0A%0D%0AAfter%20City%20Council%20cowardly%20avoided%20voting%20or%20revising%20your%20draconian%20budget%20proposal%2C%20the%20document%20is%20back%20in%20your%20hands.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20LA%20budget%20for%202020-2021%20and%20fund%20%23CareNotCops.%20You%20need%20to%20adopt%20a%20People%E2%80%99s%20Budget.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%0D%0A${name}`
            },
            DEFUNDSJPD: { 
                web: `Hello,\n\nMy name is ${name} and I am a resident of ${region}. I am writing to demand that funding is reallocated from SJPD to social and public programming that takes place in our communities. It is an outrage that 44% of city funding goes towards the Police Department. The SJPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing the unhoused, and Black, Indigenous, people of color.\n\nWe demand that the City Council defund the SJPD. We join the calls of those across the country to #DefundThePolice. We demand a budget that adequately and effectively meets the needs of at-risk San Jose residents during this trying and uncertain time, when livelihoods are on the line. We demand a budget that supports community wellbeing, rather than empowering police.\n\nIt is your duty to represent your constituents. I am urging you to completely revise the San Jose city budget for 2020-2021 fiscal year, and to fund #CareNotCops. Public opinion is with me.\n\nThank you for your time,\n\n${name}`,
                encoded: `mailto:mayoremail@sanjoseca.gov?bcc=webmaster.manager@sanjoseca.gov,sandra.cranford@sanjoseca.gov,District1@sanjoseca.gov,District2@sanjoseca.gov,District3@sanjoseca.gov,District4@sanjoseca.gov,District5@sanjoseca.gov,District6@sanjoseca.gov,District7@sanjoseca.gov,District8@sanjoseca.gov,District9@sanjoseca.gov,District10@sanjoseca.gov&subject=DEFUND%20THE%20SJPD&body=Hello%2CMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20am%20writing%20to%20demand%20that%20funding%20is%20reallocated%20from%20SJPD%20to%20social%20and%20public%20programming%20that%20takes%20place%20in%20our%20communities.%20It%20is%20an%20outrage%20that%2044%25%20of%20city%20funding%20goes%20towards%20the%20Police%20Department.%20The%20SJPD%20has%20seen%20a%20rise%20in%20overtime%20pay%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20responsible%20for%20harassing%20the%20unhoused%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.We%20demand%20that%20the%20City%20Council%20defund%20the%20SJPD.%20We%20join%20the%20calls%20of%20those%20across%20the%20country%20to%20%23DefundThePolice.%20We%20demand%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20at-risk%20San%20Jose%20residents%20during%20this%20trying%20and%20uncertain%20time%2C%20when%20livelihoods%20are%20on%20the%20line.%20We%20demand%20a%20budget%20that%20supports%20community%20wellbeing%2C%20rather%20than%20empowering%20police.It%20is%20your%20duty%20to%20represent%20your%20constituents.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20San%20Jose%20city%20budget%20for%202020-2021%20fiscal%20year%2C%20and%20to%20fund%20%23CareNotCops.%20Public%20opinion%20is%20with%20me.Thank%20you%20for%20your%20time%2C${name}`
            }
        }
        return templates[emailKey];
    },
    templateKeys: [
        { key: "DEFUNDLAPD", text: "Defund the LAPD"},
        { key: "DEFUNDSJPD", text: "Defund the SJPD"}
    ],
    donationData: [
        {
            sectionTitle: "Victim memorial funds",
            sectionMessage: "Donations will go toward supporting the families of George Floyd, Ahmaud Arbery, James Scurlock, Tony McDade, David McAtee, and Breonna Taylor.",
            organizations: [
                {
                    organization: "George Floyd",
                    briefSummary: "On May 25, 2020, George Floyd, a 46-year-old black man, died in Minneapolis, Minnesota, after white police officer Derek Chauvin knelt on his neck for almost nine minutes while Floyd was handcuffed and lying face down on the street.",
                    link: "https://www.gofundme.com/f/georgefloyd"
                },
                {
                    organization: "Gianna Floyd",
                    briefSummary: "A trust fund for George Floyd's daughter Gianna",
                    link: "https://www.gofundme.com/f/gianna-floyd-daughter-of-george-floyd-fund"
                },
                {
                    organization: "Ahmaud Arbery",
                    briefSummary: "On February 23, 2020, Ahmaud Marquez Arbery, an unarmed 25-year-old African-American man, was fatally shot near Brunswick in Glynn County, Georgia, while jogging on Holmes Road just before the intersection with Satilla Drive in the Satilla Shores neighborhood.",
                    link: "https://www.gofundme.com/f/i-run-with-maud"
                },{
                    organization: "James Scurlock",
                    briefSummary: "On Saturday, May 30, 2020, James Scurlock, a 22-year-old African American man, was fatally shot by a bar owner, Jacob Gardner, during George Floyd protests in the Old Market area of Omaha, Nebraska.",
                    link: "https://www.gofundme.com/f/for-james-scurlocks-family"
                },{
                    organization: "Tony Mcdade",
                    briefSummary: "On May 27, 2020, after 11 a.m., a 38-year-old African-American transgender man, Tony McDade, was fatally shot in the Leon Arms apartment complex by an officer of Tallahassee Police Department, following the fatal stabbing of Malik Jackson in nearby Saxon Street.",
                    link: "https://www.gofundme.com/f/in-memory-of-tony-mcdade"
                },{
                    organization: "David McAtee",
                    briefSummary: "On June 1, 2020, David McAtee, an African-American man, was fatally shot by law enforcement in Louisville, Kentucky, during protests over the deaths of George Floyd and Breonna Taylor.",
                    link: "https://www.gofundme.com/f/justicefordavidmcatee"
                },{
                    organization: "Breonna Taylor",
                    briefSummary: "On March 13, 2020, Breonna Taylor, a 26-year-old African-American emergency medical technician, was fatally shot by Louisville Metro Police Department (LMPD) officers in plain clothes.",
                    link: "https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor"
                }
            ]
        },
        {
            sectionTitle: "Legal defense funds and organizations",
            sectionMessage: "Donations will go toward legal aid and education for black, brown, and other minority groups.",
            organizations: [
                {
                    organization: "NAACP",
                    briefSummary: "The NAACP Legal Defense and Educational Fund, Inc. is a leading United States civil rights organization and law firm based in New York City.",
                    link: "https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.187165864.1602954306.1591044385-2004584457.1591044385"
                },{
                    organization: "Legal Rights Center",
                    briefSummary: "The Legal Rights Center is a community-driven nonprofit law firm, specializing in adult criminal and juvenile delinquency defense, restorative justice practices and youth advocacy. The Legal Rights Center runs two programs: Community Defense Program and the Youth: Education, Advocacy & Restorative Services (Y:EARS) Program. While each program has distinct goals and methods, collectively they point to the overall vision of improving the experience of the justice system for communities of color, if not proactively by solving problems that prevent involvement in the justice system in the first place, then certainly after an individual has been swept up into the system.​",
                    link: "https://www.legalrightscenter.org/"
                },{
                    organization: "Amistad Law Project",
                    briefSummary: "Founded in October 2014, Amistad Law Project advocates for the recognition of the human rights of all people and believes in the intersection of movements against systemic oppression. ALP consists of attorneys, activists, and organizers. We are prison abolitionists who view the prison industrial complex as directly related to the massive divestment from our communities the things that make them safe and strong. We believe that good public education, affordable health care, healthy and affordable food, safe and affordable housing, and the ability to care for our families, no matter what they look like, are human rights.  ",
                    link: "https://amistadlaw.org/"
                },{
                    organization: "BLMP",
                    briefSummary: "BLMP is providing cash assistance to Black LGBTQ+ migrants and first generation people dealing with the impact of COVID-19.",
                    link: "https://transgenderlawcenter.org/programs/blmp"
                },{
                    organization: "Moral Governance",
                    briefSummary: "MoGo is the only impact litigation organization in our entire region dedicated to restructuring government. We fight for economic justice for Black people and other people of color who have long been denied opportunities in government contracting and other avenues for economic development. During the COVID-19 pandemic, we are seeing and responding to a substantial increase in the need for support services and advocacy for community members who are being forced to work in unsafe conditions that threaten their lives and the lives of their families. Every penny of your tax-deductible donation funds our critical work to fight for the safety of all San Diegans. ",
                    link: "https://moralgovernance.org/"
                },{
                    organization: "Restoring Justice",
                    briefSummary: "Our attorneys are committed to client-centered, passionate, proactive, comprehensive, and holistic representation of the marginalized in our community. We believe this standard of defense is necessary to ensure everyone’s rights are protected. Beyond that standard, we also hope to bring the love of community into our work and into the entire criminal justice system, as true justice means making our entire community whole again – the accused and victims – rather than tearing people down. ",
                    link: "https://www.restoringjustice.org/"
                }
            ]
        },
        {
            sectionTitle: "",
            sectionMessage: "",
            organizations: [
                {
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },
            ]
        },
        {
            sectionTitle: "",
            sectionMessage: "",
            organizations: [
                {
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },
            ]
        },
        {
            sectionTitle: "",
            sectionMessage: "",
            organizations: [
                {
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },{
                    organization: "",
                    briefSummary: "",
                    link: ""
                },
            ]
        }

    ]
}

export default config;