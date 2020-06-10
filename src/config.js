const config = {
    emailGenerator: (emailKey, name, region) => {
        const templates = {
            DEFUNDSFPD: {
                web: `To Mayor Breed, the San Francisco Board of Supervisors, and San Francisco Elected Officers \n\n My name is ${name}, and I am a resident of ${region}. This past week, our nation has been gripped by protests calling for rapid and meaningful change with regard to police behavior, an end to racism and anti-Blackness, and immediate reform in how Black people are treated in America. Our city has been at the forefront of much of this action. Accordingly, it has come to my attention that the budget for 2021 is being decided as these protests continue. \n\n SFPD has been a waste of our resources. Last year, the SFPD budget was $611,701,869, the majority of which comes from the San Francisco general fund. While we’ve been spending extraordinary amounts on policing, we have not seen improvements to safety, homelessness, mental health, or affordability in our city. Instead, we see wasteful and harmful actions of our police. \n\n I call on you to slash the SFPD budget and instead use those extraordinary resources towards solving homelessness, which is felt most by our Black neighbors and veterans. We implore you to give every member of our community experiencing homelessness a place to call home and the treatment they need. \n\n We can be a beacon for other cities to follow if only we have the courage to change. \n\n Sincerely, \n\n ${name}`,
                encoded: `mailto:MayorLondonBreed@sfgov.org,Board.of.Supervisors@sfgov.org,sandra.fewer@sfgov.org,Catherine.Stefani@sfgov.org,Aaron.Peskin@sfgov.org,marstaff@sfgov.org,prestonstaff@sfgov.org,Norman.Yee@sfgov.org,mandelmanstaff@sfgov.org,ronenstaff@sfgov.org,waltonstaff@sfgov.org,Ahsha.Safai@sfgov.org,Carmen.Chu@sfgov.org,cityattorney@sfcityatty.org,districtattorney@sfgov.org,sfso.complaints@sfgov.org,jose.cisneros@sfgov.org,manohar.raju@sfgov.org,MarkSanchez@sfusd.edu,GabrielaLopez@sfusd.edu,AlisonMCollins@sfusd.edu,StevonCook@sfusd.edu,JennyLam@sfusd.edu,FaauugaMoliga@sfusd.edu,RachelNorton@sfusd.edu?subject=DEFUND%20SFPD&body=To%20Mayor%20Breed%2C%20the%20San%20Francisco%20Board%20of%20Supervisors%2C%20and%20San%20Francisco%20Elected%20Officers%0D%0A%0D%0AMy%20name%20is%20${name}%2C%20and%20I%20am%20a%20resident%20of%20${region}.%20This%20past%20week%2C%20our%20nation%20has%20been%20gripped%20by%20protests%20calling%20for%20rapid%20and%20meaningful%20change%20with%20regard%20to%20police%20behavior%2C%20an%20end%20to%20racism%20and%20anti-Blackness%2C%20and%20immediate%20reform%20in%20how%20Black%20people%20are%20treated%20in%20America.%20Our%20city%20has%20been%20at%20the%20forefront%20of%20much%20of%20this%20action.%20Accordingly%2C%20it%20has%20come%20to%20my%20attention%20that%20the%20budget%20for%202021%20is%20being%20decided%20as%20these%20protests%20continue.%0D%0A%0D%0ASFPD%20has%20been%20a%20waste%20of%20our%20resources.%20Last%20year%2C%20the%20SFPD%20budget%20was%20%24611%2C701%2C869%2C%20the%20majority%20of%20which%20comes%20from%20the%20San%20Francisco%20general%20fund.%20While%20we%E2%80%99ve%20been%20spending%20extraordinary%20amounts%20on%20policing%2C%20we%20have%20not%20seen%20improvements%20to%20safety%2C%20homelessness%2C%20mental%20health%2C%20or%20affordability%20in%20our%20city.%20Instead%2C%20we%20see%20wasteful%20and%20harmful%20actions%20of%20our%20police.%0D%0A%0D%0AI%20call%20on%20you%20to%20slash%20the%20SFPD%20budget%20and%20instead%20use%20those%20extraordinary%20resources%20towards%20solving%20homelessness%2C%20which%20is%20felt%20most%20by%20our%20Black%20neighbors%20and%20veterans.%20We%20implore%20you%20to%20give%20every%20member%20of%20our%20community%20experiencing%20homelessness%20a%20place%20to%20call%20home%20and%20the%20treatment%20they%20need.%0D%0A%0D%0AWe%20can%20be%20a%20beacon%20for%20other%20cities%20to%20follow%20if%20only%20we%20have%20the%20courage%20to%20change.%0D%0A%0D%0ASincerely%2C%0D%0A${name}`
            },
            DEFUNDLAPD: {
                web: `Hello,\n\nMy name is ${name} and I am a resident of ${region}. We are in the midst of a health pandemic with severe economic consequences. Over 50% of Angelenos are unemployed — and we can expect 42% lasting unemployment. Over 50% of this city is renters — and if folx are unemployed, they cannot pay rent. Prior to the pandemic, there were around 60k unhoused folx; after evictions and economic insecurity due to COVID-19 and its fall out, we can expect thousands more. In this context, the Mayor is proposing an increase to LAPD, despite the fact that crime has fallen considerably during the past few months. LAPD has seen a rise in overtime which, more often than not, is paid out to officers harassing unhoused folx, and Black, Indigenous, people of color.\n\nWe are also in the midst of widespread upheaval over the systemic violence — embodied by the LAPD — which murders Black folx. We will no longer accept empty gestures and suggestions of “reform.”\n\nWe need to defund the LAPD. We need to #DefundThePolice. We need a budget that adequately and effectively meets the needs of Angelenos during this trying and uncertain time; and we need a budget that supports communities and supports their wellbeing, not which empowers the force(s) that tear them apart.\n\nAfter City Council cowardly avoided voting or revising your draconian budget proposal, the document is back in your hands. I am urging you to completely revise the LA budget for 2020-2021 and fund #CareNotCops. You need to adopt a People’s Budget.\n\nThank you for your time,\n\n${name}`,
                encoded: `mailto:mayor.helpdesk@lacity.org?bcc=councilmember.cedillo@la.org,councilmember.Krekorian@lacity.org,councilmember.blumenfield@lacity.org,david.ryu@lacity.org,paul.koretz@lacity.org,councilmember.martinez@lacity.org,councilmember.rodriguez@lacity.org,councilmember.harris-dawson@lacity.org,councilmember.price@lacity.org,councilmember.wesson@lacity.org,councilmember.bonin@lacity.org,councilmember.Lee@lacity.org,councilmember.ofarrell@lacity.org,councilmember.huizar@lacity.org,councilmember.buscaino@lacity.org&subject=Adopt%20a%20People's%20Budget&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20We%20are%20in%20the%20midst%20of%20a%20health%20pandemic%20with%20severe%20economic%20consequences.%20Over%2050%25%20of%20Angelenos%20are%20unemployed%20%E2%80%94%20and%20we%20can%20expect%2042%25%20lasting%20unemployment.%20Over%2050%25%20of%20this%20city%20is%20renters%20%E2%80%94%20and%20if%20folx%20are%20unemployed%2C%20they%20cannot%20pay%20rent.%20Prior%20to%20the%20pandemic%2C%20there%20were%20around%2060k%20unhoused%20folx%3B%20after%20evictions%20and%20economic%20insecurity%20due%20to%20COVID-19%20and%20its%20fall%20out%2C%20we%20can%20expect%20thousands%20more.%20In%20this%20context%2C%20the%20Mayor%20is%20proposing%20an%20increase%20to%20LAPD%2C%20despite%20the%20fact%20that%20crime%20has%20fallen%20considerably%20during%20the%20past%20few%20months.%20LAPD%20has%20seen%20a%20rise%20in%20overtime%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20harassing%20unhoused%20folx%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.%0D%0A%0D%0AWe%20are%20also%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%20violence%20%E2%80%94%20embodied%20by%20the%20LAPD%20%E2%80%94%20which%20murders%20Black%20folx.%20We%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20%E2%80%9Creform.%E2%80%9D%0D%0A%0D%0AWe%20need%20to%20defund%20the%20LAPD.%20We%20need%20to%20%23DefundThePolice.%20We%20need%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20Angelenos%20during%20this%20trying%20and%20uncertain%20time%3B%20and%20we%20need%20a%20budget%20that%20supports%20communities%20and%20supports%20their%20wellbeing%2C%20not%20which%20empowers%20the%20force(s)%20that%20tear%20them%20apart.%0D%0A%0D%0AAfter%20City%20Council%20cowardly%20avoided%20voting%20or%20revising%20your%20draconian%20budget%20proposal%2C%20the%20document%20is%20back%20in%20your%20hands.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20LA%20budget%20for%202020-2021%20and%20fund%20%23CareNotCops.%20You%20need%20to%20adopt%20a%20People%E2%80%99s%20Budget.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%0D%0A${name}`
            },
            DEFUNDSJPD: {
                web: `Hello,\n\nMy name is ${name} and I am a resident of ${region}. I am writing to demand that funding is reallocated from SJPD to social and public programming that takes place in our communities. It is an outrage that 44% of city funding goes towards the Police Department. The SJPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing the unhoused, and Black, Indigenous, people of color.\n\nWe demand that the City Council defund the SJPD. We join the calls of those across the country to #DefundThePolice. We demand a budget that adequately and effectively meets the needs of at-risk San Jose residents during this trying and uncertain time, when livelihoods are on the line. We demand a budget that supports community wellbeing, rather than empowering police.\n\nIt is your duty to represent your constituents. I am urging you to completely revise the San Jose city budget for 2020-2021 fiscal year, and to fund #CareNotCops. Public opinion is with me.\n\nThank you for your time,\n\n${name}`,
                encoded: `mailto:mayoremail@sanjoseca.gov?bcc=webmaster.manager@sanjoseca.gov,sandra.cranford@sanjoseca.gov,District1@sanjoseca.gov,District2@sanjoseca.gov,District3@sanjoseca.gov,District4@sanjoseca.gov,District5@sanjoseca.gov,District6@sanjoseca.gov,District7@sanjoseca.gov,District8@sanjoseca.gov,District9@sanjoseca.gov,District10@sanjoseca.gov&subject=DEFUND%20SJPD&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20am%20writing%20to%20demand%20that%20funding%20is%20reallocated%20from%20SJPD%20to%20social%20and%20public%20programming%20that%20takes%20place%20in%20our%20communities.%20It%20is%20an%20outrage%20that%2044%25%20of%20city%20funding%20goes%20towards%20the%20Police%20Department.%20The%20SJPD%20has%20seen%20a%20rise%20in%20overtime%20pay%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20responsible%20for%20harassing%20the%20unhoused%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.%0D%0A%0D%0AWe%20demand%20that%20the%20City%20Council%20defund%20the%20SJPD.%20We%20join%20the%20calls%20of%20those%20across%20the%20country%20to%20%23DefundThePolice.%20We%20demand%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20at-risk%20San%20Jose%20residents%20during%20this%20trying%20and%20uncertain%20time%2C%20when%20livelihoods%20are%20on%20the%20line.%20We%20demand%20a%20budget%20that%20supports%20community%20wellbeing%2C%20rather%20than%20empowering%20police.%0D%0A%0D%0AIt%20is%20your%20duty%20to%20represent%20your%20constituents.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20San%20Jose%20city%20budget%20for%202020-2021%20fiscal%20year%2C%20and%20to%20fund%20%23CareNotCops.%20Public%20opinion%20is%20with%20me.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A${name}`
            },
            DEFUNDSEATTLEPD: {
                web: `Dear Seattle City Leadership, \n\n My name is ${name} and I am a resident of ${region}. I am writing to demand that the City Council adopt a People’s Budget that prioritizes community wellbeing and redirects funding away from the police. \n\n We are in the midst of widespread upheaval over the systemic violence of policing, embodied by the SPD’s well documented history of murdering Black people. I will no longer accept empty gestures and suggestions of “reform.” I am demanding that my voice be heard now, and that real change be made to the way this city allocates its resources. \n\n Rather than prioritize the quality of life for all of Seattle with a proportional housing and development budget, Mayor Durkan chooses to prioritize the SPD. In the 2019-2020 proposed budget, the funding for the Office of Housing, which provides grants for affordable housing, remained unchanged at only $69.1 million. In comparison, the SPD was allocated a budget of $363 million, representing a 9.7% increase in funds. \n\n This pandemic has had severe economic consequences including high unemployment causing many people to be unable to pay rent. Prior to the pandemic, 60k people were unhoused; the evictions and economic insecurity caused by COVID-19 will bring that number even higher. Support for communities in need is necessary now, more than ever. But instead, out of all departments, the Mayor has proposed an increase in funding to the SPD. The SPD has seen a rise in overtime pay which, more often than not, is paid out to officers responsible for harassing people who are unhoused, Black, Indigenous, and people of color. This money can be spent in other ways that are proven to be more effective in improving community safety and wellness. \n\n I demand that the City Council defund the SPD. I join the calls of those across the country to defund the police. I demand a budget that adequately and effectively meets the needs of at-risk Seattleites. I demand a budget that supports community wellbeing, rather than empowers the police forces that tear them apart. \n\n Although City Council has avoided voting or revising Mayor Durkan’s draconian budget proposal, the document is back in your hands. It is your duty to represent your constituents. I am urging you to completely revise the Seattle budget for 2020-2021 fiscal year. You need to adopt a People’s Budget. Public opinion is with me. \n\n Thank you for your time, \n\n ${name}`,
                encoded: `mailto:jenny.durkan@seattle.gov,COUNCIL@SEATTLE.GOV,lisa.herbold@seattle.gov,tammy.morales@seattle.gov,kshama.sawant@seattle.gov,alex.pedersen@seattle.gov,debora.juarez@seattle.gov,dan.strauss@seattle.gov,andrew.lewis@seattle.gov,teresa.mosqueda@seattle.gov,lorena.gonzalez@seattle.gov?subject=DEFUND%20Seattle%20PD&body=Dear%20Seattle%20City%20Leadership%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20am%20writing%20to%20demand%20that%20the%20City%20Council%20adopt%20a%20People%E2%80%99s%20Budget%20that%20prioritizes%20community%20wellbeing%20and%20redirects%20funding%20away%20from%20the%20police.%0D%0A%0D%0AWe%20are%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%20violence%20of%20policing%2C%20embodied%20by%20the%20SPD%E2%80%99s%20well%20documented%20history%20of%20murdering%20Black%20people.%20I%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20%E2%80%9Creform.%E2%80%9D%20I%20am%20demanding%20that%20my%20voice%20be%20heard%20now%2C%20and%20that%20real%20change%20be%20made%20to%20the%20way%20this%20city%20allocates%20its%20resources.%0D%0A%0D%0ARather%20than%20prioritize%20the%20quality%20of%20life%20for%20all%20of%20Seattle%20with%20a%20proportional%20housing%20and%20development%20budget%2C%20Mayor%20Durkan%20chooses%20to%20prioritize%20the%20SPD.%20In%20the%202019-2020%20proposed%20budget%2C%20the%20funding%20for%20the%20Office%20of%20Housing%2C%20which%20provides%20grants%20for%20affordable%20housing%2C%20remained%20unchanged%20at%20only%20%2469.1%20million.%20In%20comparison%2C%20the%20SPD%20was%20allocated%20a%20budget%20of%20%24363%20million%2C%20representing%20a%209.7%25%20increase%20in%20funds.%0D%0A%0D%0AThis%20pandemic%20has%20had%20severe%20economic%20consequences%20including%20high%20unemployment%20causing%20many%20people%20to%20be%20unable%20to%20pay%20rent.%20Prior%20to%20the%20pandemic%2C%2060k%20people%20were%20unhoused%3B%20the%20evictions%20and%20economic%20insecurity%20caused%20by%20COVID-19%20will%20bring%20that%20number%20even%20higher.%20Support%20for%20communities%20in%20need%20is%20necessary%20now%2C%20more%20than%20ever.%20But%20instead%2C%20out%20of%20all%20departments%2C%20the%20Mayor%20has%20proposed%20an%20increase%20in%20funding%20to%20the%20SPD.%20The%20SPD%20has%20seen%20a%20rise%20in%20overtime%20pay%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20responsible%20for%20harassing%20people%20who%20are%20unhoused%2C%20Black%2C%20Indigenous%2C%20and%20people%20of%20color.%20This%20money%20can%20be%20spent%20in%20other%20ways%20that%20are%20proven%20to%20be%20more%20effective%20in%20improving%20community%20safety%20and%20wellness.%0D%0A%0D%0AI%20demand%20that%20the%20City%20Council%20defund%20the%20SPD.%20I%20join%20the%20calls%20of%20those%20across%20the%20country%20to%20defund%20the%20police.%20I%20demand%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20at-risk%20Seattleites.%20I%20demand%20a%20budget%20that%20supports%20community%20wellbeing%2C%20rather%20than%20empowers%20the%20police%20forces%20that%20tear%20them%20apart.%0D%0A%0D%0AAlthough%20City%20Council%20has%20avoided%20voting%20or%20revising%20Mayor%20Durkan%E2%80%99s%20draconian%20budget%20proposal%2C%20the%20document%20is%20back%20in%20your%20hands.%20It%20is%20your%20duty%20to%20represent%20your%20constituents.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20Seattle%20budget%20for%202020-2021%20fiscal%20year.%20You%20need%20to%20adopt%20a%20People%E2%80%99s%20Budget.%20Public%20opinion%20is%20with%20me.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A${name}`
            },
            DEFUNDFREMONTPD: {
                web: `My name is ${name} and I am a resident of ${region}. First and foremost, I would like to thank you for releasing a public statement regarding George Floyd’s death and making your officers partake in the Fair and Unbiased Policing training this week. However, that is not enough. Racially motivated violence and discrimination continue to persist in the United States. These are not isolated incidents; they are the result of systemic inequalities that are exacerbated by police brutality and lack of reform.\n\nWhile less than 4 percent of Fremont’s population is Black, they consist of 16% of the people arrested, and 36% of the people killed or seriously injured. You are in a position to put an end to the disproportionate use of police violence against Black residents. This needs to start with placing restrictions on police’s use of force -- including deadly force -- in your own police department.\n\nUse of Force Policy Reform\n\nBased on research conducted by Campaign Zero and their work with legal experts, advocates, and academics with expertise in this area, here are eight major policies that establish meaningful restrictions on police use of force against citizens:\n\n 1. Require officers to de-escalate situations, when possible, before using force.\n 2. Use of force continuum or matrix that defines/limits the types of force and or weapons that can be used to respond to specific types of resistance.\n 3. Restrict chokeholds and strangleholds (including carotid restraints) to situations where deadly force is authorized or prohibiting them altogether.\n 4. Require officers to give a verbal warning, when possible, before using deadly force.\n 5. Prohibit officers from shooting at people in moving vehicles unless the person poses a deadly threat by means other than the vehicle (for example, shooting at people from the vehicle.)\n 6. Require officers to exhaust all other reasonable alternatives before resorting to using deadly force.\n 7. Require officers to intervene to stop another officer from using excessive force.\n 8. Require comprehensive reporting that includes both uses of force and threats of force (for example, reporting instances when an officer threatens a civilian with a firearm).\n\n Of these policies, the Fremont Police Department only requires officers to warn before shooting and to intervene to stop other officers from using excessive force. Police departments that have implemented more of these policies are less likely to kill people than departments that have not. More specifically speaking, each additional use of force policy mentioned was associated with a 15% reduction in killings for the average police department. The policies with the largest impact are the ones that require comprehensive use of force reporting, ban chokeholds and strangleholds, and require officers to exhaust all other means before using deadly force. The Fremont Police Department has not implemented any of the aforementioned policies.\n\n Some police departments have suggested that these restrictions endanger their officers. However and on the contrary, officers in police departments with more restrictive policies in place are less likely to be killed in the line of duty, less likely to be assaulted, and have a similar likelihood of sustaining an injury during an assault.\n\n Therefore, I beg to question why the Fremont Police Department has not implemented all of the eight policies that would restrict excessive police force and reduce the amount of racially charged incidents in our city.\n\n Accountability and Transparency Policy Reform \n\n In addition to reassessing the Use of Force policies, the Fremont Police Department can hold its officers more accountable and be more transparent with the community it serves. Currently, our officers are held to a lower standard of misconduct than civilians when charged with offenses, allowing them to get away with wrongdoings they otherwise would not be able to. By being permitted to treat the very laws they are to enforce as if they are negligible, police officers are not held accountable for their actions. Current policies lean in favor of police officers and therefore civilians are not always getting the justice they deserve. Within the Fremont Police Department, only 1 in 6 civilian complaints of misconduct ruled in favor of civilians. \n\n Here are policies that would address Accountability and Transparency:\n 1. Require police officers to provide their name, badge number, and an informative card on how to report complaints to people with which they interact.\n 2. Establish an independent special investigator or prosecutor office responsible for investigating instances where police have seriously injured or killed civilians. Take for instance Berkeley’s Police Review Commission.\n 3. Stop giving officers under investigation access to information that civilian suspects do not get. Officers should not be allowed to record or review themselves being interrogated or given access to the recording. \n 4. Amend policies regarding the disqualification misconduct complaints that are submitted too many days after an incident occurs or if an investigation takes too long to complete.\n 5. Amend restrictions on how, when, or where police officers can be interrogated. There should not be any limitations on the number of interrogators at one time. Cease to limit the language and incentives used during interrogations. Allow for blood samples to be used in a criminal investigation, especially if the officer tested positive for alcohol or substance abuse. \n 6. Make the outcomes of police officer investigations a matter of public record. \n 7. Contribute to the International Association of Directors of Law Enforcement Standards and Trainings’ (IADLEST) National Decertification Index to ensure officers who have been stripped of their police power are not allowed to continue serving in other precincts. Use the database to inform who you hire. \n 8. Establish reporting requirements for every use of force (except for handcuffing or escorting a person with no resistance, injury, or complaint of injury). Reports should include an explanation of the tactics the officer employed before using force and provide a detailed justification for each use of force. All reports should be analyzed for broader patterns. \n 9. Collect, synthesize, and publish the following data in accessible formats: Critical incidents; Use of force; Complaints of misconduct by police officers; Stops, searches, and arrests; Profiling or discriminatory policing policies; Hate crimes and hate incidents.\n\n In Fremont, a Black person is 12.9 times as likely to have deadly force used on them than a white person. Does the city of Fremont want to be contributing to the nationwide injustice against Black people in America or do we want to be setting an example in department reformation? I commend you on your willingness to take short-term action but it is time we implement policies that will have a lasting impact.\n\n Which side of history do you want to be on? As the Chief of the Fremont Police Department, you are accountable for those you lead and therefore the choice is yours.\n\n Sincerely,\n ${name} \n\n --------------------- \n\n I invite you to visit the websites where I gathered data and policy recommendations to further inform your course of action: \n\n “California Police Scorecard.” CA Police Scorecard, Campaign Zero, policescorecard.org/?city=fremont. \n\n “New Era of Public Safety: A Guide to Fair, Safe, and Effective Community Policing.” The Leadership Conference Education Fund, The Leadership Conference Education Fund, 28 Mar. 2019, civilrights.org/wp-content/uploads/Toolkit.pdf.`,
                encoded: `mailto:policechief@fremont.gov?subject=Police%20Chief%20Kimberly%20Petersen%3A&body=My%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20First%20and%20foremost%2C%20I%20would%20like%20to%20thank%20you%20for%20releasing%20a%20public%20statement%20regarding%20George%20Floyd%E2%80%99s%20death%20and%20making%20your%20officers%20partake%20in%20the%20Fair%20and%20Unbiased%20Policing%20training%20this%20week.%20However%2C%20that%20is%20not%20enough.%20Racially%20motivated%20violence%20and%20discrimination%20continue%20to%20persist%20in%20the%20United%20States.%20These%20are%20not%20isolated%20incidents%3B%20they%20are%20the%20result%20of%20systemic%20inequalities%20that%20are%20exacerbated%20by%20police%20brutality%20and%20lack%20of%20reform.%0D%0A%0D%0AWhile%20less%20than%204%20percent%20of%20Fremont%E2%80%99s%20population%20is%20Black%2C%20they%20consist%20of%2016%25%20of%20the%20people%20arrested%2C%20and%2036%25%20of%20the%20people%20killed%20or%20seriously%20injured.%20You%20are%20in%20a%20position%20to%20put%20an%20end%20to%20the%20disproportionate%20use%20of%20police%20violence%20against%20Black%20residents.%20This%20needs%20to%20start%20with%20placing%20restrictions%20on%20police%E2%80%99s%20use%20of%20force%20--%20including%20deadly%20force%20--%20in%20your%20own%20police%20department.%0D%0A%0D%0AUse%20of%20Force%20Policy%20Reform%0D%0A%0D%0ABased%20on%20research%20conducted%20by%20Campaign%20Zero%20and%20their%20work%20with%20legal%20experts%2C%20advocates%2C%20and%20academics%20with%20expertise%20in%20this%20area%2C%20here%20are%20eight%20major%20policies%20that%20establish%20meaningful%20restrictions%20on%20police%20use%20of%20force%20against%20citizens%3A%0D%0A%0D%0A1.%20Require%20officers%20to%20de-escalate%20situations%2C%20when%20possible%2C%20before%20using%20force.%0D%0A2.%20Use%20of%20force%20continuum%20or%20matrix%20that%20defines%2Flimits%20the%20types%20of%20force%20and%20or%20weapons%20that%20can%20be%20used%20to%20respond%20to%20specific%20types%20of%20resistance.%0D%0A3.%20Restrict%20chokeholds%20and%20strangleholds%20(including%20carotid%20restraints)%20to%20situations%20where%20deadly%20force%20is%20authorized%20or%20prohibiting%20them%20altogether.%0D%0A4.%20Require%20officers%20to%20give%20a%20verbal%20warning%2C%20when%20possible%2C%20before%20using%20deadly%20force.%0D%0A5.%20Prohibit%20officers%20from%20shooting%20at%20people%20in%20moving%20vehicles%20unless%20the%20person%20poses%20a%20deadly%20threat%20by%20means%20other%20than%20the%20vehicle%20(for%20example%2C%20shooting%20at%20people%20from%20the%20vehicle.)%0D%0A6.%20Require%20officers%20to%20exhaust%20all%20other%20reasonable%20alternatives%20before%20resorting%20to%20using%20deadly%20force.%0D%0A7.%20Require%20officers%20to%20intervene%20to%20stop%20another%20officer%20from%20using%20excessive%20force.%0D%0A8.%20Require%20comprehensive%20reporting%20that%20includes%20both%20uses%20of%20force%20and%20threats%20of%20force%20(for%20example%2C%0D%0Areporting%20instances%20when%20an%20officer%20threatens%20a%20civilian%20with%20a%20firearm).%0D%0A%0D%0AOf%20these%20policies%2C%20the%20Fremont%20Police%20Department%20only%20requires%20officers%20to%20warn%20before%20shooting%20and%20to%20intervene%20to%20stop%20other%20officers%20from%20using%20excessive%20force.%20Police%20departments%20that%20have%20implemented%20more%20of%20these%20policies%20are%20less%20likely%20to%20kill%20people%20than%20departments%20that%20have%20not.%20More%20specifically%20speaking%2C%20each%20additional%20use%20of%20force%20policy%20mentioned%20was%20associated%20with%20a%2015%25%20reduction%20in%20killings%20for%20the%20average%20police%20department.%20The%20policies%20with%20the%20largest%20impact%20are%20the%20ones%20that%20require%20comprehensive%20use%20of%20force%20reporting%2C%20ban%20chokeholds%20and%20strangleholds%2C%20and%20require%20officers%20to%20exhaust%20all%20other%20means%20before%20using%20deadly%20force.%20The%20Fremont%20Police%20Department%20has%20not%20implemented%20any%20of%20the%20aforementioned%20policies.%0D%0A%0D%0ASome%20police%20departments%20have%20suggested%20that%20these%20restrictions%20endanger%20their%20officers.%20However%20and%20on%20the%20contrary%2C%20officers%20in%20police%20departments%20with%20more%20restrictive%20policies%20in%20place%20are%20less%20likely%20to%20be%20killed%20in%20the%20line%20of%20duty%2C%20less%20likely%20to%20be%20assaulted%2C%20and%20have%20a%20similar%20likelihood%20of%20sustaining%20an%20injury%20during%20an%20assault.%0D%0A%0D%0ATherefore%2C%20I%20beg%20to%20question%20why%20the%20Fremont%20Police%20Department%20has%20not%20implemented%20all%20of%20the%20eight%20policies%20that%20would%20restrict%20excessive%20police%20force%20and%20reduce%20the%20amount%20of%20racially%20charged%20incidents%20in%20our%20city.%0D%0A%0D%0AAccountability%20and%20Transparency%20Policy%20Reform%0D%0A%0D%0AIn%20addition%20to%20reassessing%20the%20Use%20of%20Force%20policies%2C%20the%20Fremont%20Police%20Department%20can%20hold%20its%20officers%20more%20accountable%20and%20be%20more%20transparent%20with%20the%20community%20it%20serves.%20Currently%2C%20our%20officers%20are%20held%20to%20a%20lower%20standard%20of%20misconduct%20than%20civilians%20when%20charged%20with%20offenses%2C%20allowing%20them%20to%20get%20away%20with%20wrongdoings%20they%20otherwise%20would%20not%20be%20able%20to.%20By%20being%20permitted%20to%20treat%20the%20very%20laws%20they%20are%20to%20enforce%20as%20if%20they%20are%20negligible%2C%20police%20officers%20are%20not%20held%20accountable%20for%20their%20actions.%20Current%20policies%20lean%20in%20favor%20of%20police%20officers%20and%20therefore%20civilians%20are%20not%20always%20getting%20the%20justice%20they%20deserve.%20Within%20the%20Fremont%20Police%20Department%2C%20only%201%20in%206%20civilian%20complaints%20of%20misconduct%20ruled%20in%20favor%20of%20civilians.%0D%0A%0D%0AHere%20are%20policies%20that%20would%20address%20Accountability%20and%20Transparency%3A%0D%0A1.%20Require%20police%20officers%20to%20provide%20their%20name%2C%20badge%20number%2C%20and%20an%20informative%20card%20on%20how%20to%20report%20complaints%20to%20people%20with%20which%20they%20interact.%0D%0A2.%20Establish%20an%20independent%20special%20investigator%20or%20prosecutor%20office%20responsible%20for%20investigating%20instances%20where%20police%20have%20seriously%20injured%20or%20killed%20civilians.%20Take%20for%20instance%20Berkeley%E2%80%99s%20Police%20Review%20Commission.%0D%0A3.%20Stop%20giving%20officers%20under%20investigation%20access%20to%20information%20that%20civilian%20suspects%20do%20not%20get.%20Officers%20should%20not%20be%20allowed%20to%20record%20or%20review%20themselves%20being%20interrogated%20or%20given%20access%20to%20the%20recording.%0D%0A4.%20Amend%20policies%20regarding%20the%20disqualification%20misconduct%20complaints%20that%20are%20submitted%20too%20many%20days%20after%20an%20incident%20occurs%20or%20if%20an%20investigation%20takes%20too%20long%20to%20complete.%0D%0A5.%20Amend%20restrictions%20on%20how%2C%20when%2C%20or%20where%20police%20officers%20can%20be%20interrogated.%20There%20should%20not%20be%20any%20limitations%20on%20the%20number%20of%20interrogators%20at%20one%20time.%20Cease%20to%20limit%20the%20language%20and%20incentives%20used%20during%20interrogations.%20Allow%20for%20blood%20samples%20to%20be%20used%20in%20a%20criminal%20investigation%2C%20especially%20if%20the%20officer%20tested%20positive%20for%20alcohol%20or%20substance%20abuse.%0D%0A6.%20Make%20the%20outcomes%20of%20police%20officer%20investigations%20a%20matter%20of%20public%20record.%0D%0A7.%20Contribute%20to%20the%20International%20Association%20of%20Directors%20of%20Law%20Enforcement%20Standards%20and%20Trainings%E2%80%99%20(IADLEST)%20National%20Decertification%20Index%20to%20ensure%20officers%20who%20have%20been%20stripped%20of%20their%20police%20power%20are%20not%20allowed%20to%20continue%20serving%20in%20other%20precincts.%20Use%20the%20database%20to%20inform%20who%20you%20hire.%0D%0A8.%20Establish%20reporting%20requirements%20for%20every%20use%20of%20force%20(except%20for%20handcuffing%20or%20escorting%20a%20person%20with%20no%20resistance%2C%20injury%2C%20or%20complaint%20of%20injury).%20Reports%20should%20include%20an%20explanation%20of%20the%20tactics%20the%20officer%20employed%20before%20using%20force%20and%20provide%20a%20detailed%20justification%20for%20each%20use%20of%20force.%20All%20reports%20should%20be%20analyzed%20for%20broader%20patterns.%0D%0A9.%20Collect%2C%20synthesize%2C%20and%20publish%20the%20following%20data%20in%20accessible%20formats%3A%20Critical%20incidents%3B%20Use%20of%20force%3B%20Complaints%20of%20misconduct%20by%20police%20officers%3B%20Stops%2C%20searches%2C%20and%20arrests%3B%20Profiling%20or%20discriminatory%20policing%20policies%3B%20Hate%20crimes%20and%20hate%20incidents.%0D%0A%0D%0AIn%20Fremont%2C%20a%20Black%20person%20is%2012.9%20times%20as%20likely%20to%20have%20deadly%20force%20used%20on%20them%20than%20a%20white%20person.%20Does%20the%20city%20of%20Fremont%20want%20to%20be%20contributing%20to%20the%20nationwide%20injustice%20against%20Black%20people%20in%20America%20or%20do%20we%20want%20to%20be%20setting%20an%20example%20in%20department%20reformation%3F%20I%20commend%20you%20on%20your%20willingness%20to%20take%20short-term%20action%20but%20it%20is%20time%20we%20implement%20policies%20that%20will%20have%20a%20lasting%20impact.%0D%0A%0D%0AWhich%20side%20of%20history%20do%20you%20want%20to%20be%20on%3F%20As%20the%20Chief%20of%20the%20Fremont%20Police%20Department%2C%20you%20are%20accountable%20for%20those%20you%20lead%20and%20therefore%20the%20choice%20is%20yours.%0D%0A%0D%0ASincerely%2C%0D%0A${name}`
            },
            DEFUNDOPD: {
                web: `Hello,\n\n      My name is ${name} and I am a resident of ${region}. This year, city council officials are expecting a budget deficit of $122 million due to Covid-19. The Oakland Police Department makes up 44% of the city's budget, more than the budgets of Human Services, Affordable Housing, and Race and Equity COMBINED. In light of recent police violence, as well as documented cases of OPD abuse and racial profiling, I urge you to advocate for a mid-budget review that reduces funding to OPD. I would like to redirect funding away from OPD and into health, housing, education, and social services that support vulnerable residents and residents of color, especially lower-income black residents. I would also urge you in your future voting patterns to advocate for an eventual abolition of the Oakland Police Department in favor of investing into non-violent social services and investing back into minority communities. \n\n Thank you for your time,\n ${name}`,
                encoded: `mailto:officeofthemayor@oaklandnet.com?bcc=atlarge@oaklandca.gov,dkalb@oaklandca.gov,lsalaverry@oaklandca.gov,nfbas@oaklandca.gov,pdrake@oaklandca.gov,LMcElhaney@oaklandca.gov,district4@oaklandca.gov,Ngallo@oaklandca.gov,District6@oaklandca.gov,lreid@oaklandnet.com&subject=DEFUND%20OPD&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20This%20year%2C%20city%20council%20officials%20are%20expecting%20a%20budget%20deficit%20of%20%24122%20million%20due%20to%20Covid-19.%20The%20Oakland%20Police%20Department%20makes%20up%2044%25%20of%20the%20city's%20budget%2C%20more%20than%20the%20budgets%20of%20Human%20Services%2C%20Affordable%20Housing%2C%20and%20Race%20and%20Equity%20COMBINED.%20In%20light%20of%20recent%20police%20violence%2C%20as%20well%20as%20documented%20cases%20of%20OPD%20abuse%20and%20racial%20profiling%2C%20I%20urge%20you%20to%20advocate%20for%20a%20mid-budget%20review%20that%20reduces%20funding%20to%20OPD.%20I%20would%20like%20to%20redirect%20funding%20away%20from%20OPD%20and%20into%20health%2C%20housing%2C%20education%2C%20and%20social%20services%20that%20support%20vulnerable%20residents%20and%20residents%20of%20color%2C%20especially%20lower-income%20black%20residents.%20I%20would%20also%20urge%20you%20in%20your%20future%20voting%20patterns%20to%20advocate%20for%20an%20eventual%20abolition%20of%20the%20Oakland%20Police%20Department%20in%20favor%20of%20investing%20into%20non-violent%20social%20services%20and%20investing%20back%20into%20minority%20communities.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0Ax${name}`
            },
            DEFUNDNYPD: {
                web: `Dear New York City Council Members,\n\n My name is ${name} and I am a resident of ${region}. Last April, NYC Mayor Bill De Blasio proposed major budget cuts for the Fiscal Year 2021, especially to education and youth programs, while refusing to slash the NYPD budget by any significant margin. \n\n I am emailing today to demand that you vote no on the Mayor’s FY21 proposed budget. Furthermore, I urge you ONLY to vote for a budget that includes AT LEAST $1 billion in cuts to the NYPD with equal reallocation towards social services and education programs, effective at the beginning of FY21, July 1, 2020. \n\n Governor Cuomo has doubled the presence of the NYPD on New York City streets. I am asking that city officials lobby the same amount of attention and effort towards finding sustainable, longterm change. \n\n Thank you, \n ${name}`,
                encoded: `mailto:bdeblasio@cityhall.nyc.gov?bcc=chin@council.nyc.gov,District2@council.nyc.gov,SpeakerJohnson@council.nyc.gov,KPowers@council.nyc.gov,BKallos@BenKallos.com,Helen@HelenRosenthal.com,District7@council.nyc.gov,DAyala@council.nyc.gov,D09perkins@council.nyc.gov,yrodriguez@council.nyc.gov,District11@council.nyc.gov,Andy.King@council.nyc.gov,MGjonaj@council.nyc.gov,fcabrera@council.nyc.gov,Rtorres@council.nyc.gov,District16Bronx@council.nyc.gov,salamanca@council.nyc.gov,RDiaz@council.nyc.gov,district19@council.nyc.gov,pkoo@council.nyc.gov,FMoya@council.nyc.gov,,BGrodenchik@council.nyc.gov,RLancman@council.nyc.gov,dromm@council.nyc.gov,JVanBramer@council.nyc.gov,,Adams@council.nyc.gov,Koslowitz@council.nyc.gov,District30@council.nyc.gov,drichards@council.nyc.gov,eulrich@council.nyc.gov,slevin@council.nyc.gov,areynoso@council.nyc.gov,LCumbo@council.nyc.gov,district36@council.nyc.gov,District37@council.nyc.gov,info38@council.nyc.gov,lander@council.nyc.gov,meugene@council.nyc.gov,District41@council.nyc.gov,,AskJB@council.nyc.gov,AskKalman@council.nyc.gov,District45@council.nyc.gov,AMaisel@council.nyc.gov,MTreyger@council.nyc.gov,cdeutsch@council.nyc.gov,DROSE@Council.nyc.gov,SMatteo@council.nyc.gov,borelli@council.nyc.gov&?subject=DEFUND%20NYPD&body=Dear%20New%20York%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20Last%20April%2C%20NYC%20Mayor%20Bill%20De%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20Fiscal%20Year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%0D%0A%0D%0AI%20am%20emailing%20today%20to%20demand%20that%20you%20vote%20no%20on%20the%20Mayor%E2%80%99s%20FY21%20proposed%20budget.%20Furthermore%2C%20I%20urge%20you%20ONLY%20to%20vote%20for%20a%20budget%20that%20includes%20AT%20LEAST%20%241%20billion%20in%20cuts%20to%20the%20NYPD%20with%20equal%20reallocation%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY21%2C%20July%201%2C%202020.%0D%0A%0D%0AGovernor%20Cuomo%20has%20doubled%20the%20presence%20of%20the%20NYPD%20on%20New%20York%20City%20streets.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20sustainable%2C%20longterm%20change.%0D%0A%0D%0AThank%20you%2C%0D%0A${name}`
            },
            DEFUNDBUFFALOPD: {
                web: `To the Buffalo Common Council and Office of Mayor Byron Brown,\n\nMy name is ${name} and I am a resident of ${region}. I am imploring you to meaningfully restrict the Buffalo Police Department’s $121.9 million dollar budget immediately. On June 5, Buffalo Police officers pushed a non-violent 75 year old man to the ground while he was exercising his first amendment rights. In case you have not seen the footage, it is linked below.\n\nI am calling for these officers to be removed from service, effective immediately. I am calling for Mayor Brown and the Buffalo Common Council to have an emergency meeting regarding this matter. I am asking that an action plan for sustainable, long-term change is created and upheld.\n\nRecreational programming for the elderly is budgeted at $1M, while the net budget for youth programs is $401K. Buffalo has the nation’s fourth worst poverty rate for children, with almost one half of children in Buffalo living in poverty. The police were allocated 30,000% more funding than our city’s youth in the 2019-20 city budget.\n\nIn one of this country’s poorest cities, the majority of taxpayer dollars are funding a police department that has had 15 cases of alleged police brutality or excessive force since 2006. Of those 15 victims, 13 of them, or 86%, were people of color. An outline of these cases are included as a post-script to this email, alongside my sources.\n\nThis is unacceptable, and I am calling on the Buffalo Common Council, Buffalo Police Commissioner, and Mayor Byron Brown to reduce the Buffalo Police department’s budget, and re-allocate police funding to invest in our community–as a start. Improving our educational system, local opportunities for economic growth, and programs that fight hunger and housing are proven to be more effective than police presence in improving community safety and wellness.\n\nHow will you show up for a city in desperate need of help? Spending $121.9 million dollars on the Buffalo Police is not the solution.\n\nSincerely, ${name}\n\nPS: Their names are Quentin Suttles. Wilson Morales. A former Erie County Sheriff’s Deputy assaulted someone at a tailgate party and was found guilty of falsifying records. Pito Rivera. Devin Ford. Troy Hodge. Marcus Neal. Shaun Porter was brutally beaten while an inmate in handcuffs while officers Joshua Craig and Anthony D’Agostino watched and laughed. Shaun was given a $300,000 settlement by you, the Common Council. Four Black teenagers were assaulted by Gregory Kwaiatkowski and called “savage dogs.” Kwaiatowski also choked David N. Mack in 2006. Kwaiatkowski was sentenced to four months in prison in 2018 for pleading guilty in December 2016 to a civil rights violation dating back to 2009. Timothy Stanton, Jr. Jose Hernandez-Rossy (at a traffic stop). Wardel “Meech” Davis, who died in police custody. National Air Guardsman William Sager who was handcuffed while unconscious and later died. John T. Willet, a Black man, was kicked and slapped while handcuffed on the ground by Buffalo Police officer John Cirulli, who was sentenced to a year of probation. Cirulli resigned and pleaded guilty to two federal misdemeanor civil rights violations earlier in 2014.\n\nSources – https://www.cnn.com/2020/06/05/us/buffalo-police-suspension-shoving-man-trnd/index.html https://www.bizjournals.com/buffalo/news/2019/01/15/buffalo-posts-the-nations-fourth-worst-poverty.html https://buffalonews.com/2020/01/01/lagging-in-2020-buffalo-needs-to-close-gaps-to-prosper-by-2030/ https://www.wkbw.com/news/i-team/15-cases-of-alleged-police-brutality-excessive-force-in-wny-since-2006 https://www.joincampaignzero.org/`,
                encoded: `mailto:mayor@city-buffalo.com,jferoleto@city-buffalo.com,dpridgen@city-buffalo.com,dfranczyk@city-buffalo.com,rfontana@city-buffalo.com,uwingo@city-buffalo.com,darivera@city-buffalo.com,jgolombek@city-buffalo.com,cscanlon@city-buffalo.com,rwyatt@city-buffalo.com?subject=DEFUND%20THE%20BUFFALO%20PD&body=To%20the%20Buffalo%20Common%20Council%20and%20Office%20of%20Mayor%20Byron%20Brown%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20am%20imploring%20you%20to%20meaningfully%20restrict%20the%20Buffalo%20Police%20Department%E2%80%99s%20%24121.9%20million%20dollar%20budget%20immediately.%20On%20June%205%2C%20Buffalo%20Police%20officers%20pushed%20a%20non-violent%2075%20year%20old%20man%20to%20the%20ground%20while%20he%20was%20exercising%20his%20first%20amendment%20rights.%20In%20case%20you%20have%20not%20seen%20the%20footage%2C%20it%20is%20linked%20below.%0D%0A%0D%0AI%20am%20calling%20for%20these%20officers%20to%20be%20removed%20from%20service%2C%20effective%20immediately.%20I%20am%20calling%20for%20Mayor%20Brown%20and%20the%20Buffalo%20Common%20Council%20to%20have%20an%20emergency%20meeting%20regarding%20this%20matter.%20I%20am%20asking%20that%20an%20action%20plan%20for%20sustainable%2C%20long-term%20change%20is%20created%20and%20upheld.%0D%0A%0D%0ARecreational%20programming%20for%20the%20elderly%20is%20budgeted%20at%20%241M%2C%20while%20the%20net%20budget%20for%20youth%20programs%20is%20%24401K.%20Buffalo%20has%20the%20nation%E2%80%99s%20fourth%20worst%20poverty%20rate%20for%20children%2C%20with%20almost%20one%20half%20of%20children%20in%20Buffalo%20living%20in%20poverty.%20The%20police%20were%20allocated%2030%2C000%25%20more%20funding%20than%20our%20city%E2%80%99s%20youth%20in%20the%202019-20%20city%20budget.%0D%0A%0D%0AIn%20one%20of%20this%20country%E2%80%99s%20poorest%20cities%2C%20the%20majority%20of%20taxpayer%20dollars%20are%20funding%20a%20police%20department%20that%20has%20had%2015%20cases%20of%20alleged%20police%20brutality%20or%20excessive%20force%20since%202006.%20Of%20those%2015%20victims%2C%2013%20of%20them%2C%20or%2086%25%2C%20were%20people%20of%20color.%20An%20outline%20of%20these%20cases%20are%20included%20as%20a%20post-script%20to%20this%20email%2C%20alongside%20my%20sources.%0D%0A%0D%0AThis%20is%20unacceptable%2C%20and%20I%20am%20calling%20on%20the%20Buffalo%20Common%20Council%2C%20Buffalo%20Police%20Commissioner%2C%20and%20Mayor%20Byron%20Brown%20to%20reduce%20the%20Buffalo%20Police%20department%E2%80%99s%20budget%2C%20and%20re-allocate%20police%20funding%20to%20invest%20in%20our%20community%E2%80%93as%20a%20start.%20Improving%20our%20educational%20system%2C%20local%20opportunities%20for%20economic%20growth%2C%20and%20programs%20that%20fight%20hunger%20and%20housing%20are%20proven%20to%20be%20more%20effective%20than%20police%20presence%20in%20improving%20community%20safety%20and%20wellness.%0D%0A%0D%0AHow%20will%20you%20show%20up%20for%20a%20city%20in%20desperate%20need%20of%20help%3F%20Spending%20%24121.9%20million%20dollars%20on%20the%20Buffalo%20Police%20is%20not%20the%20solution.%0D%0A%0D%0ASincerely%2C%20${name}%0D%0A%0D%0APS%3A%20Their%20names%20are%20Quentin%20Suttles.%20Wilson%20Morales.%20A%20former%20Erie%20County%20Sheriff%E2%80%99s%20Deputy%20assaulted%20someone%20at%20a%20tailgate%20party%20and%20was%20found%20guilty%20of%20falsifying%20records.%20Pito%20Rivera.%20Devin%20Ford.%20Troy%20Hodge.%20Marcus%20Neal.%20Shaun%20Porter%20was%20brutally%20beaten%20while%20an%20inmate%20in%20handcuffs%20while%20officers%20Joshua%20Craig%20and%20Anthony%20D%E2%80%99Agostino%20watched%20and%20laughed.%20Shaun%20was%20given%20a%20%24300%2C000%20settlement%20by%20you%2C%20the%20Common%20Council.%20Four%20Black%20teenagers%20were%20assaulted%20by%20Gregory%20Kwaiatkowski%20and%20called%20%E2%80%9Csavage%20dogs.%E2%80%9D%20Kwaiatowski%20also%20choked%20David%20N.%20Mack%20in%202006.%20Kwaiatkowski%20was%20sentenced%20to%20four%20months%20in%20prison%20in%202018%20for%20pleading%20guilty%20in%20December%202016%20to%20a%20civil%20rights%20violation%20dating%20back%20to%202009.%20Timothy%20Stanton%2C%20Jr.%20Jose%20Hernandez-Rossy%20(at%20a%20traffic%20stop).%20Wardel%20%E2%80%9CMeech%E2%80%9D%20Davis%2C%20who%20died%20in%20police%20custody.%20National%20Air%20Guardsman%20William%20Sager%20who%20was%20handcuffed%20while%20unconscious%20and%20later%20died.%20John%20T.%20Willet%2C%20a%20Black%20man%2C%20was%20kicked%20and%20slapped%20while%20handcuffed%20on%20the%20ground%20by%20Buffalo%20Police%20officer%20John%20Cirulli%2C%20who%20was%20sentenced%20to%20a%20year%20of%20probation.%20Cirulli%20resigned%20and%20pleaded%20guilty%20to%20two%20federal%20misdemeanor%20civil%20rights%20violations%20earlier%20in%202014.%0D%0A%0D%0ASources%20%E2%80%93%20https%3A%2F%2Fwww.cnn.com%2F2020%2F06%2F05%2Fus%2Fbuffalo-police-suspension-shoving-man-trnd%2Findex.html%20https%3A%2F%2Fwww.bizjournals.com%2Fbuffalo%2Fnews%2F2019%2F01%2F15%2Fbuffalo-posts-the-nations-fourth-worst-poverty.html%20https%3A%2F%2Fbuffalonews.com%2F2020%2F01%2F01%2Flagging-in-2020-buffalo-needs-to-close-gaps-to-prosper-by-2030%2F%20https%3A%2F%2Fwww.wkbw.com%2Fnews%2Fi-team%2F15-cases-of-alleged-police-brutality-excessive-force-in-wny-since-2006%20https%3A%2F%2Fwww.joincampaignzero.org%2F`
            },
            DEFUNDBIRMINGHAMPD: {
                web: `Dear Birmingham City Council, staff, and Executive departments,\n\nMy name is ${name} and I am a resident of ${region}. I urge you and the rest of the city council to amend the future budget for 2021 and all future budgets. I would like to redirect money away from BPD and into social service programs that will benefit public health and our own communities, especially communities of color. The recently passed budget for 2020 suggests that the largest fraction of the city’s budget should go to policing ($92,775,797), which is over 30% larger than even the second largest allocation of funds, fire ($67,814,889).\n\nBirmingham is planning to spend $19,959,925 on Education, Transportation, Housing for Mentally Ill, Youth Programs, City Owned Arts/Recreation Centers, Emergency Medical System, and Social Services. Birmingham is planning to spend 4.65 times more on the police than on social programs to better the future of this city. This planned spending is not consistent with the stated values of the city: Safe, Secure, and Sustainable Communities; Healthy, Thriving, and Diverse Neighborhoods; High-Performing 21st Century Education and Workforce Development Systems; etc. If this is truly representative of the council’s thoughts on how funds should be allocated in a city in which over 1,000 of my neighbors (Birmingham + Jefferson County) are currently experiencing homelessness and in which nearly 59,000 of my neighbors (downtown Birmingham) are impoverished and at risk of becoming homeless, I am ashamed to call Birmingham my home and I am ashamed to call you my elected officials.\n\n“Crime” is not random. “Crime” usually happens when someone has been unable to meet their basic needs. More jobs, more educational opportunities, more arts programs, more community centers, more mental health resources, as well as more of a say in how our own communities function, have proven to be much more effective at promoting community safety than policing. This is a long transition process but change starts with reallocating this funding!\n\nWe don’t need a militarized police force. We need to create a space in which more mental health service providers, social workers, victim/survivor advocates, religious leaders, neighbors, and friends - all of the people who really make up our community - can look out for one another. Mayor Woodfin, Council Members, will you look out for me, and will you look out for us?\n\nThank you, ${name}`,
                encoded: `mailto:bhamcitycouncil@gmail.com,BPDSuggestions@birminghamal.gov,Cedric.Sparks@birminghamal.gov,ed.fields@birminghamal.gov,Kevin.Moore@birminghamal.gov,nicole.king@birminghamal.gov,kelvin.datcher@birminghamal.gov,sylvia.bowen@birminghamal.gov,rick.journey@birminghamal.gov,chanda.temple@birminghamal.gov,justice@birminghamal.gov,lester.smith@birminghamal.gov,barbara.mcgrue@birminghamal.gov,aaron.saxton@birminghamal.gov,peace@birminghamal.gov,clinton.woods@birminghamal.gov,hunter.williams@birminghamal.gov,valerie.abbott@birminghamal.gov,william.parker@birminghamal.gov,darrell.oquinn@birminghamal.gov,crystal.smitherman@birminghamal.gov,wardine.alexander@birminghamal.gov,steven.hoyt@birminghamal.gov,john.hilliard@birminghamal.gov?subject=DEFUND%20THE%20Birmingham%20PD&body=Dear%20Birmingham%20City%20Council%2C%20staff%2C%20and%20Executive%20departments%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20urge%20you%20and%20the%20rest%20of%20the%20city%20council%20to%20amend%20the%20future%20budget%20for%202021%20and%20all%20future%20budgets.%20I%20would%20like%20to%20redirect%20money%20away%20from%20BPD%20and%20into%20social%20service%20programs%20that%20will%20benefit%20public%20health%20and%20our%20own%20communities%2C%20especially%20communities%20of%20color.%20The%20recently%20passed%20budget%20for%202020%20suggests%20that%20the%20largest%20fraction%20of%20the%20city%E2%80%99s%20budget%20should%20go%20to%20policing%20(%2492%2C775%2C797)%2C%20which%20is%20over%2030%25%20larger%20than%20even%20the%20second%20largest%20allocation%20of%20funds%2C%20fire%20(%2467%2C814%2C889).%0D%0A%0D%0ABirmingham%20is%20planning%20to%20spend%20%2419%2C959%2C925%20on%20Education%2C%20Transportation%2C%20Housing%20for%20Mentally%20Ill%2C%20Youth%20Programs%2C%20City%20Owned%20Arts%2FRecreation%20Centers%2C%20Emergency%20Medical%20System%2C%20and%20Social%20Services.%20Birmingham%20is%20planning%20to%20spend%204.65%20times%20more%20on%20the%20police%20than%20on%20social%20programs%20to%20better%20the%20future%20of%20this%20city.%20This%20planned%20spending%20is%20not%20consistent%20with%20the%20stated%20values%20of%20the%20city%3A%20Safe%2C%20Secure%2C%20and%20Sustainable%20Communities%3B%20Healthy%2C%20Thriving%2C%20and%20Diverse%20Neighborhoods%3B%20High-Performing%2021st%20Century%20Education%20and%20Workforce%20Development%20Systems%3B%20etc.%20If%20this%20is%20truly%20representative%20of%20the%20council%E2%80%99s%20thoughts%20on%20how%20funds%20should%20be%20allocated%20in%20a%20city%20in%20which%20over%201%2C000%20of%20my%20neighbors%20(Birmingham%20%2B%20Jefferson%20County)%20are%20currently%20experiencing%20homelessness%20and%20in%20which%20nearly%2059%2C000%20of%20my%20neighbors%20(downtown%20Birmingham)%20are%20impoverished%20and%20at%20risk%20of%20becoming%20homeless%2C%20I%20am%20ashamed%20to%20call%20Birmingham%20my%20home%20and%20I%20am%20ashamed%20to%20call%20you%20my%20elected%20officials.%0D%0A%0D%0A%E2%80%9CCrime%E2%80%9D%20is%20not%20random.%20%E2%80%9CCrime%E2%80%9D%20usually%20happens%20when%20someone%20has%20been%20unable%20to%20meet%20their%20basic%20needs.%20More%20jobs%2C%20more%20educational%20opportunities%2C%20more%20arts%20programs%2C%20more%20community%20centers%2C%20more%20mental%20health%20resources%2C%20as%20well%20as%20more%20of%20a%20say%20in%20how%20our%20own%20communities%20function%2C%20have%20proven%20to%20be%20much%20more%20effective%20at%20promoting%20community%20safety%20than%20policing.%20This%20is%20a%20long%20transition%20process%20but%20change%20starts%20with%20reallocating%20this%20funding!%0D%0A%0D%0AWe%20don%E2%80%99t%20need%20a%20militarized%20police%20force.%20We%20need%20to%20create%20a%20space%20in%20which%20more%20mental%20health%20service%20providers%2C%20social%20workers%2C%20victim%2Fsurvivor%20advocates%2C%20religious%20leaders%2C%20neighbors%2C%20and%20friends%20-%20all%20of%20the%20people%20who%20really%20make%20up%20our%20community%20-%20can%20look%20out%20for%20one%20another.%20Mayor%20Woodfin%2C%20Council%20Members%2C%20will%20you%20look%20out%20for%20me%2C%20and%20will%20you%20look%20out%20for%20us%3F%0D%0A%0D%0AThank%20you%2C%20${name}`
            },
            DEFUNDAUSTINPD: {
                web: `Dear City Council Members,\n\nMy name is ${name}, and I am a resident of ${region}. I am outraged at the excessive use of force that APD used against protesters this weekend. Using police brutality against people peacefully protesting police brutality is, at the very least, a bad look and, to be honest, is proof that these protests are necessary. A sixteen year old Chicano boy was shot while standing away from the main crowd of protestors, and a twenty year old Black man was shot in the head and remains in critical condition. A pregnant Black woman was shot in her stomach and back with “non-lethal” rounds by APD. The use of tear gas (prohibited for use in WARFARE by many international treaties) and rubber bullets (not meant to be shot point blank, but has been) against unarmed protesters is absolutely unacceptable.\n\nFollowing the murder of Mike Ramos and the recent city report that found a culture of misogyny and racism at APD, I am calling on you to seriously reduce city funding to APD and to implement immediate reform. There is no reason that over ⅓ of Austin’s budget should be allocated to the police. In the middle of a pandemic and a recession, we should be using our city’s budget to fund affordable housing and public health rather than a violent police department that is, quite frankly, upholding policies and practices that allow white supremacy to take Black lives every single day. Thank you for your work to serve our city.\n\nSincerely,\n${name}`,
                encoded: `mailto:steve.adler@austintexas.gov,Natasha.Madison@austintexas.gov,Delia.Garza@austintexas.gov,Sabino.Renteria@austintexas.gov,Greg.Casar@austintexas.gov,Ann.Kitchen@austintexas.gov,jimmy.flannigan@austintexas.gov,Leslie.Pool@austintexas.gov,Paige.Ellis@austintexas.gov,Kathie.Tovo@austintexas.gov,Alison.Alter@austintexas.gov?subject=DISBAND%20AND%20DEFUND%20THE%20AUSTIN%20PD&body=Dear%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}%2C%20and%20I%20am%20a%20resident%20of%20${region}.%20I%20am%20outraged%20at%20the%20excessive%20use%20of%20force%20that%20APD%20used%20against%20protesters%20this%20weekend.%20Using%20police%20brutality%20against%20people%20peacefully%20protesting%20police%20brutality%20is%2C%20at%20the%20very%20least%2C%20a%20bad%20look%20and%2C%20to%20be%20honest%2C%20is%20proof%20that%20these%20protests%20are%20necessary.%20A%20sixteen%20year%20old%20Chicano%20boy%20was%20shot%20while%20standing%20away%20from%20the%20main%20crowd%20of%20protestors%2C%20and%20a%20twenty%20year%20old%20Black%20man%20was%20shot%20in%20the%20head%20and%20remains%20in%20critical%20condition.%20A%20pregnant%20Black%20woman%20was%20shot%20in%20her%20stomach%20and%20back%20with%20%E2%80%9Cnon-lethal%E2%80%9D%20rounds%20by%20APD.%20The%20use%20of%20tear%20gas%20(prohibited%20for%20use%20in%20WARFARE%20by%20many%20international%20treaties)%20and%20rubber%20bullets%20(not%20meant%20to%20be%20shot%20point%20blank%2C%20but%20has%20been)%20against%20unarmed%20protesters%20is%20absolutely%20unacceptable.%0D%0A%0D%0AFollowing%20the%20murder%20of%20Mike%20Ramos%20and%20the%20recent%20city%20report%20that%20found%20a%20culture%20of%20misogyny%20and%20racism%20at%20APD%2C%20I%20am%20calling%20on%20you%20to%20seriously%20reduce%20city%20funding%20to%20APD%20and%20to%20implement%20immediate%20reform.%20There%20is%20no%20reason%20that%20over%20%E2%85%93%20of%20Austin%E2%80%99s%20budget%20should%20be%20allocated%20to%20the%20police.%20In%20the%20middle%20of%20a%20pandemic%20and%20a%20recession%2C%20we%20should%20be%20using%20our%20city%E2%80%99s%20budget%20to%20fund%20affordable%20housing%20and%20public%20health%20rather%20than%20a%20violent%20police%20department%20that%20is%2C%20quite%20frankly%2C%20upholding%20policies%20and%20practices%20that%20allow%20white%20supremacy%20to%20take%20Black%20lives%20every%20single%20day.%20Thank%20you%20for%20your%20work%20to%20serve%20our%20city.%0D%0A%0D%0ASincerely%2C%0D%0A${name}`
            },
            DEFUNDPORTLANDPD: {
                web: `Hi my name is ${name}. I am a resident of ${region}.\n\nIn May, Mayor Ted Wheeler released his proposed budget for the City of Portland. This included a policing budget of $245,169,804, which is over $5 million more than budgeted last year—even amongst city-wide cuts to other departments due to Covid-19. The Portland Police Bureau (PPB), with Wheeler at its helm as Commissioner, has been mired in controversy over the last year with collusion with prominent white nationalist groups, shootings of Black people and people perceived to be in mental health crisis, data uncovered on their racist gang enforcement traffic stops, and the fact that a shameful 52% of people arrested are houseless.\n\nI oppose any increases to the PPB budget. Mayor Wheeler’s 2019-20 proposed budget was increased by an additional half million dollars before adoption, and even then the PPB has overspent the increased budget by 1.4 million to date. We anticipate that PPB will attempt a similar increase this year, pushing their budget even higher than the proposed $245 million, thus we stand even more firmly against this increase.\n\nAdditionally and critically, Wheeler’s budget ELIMINATES $1.8 million to fund the police body camera program. More money for policing but less money for police accountability is completely unacceptable.\n\nThe police budget increases regularly while other services are cut. I can see the ways in which policing continues to perpetuate violence against Black, brown, houseless people, and against people in mental health crisis. While Wheeler’s proposal represents a slight decrease from the PPB proposal, the PPB is a department whose reach into Portland communities needs to be curtailed through reducing the budget, not by increasing it.\n\nMore money for policing but less money for police accountability is completely unacceptable at this moment in history. The city, the state, and country are all watching. And so am I. I call on the Mayor, the Commissioners, and all other City Council Members to use their powers to continue to reduce the budget and pledge to increase Police accountability and transparency. I promise that you will lose my support and my vote if you aren’t willing to make a public and vocal stand to help defund the PPB and increase their accountability and transparency.\n\nThank you for your time, ${name}`,
                encoded: `mailto:mayorwheeler@portlandoregon.gov,Amanda@portlandoregon.gov,chloe@portlandoregon.gov,joann@portlandoregon.gov,AuditorHullCaballero@portlandoregon.gov,ipr@portlandoregon.gov,Ombudsman@portlandoregon.gov,ppbpio@portlandoregon.gov,sonia.schmanski@portlandoregon.gov,Toni.Anderson@portlandoregon.gov,Andrew.Bryans@portlandoregon.gov?subject=DEFUND%20THE%20PORTLAND%20PD&body=Hi%20my%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${region}.%0D%0A%0D%0AIn%20May%2C%20Mayor%20Ted%20Wheeler%20released%20his%20proposed%20budget%20for%20the%20City%20of%20Portland.%20This%20included%20a%20policing%20budget%20of%20%24245%2C169%2C804%2C%20which%20is%20over%20%245%20million%20more%20than%20budgeted%20last%20year%E2%80%94even%20amongst%20city-wide%20cuts%20to%20other%20departments%20due%20to%20Covid-19.%20The%20Portland%20Police%20Bureau%20(PPB)%2C%20with%20Wheeler%20at%20its%20helm%20as%20Commissioner%2C%20has%20been%20mired%20in%20controversy%20over%20the%20last%20year%20with%20collusion%20with%20prominent%20white%20nationalist%20groups%2C%20shootings%20of%20Black%20people%20and%20people%20perceived%20to%20be%20in%20mental%20health%20crisis%2C%20data%20uncovered%20on%20their%20racist%20gang%20enforcement%20traffic%20stops%2C%20and%20the%20fact%20that%20a%20shameful%2052%25%20of%20people%20arrested%20are%20houseless.%0D%0A%0D%0AI%20oppose%20any%20increases%20to%20the%20PPB%20budget.%20Mayor%20Wheeler%E2%80%99s%202019-20%20proposed%20budget%20was%20increased%20by%20an%20additional%20half%20million%20dollars%20before%20adoption%2C%20and%20even%20then%20the%20PPB%20has%20overspent%20the%20increased%20budget%20by%201.4%20million%20to%20date.%20We%20anticipate%20that%20PPB%20will%20attempt%20a%20similar%20increase%20this%20year%2C%20pushing%20their%20budget%20even%20higher%20than%20the%20proposed%20%24245%20million%2C%20thus%20we%20stand%20even%20more%20firmly%20against%20this%20increase.%0D%0A%0D%0AAdditionally%20and%20critically%2C%20Wheeler%E2%80%99s%20budget%20ELIMINATES%20%241.8%20million%20to%20fund%20the%20police%20body%20camera%20program.%20More%20money%20for%20policing%20but%20less%20money%20for%20police%20accountability%20is%20completely%20unacceptable.%0D%0A%0D%0AThe%20police%20budget%20increases%20regularly%20while%20other%20services%20are%20cut.%20I%20can%20see%20the%20ways%20in%20which%20policing%20continues%20to%20perpetuate%20violence%20against%20Black%2C%20brown%2C%20houseless%20people%2C%20and%20against%20people%20in%20mental%20health%20crisis.%20While%20Wheeler%E2%80%99s%20proposal%20represents%20a%20slight%20decrease%20from%20the%20PPB%20proposal%2C%20the%20PPB%20is%20a%20department%20whose%20reach%20into%20Portland%20communities%20needs%20to%20be%20curtailed%20through%20reducing%20the%20budget%2C%20not%20by%20increasing%20it.%0D%0A%0D%0AMore%20money%20for%20policing%20but%20less%20money%20for%20police%20accountability%20is%20completely%20unacceptable%20at%20this%20moment%20in%20history.%20The%20city%2C%20the%20state%2C%20and%20country%20are%20all%20watching.%20And%20so%20am%20I.%20I%20call%20on%20the%20Mayor%2C%20the%20Commissioners%2C%20and%20all%20other%20City%20Council%20Members%20to%20use%20their%20powers%20to%20continue%20to%20reduce%20the%20budget%20and%20pledge%20to%20increase%20Police%20accountability%20and%20transparency.%20I%20promise%20that%20you%20will%20lose%20my%20support%20and%20my%20vote%20if%20you%20aren%E2%80%99t%20willing%20to%20make%20a%20public%20and%20vocal%20stand%20to%20help%20defund%20the%20PPB%20and%20increase%20their%20accountability%20and%20transparency.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%20${name}`
            }
        }
        return templates[emailKey];
    },
    templateKeys: {
        defaultKey: "DEFUNDBIRMINGHAMPD",
        states: [
            { 
                state: "AL",
                keys: [
                    { key: "DEFUNDBIRMINGHAMPD", text: "Defund the Birminham PD" }
                ] },
            // { state: "AK", keys: [] },
            // { state:"AS", keys: [] },
            // { state:"AZ", keys: [] },
            // { state:"AR", keys: [] },
            {
                state: "CA",
                keys: [
                    { key: "DEFUNDSFPD", text: "Defund the SFPD", type: "key" },
                    { key: "DEFUNDSJPD", text: "Defund the SJPD", type: "key" },
                    { key: "DEFUNDFREMONTPD", text: "Defund the Fremont PD", type: "key" },
                    { key: "DEFUNDLAPD", text: "Defund the LAPD", type: "key" },
                    { key: "DEFUNDOPD", text: "Defund the Oakland PD", type: "key" },
                ]
            },
            // { state: "CO", keys: [] },
            // { state: "CT", keys: [] },
            // { state: "DE", keys: [] },
            // { state: "DC", keys: [] },
            // { state: "FL", keys: [] },
            // { state: "GU", keys: [] },
            // { state: "GA", keys: [] },
            // { state: "HI", keys: [] },
            // { state: "ID", keys: [] },
            // { state: "IL", keys: [] },
            // { state: "IN", keys: [] },
            // { state: "IA", keys: [] },
            // { state: "KS", keys: [] },
            // { state: "KY", keys: [] },
            // { state: "LA", keys: [] },
            // { state: "ME", keys: [] },
            // { state: "MD", keys: [] },
            // { state: "MA", keys: [] },
            // { state: "MI", keys: [] },
            // { state: "MN", keys: [] },
            // { state: "MS", keys: [] },
            // { state: "MO", keys: [] },
            // { state: "MT", keys: [] },
            // { state: "NE", keys: [] },
            // { state: "NV", keys: [] },
            // { state: "NH", keys: [] },
            // { state: "NJ", keys: [] },
            // { state: "NM", keys: [] },
            {
                state: "NY",
                keys: [{ key: "DEFUNDNYPD", text: "Defund the NYPD", type: "key" }, { key: "DEFUNDBUFFALOPD", text: "Defund the Buffalo PD", type: "key" }]
            },
            // { state: "NC", keys: [] },
            // { state: "ND", keys: [] },
            // { state: "MP", keys: [] },
            // { state: "OH", keys: [] },
            // { state: "OK", keys: [] },
            { 
                state: "OR",
                keys: [
                    {
                        key: "DEFUNDPORTLANDPD",
                        text: "Defund the Portland PD"
                    }
                ]
            },
            // { state: "PA", keys: [] },
            // { state: "PR", keys: [] },
            // { state: "RI", keys: [] },
            // { state: "SC", keys: [] },
            // { state: "SD", keys: [] },
            // { state: "TN", keys: [] },
            { 
                state: "TX",
                keys: [
                    {key: "DEFUNDAUSTINPD", text: "Defund Austin PD"}
                ]
            },
            // { state: "VI", keys: [] },
            // { state: "UT", keys: [] },
            // { state: "VT", keys: [] },
            // { state: "VA", keys: [] },
            {
                state: "WA",
                keys: [{ key: "DEFUNDSEATTLEPD", text: "Defund the Seattle PD", type: "key" }]
            }
            // ,
            // { state:"WV", keys: [] },
            // { state:"WI", keys: [] },
            // { state:"WY", keys: [] }
        ]
    },
    voteKeys: {
        AL: "https://www.alabamainteractive.org/sos/voter_registration/voterRegistrationWelcome.action",
        AK: "https://voterregistration.alaska.gov/",
        AS: "https://aselectionoffice.gov//",
        AZ: "https://servicearizona.com/VoterRegistration/selectLanguage",
        AR: "https://www.sos.arkansas.gov/elections/voter-information/",
        CA: "https://registertovote.ca.gov/",
        CO: "https://www.sos.state.co.us/pubs/elections/vote/VoterHomeMobile.htm",
        CT: "https://voterregistration.ct.gov/OLVR/welcome.do",
        DE: "https://ivote.de.gov/voterview/",
        DC: "https://www.vote4dc.com/ApplyInstructions/Register",
        FL: "https://registertovoteflorida.gov/eligibilityreactive",
        GU: "https://gec.guam.gov/",
        GA: "https://registertovote.sos.ga.gov/GAOLVR/welcome.do#no-back-button",
        HI: "https://olvr.hawaii.gov/",
        ID: "https://www.vote.org/register-to-vote/idaho/",
        IL: "https://ova.elections.il.gov/",
        IN: "https://indianavoters.in.gov/",
        IA: "https://mymvd.iowadot.gov/Account/Login?ReturnUrl=%2fVoterRegistration&",
        KS: "https://www.kdor.ks.gov/Apps/VoterReg/Default.aspx",
        KY: "https://vrsws.sos.ky.gov/ovrweb/",
        LA: "https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx?Referrer=https://vote.gov/register/la/",
        ME: "https://www.maine.gov/sos/cec/elec/voter-info/voterguide.html",
        MD: "https://voterservices.elections.maryland.gov/OnlineVoterRegistration/InstructionsStep1",
        MA: "https://www.sec.state.ma.us/ovr/",
        MI: "https://mvic.sos.state.mi.us/registervoter",
        MN: "https://mnvotes.sos.state.mn.us/VoterRegistration/VoterRegistrationMain.aspx",
        MS: "https://www.sos.ms.gov/Vote/Pages/default.aspx",
        MO: "https://s1.sos.mo.gov/elections/voterregistration/",
        MT: "https://sosmt.gov/elections/vote/",
        NE: "https://www.nebraska.gov/apps-sos-voter-registration/",
        NV: "https://www.nvsos.gov/SOSVoterServices/start.aspx",
        NH: "http://sos.nh.gov/Elections.aspx",
        NJ: "https://nj.gov/state/elections/voter-registration.shtml",
        NM: "https://portal.sos.state.nm.us/OVR/WebPages/InstructionsStep1.aspx&AspxAutoDetectCookieSupport=1",
        NY: "https://dmv.ny.gov/more-info/electronic-voter-registration-application",
        NC: "https://www.ncdot.gov/dmv/offices-services/online/Pages/voter-registration-application.aspx",
        ND: "https://vip.sos.nd.gov/PortalList.aspx",
        MP: "https://www.votecnmi.gov.mp/",
        OH: "https://olvr.ohiosos.gov/",
        OK: "https://www.ok.gov/elections/Voter_Info/Register_to_Vote/index.html",
        OR: "https://secure.sos.state.or.us/orestar/vr/register.do",
        PA: "https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx",
        PR: "http://ww2.ceepur.org/es-pr/Paginas/cee-english.aspx",
        RI: "https://vote.sos.ri.gov/Home/RegistertoVote",
        SC: "https://info.scvotes.sc.gov/eng/ovr/start.aspx",
        SD: "https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx",
        TN: "https://ovr.govote.tn.gov/",
        TX: "https://www.votetexas.gov/register-to-vote/index.html",
        VI: "https://www.vivote.gov/voters/register-vote",
        UT: "https://secure.utah.gov/voterreg/index.html",
        VT: "https://olvr.vermont.gov/",
        VA: "https://www.elections.virginia.gov/citizen-portal/",
        WA: "https://voter.votewa.gov/WhereToVote.aspx",
        WV: "https://ovr.sos.wv.gov/Register/Landing",
        WI: "https://myvote.wi.gov/en-us/RegisterToVote/ref/voteusa",
        WY: "https://sos.wyo.gov/Elections/State/RegisteringToVote.aspx"
    },
    readingList: [
        {
            sectionTitle: "Articles to read",
            sectionMessage: "Articles about racism, the history of racism, and how to be anti-racist.",
            titles: [
                {
                    title: "America’s Racial Contract Is Killing Us",
                    briefSummary: "By Adam Serwer | Atlantic (May 8, 2020)",
                    link: "https://www.theatlantic.com/ideas/archive/2020/05/americas-racial-contract-showing/611389/"
                }, {
                    title: "Ella Baker and the Black Freedom Movement",
                    briefSummary: "By Barbara Ransby",
                    link: "https://drive.google.com/a/glaze0101.com/file/d/0By2bSlBi5slDbXB2enJ0RzN6c3M/view?usp=sharing"
                }, {
                    title: "My Life as an Undocumented Immigrant",
                    briefSummary: "By Jose Antonio Vargas | NYT Mag (June 22, 2011)",
                    link: "https://www.nytimes.com/2011/06/26/magazine/my-life-as-an-undocumented-immigrant.html"
                }, {
                    title: "The 1619 Project",
                    briefSummary: "The New York Times Magazine",
                    link: "https://www.nytimes.com/interactive/2019/08/14/magazine/1619-america-slavery.html"
                }, {
                    title: "The Combahee River Collective Statement",
                    briefSummary: "Edited by Barbara Smith | Home Girls, A Black Feminist Anthology",
                    link: "http://circuitous.org/scraps/combahee.html"
                }, {
                    title: "The Intersectionality Wars",
                    briefSummary: "by Jane Coaston | Vox (May 28, 2019)",
                    link: "https://www.vox.com/the-highlight/2019/5/20/18542843/intersectionality-conservatism-law-race-gender-discrimination"
                }, {
                    title: "Tips for Creating Effective White Caucus Groups",
                    briefSummary: "Developed by Craig Elliott PhD",
                    link: "http://convention.myacpa.org/houston2018/wp-content/uploads/2017/11/Guidelines-for-Effective-White-Caucuses.pdf"
                }, {
                    title: "Where do I donate? Why is the uprising violent? Should I go protest?",
                    briefSummary: "by Courtney Martin (June 1, 2020)",
                    link: "https://medium.com/@cemwrites/where-do-i-donate-why-is-the-uprising-violent-should-i-go-protest-5cefeac37ef9"
                }, {
                    title: "White Privilege: Unpacking the Invisible Knapsack",
                    briefSummary: "By Knapsack Peggy McIntosh",
                    link: "http://convention.myacpa.org/houston2018/wp-content/uploads/2017/11/UnpackingTheKnapsack.pdf"
                }, {
                    title: "Who Gets to Be Afraid in America?",
                    briefSummary: "by Dr. Ibram X. Kendi | Atlantic (May 12, 2020)",
                    link: "https://www.theatlantic.com/ideas/archive/2020/05/ahmaud-arbery/611539/"
                }
            ]
        }
    ],
    petitionData: [
        {
            sectionTitle: "Justice for those no longer with us",
            sectionMessage: "Petitions for justice of those that were wrongfully murdered",
            petitions: [
                {
                    cause: "BREONNA",
                    briefSummary: "This one’s dedicated to Breonna Taylor, who was murdered when police wrongfully entered her Kentucky apartment. You can sign the online petition or text “ENOUGH” to 55156.",
                    link: "https://www.standwithbre.com/"
                }, {
                    cause: "AHMAUD ARBERY",
                    briefSummary: "In honor of Ahmaud Arbery, who was killed while jogging—unarmed—in Georgia.",
                    link: "https://www.change.org/p/human-rights-campaign-justice-for-ahmuad-aubrey-2"
                }, {
                    cause: "TONY MCDADE",
                    briefSummary: "The petition seeks justice for Tony McDade, a transgender man who was killed by police in Tallahassee.",
                    link: "https://www.change.org/p/justice-for-tony-mcdade"
                }, {
                    cause: "BELLY MUJINGA",
                    briefSummary: "Belly Mujinga (a railway worker from London) died from COVID-19 after she was denied proper protection as an essential worker.",
                    link: "https://www.change.org/p/govia-thameslink-justice-for-belly-mujinga-justiceforbellymujinga"
                }
            ]
        },
        {
            sectionTitle: "Police Reform",
            sectionMessage: "Petitions toward reforming or defunding the police",
            petitions: [
                {
                    cause: "#DefundThePolice",
                    briefSummary: "A petition by the Black Lives Matter organization calling for the national defunding of police. The petition demands investment in our communities and the resources to ensure Black people not only survive, but thrive.",
                    link: "https://blacklivesmatter.com/defundthepolice/"
                }, {
                    cause: "#THEWORLDISWATCHING",
                    briefSummary: "International Community in Solidarity against Police Violence toward African-Americans",
                    link: "https://www.change.org/p/united-nations-international-community-in-solidarity-against-police-violence-toward-african-americans-986c3759-5a8e-4b14-8cf6-44735505a336/sign?original_footer_petition_id=15598523&algorithm=promoted&source_location=petition_footer&grid_position=12&pt=AVBldGl0aW9uAOipVwEAAAAAXtWGNW6z1xI3MDI0MTlmNw%3D%3D"
                }, {
                    cause: "NAAPB",
                    briefSummary: "A petition directed towards law enforcement reform — encourages officials to hold the police accountable.",
                    link: "https://www.change.org/p/national-action-against-police-brutality-and-murder"
                }, {
                    cause: "HANDS UP ACT",
                    briefSummary: "The Hands Up Act is a proposed piece of legislation that suggests officers receive a mandatory 15-year prison sentence for the killing of unarmed men and women.",
                    link: "https://www.change.org/p/us-senate-hands-up-act"
                }, {
                    cause: "#WEAREDONEDYING",
                    briefSummary: "The NAACP launched the petition in honor of George Floyd with the sole purpose of eliminating senseless hate crimes.",
                    link: "https://www.naacp.org/campaigns/we-are-done-dying/"
                }
            ]
        }
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
                }, {
                    organization: "Breonna Taylor",
                    briefSummary: "On March 13, 2020, Breonna Taylor, a 26-year-old African-American emergency medical technician, was fatally shot by Louisville Metro Police Department (LMPD) officers in plain clothes.",
                    link: "https://www.gofundme.com/f/9v4q2-justice-for-breonna-taylor"
                }, {
                    organization: "Ahmaud Arbery",
                    briefSummary: "On February 23, 2020, Ahmaud Marquez Arbery, an unarmed 25-year-old African-American man, was fatally shot near Brunswick in Glynn County, Georgia, while jogging on Holmes Road just before the intersection with Satilla Drive in the Satilla Shores neighborhood.",
                    link: "https://www.gofundme.com/f/i-run-with-maud"
                }, {
                    organization: "James Scurlock",
                    briefSummary: "On Saturday, May 30, 2020, James Scurlock, a 22-year-old African American man, was fatally shot by a bar owner, Jacob Gardner, during George Floyd protests in the Old Market area of Omaha, Nebraska.",
                    link: "https://www.gofundme.com/f/for-james-scurlocks-family"
                }, {
                    organization: "Tony McDade",
                    briefSummary: "On May 27, 2020, after 11 a.m., a 38-year-old African-American transgender man, Tony McDade, was fatally shot in the Leon Arms apartment complex by an officer of Tallahassee Police Department, following the fatal stabbing of Malik Jackson in nearby Saxon Street.",
                    link: "https://www.gofundme.com/f/in-memory-of-tony-mcdade"
                }, {
                    organization: "David McAtee",
                    briefSummary: "On June 1, 2020, David McAtee, an African-American man, was fatally shot by law enforcement in Louisville, Kentucky, during protests over the deaths of George Floyd and Breonna Taylor.",
                    link: "https://www.gofundme.com/f/justicefordavidmcatee"
                }, {
                    organization: "Gianna Floyd",
                    briefSummary: "A trust fund for George Floyd's daughter Gianna",
                    link: "https://www.gofundme.com/f/gianna-floyd-daughter-of-george-floyd-fund"
                }
            ]
        },
        {
            sectionTitle: "Split Funds",
            sectionMessage: "Split a donation between 70+ community bail funds, mutual aid funds, and racial justice organizers",
            organizations: [
                {
                    organization: "SPLIT",
                    briefSummary: "Split a donation to all the bail funds, mutual aid funds, and activist organizations listed on this page, or allocate specific amounts to individual groups.",
                    link: "https://secure.actblue.com/donate/bail_funds_george_floyd"
                }
            ]
        },
        {
            sectionTitle: "Legal defense funds and organizations",
            sectionMessage: "Donations will go toward legal aid, education, and financial assistance for black, brown, and other minority groups.",
            organizations: [
                {
                    organization: "Black Lives Matter",
                    briefSummary: "#BlackLivesMatter was founded in 2013 in response to the acquittal of Trayvon Martin’s murderer. Black Lives Matter Foundation, Inc is a global organization in the US, UK, and Canada, whose mission is to eradicate white supremacy and build local power to intervene in violence inflicted on Black communities by the state and vigilantes. By combating and countering acts of violence, creating space for Black imagination and innovation, and centering Black joy, we are winning immediate improvements in our lives.",
                    link: "https://secure.actblue.com/donate/ms_blm_homepage_2019"
                },
                {
                    organization: "NAACP",
                    briefSummary: "The mission of the National Association for the Advancement of Colored People (NAACP) is to secure the political, educational, social, and economic equality of rights in order to eliminate racial-based discrimination and ensure the health and well-being of all persons.",
                    link: "https://secure.actblue.com/donate/naacp-1"
                }, {
                    organization: "ACLU",
                    briefSummary: "The American Civil Liberties Union was founded in 1920 and works in the courts, legislatures and communities to defend and preserve the individual rights and liberties guaranteed to all people in this country by the Constitution and laws of the United States. They help in a wide range of topics from Racial justice to Prisoner’s Rights to Privacy & Technology among others.",
                    link: "https://action.aclu.org/give/fund-every-fight-ahead?cid=7014A000001Zs9uQAC&initms_aff=nat&initms_chan=sem&utm_medium=sem&initms=200114_evergreenun_sem-402136072240-85034108803-aclu-b_segmenta_ggl&utm_source=ggl&utm_campaign=evergreenun&utm_content=200114_sem-402136072240-85034108803-aclu-b_segmenta&ms_aff=nat&ms_chan=sem&ms=200114_evergreenun_sem-402136072240-85034108803-aclu-b_segmenta_ggl&gclid=CjwKCAjw5vz2BRAtEiwAbcVIL2Huw00sbc_87pp-4IKUo_IgCaoxiXe1mduEdF2k_7TBwiBxv3mjghoCXQcQAvD_BwE&gclid=CjwKCAjw5vz2BRAtEiwAbcVIL2Huw00sbc_87pp-4IKUo_IgCaoxiXe1mduEdF2k_7TBwiBxv3mjghoCXQcQAvD_BwE"
                }, {
                    organization: "Legal Rights Center",
                    briefSummary: "The Legal Rights Center is a community-driven nonprofit law firm, specializing in adult criminal and juvenile delinquency defense, restorative justice practices and youth advocacy. The Legal Rights Center runs two programs: Community Defense Program and the Youth: Education, Advocacy & Restorative Services (Y:EARS) Program. While each program has distinct goals and methods, collectively they point to the overall vision of improving the experience of the justice system for communities of color, if not proactively by solving problems that prevent involvement in the justice system in the first place, then certainly after an individual has been swept up into the system.​",
                    link: "https://www.legalrightscenter.org/"
                }, {
                    organization: "Amistad Law Project",
                    briefSummary: "Founded in October 2014, Amistad Law Project advocates for the recognition of the human rights of all people and believes in the intersection of movements against systemic oppression. ALP consists of attorneys, activists, and organizers. We are prison abolitionists who view the prison industrial complex as directly related to the massive divestment from our communities the things that make them safe and strong. We believe that good public education, affordable health care, healthy and affordable food, safe and affordable housing, and the ability to care for our families, no matter what they look like, are human rights.  ",
                    link: "https://amistadlaw.org/"
                }, {
                    organization: "BLMP",
                    briefSummary: "BLMP is providing cash assistance to Black LGBTQ+ migrants and first generation people dealing with the impact of COVID-19.",
                    link: "https://transgenderlawcenter.org/programs/blmp"
                }, {
                    organization: "Moral Governance",
                    briefSummary: "MoGo is the only impact litigation organization in our entire region dedicated to restructuring government. We fight for economic justice for Black people and other people of color who have long been denied opportunities in government contracting and other avenues for economic development. During the COVID-19 pandemic, we are seeing and responding to a substantial increase in the need for support services and advocacy for community members who are being forced to work in unsafe conditions that threaten their lives and the lives of their families. Every penny of your tax-deductible donation funds our critical work to fight for the safety of all San Diegans. ",
                    link: "https://moralgovernance.org/"
                }, {
                    organization: "Restoring Justice",
                    briefSummary: "Our attorneys are committed to client-centered, passionate, proactive, comprehensive, and holistic representation of the marginalized in our community. We believe this standard of defense is necessary to ensure everyone’s rights are protected. Beyond that standard, we also hope to bring the love of community into our work and into the entire criminal justice system, as true justice means making our entire community whole again – the accused and victims – rather than tearing people down. ",
                    link: "https://www.restoringjustice.org/"
                }, {
                    organization: "M4BL",
                    briefSummary: 'Black LGBTQIA+ Migrant Project seeks to "reach millions so that Black political power is a force able to influence nations and local agendas in the direction of our shared vision for Black Lives". They organize rallies, local outreach, voter registration outreach, and leadership education courses.',
                    link: "https://secure.actblue.com/donate/movement-4-black-lives-1"
                }, {
                    organization: "Color of Change",
                    briefSummary: "It’s the US’s largest online racial justice organization, focusing on political outreach and policy change. They’re partnered with BLM.",
                    link: "https://secure.actblue.com/contribute/page/support-us"
                }, {
                    organization: "NAACPLDF",
                    briefSummary: "They are the first and foremost a civil and human rights law firm. LDF’s mission has always been to achieve racial justice, equality, and inclusive society.",
                    link: "https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.181564512.673335251.1590957504-2061488776.1590957504"
                }, {
                    organization: "The Marshall Project",
                    briefSummary: "The Marshall Project is a nonpartisan, nonprofit news organization that seeks to create and sustain a sense of national urgency about the U.S. criminal justice system.",
                    link: "https://www.themarshallproject.org/donate?via=navright"
                }, {
                    organization: "Advancement Project",
                    briefSummary: "Advancement Project is a multi-racial civil rights organization. We use innovative tools and strategies to strengthen social movements and achieve high impact policy change.They choose their projects activities, whether local (California) or national, with the potential to build power at the grassroot level and to reframe and accelerate the quest for racial justice.",
                    link: "https://advancementproject.org/donate/"
                }, {
                    organization: "NPAP",
                    briefSummary: "A nonprofit to protect the human and civil rights of individuals in their encounter with law enforcement and detention facility personnel. The central mission of NPAP is to promote the accountability of law enforcement officers and their employers for violations of the Constitution and the laws of the United States. NPAP does not provide legal representation to victims of law enforcement misconduct. If you are looking for an attorney, please visit our Attorney Referral Listing and feel free to contact us if you require additional referrals.",
                    link: "https://www.nlg-npap.org/donate/"
                }, {
                    organization: "Black Vision Collective",
                    briefSummary: "A Minnesota organization that promotes Black leadership while pursuing a commitment to dismantling systems of oppression and violence",
                    link: "https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2"
                }, {
                    organization: "National Bail Out",
                    briefSummary: "The National Bail Out Collective is committed to getting black people free through bail outs, advocacy, and leadership development.",
                    link: "https://secure.actblue.com/donate/freeblackmamas"
                }, {
                    organization: "Loveland Foundation",
                    briefSummary: "An organization created to bring opportunity and healing to communities of color, and especially to Black women and girls. Through fellowships, residency programs, listening tours, therapy funds, they hope to contribute to both empowerment and liberation to the communities they serve.",
                    link: "https://www.flipcause.com/secure/cause_pdetails/NzU4MzM="
                }, {
                    organization: "Black AIDS Institute",
                    briefSummary: "The Institute's mission is to stop the AIDS pandemic in Black communities by engaging and mobilizing Black institutions and individuals in efforts to confront HIV. The Institute helps to interpret public and private sector HIV policies, conducts trainings, offers technical assistance, disseminates information and provides advocacy mobilization from a uniquely and unapologetically Black point of view",
                    link: "https://app.mobilecause.com/form/zzS6cA?vid=8ul6w"
                }, {
                    organization: "Brave Space Alliance",
                    briefSummary: "Brave Space Alliance is the first Black-led, trans-led LGBTQ Center located on the South Side of Chicago, dedicated to creating and providing affirming, culturally competent, for-us by-us resources, programming, and services for LGBTQ individuals on the South and West sides of the city.",
                    link: "https://www.bravespacealliance.org/donate"
                }, {
                    organization: "Unicorn Riot",
                    briefSummary: "A non-profit media organization of artists and journalists whose work is dedicated to exposing root causes of dynamic social and environmental issues through amplifying stories and exploring sustainable alternatives in today’s globalized world.",
                    link: "https://unicornriot.ninja/support-our-work/"
                }
            ]
        }
        // ,{
        //     sectionTitle: "",
        //     sectionMessage: "",
        //     organizations: [
        //         {
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },{
        //             organization: "",
        //             briefSummary: "",
        //             link: ""
        //         },
        //     ]
        // },

    ]
}

export default config;