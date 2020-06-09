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
            },
            DEFUNDFREMONTPD: {
                web: `My name is ${name} and I am a resident of ${region}. First and foremost, I would like to thank you for releasing a public statement regarding George Floyd’s death and making your officers partake in the Fair and Unbiased Policing training this week. However, that is not enough. Racially motivated violence and discrimination continue to persist in the United States. These are not isolated incidents; they are the result of systemic inequalities that are exacerbated by police brutality and lack of reform.\n\nWhile less than 4 percent of Fremont’s population is Black, they consist of 16% of the people arrested, and 36% of the people killed or seriously injured. You are in a position to put an end to the disproportionate use of police violence against Black residents. This needs to start with placing restrictions on police’s use of force -- including deadly force -- in your own police department.\n\nUse of Force Policy Reform\n\nBased on research conducted by Campaign Zero and their work with legal experts, advocates, and academics with expertise in this area, here are eight major policies that establish meaningful restrictions on police use of force against citizens:\n\n 1. Require officers to de-escalate situations, when possible, before using force.\n 2. Use of force continuum or matrix that defines/limits the types of force and or weapons that can be used to respond to specific types of resistance.\n 3. Restrict chokeholds and strangleholds (including carotid restraints) to situations where deadly force is authorized or prohibiting them altogether.\n 4. Require officers to give a verbal warning, when possible, before using deadly force.\n 5. Prohibit officers from shooting at people in moving vehicles unless the person poses a deadly threat by means other than the vehicle (for example, shooting at people from the vehicle.)\n 6. Require officers to exhaust all other reasonable alternatives before resorting to using deadly force.\n 7. Require officers to intervene to stop another officer from using excessive force.\n 8. Require comprehensive reporting that includes both uses of force and threats of force (for example, reporting instances when an officer threatens a civilian with a firearm).\n\n Of these policies, the Fremont Police Department only requires officers to warn before shooting and to intervene to stop other officers from using excessive force. Police departments that have implemented more of these policies are less likely to kill people than departments that have not. More specifically speaking, each additional use of force policy mentioned was associated with a 15% reduction in killings for the average police department. The policies with the largest impact are the ones that require comprehensive use of force reporting, ban chokeholds and strangleholds, and require officers to exhaust all other means before using deadly force. The Fremont Police Department has not implemented any of the aforementioned policies.\n\n Some police departments have suggested that these restrictions endanger their officers. However and on the contrary, officers in police departments with more restrictive policies in place are less likely to be killed in the line of duty, less likely to be assaulted, and have a similar likelihood of sustaining an injury during an assault.\n\n Therefore, I beg to question why the Fremont Police Department has not implemented all of the eight policies that would restrict excessive police force and reduce the amount of racially charged incidents in our city.\n\n Accountability and Transparency Policy Reform \n\n In addition to reassessing the Use of Force policies, the Fremont Police Department can hold its officers more accountable and be more transparent with the community it serves. Currently, our officers are held to a lower standard of misconduct than civilians when charged with offenses, allowing them to get away with wrongdoings they otherwise would not be able to. By being permitted to treat the very laws they are to enforce as if they are negligible, police officers are not held accountable for their actions. Current policies lean in favor of police officers and therefore civilians are not always getting the justice they deserve. Within the Fremont Police Department, only 1 in 6 civilian complaints of misconduct ruled in favor of civilians. \n\n Here are policies that would address Accountability and Transparency:\n 1. Require police officers to provide their name, badge number, and an informative card on how to report complaints to people with which they interact.\n 2. Establish an independent special investigator or prosecutor office responsible for investigating instances where police have seriously injured or killed civilians. Take for instance Berkeley’s Police Review Commission.\n 3. Stop giving officers under investigation access to information that civilian suspects do not get. Officers should not be allowed to record or review themselves being interrogated or given access to the recording. \n 4. Amend policies regarding the disqualification misconduct complaints that are submitted too many days after an incident occurs or if an investigation takes too long to complete.\n 5. Amend restrictions on how, when, or where police officers can be interrogated. There should not be any limitations on the number of interrogators at one time. Cease to limit the language and incentives used during interrogations. Allow for blood samples to be used in a criminal investigation, especially if the officer tested positive for alcohol or substance abuse. \n 6. Make the outcomes of police officer investigations a matter of public record. \n 7. Contribute to the International Association of Directors of Law Enforcement Standards and Trainings’ (IADLEST) National Decertification Index to ensure officers who have been stripped of their police power are not allowed to continue serving in other precincts. Use the database to inform who you hire. \n 8. Establish reporting requirements for every use of force (except for handcuffing or escorting a person with no resistance, injury, or complaint of injury). Reports should include an explanation of the tactics the officer employed before using force and provide a detailed justification for each use of force. All reports should be analyzed for broader patterns. \n 9. Collect, synthesize, and publish the following data in accessible formats: Critical incidents; Use of force; Complaints of misconduct by police officers; Stops, searches, and arrests; Profiling or discriminatory policing policies; Hate crimes and hate incidents.\n\n In Fremont, a Black person is 12.9 times as likely to have deadly force used on them than a white person. Does the city of Fremont want to be contributing to the nationwide injustice against Black people in America or do we want to be setting an example in department reformation? I commend you on your willingness to take short-term action but it is time we implement policies that will have a lasting impact.\n\n Which side of history do you want to be on? As the Chief of the Fremont Police Department, you are accountable for those you lead and therefore the choice is yours.\n\n Sincerely,\n ${name} \n\n --------------------- \n\n I invite you to visit the websites where I gathered data and policy recommendations to further inform your course of action: \n\n “California Police Scorecard.” CA Police Scorecard, Campaign Zero, policescorecard.org/?city=fremont. \n\n “New Era of Public Safety: A Guide to Fair, Safe, and Effective Community Policing.” The Leadership Conference Education Fund, The Leadership Conference Education Fund, 28 Mar. 2019, civilrights.org/wp-content/uploads/Toolkit.pdf.`,
                encoded: `mailto:policechief@fremont.gov?subject=Police%20Chief%20Kimberly%20Petersen%3A&body=My%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20First%20and%20foremost%2C%20I%20would%20like%20to%20thank%20you%20for%20releasing%20a%20public%20statement%20regarding%20George%20Floyd%E2%80%99s%20death%20and%20making%20your%20officers%20partake%20in%20the%20Fair%20and%20Unbiased%20Policing%20training%20this%20week.%20However%2C%20that%20is%20not%20enough.%20Racially%20motivated%20violence%20and%20discrimination%20continue%20to%20persist%20in%20the%20United%20States.%20These%20are%20not%20isolated%20incidents%3B%20they%20are%20the%20result%20of%20systemic%20inequalities%20that%20are%20exacerbated%20by%20police%20brutality%20and%20lack%20of%20reform.%0D%0A%0D%0AWhile%20less%20than%204%20percent%20of%20Fremont%E2%80%99s%20population%20is%20Black%2C%20they%20consist%20of%2016%25%20of%20the%20people%20arrested%2C%20and%2036%25%20of%20the%20people%20killed%20or%20seriously%20injured.%20You%20are%20in%20a%20position%20to%20put%20an%20end%20to%20the%20disproportionate%20use%20of%20police%20violence%20against%20Black%20residents.%20This%20needs%20to%20start%20with%20placing%20restrictions%20on%20police%E2%80%99s%20use%20of%20force%20--%20including%20deadly%20force%20--%20in%20your%20own%20police%20department.%0D%0A%0D%0AUse%20of%20Force%20Policy%20Reform%0D%0A%0D%0ABased%20on%20research%20conducted%20by%20Campaign%20Zero%20and%20their%20work%20with%20legal%20experts%2C%20advocates%2C%20and%20academics%20with%20expertise%20in%20this%20area%2C%20here%20are%20eight%20major%20policies%20that%20establish%20meaningful%20restrictions%20on%20police%20use%20of%20force%20against%20citizens%3A%0D%0A%0D%0A1.%20Require%20officers%20to%20de-escalate%20situations%2C%20when%20possible%2C%20before%20using%20force.%0D%0A2.%20Use%20of%20force%20continuum%20or%20matrix%20that%20defines%2Flimits%20the%20types%20of%20force%20and%20or%20weapons%20that%20can%20be%20used%20to%20respond%20to%20specific%20types%20of%20resistance.%0D%0A3.%20Restrict%20chokeholds%20and%20strangleholds%20(including%20carotid%20restraints)%20to%20situations%20where%20deadly%20force%20is%20authorized%20or%20prohibiting%20them%20altogether.%0D%0A4.%20Require%20officers%20to%20give%20a%20verbal%20warning%2C%20when%20possible%2C%20before%20using%20deadly%20force.%0D%0A5.%20Prohibit%20officers%20from%20shooting%20at%20people%20in%20moving%20vehicles%20unless%20the%20person%20poses%20a%20deadly%20threat%20by%20means%20other%20than%20the%20vehicle%20(for%20example%2C%20shooting%20at%20people%20from%20the%20vehicle.)%0D%0A6.%20Require%20officers%20to%20exhaust%20all%20other%20reasonable%20alternatives%20before%20resorting%20to%20using%20deadly%20force.%0D%0A7.%20Require%20officers%20to%20intervene%20to%20stop%20another%20officer%20from%20using%20excessive%20force.%0D%0A8.%20Require%20comprehensive%20reporting%20that%20includes%20both%20uses%20of%20force%20and%20threats%20of%20force%20(for%20example%2C%0D%0Areporting%20instances%20when%20an%20officer%20threatens%20a%20civilian%20with%20a%20firearm).%0D%0A%0D%0AOf%20these%20policies%2C%20the%20Fremont%20Police%20Department%20only%20requires%20officers%20to%20warn%20before%20shooting%20and%20to%20intervene%20to%20stop%20other%20officers%20from%20using%20excessive%20force.%20Police%20departments%20that%20have%20implemented%20more%20of%20these%20policies%20are%20less%20likely%20to%20kill%20people%20than%20departments%20that%20have%20not.%20More%20specifically%20speaking%2C%20each%20additional%20use%20of%20force%20policy%20mentioned%20was%20associated%20with%20a%2015%25%20reduction%20in%20killings%20for%20the%20average%20police%20department.%20The%20policies%20with%20the%20largest%20impact%20are%20the%20ones%20that%20require%20comprehensive%20use%20of%20force%20reporting%2C%20ban%20chokeholds%20and%20strangleholds%2C%20and%20require%20officers%20to%20exhaust%20all%20other%20means%20before%20using%20deadly%20force.%20The%20Fremont%20Police%20Department%20has%20not%20implemented%20any%20of%20the%20aforementioned%20policies.%0D%0A%0D%0ASome%20police%20departments%20have%20suggested%20that%20these%20restrictions%20endanger%20their%20officers.%20However%20and%20on%20the%20contrary%2C%20officers%20in%20police%20departments%20with%20more%20restrictive%20policies%20in%20place%20are%20less%20likely%20to%20be%20killed%20in%20the%20line%20of%20duty%2C%20less%20likely%20to%20be%20assaulted%2C%20and%20have%20a%20similar%20likelihood%20of%20sustaining%20an%20injury%20during%20an%20assault.%0D%0A%0D%0ATherefore%2C%20I%20beg%20to%20question%20why%20the%20Fremont%20Police%20Department%20has%20not%20implemented%20all%20of%20the%20eight%20policies%20that%20would%20restrict%20excessive%20police%20force%20and%20reduce%20the%20amount%20of%20racially%20charged%20incidents%20in%20our%20city.%0D%0A%0D%0AAccountability%20and%20Transparency%20Policy%20Reform%0D%0A%0D%0AIn%20addition%20to%20reassessing%20the%20Use%20of%20Force%20policies%2C%20the%20Fremont%20Police%20Department%20can%20hold%20its%20officers%20more%20accountable%20and%20be%20more%20transparent%20with%20the%20community%20it%20serves.%20Currently%2C%20our%20officers%20are%20held%20to%20a%20lower%20standard%20of%20misconduct%20than%20civilians%20when%20charged%20with%20offenses%2C%20allowing%20them%20to%20get%20away%20with%20wrongdoings%20they%20otherwise%20would%20not%20be%20able%20to.%20By%20being%20permitted%20to%20treat%20the%20very%20laws%20they%20are%20to%20enforce%20as%20if%20they%20are%20negligible%2C%20police%20officers%20are%20not%20held%20accountable%20for%20their%20actions.%20Current%20policies%20lean%20in%20favor%20of%20police%20officers%20and%20therefore%20civilians%20are%20not%20always%20getting%20the%20justice%20they%20deserve.%20Within%20the%20Fremont%20Police%20Department%2C%20only%201%20in%206%20civilian%20complaints%20of%20misconduct%20ruled%20in%20favor%20of%20civilians.%0D%0A%0D%0AHere%20are%20policies%20that%20would%20address%20Accountability%20and%20Transparency%3A%0D%0A1.%20Require%20police%20officers%20to%20provide%20their%20name%2C%20badge%20number%2C%20and%20an%20informative%20card%20on%20how%20to%20report%20complaints%20to%20people%20with%20which%20they%20interact.%0D%0A2.%20Establish%20an%20independent%20special%20investigator%20or%20prosecutor%20office%20responsible%20for%20investigating%20instances%20where%20police%20have%20seriously%20injured%20or%20killed%20civilians.%20Take%20for%20instance%20Berkeley%E2%80%99s%20Police%20Review%20Commission.%0D%0A3.%20Stop%20giving%20officers%20under%20investigation%20access%20to%20information%20that%20civilian%20suspects%20do%20not%20get.%20Officers%20should%20not%20be%20allowed%20to%20record%20or%20review%20themselves%20being%20interrogated%20or%20given%20access%20to%20the%20recording.%0D%0A4.%20Amend%20policies%20regarding%20the%20disqualification%20misconduct%20complaints%20that%20are%20submitted%20too%20many%20days%20after%20an%20incident%20occurs%20or%20if%20an%20investigation%20takes%20too%20long%20to%20complete.%0D%0A5.%20Amend%20restrictions%20on%20how%2C%20when%2C%20or%20where%20police%20officers%20can%20be%20interrogated.%20There%20should%20not%20be%20any%20limitations%20on%20the%20number%20of%20interrogators%20at%20one%20time.%20Cease%20to%20limit%20the%20language%20and%20incentives%20used%20during%20interrogations.%20Allow%20for%20blood%20samples%20to%20be%20used%20in%20a%20criminal%20investigation%2C%20especially%20if%20the%20officer%20tested%20positive%20for%20alcohol%20or%20substance%20abuse.%0D%0A6.%20Make%20the%20outcomes%20of%20police%20officer%20investigations%20a%20matter%20of%20public%20record.%0D%0A7.%20Contribute%20to%20the%20International%20Association%20of%20Directors%20of%20Law%20Enforcement%20Standards%20and%20Trainings%E2%80%99%20(IADLEST)%20National%20Decertification%20Index%20to%20ensure%20officers%20who%20have%20been%20stripped%20of%20their%20police%20power%20are%20not%20allowed%20to%20continue%20serving%20in%20other%20precincts.%20Use%20the%20database%20to%20inform%20who%20you%20hire.%0D%0A8.%20Establish%20reporting%20requirements%20for%20every%20use%20of%20force%20(except%20for%20handcuffing%20or%20escorting%20a%20person%20with%20no%20resistance%2C%20injury%2C%20or%20complaint%20of%20injury).%20Reports%20should%20include%20an%20explanation%20of%20the%20tactics%20the%20officer%20employed%20before%20using%20force%20and%20provide%20a%20detailed%20justification%20for%20each%20use%20of%20force.%20All%20reports%20should%20be%20analyzed%20for%20broader%20patterns.%0D%0A9.%20Collect%2C%20synthesize%2C%20and%20publish%20the%20following%20data%20in%20accessible%20formats%3A%20Critical%20incidents%3B%20Use%20of%20force%3B%20Complaints%20of%20misconduct%20by%20police%20officers%3B%20Stops%2C%20searches%2C%20and%20arrests%3B%20Profiling%20or%20discriminatory%20policing%20policies%3B%20Hate%20crimes%20and%20hate%20incidents.%0D%0A%0D%0AIn%20Fremont%2C%20a%20Black%20person%20is%2012.9%20times%20as%20likely%20to%20have%20deadly%20force%20used%20on%20them%20than%20a%20white%20person.%20Does%20the%20city%20of%20Fremont%20want%20to%20be%20contributing%20to%20the%20nationwide%20injustice%20against%20Black%20people%20in%20America%20or%20do%20we%20want%20to%20be%20setting%20an%20example%20in%20department%20reformation%3F%20I%20commend%20you%20on%20your%20willingness%20to%20take%20short-term%20action%20but%20it%20is%20time%20we%20implement%20policies%20that%20will%20have%20a%20lasting%20impact.%0D%0A%0D%0AWhich%20side%20of%20history%20do%20you%20want%20to%20be%20on%3F%20As%20the%20Chief%20of%20the%20Fremont%20Police%20Department%2C%20you%20are%20accountable%20for%20those%20you%20lead%20and%20therefore%20the%20choice%20is%20yours.%0D%0A%0D%0ASincerely%2C%0D%0A${name}`
            },
            DEFUNDOPD: {
                web: `Hello,\n\n      My name is ${name} and I am a resident of ${region}. This year, city council officials are expecting a budget deficit of $122 million due to Covid-19. The Oakland Police Department makes up 44% of the city's budget, more than the budgets of Human Services, Affordable Housing, and Race and Equity COMBINED. In light of recent police violence, as well as documented cases of OPD abuse and racial profiling, I urge you to advocate for a mid-budget review that reduces funding to OPD. I would like to redirect funding away from OPD and into health, housing, education, and social services that support vulnerable residents and residents of color, especially lower-income black residents. I would also urge you in your future voting patterns to advocate for an eventual abolition of the Oakland Police Department in favor of investing into non-violent social services and investing back into minority communities. \n\n Thank you for your time,\n ${name}`,
                encoded: `mailto:officeofthemayor@oaklandnet.com?bcc=atlarge@oaklandca.gov,dkalb@oaklandca.gov,lsalaverry@oaklandca.gov,nfbas@oaklandca.gov,pdrake@oaklandca.gov,LMcElhaney@oaklandca.gov,district4@oaklandca.gov,Ngallo@oaklandca.gov,District6@oaklandca.gov,lreid@oaklandnet.com&?subject=DEFUND%20OPD&body=Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20This%20year%2C%20city%20council%20officials%20are%20expecting%20a%20budget%20deficit%20of%20%24122%20million%20due%20to%20Covid-19.%20The%20Oakland%20Police%20Department%20makes%20up%2044%25%20of%20the%20city's%20budget%2C%20more%20than%20the%20budgets%20of%20Human%20Services%2C%20Affordable%20Housing%2C%20and%20Race%20and%20Equity%20COMBINED.%20In%20light%20of%20recent%20police%20violence%2C%20as%20well%20as%20documented%20cases%20of%20OPD%20abuse%20and%20racial%20profiling%2C%20I%20urge%20you%20to%20advocate%20for%20a%20mid-budget%20review%20that%20reduces%20funding%20to%20OPD.%20I%20would%20like%20to%20redirect%20funding%20away%20from%20OPD%20and%20into%20health%2C%20housing%2C%20education%2C%20and%20social%20services%20that%20support%20vulnerable%20residents%20and%20residents%20of%20color%2C%20especially%20lower-income%20black%20residents.%20I%20would%20also%20urge%20you%20in%20your%20future%20voting%20patterns%20to%20advocate%20for%20an%20eventual%20abolition%20of%20the%20Oakland%20Police%20Department%20in%20favor%20of%20investing%20into%20non-violent%20social%20services%20and%20investing%20back%20into%20minority%20communities.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0Ax${name}`
            },
            DEFUNDNYPD: {
                web: `Dear New York City Council Members,\n\n My name is ${name} and I am a resident of ${region}. Last April, NYC Mayor Bill De Blasio proposed major budget cuts for the Fiscal Year 2021, especially to education and youth programs, while refusing to slash the NYPD budget by any significant margin. \n\n I am emailing today to demand that you vote no on the Mayor’s FY21 proposed budget. Furthermore, I urge you ONLY to vote for a budget that includes AT LEAST $1 billion in cuts to the NYPD with equal reallocation towards social services and education programs, effective at the beginning of FY21, July 1, 2020. \n\n Governor Cuomo has doubled the presence of the NYPD on New York City streets. I am asking that city officials lobby the same amount of attention and effort towards finding sustainable, longterm change. \n\n Thank you, \n ${name}`,
                encoded: `mailto:bdeblasio@cityhall.nyc.gov?bcc=chin@council.nyc.gov,District2@council.nyc.gov,SpeakerJohnson@council.nyc.gov,KPowers@council.nyc.gov,BKallos@BenKallos.com,Helen@HelenRosenthal.com,District7@council.nyc.gov,DAyala@council.nyc.gov,D09perkins@council.nyc.gov,yrodriguez@council.nyc.gov,District11@council.nyc.gov,Andy.King@council.nyc.gov,MGjonaj@council.nyc.gov,fcabrera@council.nyc.gov,Rtorres@council.nyc.gov,District16Bronx@council.nyc.gov,salamanca@council.nyc.gov,RDiaz@council.nyc.gov,district19@council.nyc.gov,pkoo@council.nyc.gov,FMoya@council.nyc.gov,,BGrodenchik@council.nyc.gov,RLancman@council.nyc.gov,dromm@council.nyc.gov,JVanBramer@council.nyc.gov,,Adams@council.nyc.gov,Koslowitz@council.nyc.gov,District30@council.nyc.gov,drichards@council.nyc.gov,eulrich@council.nyc.gov,slevin@council.nyc.gov,areynoso@council.nyc.gov,LCumbo@council.nyc.gov,district36@council.nyc.gov,District37@council.nyc.gov,info38@council.nyc.gov,lander@council.nyc.gov,meugene@council.nyc.gov,District41@council.nyc.gov,,AskJB@council.nyc.gov,AskKalman@council.nyc.gov,District45@council.nyc.gov,AMaisel@council.nyc.gov,MTreyger@council.nyc.gov,cdeutsch@council.nyc.gov,DROSE@Council.nyc.gov,SMatteo@council.nyc.gov,borelli@council.nyc.gov&?subject=DEFUND%20NYPD&body=Dear%20New%20York%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${region}.%20Last%20April%2C%20NYC%20Mayor%20Bill%20De%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20Fiscal%20Year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%0D%0A%0D%0AI%20am%20emailing%20today%20to%20demand%20that%20you%20vote%20no%20on%20the%20Mayor%E2%80%99s%20FY21%20proposed%20budget.%20Furthermore%2C%20I%20urge%20you%20ONLY%20to%20vote%20for%20a%20budget%20that%20includes%20AT%20LEAST%20%241%20billion%20in%20cuts%20to%20the%20NYPD%20with%20equal%20reallocation%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY21%2C%20July%201%2C%202020.%0D%0A%0D%0AGovernor%20Cuomo%20has%20doubled%20the%20presence%20of%20the%20NYPD%20on%20New%20York%20City%20streets.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20sustainable%2C%20longterm%20change.%0D%0A%0D%0AThank%20you%2C%0D%0A${name}`
            }
        }
        return templates[emailKey];
    },
    templateKeys: [
        { key: "DEFUNDOPD", text: "Defund the Oakland PD"},
        { key: "DEFUNDSJPD", text: "Defund the SJPD"},
        { key: "DEFUNDFREMONTPD", text: "Defund the Fremont PD"},
        { key: "DEFUNDLAPD", text: "Defund the LAPD"},
        { key: "DEFUNDNYPD", text: "Defund the NYPD"}
    ],
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
            sectionMessage: "Donations will go toward legal aid, education, and financial assistance for black, brown, and other minority groups.",
            organizations: [
                {
                    organization: "NAACP",
                    briefSummary: "The mission of the National Association for the Advancement of Colored People (NAACP) is to secure the political, educational, social, and economic equality of rights in order to eliminate racial-based discrimination and ensure the health and well-being of all persons.",
                    link: "https://secure.actblue.com/donate/naacp-1"
                },{
                    organization: "ACLU",
                    briefSummary: "The American Civil Liberties Union was founded in 1920 and works in the courts, legislatures and communities to defend and preserve the individual rights and liberties guaranteed to all people in this country by the Constitution and laws of the United States. They help in a wide range of topics from Racial justice to Prisoner’s Rights to Privacy & Technology among others.",
                    link: "https://action.aclu.org/give/now?ms_aff=NAT&initms_aff=NAT&ms=web_horiz_nav_hp&initms=web_horiz_nav_hp&ms_chan=web&initms_chan=web&redirect=node/65102"
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
                },{
                    organization: "M4BL",
                    briefSummary: 'Black LGBTQIA+ Migrant Project seeks to "reach millions so that Black political power is a force able to influence nations and local agendas in the direction of our shared vision for Black Lives". They organize rallies, local outreach, voter registration outreach, and leadership education courses.',
                    link: "https://secure.actblue.com/donate/movement-4-black-lives-1"
                },{
                    organization: "Color of Change",
                    briefSummary: "It’s the US’s largest online racial justice organization, focusing on political outreach and policy change. They’re partnered with BLM.",
                    link: "https://secure.actblue.com/contribute/page/support-us"
                },{
                    organization: "NAACPLDF",
                    briefSummary: "They are the first and foremost a civil and human rights law firm. LDF’s mission has always been to achieve racial justice, equality, and inclusive society.",
                    link: "https://org2.salsalabs.com/o/6857/p/salsa/donation/common/public/?donate_page_KEY=15780&_ga=2.181564512.673335251.1590957504-2061488776.1590957504"
                },{
                    organization: "The Marshall Project",
                    briefSummary: "The Marshall Project is a nonpartisan, nonprofit news organization that seeks to create and sustain a sense of national urgency about the U.S. criminal justice system.",
                    link: "https://www.themarshallproject.org/donate?via=navright"
                },{
                    organization: "Advancement Project",
                    briefSummary: "Advancement Project is a multi-racial civil rights organization. We use innovative tools and strategies to strengthen social movements and achieve high impact policy change.They choose their projects activities, whether local (California) or national, with the potential to build power at the grassroot level and to reframe and accelerate the quest for racial justice.",
                    link: "https://advancementproject.org/donate/"
                },{
                    organization: "NPAP",
                    briefSummary: "A nonprofit to protect the human and civil rights of individuals in their encounter with law enforcement and detention facility personnel. The central mission of NPAP is to promote the accountability of law enforcement officers and their employers for violations of the Constitution and the laws of the United States. NPAP does not provide legal representation to victims of law enforcement misconduct. If you are looking for an attorney, please visit our Attorney Referral Listing and feel free to contact us if you require additional referrals.",
                    link: "https://www.nlg-npap.org/donate/"
                },{
                    organization: "Black Vision Collective",
                    briefSummary: "A Minnesota organization that promotes Black leadership while pursuing a commitment to dismantling systems of oppression and violence",
                    link: "https://secure.everyaction.com/4omQDAR0oUiUagTu0EG-Ig2"
                },{
                    organization: "National Bail Out",
                    briefSummary: "The National Bail Out Collective is committed to getting black people free through bail outs, advocacy, and leadership development.",
                    link: "https://secure.actblue.com/donate/freeblackmamas"
                },{
                    organization: "Loveland Foundation",
                    briefSummary: "An organization created to bring opportunity and healing to communities of color, and especially to Black women and girls. Through fellowships, residency programs, listening tours, therapy funds, they hope to contribute to both empowerment and liberation to the communities they serve.",
                    link: "https://www.flipcause.com/secure/cause_pdetails/NzU4MzM="
                },{
                    organization: "Black AIDS Institute",
                    briefSummary: "The Institute's mission is to stop the AIDS pandemic in Black communities by engaging and mobilizing Black institutions and individuals in efforts to confront HIV. The Institute helps to interpret public and private sector HIV policies, conducts trainings, offers technical assistance, disseminates information and provides advocacy mobilization from a uniquely and unapologetically Black point of view",
                    link: "https://app.mobilecause.com/form/zzS6cA?vid=8ul6w"
                },{
                    organization: "Brave Space Alliance",
                    briefSummary: "Brave Space Alliance is the first Black-led, trans-led LGBTQ Center located on the South Side of Chicago, dedicated to creating and providing affirming, culturally competent, for-us by-us resources, programming, and services for LGBTQ individuals on the South and West sides of the city.",
                    link: "https://www.bravespacealliance.org/donate"
                },{
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