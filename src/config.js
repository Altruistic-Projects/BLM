const config = {
    emailGenerator: (emailKey, name, region) => {
        const templates = {
            DEFUNDLAPD: { 
                web: `Hello,\n\nMy name is ${name} and I am a resident of ${region}. We are in the midst of a health pandemic with severe economic consequences. Over 50% of Angelenos are unemployed — and we can expect 42% lasting unemployment. Over 50% of this city is renters — and if folx are unemployed, they cannot pay rent. Prior to the pandemic, there were around 60k unhoused folx; after evictions and economic insecurity due to COVID-19 and its fall out, we can expect thousands more. In this context, the Mayor is proposing an increase to LAPD, despite the fact that crime has fallen considerably during the past few months. LAPD has seen a rise in overtime which, more often than not, is paid out to officers harassing unhoused folx, and Black, Indigenous, people of color.\n\nWe are also in the midst of widespread upheaval over the systemic violence — embodied by the LAPD — which murders Black folx. We will no longer accept empty gestures and suggestions of “reform.”\n\nWe need to defund the LAPD. We need to #DefundThePolice. We need a budget that adequately and effectively meets the needs of Angelenos during this trying and uncertain time; and we need a budget that supports communities and supports their wellbeing, not which empowers the force(s) that tear them apart.\n\nAfter City Council cowardly avoided voting or revising your draconian budget proposal, the document is back in your hands. I am urging you to completely revise the LA budget for 2020-2021 and fund #CareNotCops. You need to adopt a People’s Budget.\n\nThank you for your time,\n\n${name}`,
                encoded: `mailto:mayor.helpdesk@lacity.org?bcc=councilmember.cedillo@la.org,councilmember.Krekorian@lacity.org,councilmember.blumenfield@lacity.org,david.ryu@lacity.org,paul.koretz@lacity.org,councilmember.martinez@lacity.org,councilmember.rodriguez@lacity.org,councilmember.harris-dawson@lacity.org,councilmember.price@lacity.org,councilmember.wesson@lacity.org,councilmember.bonin@lacity.org,councilmember.Lee@lacity.org,councilmember.ofarrell@lacity.org,councilmember.huizar@lacity.org,councilmember.buscaino@lacity.org&subject=Adopt%20a%20People's%20Budget&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20We%20are%20in%20the%20midst%20of%20a%20health%20pandemic%20with%20severe%20economic%20consequences.%20Over%2050%25%20of%20Angelenos%20are%20unemployed%20%E2%80%94%20and%20we%20can%20expect%2042%25%20lasting%20unemployment.%20Over%2050%25%20of%20this%20city%20is%20renters%20%E2%80%94%20and%20if%20folx%20are%20unemployed%2C%20they%20cannot%20pay%20rent.%20Prior%20to%20the%20pandemic%2C%20there%20were%20around%2060k%20unhoused%20folx%3B%20after%20evictions%20and%20economic%20insecurity%20due%20to%20COVID-19%20and%20its%20fall%20out%2C%20we%20can%20expect%20thousands%20more.%20In%20this%20context%2C%20the%20Mayor%20is%20proposing%20an%20increase%20to%20LAPD%2C%20despite%20the%20fact%20that%20crime%20has%20fallen%20considerably%20during%20the%20past%20few%20months.%20LAPD%20has%20seen%20a%20rise%20in%20overtime%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20harassing%20unhoused%20folx%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.%0D%0A%0D%0AWe%20are%20also%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%20violence%20%E2%80%94%20embodied%20by%20the%20LAPD%20%E2%80%94%20which%20murders%20Black%20folx.%20We%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20%E2%80%9Creform.%E2%80%9D%0D%0A%0D%0AWe%20need%20to%20defund%20the%20LAPD.%20We%20need%20to%20%23DefundThePolice.%20We%20need%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20Angelenos%20during%20this%20trying%20and%20uncertain%20time%3B%20and%20we%20need%20a%20budget%20that%20supports%20communities%20and%20supports%20their%20wellbeing%2C%20not%20which%20empowers%20the%20force(s)%20that%20tear%20them%20apart.%0D%0A%0D%0AAfter%20City%20Council%20cowardly%20avoided%20voting%20or%20revising%20your%20draconian%20budget%20proposal%2C%20the%20document%20is%20back%20in%20your%20hands.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20LA%20budget%20for%202020-2021%20and%20fund%20%23CareNotCops.%20You%20need%20to%20adopt%20a%20People%E2%80%99s%20Budget.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%0D%0A${name}`
            }
        }
        return templates[emailKey];
    },
    templateKeys: [
        { key: "DEFUNDLAPD", text: "Defund the LAPD"}
    ],
    donationData: [
        {
            sectionTitle: "Victim memorial funds",
            sectionMessage: "Donations will go toward supporting the families of George Floyd, Ahmaud Arbery, James Scurlock, Tony McDade, David McAtee, and Breonna Taylor.",
            organizations: [
                {
                    organization: "George Floyd Memorial Fund",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/georgefloyd"
                },
                {
                    organization: "I Run With Maud",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/i-run-with-maud"
                },{
                    organization: "James Scurlock Memorial Fund",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/for-james-scurlocks-family"
                },{
                    organization: "Tony Mcdade Memorial Fund",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/in-memory-of-tony-mcdade"
                },{
                    organization: "David McAtee Memorial Fund",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/justicefordavidmcatee"
                },{
                    organization: "Gianna Floyd Fund",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/gianna-floyd-daughter-of-george-floyd-fund"
                },{
                    organization: "Justice for Breonna Taylor",
                    briefSummary: "A summary of Google",
                    link: "https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor"
                }
            ]
        },
        {
            sectionTitle: "General Funds",
            sectionMessage: "This is a summary of the general funds",
            organizations: [
                {
                    organization: "Black Lives Matter",
                    briefSummary: "A summary of Google",
                    link: "https://blacklivesmatter.com/"
                }
            ]
        },
        {
            sectionTitle: "General Funds",
            sectionMessage: "This is a summary of the general funds",
            organizations: [
                {
                    organization: "Black Lives Matter",
                    briefSummary: "A summary of Google",
                    link: "https://blacklivesmatter.com/"
                }
            ]
        },
        {
            sectionTitle: "General Funds",
            sectionMessage: "This is a summary of the general funds",
            organizations: [
                {
                    organization: "Black Lives Matter",
                    briefSummary: "A summary of Google",
                    link: "https://blacklivesmatter.com/"
                }
            ]
        }

    ]
}

export default config;