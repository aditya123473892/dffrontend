import Link from "next/link";

const TermsPage = () => {
  return (
    // <div>
    //   <div className="text-[24px] font-bold mt-4">DarkFantasy Terms of Use</div>
    //   <div className="text-[24px] font-semibold">1. INTRODUCTION</div>
    //   <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //     <p className="font-semibold">
    //       By accessing or using DarkFantasy's Services, you agree to be bound by
    //       this Terms of Use Agreement (the “Terms” or “Agreement”), including
    //       our <u><Link href={"/privacy-policy"}>Privacy Policy</Link></u>, <u>Cookie Policy</u>,{" "}
    //       <u>Community Guidelines</u>, and <u>Safety Tips</u>, so it is
    //       important that you read this Agreement and these policies and
    //       procedures carefully before you create an account. PLEASE CAREFULLY
    //       REVIEW THE DISPUTE RESOLUTION PROVISIONS IN SECTION 15 BELOW. THESE
    //       GOVERN THE MANNER IN WHICH DISPUTES WILL BE ADDRESSED BETWEEN YOU AND
    //       DARKFANTASY. THESE PROVISIONS INCLUDE A MANDATORY PRE-ARBITRATION
    //       INFORMAL DISPUTE RESOLUTION PROCESS, AN ARBITRATION AGREEMENT, SMALL
    //       CLAIMS COURT ELECTION, CLASS ACTION WAIVER, ADDITIONAL PROCEDURES FOR
    //       MASS ARBITRATION FILINGS, AND JURY TRIAL WAIVER THAT AFFECT YOUR
    //       RIGHTS. IN ARBITRATION, THERE IS TYPICALLY LESS DISCOVERY AND
    //       APPELLATE REVIEW THAN IN COURT. We may update these Terms from time to
    //       time, so check this page regularly for updates.
    //     </p>
    //   </ul>
    //   <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //     <p>Welcome to DarkFantasy.</p>
    //   </ul>
    //   <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //     <p>
    //       By accessing or using our Services on DarkFantasy.com(the "Website"),
    //       the DarkFantasy mobile application (the "App"), or any other platforms
    //       or services DarkFantasy may offer (collectively, the "Service" or our
    //       "Services"), you agree to, and are bound by this Agreement. This
    //       Agreement applies to anyone who accesses or uses our Services,
    //       regardless of registration or subscription status.
    //     </p>
    //   </ul>

    //   <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //     <p>
    //       Your access and use of our Services is also subject to the Privacy
    //       Policy, Cookie Policy, Community Guidelines, and Safety Tips, and any
    //       terms disclosed and agreed to by you when you purchase additional
    //       features, products, or services from DarkFantasy ("Additional Terms
    //       Upon Purchase"), which are incorporated into this Agreement by
    //       reference. If you do not wish to be bound by this Agreement, do not
    //       access or use our Services. Subject to applicable law, we reserve the
    //       right to modify, amend, or change the Terms at any time. Notice of
    //       material changes will be posted on this page with an updated effective
    //       date. In certain circumstances, we may notify you of a change to the
    //       Terms via email or other means; however, you are responsible for
    //       regularly checking this page for any changes. Your continued access or
    //       use of our Services constitutes your ongoing consent to any changes,
    //       and as a result, you will be legally bound by the updated Terms. If
    //       you do not accept a change to the Terms, you must stop accessing or
    //       using our Services immediately. Notwithstanding the foregoing, any
    //       material changes to the Limitation of Liability in Section 14 and the
    //       Dispute Resolution provisions in Section 15 below will require your
    //       affirmative acceptance.  Further, we reserve the right to change the
    //       availability of features in our subscription plans.
    //     </p>
    //   </ul>

    //   <div>
    //     <div className="text-[24px] font-semibold">
    //       2. ACCOUNT ELIGIBILITY; YOUR RESPONSIBILITIES
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Before you create an account on DarkFantasy, make sure you are
    //         eligible to use our Services. This Section also details what you can
    //         and can't do when using the Services, as well as the rights you
    //         grant DarkFantasy. You are not authorized to create an account or
    //         use the Services unless all of the following are true, and by using
    //         our Services, you represent and warrant that:
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You are an individual (i.e., not any body corporate, partnership or
    //         other business entity) at least 18 years old;
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You are not located in a country that is subject to a U.S.
    //         Government embargo, or that has been designated by the U.S.
    //         Government as a "terrorist supporting" country;
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You are not on any list of individuals prohibited from conducting
    //         business with the United States (for example, the U.S. Treasury
    //         Department’s list of Specially Designated Nationals or any similar
    //         government agency list) nor do you face any other similar
    //         prohibition);
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>You are not prohibited by law from using our Services;</li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You have not committed, been convicted of, or pled no contest to a
    //         felony or indictable offense (or crime of similar severity), a sex
    //         crime, or any crime involving violence or a threat of violence,
    //         unless you have received clemency for a non-violent crime and we
    //         have determined that you are not likely to pose a threat to other
    //         users of our Services;
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You are not required to register as a sex offender with any state,
    //         federal or local sex offender registry;
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>You do not have more than one account on our Services; and</li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You have not previously been removed from our Services or our
    //         affiliates’ services by us or our affiliates, unless you have our
    //         express written permission to create a new account.
    //       </li>
    //     </ul>
    //     <p className="mt-2">
    //       If at any time you cease to meet these requirements, all authorization
    //       to access our Services or systems is automatically revoked, and you
    //       must immediately delete your account, and we retain the right to
    //       remove your access to our Services without warning.
    //     </p>

    //     <div>
    //       {" "}
    //       <div className="text-base font-semibold">You agree to:</div>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Comply with these Terms, and check this page from time to time to
    //           ensure you are aware of any changes;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Comply with all applicable laws, including without limitation,
    //           privacy laws, intellectual property laws, anti-spam laws, and
    //           regulatory requirements;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Use the latest version of the Website and/or App;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Review the Safety Tips;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Review and comply with the Community Guidelines, as updated from
    //           time to time; and
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Take reasonable measures to protect the security of your login
    //           information.
    //         </li>
    //       </ul>
    //     </div>

    //     <div>
    //       {" "}
    //       <div className="text-base font-semibold">
    //         You agree that you will not:
    //       </div>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Misrepresent your identity, age, or affiliations with a person or
    //           entity;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use the Services in a way that damages the Services or prevents
    //           their use by other users;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use our Services in a way to interfere with, disrupt or negatively
    //           affect the platform, the servers, or our Services' networks;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use our Services for any harmful, illegal, or nefarious purpose,
    //           including, but not limited to, using any Virtual Items for
    //           purposes of money laundering or other financial crimes;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Harass, bully, stalk, intimidate, assault, defame, harm or
    //           otherwise abuse or cause psychological harm;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Post or share Prohibited Content (see below);</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Solicit passwords for any purpose, or personal identifying
    //           information for commercial or unlawful purposes from other users
    //           or disseminate another person's personal information without his
    //           or her permission;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Solicit money or other items of value from another user, whether
    //           as a gift, loan, or form of compensation;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Use another user's account;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use our Services in relation to fraud, a pyramid scheme, or other
    //           similar practice;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //            Use our Services in relation to any political campaign financing
    //           or for the purpose of influencing any election, other than sharing
    //           your own personal political opinions.
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Violate the terms of the license granted to you by DarkFantasy
    //           (see Section 6 below). .
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Disclose private or proprietary information that you do not have
    //           the right to disclose;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Copy, modify, transmit, distribute, or create any derivative works
    //           from, any Member Content or Our Content, or any copyrighted
    //           material, images, trademarks, trade names, service marks, or other
    //           intellectual property, content or proprietary information
    //           accessible through our Services without DarkFantasy's prior
    //           written consent;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Express or imply that any statements you make are endorsed by
    //           DarkFantasy;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use any robot, crawler, site search/retrieval application, proxy
    //           or other manual or automatic device, method or process to access,
    //           retrieve, index, "data mine," or in any way reproduce or
    //           circumvent the navigational structure or presentation of our
    //           Services or its contents;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Upload viruses or other malicious code or otherwise compromise the
    //           security of our Services;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Forge headers or otherwise manipulate identifiers to disguise the
    //           origin of any information transmitted to or through our Services;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           "Frame" or "mirror" any part of our Services without DarkFantasy's
    //           prior written authorization;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use meta tags or code or other devices containing any reference to
    //           DarkFantasy or the platform (or any trademark, trade name, service
    //           mark, logo or slogan of DarkFantasy) to direct any person to any
    //           other website for any purpose
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Modify, adapt, sublicense, translate, sell, reverse engineer,
    //           decipher, decompile or otherwise disassemble any portion of our
    //           Services, or cause others to do so;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use or develop any third-party applications that interact with our
    //           Services or Member Content or information without our written
    //           consent, including but not limited to artificial intelligence or
    //           machine learning systems;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Use, access, or publish the DarkFantasy  application programming
    //           interface without our written consent;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Probe, scan or test the vulnerability of our Services or any
    //           system or network;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Encourage, promote, or agree to engage in any activity that
    //           violates these Terms;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Create a new account after we suspend or terminate your account,
    //           unless you receive our express permission; or
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Submit a report about a member’s behavior or content that is
    //           false, misleading, or otherwise manifestly unfounded, or abuse any
    //           DarkFantasy reporting or appeals request system made available.
    //         </li>
    //       </ul>
    //       <p>
    //         The license granted to you under these Terms and any authorization
    //         to access the Services is automatically revoked in the event that
    //         you do any of the above.
    //       </p>
    //       <div className="text-base font-semibold mt-2">
    //         Prohibited Content - DarkFantasy prohibits uploading or sharing
    //         content that:
    //       </div>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Could reasonably be deemed to be offensive or to harass, abuse or
    //           cause psychological distress to another person;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Is obscene, pornographic, violent or contains nudity;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Is abusive, threatening, discriminatory or that promotes or
    //           encourages racism, sexism, hatred or bigotry;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Encourages or facilitates any illegal activity including, without
    //           limitation, terrorism, inciting racial hatred or the submission of
    //           which in itself constitutes committing a criminal offense;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Encourages or facilitates any activity that may result in harm to
    //           the user or another person, including, but not limited to,
    //           promotion of self-harm, eating disorders, dangerous challenges,
    //           violent extremism,
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Is defamatory, libelous, or untrue;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Relates to commercial activities (including, without limitation,
    //           sales, competitions, promotions, and advertising, solicitation for
    //           services, sex work, "sugar daddy" or "sugar baby" relationships,
    //           links to other websites or premium line telephone numbers);
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Involves or facilitates the transmission of spam;</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Contains any spyware, adware, viruses, corrupt files, worm
    //           programs or other malicious code designed to interrupt, damage or
    //           limit the functionality of or disrupt any software, hardware,
    //           telecommunications, networks, servers or
    //         </li>
    //       </ul>
    //       <p className="mt-2">
    //         other equipment, Trojan horse or any other material designed to
    //         damage, interfere with, wrongly intercept or expropriate any data or
    //         personal information whether from DarkFantasy or otherwise;
    //       </p>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Infringes upon any third party's rights (including, without
    //           limitation, intellectual property rights and privacy rights);
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Was not written by you, unless expressly authorized by
    //           DarkFantasy;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Includes the image or likeness of another person without that
    //           person's consent (or in the case of a minor, the minor's parent or
    //           guardian);
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>
    //           Includes an image or likeness of a minor who is unaccompanied by
    //           the minor's parent or guardian or not fully clothed or otherwise
    //           depicts or implies a minor engaged in sexual activity;
    //         </li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>Is inconsistent with the intended use of the Services; or</li>
    //       </ul>
    //       <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //         <li>May harm the reputation of DarkFantasy or its affiliates.</li>
    //       </ul>
    //       <div className="mt-2">
    //         The uploading or sharing of content that violates these Terms
    //         ("Prohibited Content") may result in the immediate suspension or
    //         termination of your account.
    //       </div>
    //     </div>
    //   </div>

    //   <div>
    //     <div className="text-[24px] mt-2 font-semibold">3. CONTENT</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         It is important that you understand your rights and responsibilities
    //         with regard to the content on our Services, including any content
    //         you provide or post. You are expressly prohibited from posting
    //         inappropriate content.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         While using our Services, you will have access to: (i) content that
    //         you upload or provide while using our Services, even if suggested by
    //         our Services ("Your Content"); (ii) content that other users upload
    //         or provide while using our Services ("Member Content"); and (iii)
    //         content that DarkFantasy provides on and through our Services ("Our
    //         Content"). In this agreement, "content" includes, without
    //         limitation, all text, images, video, audio, or other material on our
    //         Services, including information on users' profiles and in direct
    //         messages between users. For additional information on how we
    //         moderate content, please see our Safety page here for more details.
    //         For additional information on how recommended profiles are ordered,
    //         please see our FAQ here.
    //       </li>
    //     </ul>
    //     <div className="text-[24px] mt-2 font-semibold">3a. YOUR CONTENT</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         You are responsible for Your Content. Don't share anything that you
    //         wouldn't want others to see, that would violate this Agreement, or
    //         that may expose you or us to legal liability.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You have not previously been removed from our Services or our
    //         affiliates’ services by us or our affiliates, unless you have our
    //         express written permission to create a new account.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You represent and warrant to us that the information you provide to
    //         us or any other user is accurate, including any information
    //         submitted through Facebook or other third-party sources (if
    //         applicable), and that you will update your account information as
    //         necessary to ensure its accuracy
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         The content included on your individual profile should be relevant
    //         to the intended use of our Services. You may not upload any
    //         Prohibited Content, and your content must further comply with
    //         the Community Guidelines. You may not display any personal contact,
    //         banking information, or peer-to-peer payment information, whether in
    //         relation to you or any other person (for example, names, home
    //         addresses or postcodes, telephone numbers, email addresses, URLs,
    //         credit/debit card, peer-to-peer payment user name, or other banking
    //         details). If you choose to reveal any personal information about
    //         yourself to other users, you do so at your own risk. We strongly
    //         encourage you to use caution in disclosing any personal information
    //         online.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         Your individual profile will be visible to other people around the
    //         world, so be sure that you are comfortable sharing Your Content
    //         before you post. You acknowledge and agree that Your Content may be
    //         viewed by other users, and, notwithstanding these Terms, other users
    //         may share Your Content with third parties. By uploading Your
    //         Content, you represent and warrant to us that you have all necessary
    //         rights and licenses to do so and automatically grant us a license to
    //         use Your Content as provided under Section 7 below
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         We may provide tools and features to enhance individual expression
    //         through Your Content and Member Content (described in Section 3b),
    //         and we’re constantly developing new technologies to improve our
    //         Services. Certain tools or features may allow you to generate or
    //         enhance content based on Your Content. This is still Your Content,
    //         and you are responsible for it and its accuracy, as well as your use
    //         of it on our Services and any and all decisions made, actions taken,
    //         and failures to take action based on Your Content. Be careful in
    //         choosing and sharing Your Content.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You understand and agree that we may monitor or review Your Content,
    //         and we have the right to remove, delete, edit, limit, or block or
    //         prevent access to any of Your Content at any time at our sole
    //         discretion. Furthermore, you understand and agree that we have no
    //         obligation to display or review Your Content.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">3b. MEMBER CONTENT</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         While you will have access to Member Content, it is not yours and
    //         you may not copy or use Member Content for any purpose except as
    //         contemplated by these Terms.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         Other users will also share content on our Services. Member Content
    //         belongs to the user who posted the content and is stored on our
    //         servers and displayed at the direction of that user.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You should always carefully review and independently verify Member
    //         Content for accuracy. Other users may use tools to generate or
    //         enhance content based on the Member Content they provide.  Member
    //         Content may include biased, incorrect, harmful, offensive, or
    //         misleading information. Other users are responsible for their Member
    //         Content, as well as any and all decisions made, actions taken, and
    //         failures to take action based on their use of Member Content.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You do not have any rights in relation to Member Content, and,
    //         unless expressly authorized by DarkFantasy, you may only use Member
    //         Content to the extent that your use is consistent with our Services'
    //         purpose of allowing us to communicate with and meet one another. You
    //         may not copy the Member Content or use Member Content for commercial
    //         purposes, to spam, to harass, or to make unlawful threats. We
    //         reserve the right to terminate your account if you misuse Member
    //         Content.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">3c. OUR CONTENT</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy owns or licenses all other content on our Services.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         Any other text, content, graphics, user interfaces, trademarks,
    //         logos, sounds, artwork, images, and other intellectual property
    //         appearing on our Services is owned, controlled or licensed by us and
    //         protected by copyright, trademark and other intellectual property
    //         law rights. All rights, title, and interest in and to Our Content
    //         remains with us at all times.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         We grant you a limited license to access and use Our Content as
    //         provided under Section 6 below, and we reserve all other rights.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">
    //       4. INAPPROPRIATE CONTENT AND MISCONDUCT; REPORTING
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy does not tolerate inappropriate content or behavior on
    //         our Services.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         We are committed to maintaining a positive and respectful community,
    //         and we do not tolerate any inappropriate content or misconduct,
    //         whether on or off of the Services (including, but not limited to, on
    //         services operated by our affiliates). We encourage you to report any
    //         inappropriate Member Content or misconduct by other users. You can
    //         report a user directly through the "Report User" link on a user's
    //         profile or in the messaging experience. You may also
    //         contact Customer Support.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         As set forth in our <Link href={"/privacy-policy"}>Privacy Policy</Link>, we may share data between our
    //         affiliates for the safety and security of our users and may take
    //         necessary actions if we believe you have violated these Terms,
    //         including banning you from our Services and/or our affiliates’
    //         services (such as Hinge, Plenty of Fish, OkCupid, Match, Meetic,
    //         BlackPeopleMeet, LoveScout24, OurTime, Pairs, ParPerfeito, and Twoo;
    //         for more details, click here), and/or preventing you from creating
    //         new accounts. You understand and agree that we may not share
    //         information with you regarding your account if doing so would
    //         potentially impair the safety or privacy of our other users.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         Member Content is subject to the terms and conditions of Sections
    //         512(c) and/or 512(d) of the Digital Millennium Copyright Act 1998.
    //         To submit a complaint regarding Member Content that may constitute
    //         intellectual property infringement, see Section 12 (Digital
    //         Millennium Copyright Act) below.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">5. PRIVACY</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Privacy is important to us. We have a separate policy about it that
    //         you should read.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         For information about how DarkFantasy and its affiliates collect,
    //         use, and share your personal data, please read our <Link href={"/privacy-policy"}>Privacy Policy</Link>.
    //         By using our Services, you agree that we may use your personal data
    //         in accordance with our <Link href={"/privacy-policy"}>Privacy Policy</Link>.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">
    //       6. RIGHTS YOU ARE GRANTED BY DARKFANTASY
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy grants you the right to use and enjoy our Services,
    //         subject to these Terms.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         For as long as you comply with these Terms, DarkFantasy grants you a
    //         personal, worldwide, royalty-free, non-assignable, non-exclusive,
    //         revocable, and non-sublicensable license to access and use our
    //         Services for purposes as intended by DarkFantasy and permitted by
    //         these Terms and applicable laws. This license and any authorization
    //         to access the Service are automatically revoked in the event that
    //         you fail to comply with these Terms.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold">
    //       7. RIGHTS YOU GRANT DARKFANTASY
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         You own all of the content you provide to DarkFantasy, but you also
    //         grant us the right to use Your Content as provided in this
    //         Agreement.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         By creating an account, you grant to DarkFantasy a worldwide,
    //         perpetual, transferable, sub- licensable, royalty-free right and
    //         license to host, store, use, copy, display, reproduce, adapt, edit,
    //         publish, translate, modify, reformat, incorporate into other works,
    //         advertise, distribute and otherwise make available to the general
    //         public Your Content, including any information you authorize us to
    //         access from Facebook or other third- party sources (if applicable),
    //         in whole or in part, and in any way and in any format or medium
    //         currently known or developed in the future. DarkFantasy's license to
    //         Your Content shall be non-exclusive, except that DarkFantasy's
    //         license shall be exclusive with respect to derivative works created
    //         through use of our Services. For example, DarkFantasy would have an
    //         exclusive license to screenshots of our Services that include Your
    //         Content.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         In addition, so that DarkFantasy can prevent the use of Your Content
    //         outside of our Services, you authorize DarkFantasy to act on your
    //         behalf with respect to infringing uses of Your Content taken from
    //         our Services by other users or third parties. This expressly
    //         includes the authority, but not the obligation, to send notices
    //         pursuant on your behalf if Your Content is taken and used by third
    //         parties outside of our Services. DarkFantasy is not obligated to
    //         take any action with regard to use of Your Content by other users or
    //         third parties. DarkFantasy's license to Your Content is subject to
    //         your rights under applicable law (for example, laws regarding
    //         personal data protection to the extent the content contains personal
    //         information as defined by those laws).
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         In consideration for DarkFantasy allowing you to use our Services,
    //         you agree that we, our affiliates, and our third-party partners may
    //         place advertising on our Services. By submitting suggestions or
    //         feedback to DarkFantasy regarding our Services, you agree that
    //         DarkFantasy may use and share such feedback for any purpose without
    //         compensating you.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         You agree that DarkFantasy may access, preserve, and disclose your
    //         account information, including Your Content, if required to do so by
    //         law or upon a good faith belief that such access, preservation, or
    //         disclosure is reasonably necessary to: (i) comply with legal
    //         process; (ii) enforce these Terms; (iii) respond to claims that any
    //         content violates the rights of third parties; (iv) respond to your
    //         requests for customer service; (v) protect the rights, property or
    //         personal safety of the Company or any other person, or (vi) to
    //         investigate, prevent, or take other action regarding illegal
    //         activity, suspected fraud or other wrongdoing.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold text-[#FF0000]">
    //       8. PURCHASES AND AUTOMATICALLY RENEWING SUBSCRIPTIONS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         You will have the opportunity to purchase products and services from
    //         DarkFantasy. If you purchase a subscription, it will automatically
    //         renew - and you will be charged - until you cancel.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         DarkFantasy may offer products and services for purchase through
    //         iTunes, Google Play, or other external services authorized by
    //         DarkFantasy (each, an "External Service," and any purchases made
    //         thereon, an "External Service Purchase"). DarkFantasy may also offer
    //         products and services for purchase via credit card or other payment
    //         processors on the Website or inside the App ("Internal Purchases").
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <li>
    //         If you purchase a subscription, it will automatically renew until
    //         you cancel, in accordance with the terms disclosed to you at the
    //         time of purchase, as further described below.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         If you cancel your subscription, you will continue to have access to
    //         your subscription benefits until the end of your subscription
    //         period, at which point it will expire.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         Because our Services may be utilized without a subscription,
    //         canceling your subscription does not remove your profile from our
    //         Services. If you wish to fully terminate your account, you must
    //         terminate your account as set forth in Section 9.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         DarkFantasy operates a global business, and our pricing varies based
    //         on a number of factors. We frequently offer promotional rates -
    //         which can vary based on region, length of subscription, bundle size,
    //         past purchases, account activity and more. We also regularly test
    //         new features and payment options. If you do not timely cancel your
    //         subscription, your subscription will be renewed at the full price as
    //         indicated when the purchase was made, without any additional action
    //         by you, and you authorize us to charge your payment method for these
    //         amounts. To the extent permissible by law, we reserve the right,
    //         including without prior notice, to limit the available quantity of
    //         or discontinue making available any product, feature, service or
    //         other offering; to impose conditions on the honoring of any coupon,
    //         discount, offer or other promotion; to bar any user from making any
    //         transaction; and to refuse to provide any user with any product,
    //         service or other offering.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold text-[#FF0000]">
    //       8a. EXTERNAL SERVICE PURCHASES AND SUBSCRIPTIONS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         External Service Purchases, including subscriptions, may be
    //         processed through the External Service, in which case those
    //         purchases must be managed through your External Service Account.
    //         Subscriptions automatically renew until you cancel.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         When making a purchase on the Service, you may have the option to
    //         pay through an External Service, such as with your Apple ID or
    //         Google Play account ("your External Service Account"), and your
    //         External Service Account will be charged for the purchase in
    //         accordance with the terms disclosed to you at the time of purchase
    //         and the general terms applicable to your External Service Account.
    //         Some External Services may charge you sales tax, depending on where
    //         you live, which may change from time to time.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <p className="">
    //         If your External Service Purchase includes an automatically renewing
    //         subscription, your External Service Account will continue to be
    //         periodically charged for the subscription until you cancel. After
    //         your initial subscription commitment period, and again after any
    //         subsequent subscription period, the subscription will automatically
    //         continue for the price and time period you agreed to when
    //         subscribing. If you received a discounted promotional offer, your
    //         price may go up per the terms of that offer following the initial
    //         subscription period for any subsequent renewal period.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <p className="">
    //         To cancel a subscription: If you do not want your subscription to
    //         renew automatically, or if you want to change or terminate your
    //         subscription, you must log in to your External Service Account and
    //         follow instructions to manage or cancel your subscription, even if
    //         you have otherwise deleted your account with us or if you have
    //         deleted the App from your device. For example, if you subscribed
    //         using your Apple ID, cancellation is handled by Apple, not
    //         DarkFantasy. To cancel a purchase made with your Apple ID, go to
    //         Settings within the app , and follow the instructions to cancel. You
    //         can also request assistance at https://getsupport.apple.com.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <p className="">
    //         Similarly, if you subscribed on Google Play, cancellation is handled
    //         by Google. To cancel a purchase made through Google Play, launch the
    //         Google Play app on your mobile device and navigate to Settings. You
    //         can also request assistance at https://play.google.com. If you
    //         cancel a subscription, you may continue to use the canceled service
    //         until the end of your then-current subscription term. The
    //         subscription will not be renewed when your then-current term
    //         expires.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         If you initiate a chargeback or otherwise reverse a payment made
    //         with your External Service Account, DarkFantasy may terminate your
    //         account immediately in its sole discretion, on the basis that you
    //         have determined that you do not want a DarkFantasy subscription. In
    //         the event that your chargeback or other payment reversal is
    //         overturned, please contact Customer Care. DarkFantasy will retain
    //         all funds charged to your External Service Account until you cancel
    //         your subscription through your External Service Account. Certain
    //         users may be entitled to request a refund. See Section 8d below for
    //         more information.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold text-[#FF0000]">
    //       8b. INTERNAL PURCHASES AND SUBSCRIPTIONS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Internal Purchases, including subscriptions, are processed using the
    //         Payment Method you provide on the Website or App. Subscriptions
    //         automatically renew until you cancel.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         If you make an Internal Purchase, you agree to pay the prices
    //         displayed to you for the Services you've selected as well as any
    //         sales or similar taxes that may be imposed on your payments (and as
    //         may change from time to time), and you authorize DarkFantasy to
    //         charge the payment method you provide (your "Payment Method").
    //         DarkFantasy may correct any billing errors or mistakes even if we
    //         have already requested or received payment. If you initiate a
    //         chargeback or otherwise reverse a payment made with your Payment
    //         Method, DarkFantasy may terminate your account immediately in its
    //         sole discretion, on the basis that you have determined that you do
    //         not want a DarkFantasy subscription. In the event that your
    //         chargeback or other payment reversal is overturned, please contact
    //         Customer Care.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <p className="">
    //         If your Internal Purchase includes an automatically renewing
    //         subscription, your Payment Method will continue to be periodically
    //         charged for the subscription until you cancel. After your initial
    //         subscription commitment period, and again after any subsequent
    //         subscription period, your subscription will automatically continue
    //         for the price and time period you agreed to when subscribing, until
    //         you cancel.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc text-[#FF0000]">
    //       <p className="">
    //         To cancel a subscription, log in to the Website or App and go to the
    //         Account section. If you cancel a subscription, you may continue to
    //         use the cancelled service until the end of your then-current
    //         subscription term. The subscription will not be renewed when your
    //         then-current term expires.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         You may edit your Payment Method information by using the Settings
    //         tool and following the link to let your upgrade expire. If a payment
    //         is not successfully processed, due to expiration, insufficient
    //         funds, or otherwise, you remain responsible for any uncollected
    //         amounts and authorize us to continue billing the Payment Method, as
    //         it may be updated. This may result in a change to your payment
    //         billing dates.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         In addition, you authorize us to obtain updated or replacement
    //         expiration dates and card numbers for your credit or debit card as
    //         provided by your credit or debit card issuer. The terms of your
    //         payment will be based on your Payment Method and may be determined
    //         by agreements between you and the financial institution, credit card
    //         issuer, or other provider of your chosen Payment Method. If you
    //         reside outside of the Americas, you agree that your payment to
    //         DarkFantasy may be through MTCH Technology Services Limited, and if
    //         you reside in the United States, that your payment to DarkFantasy
    //         may be through Plentyoffish Media LLC. Certain users may be entitled
    //         to request a refund. See Section 8d below for more information.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">8c. VIRTUAL ITEMS</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Virtual items are non-refundable and subject to certain conditions.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         From time to time, you may have the opportunity to purchase a
    //         limited, personal, non-transferable, non-sublicensable, revocable
    //         license to use or access special limited-use features including but
    //         not limited to credits redeemable on virtual items, such as Super
    //         Like, Boost, Live Credits, or Gifts ("Virtual Item(s)") from
    //         DarkFantasy. You may only purchase Virtual Items from us or our
    //         authorized partners through our Services.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         Virtual Items represent a limited license right governed by this
    //         Agreement, and, except as otherwise prohibited by applicable law, no
    //         title or ownership in or to Virtual Items is being transferred or
    //         assigned to you. This Agreement should not be construed as a sale of
    //         any rights in Virtual Items.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         Any Virtual Item balance shown in your account does not constitute a
    //         real-world balance or reflect any stored value, but instead
    //         constitutes a measurement of the extent of your license. Virtual
    //         Items do not incur fees for non-use; however, the license granted to
    //         you in Virtual Items will terminate in accordance with the terms of
    //         this Agreement, on the earlier of when DarkFantasy ceases providing
    //         our Services, or your account is otherwise closed or terminated.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         DarkFantasy, in its sole discretion, reserves the right to charge
    //         fees for the right to access or use Virtual Items and/or may
    //         distribute Virtual Items with or without charge. DarkFantasy may
    //         manage, regulate, control, modify, or eliminate Virtual Items at any
    //         time, including taking actions that may impact the perceived value
    //         or purchase price, if applicable, of any Virtual Items. DarkFantasy
    //         shall have no liability to you or any third party in the event that
    //         DarkFantasy exercises any such rights. The transfer of Virtual Items
    //         is prohibited, and you shall not sell, redeem, or otherwise transfer
    //         Virtual Items to any person or entity. Virtual Items may only be
    //         redeemed through our Services
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc ">
    //       <p className="">
    //         ALL PURCHASES AND REDEMPTIONS OF VIRTUAL ITEMS MADE THROUGH OUR
    //         SERVICES ARE FINAL AND NON-REFUNDABLE. YOU ACKNOWLEDGE THAT
    //         DARKFANTASY IS NOT REQUIRED TO PROVIDE A REFUND FOR ANY REASON, AND
    //         THAT YOU WILL NOT RECEIVE MONEY OR OTHER COMPENSATION FOR UNUSED
    //         VIRTUAL ITEMS WHEN AN ACCOUNT IS CLOSED, WHETHER SUCH CLOSURE WAS
    //         VOLUNTARY OR INVOLUNTARY.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">8d. REFUNDS</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Generally, all purchases are nonrefundable. Special terms for
    //         refunds apply in the EU, EEA, UK, Switzerland, Korea, and Israel.
    //         Special terms for refunds also apply in Arizona, California,
    //         Colorado, Connecticut, Illinois, Iowa, Minnesota, New York, North
    //         Carolina, Ohio, Rhode Island, and Wisconsin.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Generally, all purchases are final and nonrefundable, and there are
    //         no refunds or credits for partially used periods, except if the laws
    //         applicable in your jurisdiction provide for refunds
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Your Right to Cancel - You may cancel your subscription, without
    //         penalty or obligation, at any time prior to midnight of the third
    //         business day following the date you subscribed. In the event that
    //         you die before the end of your subscription period, your estate
    //         shall be entitled to a refund of that portion of any payment you had
    //         made for your subscription which is allocable to the period after
    //         your death. In the event that you become disabled (such that you are
    //         unable to use our Services) before the end of your subscription
    //         period, you shall be entitled to a refund of that portion of any
    //         payment you had made for your subscription which is allocable to the
    //         period after your disability by providing the Company notice in the
    //         same manner as you request a refund as described below
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         If any of the above apply to you and you subscribed using your Apple
    //         ID, your refund requests are handled by Apple, not DarkFantasy. To
    //         request a refund, please contact your External Service directly; for
    //         example using your Apple device, go to Settings {">"} iTunes & App
    //         Stores {">"} [click on your Apple ID] {">"} View Apple ID {">"}{" "}
    //         Purchase History. Find the transaction and select "Report a
    //         Problem." You can also request a refund
    //         at https://getsupport.apple.com. For any other purchase, please
    //         contact DarkFantasy Customer Service with your order number (see
    //         your confirmation email) by mailing or delivering a signed and dated
    //         notice which states that you, the buyer, are canceling this
    //         Agreement, or words of similar effect. Please also include the email
    //         address or telephone number associated with your account along with
    //         your order number. This notice shall be sent to:
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">DarkFantasy, support@darkfantasy.club</p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       9. ACCOUNT TERMINATION
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         If you no longer wish to use our Services, or if we terminate your
    //         account for any reason, here's what you need to know.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         You can delete your account at any time by logging into the Website
    //         or App, going to "Settings", clicking "Delete Account", and
    //         following the instructions to to complete the deletion process
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         However, you will need to cancel / manage any External Service
    //         Purchases through your External Service Account (e.g., iTunes,
    //         Google Play) to avoid additional billing
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DarkFantasy reserves the right to investigate and, if appropriate,
    //         suspend or terminate your account without a refund if DarkFantasy
    //         believes that you have violated these Terms, misused our Services,
    //         or behaved in a way that DarkFantasy regards as inappropriate or
    //         unlawful, on or off our Services. We reserve the right to make use
    //         of any personal, technological, legal, or other means available to
    //         enforce the Terms, at any time without liability and without the
    //         obligation to give you prior notice, including, but not limited to,
    //         preventing you from accessing the Services
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         If your account is terminated by you or by DarkFantasy for any
    //         reason, these Terms continue and remain enforceable between you and
    //         DarkFantasy, and you will not be entitled to any refund for
    //         purchases made. Your information will be maintained and deleted in
    //         accordance with our <Link href={"/privacy-policy"}>Privacy Policy</Link>.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       10. NO CRIMINAL BACKGROUND OR IDENTITY VERIFICATION CHECKS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy does not conduct criminal background or identity
    //         verification checks on its users. Though DarkFantasy strives to
    //         encourage a respectful user experience, it is not responsible for
    //         the conduct of any user on or off the Service. Use your best
    //         judgment when interacting with others and review our Safety Tips.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         YOU UNDERSTAND THAT DARKFANTASY DOES NOT CONDUCT CRIMINAL BACKGROUND
    //         OR IDENTITY VERIFICATION CHECKS ON ITS USERS OR OTHERWISE INQUIRE
    //         INTO THE BACKGROUND OF ITS USERS.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DARKFANTASY MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
    //         CONDUCT, IDENTITY, HEALTH, PHYSICAL CONDITION, INTENTIONS,
    //         LEGITIMACY, OR VERACITY OF USERS. DARKFANTASY RESERVES THE RIGHT TO
    //         CONDUCT - AND YOU AUTHORIZE DARKFANTASY TO CONDUCT - ANY CRIMINAL
    //         BACKGROUND CHECK OR OTHER SCREENINGS (SUCH AS SEX OFFENDER REGISTER
    //         SEARCHES) AT ANY TIME USING AVAILABLE PUBLIC RECORDS, AND YOU AGREE
    //         THAT ANY INFORMATION YOU PROVIDE MAY BE USED FOR THAT PURPOSE. IF
    //         THE COMPANY DECIDES TO CONDUCT ANY SCREENING THROUGH A CONSUMER
    //         REPORTING AGENCY, YOU HEREBY AUTHORIZE THE COMPANY TO OBTAIN AND USE
    //         A CONSUMER REPORT ABOUT YOU TO DETERMINE YOUR ELIGIBILITY UNDER
    //         THESE TERMS.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         YOU ARE SOLELY RESPONSIBLE FOR YOUR INTERACTIONS WITH OTHER USERS.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         WE CANNOT AND DO NOT GUARANTEE YOUR SAFETY AND ARE NOT A SUBSTITUTE
    //         FOR FOLLOWING THE SAFETY TIPS AND OTHER SENSIBLE SAFETY
    //         PRECAUTIONS. ALWAYS USE YOUR BEST JUDGMENT AND TAKE APPROPRIATE
    //         SAFETY PRECAUTIONS WHEN COMMUNICATING WITH OR MEETING NEW PEOPLE.
    //         COMMUNICATIONS RECEIVED THROUGH THE SERVICE, INCLUDING AUTOMATIC
    //         NOTIFICATIONS SENT BY DARKFANTASY, MAY RESULT FROM USERS ENGAGING
    //         WITH THE SERVICE FOR IMPROPER PURPOSES, INCLUDING FRAUD, ABUSE,
    //         HARASSMENT, OR OTHER SUCH IMPROPER BEHAVIOR.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Though DarkFantasy strives to encourage a respectful user
    //         experience, it is not responsible for the conduct of any user on or
    //         off the Service. You agree to use caution in all interactions with
    //         other users, particularly if you decide to communicate off the
    //         Service or meet in person.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">11. DISCLAIMER</div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy's Services are provided "as is" and we do not make, and
    //         cannot make, any representations about the content or features of
    //         our Services or Member Content.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DARKFANTASY PROVIDES OUR SERVICES ON AN "AS IS" AND "AS AVAILABLE"
    //         BASIS AND TO THE EXTENT PERMITTED BY APPLICABLE LAW, GRANTS NO
    //         WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY OR
    //         OTHERWISE WITH RESPECT TO OUR SERVICES (INCLUDING ALL CONTENT
    //         CONTAINED THEREIN), INCLUDING, WITHOUT LIMITATION, ANY IMPLIED
    //         WARRANTIES OF SATISFACTORY QUALITY, MERCHANTABILITY, FITNESS FOR A
    //         PARTICULAR PURPOSE OR NON-INFRINGEMENT. DARKFANTASY DOES NOT
    //         REPRESENT OR WARRANT THAT (A) OUR SERVICES WILL BE UNINTERRUPTED,
    //         SECURE, OR ERROR FREE, (B) ANY DEFECTS OR ERRORS IN OUR SERVICES
    //         WILL BE DISCOVERED OR CORRECTED, OR (C) THAT ANY CONTENT OR
    //         INFORMATION YOU OBTAIN ON OR THROUGH OUR SERVICES WILL BE ACCURATE,
    //         COMPLETE, CURRENT OR APPROPRIATE FOR YOUR PURPOSES. FURTHERMORE,
    //         DARKFANTASY MAKES NO GUARANTEES AS TO THE NUMBER OF ACTIVE USERS AT
    //         ANY TIME; USERS' ABILITY OR DESIRE TO COMMUNICATE WITH OR MEET YOU,
    //         OR THE ULTIMATE COMPATIBILITY WITH OR CONDUCT BY USERS YOU MEET
    //         THROUGH THE SERVICES.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DARKFANTASY ASSUMES NO RESPONSIBILITY FOR ANY CONTENT THAT YOU OR
    //         ANOTHER USER OR THIRD PARTY POSTS, SENDS, RECEIVES, OR ACTS ON
    //         THROUGH OUR SERVICES, NOR DOES DARKFANTASY ASSUME ANY RESPONSIBILITY
    //         FOR THE IDENTITY, INTENTIONS, LEGITIMACY, OR VERACITY OF ANY USERS
    //         WITH WHOM YOU MAY COMMUNICATE WITH THROUGH DARKFANTASY. ANY MATERIAL
    //         DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF OUR SERVICES IS
    //         ACCESSED AT YOUR OWN DISCRETION AND RISK. DARKFANTASY IS NOT
    //         RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER HARDWARE, COMPUTER
    //         SOFTWARE, OR OTHER EQUIPMENT OR TECHNOLOGY INCLUDING, BUT WITHOUT
    //         LIMITATION, DAMAGE FROM ANY SECURITY BREACH OR FROM ANY VIRUS, BUGS,
    //         TAMPERING, HACKING, FRAUD, ERROR, OMISSION, INTERRUPTION, DEFECT,
    //         DELAY IN OPERATION OR TRANSMISSION, COMPUTER LINE OR NETWORK
    //         FAILURE, OR ANY OTHER TECHNICAL OR OTHER DISRUPTION OR MALFUNCTION.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       12. DIGITAL MILLENNIUM COPYRIGHT ACT
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         We take copyright infringement very seriously. We ask you to help us
    //         to ensure we address it promptly and effectively.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DarkFantasy has adopted the following policy towards copyright
    //         infringement in accordance with the Digital Millennium Copyright Act
    //         (the "DMCA"). If you believe any Member Content or Our Content
    //         infringes upon your intellectual property rights, please submit a
    //         notification alleging such infringement ("DMCA Takedown Notice")
    //         including the following
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li className="">
    //         A physical or electronic signature of a person authorized to act on
    //         behalf of the owner of an exclusive right that is allegedly
    //         infringed; .
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li className="">
    //         Identification of the copyrighted work claimed to have been
    //         infringed, or, if multiple copyrighted works at a single online site
    //         are covered by a single notification, a representative list of such
    //         works;.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li className="">
    //         Information reasonably sufficient to permit the service provider to
    //         contact you, such as an address, telephone number, and, if
    //         available, an electronic mail;
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li className="">
    //         A statement that you have a good faith belief that use of the
    //         material in the manner complained of is not authorized by the
    //         copyright owner, its agent, or the law; and .
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li className="">
    //         A statement that, under penalty of perjury, the information in the
    //         notification is accurate and you are authorized to act on behalf of
    //         the owner of the exclusive right that is allegedly infringed.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DarkFantasy will terminate the accounts of repeat infringers.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       13. ADS AND THIRD-PARTY CONTENT
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         You may see ads and third-party promotions on our Services.
    //         DarkFantasy does not endorse and isn’t responsible for your
    //         interactions with those products or services.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Our Services may contain advertisements and promotions offered by
    //         third parties and links to other websites or resources.  In
    //         addition, our Services may allow you to watch an advertisement in
    //         exchange for Virtual Items; DarkFantasy does not guarantee that you
    //         will always be eligible to watch such advertisements, or that any
    //         such advertisements will be available.  DarkFantasy may also provide
    //         non-commercial links or references to third parties within its
    //         content. DarkFantasy is not responsible for the availability (or
    //         lack of availability) of any external websites or resources or their
    //         content. Furthermore, DarkFantasy is not responsible for, and does
    //         not endorse, any products or services that may be offered by
    //         third-party websites or resources. If you choose to interact with
    //         the third parties made available through our Services, such party's
    //         terms will govern their relationship with you. DarkFantasy is not
    //         responsible or liable for such third parties' terms or actions.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       14. LIMITATION OF LIABILITY
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         DarkFantasy's liability is limited to the maximum extent allowed by
    //         applicable law.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
    //         DARKFANTASY, ITS AFFILIATES, EMPLOYEES, LICENSORS, OR SERVICE
    //         PROVIDERS BE LIABLE FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY,
    //         INCIDENTAL, SPECIAL, PUNITIVE, FIXED, OR ENHANCED DAMAGES,
    //         INCLUDING, WITHOUT LIMITATION, LOSS OF PROFITS, WHETHER INCURRED
    //         DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER
    //         INTANGIBLE LOSSES, RESULTING FROM: (I) YOUR ACCESS TO OR USE OF OR
    //         INABILITY TO ACCESS OR USE THE SERVICES, (II) THE CONDUCT OR CONTENT
    //         OF ANY USERS OR THIRD PARTIES ON OR THROUGH ANY OF OUR AFFILIATES’
    //         SERVICES OR IN CONNECTION WITH THE SERVICES; OR (III) ANY
    //         UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR CONTENT, EVEN IF
    //         DARKFANTASY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. TO
    //         THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL
    //         DARKFANTASY'S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS RELATING TO
    //         THE SERVICES EXCEED THE GREATER OF (A) $100 USD OR (B) THE AMOUNT
    //         PAID, IF ANY, BY YOU TO DARKFANTASY FOR THE SERVICES DURING THE
    //         TWENTY-FOUR (24) MONTH PERIOD IMMEDIATELY PRECEDING THE DATE THAT
    //         YOU FIRST FILE A LAWSUIT, ARBITRATION OR ANY OTHER LEGAL PROCEEDING
    //         AGAINST DARKFANTASY, WHETHER STATUTORY, IN LAW OR IN EQUITY, IN ANY
    //         TRIBUNAL. THE DAMAGES LIMITATION SET FORTH IN THE IMMEDIATELY
    //         PRECEDING SENTENCE APPLIES (i) REGARDLESS OF THE GROUND UPON WHICH
    //         LIABILITY IS BASED (WHETHER DEFAULT, CONTRACT, TORT, STATUTE, OR
    //         OTHERWISE), (ii) IRRESPECTIVE OF THE TYPE OF BREACH OF RIGHTS,
    //         PRIVILEGES, OR OBLIGATIONS, AND (iii) WITH RESPECT TO ALL EVENTS,
    //         THE SERVICE, AND THIS AGREEMENT.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         THE LIMITATION OF LIABILITY PROVISIONS SET FORTH IN THIS SECTION 14
    //         SHALL APPLY EVEN IF YOUR REMEDIES UNDER THIS AGREEMENT FAIL WITH
    //         RESPECT TO THEIR ESSENTIAL PURPOSE.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OF CERTAIN DAMAGES,
    //         SO SOME OR ALL OF THE LIMITATIONS IN THIS SECTION MAY NOT APPLY TO
    //         YOU.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15. DISPUTE RESOLUTION SECTION
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         In the unlikely event that we have a legal dispute, here is how the
    //         Parties agree to proceed, except where prohibited by applicable law.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Any Subsection in this Dispute Resolution Section that is prohibited
    //         by law shall not apply to the users residing in that jurisdiction,
    //         including Subsections 15b, 15c, 15d, and 15e, which shall not apply
    //         to users residing within the EU, EEA, UK, or Switzerland. The online
    //         dispute settlement platform of the European Commission is available
    //         under http://ec.europa.eu/odr. DarkFantasy does not take part in
    //         dispute settlement procedures in front of a consumer arbitration
    //         entity for users residing in the EU, EEA, UK, or Switzerland.
    //       </p>
    //     </ul>
    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15a. INFORMAL DISPUTE RESOLUTION PROCESS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         If you are dissatisfied with our Services for any reason, please
    //         contact DarkFantasy Customer Service first so we can try to resolve
    //         your concerns without the need of outside assistance. If you choose
    //         to pursue a dispute, claim or controversy against DarkFantasy, these
    //         terms will apply. For purposes of this Dispute Resolution Process
    //         and Arbitration Procedures set forth in Section 15, “DarkFantasy”
    //         shall include our affiliates, employees, licensors, and service
    //         providers.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         DarkFantasy values its relationship with you and appreciates the
    //         mutual benefit realized from informally resolving Disputes.
    //         “Dispute” is any dispute, claim, or controversy between you and
    //         DarkFantasy that arises from or related in any way to this Agreement
    //         (including any alleged breach of this Agreement), the Service, or
    //         our relationship with you. “Dispute” as used in this Agreement shall
    //         have the broadest possible meaning and include claims that arose
    //         before the existence of this or any prior Agreement and claims that
    //         arise during the term of this Agreement or after the termination of
    //         this Agreement (unless this Agreement is superseded by a subsequent
    //         Agreement entered into by you and DarkFantasy). If you have a
    //         Dispute with DarkFantasy (“Your Dispute”), before formally pursuing
    //         Your Dispute in arbitration or small claims court, you agree to
    //         first (send a detailed notice (“Notice”) to CT Corporation, 1209
    //         Orange Street, City of Wilmington, County of New Castle, Delaware
    //         19801, USA. If DarkFantasy has a Dispute with you (“DarkFantasy’s
    //         Dispute"), DarkFantasy agrees to first send a Notice to you at your
    //         most recent email address on file with us, or if no email address is
    //         on file, other contact information associated with your account.
    //         Your Notice must contain all of the following information: (1) your
    //         full name; (2) information that enables DarkFantasy to identify your
    //         account, including a picture or screenshot of your profile, your
    //         address, mobile phone number, email address, and date of birth you
    //         used to register your account if any; and (3) a detailed description
    //         of your Dispute, including the nature and factual basis of your
    //         claim(s) and the relief you are seeking with a corresponding
    //         calculation of your alleged damages (if any). You must personally
    //         sign this Notice for it to be effective. DarkFantasy’s Dispute
    //         Notice must likewise set forth a detailed description of
    //         DarkFantasy’s Dispute, which shall include the nature and factual
    //         basis of its claim(s) and the relief it is seeking, with a
    //         corresponding calculation of our damages (if any). You and
    //         DarkFantasy agree to then negotiate in good faith in an effort to
    //         resolve the Dispute. As part of these good faith negotiations,
    //         DarkFantasy may request a telephone conference with you to discuss
    //         Your Dispute, and you agree to personally participate, with your
    //         attorney if you’re represented by counsel. Likewise, you may request
    //         a telephone conference to discuss DarkFantasy’s Dispute with you,
    //         and DarkFantasy agrees to have one representative participate. (For
    //         the avoidance of doubt, DarkFantasy’s termination of your account,
    //         as set forth in Section 4 above, is not DarkFantasy’s Dispute with
    //         you.) This informal process should lead to a resolution of the
    //         Dispute. However, if the Dispute is not resolved within 60 days
    //         after receipt of a fully completed Notice and the Parties have not
    //         otherwise mutually agreed to an extension of this informal dispute
    //         resolution time period, you or DarkFantasy may initiate an
    //         arbitration (subject to a Party’s right to elect small claims court
    //         as provided below).
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         Completion of this informal dispute resolution is a condition
    //         precedent to filing any demand for arbitration or small claims court
    //         action. Failure to do so is a breach of this Agreement. The statute
    //         of limitations and any filing fee deadlines will be tolled while you
    //         and DarkFantasy engage in this informal dispute resolution process.
    //         Unless prohibited by applicable law, the arbitration provider,
    //         National Arbitration and Mediation (“NAM”), shall not accept or
    //         administer any demand for arbitration and shall administratively
    //         close any arbitration unless the Party bringing such demand for
    //         arbitration can certify in writing that the terms and conditions of
    //         this informal dispute resolution process were fully satisfied. A
    //         court of competent jurisdiction shall have authority to enforce this
    //         provision and to enjoin any arbitration proceeding or small claims
    //         court action accordingly.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         All offers, promises, conduct, and statements made in the course of
    //         the informal dispute resolution process by any party, its agents,
    //         employees, and attorneys are confidential and not admissible for any
    //         purpose in any subsequent proceeding (except to the extent required
    //         to certify in writing that the Party met the requirements of this
    //         informal dispute resolution process before commencing a NAM
    //         arbitration), provided that evidence that is otherwise admissible or
    //         discoverable shall not be rendered inadmissible or non-discoverable.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15b. INDIVIDUAL RELIEF: CLASS ACTION AND JURY TRIAL WAIVER
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         TO THE FULLEST EXTENT ALLOWABLE BY LAW, YOU AND DARKFANTASY EACH
    //         WAIVE THE RIGHT TO A JURY TRIAL AND THE RIGHT TO LITIGATE DISPUTES
    //         IN COURT IN FAVOR OF INDIVIDUAL ARBITRATION (EXCEPT FOR SMALL CLAIMS
    //         COURT AS PROVIDED ABOVE). YOU AND DARKFANTASY EACH WAIVE THE RIGHT
    //         TO FILE OR PARTICIPATE IN A CLASS ACTION AGAINST THE OTHER OR
    //         OTHERWISE TO SEEK RELIEF ON A CLASS BASIS, INCLUDING ANY CURRENTLY
    //         PENDING ACTIONS AGAINST DARKFANTASY. TO THE FULLEST EXTENT ALLOWABLE
    //         BY LAW, THERE SHALL BE NO RIGHT OR AUTHORITY FOR ANY CLAIMS TO BE
    //         ARBITRATED OR LITIGATED ON A CLASS, COLLECTIVE, REPRESENTATIVE,
    //         CONSOLIDATED, OR PRIVATE ATTORNEY GENERAL BASIS. THE ARBITRATOR CAN
    //         AWARD THE SAME RELIEF AVAILABLE IN COURT PROVIDED THAT THE
    //         ARBITRATOR MAY ONLY AWARD FINAL RELIEF (INCLUDING INJUNCTIVE OR
    //         DECLARATORY RELIEF) IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF
    //         AND ONLY TO THE EXTENT NECESSARY TO PROVIDE FINAL RELIEF WARRANTED
    //         BY THAT INDIVIDUAL PARTY’S CLAIM. THE ARBITRATOR MAY NOT AWARD FINAL
    //         RELIEF FOR, AGAINST, OR ON BEHALF OF ANYONE WHO IS NOT A PARTY TO
    //         THE ARBITRATION ON A CLASS, COLLECTIVE, REPRESENTATIVE, OR PRIVATE
    //         ATTORNEY GENERAL BASIS. IF A COURT DETERMINES THAT ANY OF THESE
    //         PROHIBITIONS IN THIS PARAGRAPH ARE UNENFORCEABLE AS TO A PARTICULAR
    //         CLAIM OR REQUEST FOR RELIEF (SUCH AS A REQUEST FOR PUBLIC INJUNCTIVE
    //         RELIEF), AND ALL APPEALS OF THAT DECISION ARE AFFIRMED AND SUCH
    //         DECISION BECOMES FINAL, THEN YOU AND DARKFANTASY AGREE THAT THAT
    //         PARTICULAR CLAIM OR REQUEST FOR RELIEF SHALL PROCEED IN COURT BUT
    //         SHALL BE STAYED PENDING INDIVIDUAL ARBITRATION OF THE REMAINING
    //         CLAIMS FOR RELIEF THAT YOU HAVE BROUGHT. IF THIS SPECIFIC PARAGRAPH
    //         IS FOUND TO BE UNENFORCEABLE, THEN THE ENTIRETY OF THIS ARBITRATION
    //         PROVISION (EXCEPT FOR THE JURY TRIAL WAIVER AND THE INFORMAL DISPUTE
    //         RESOLUTION PROCESS) SHALL BE NULL AND VOID. THIS PARAGRAPH IS AN
    //         ESSENTIAL PART OF THIS ARBITRATION AGREEMENT.
    //       </p>
    //     </ul>
    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15c. DISPUTE RESOLUTION THROUGH ARBITRATION OR SMALL CLAIMS COURT
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Any Dispute (that is not resolved informally by DarkFantasy Customer
    //         Service or as provided under subsection 15a above) shall be
    //         exclusively resolved through BINDING INDIVIDUAL ARBITRATION except
    //         as specifically provided otherwise in this Dispute Resolution
    //         Section. Notwithstanding the foregoing, either you or DarkFantasy
    //         may elect to have an individual claim heard in small claims court.
    //         If the request to proceed in small claims court is made after an
    //         arbitration has been initiated but before an arbitrator has been
    //         appointed, such arbitration shall be administratively closed by the
    //         arbitration provider (e.g., NAM). Any controversy over the small
    //         claims court’s jurisdiction shall be exclusively determined by such
    //         small claims court. No determinations made by a small claims court
    //         shall have preclusive effect in any proceeding involving DarkFantasy
    //         and anyone other than you. In the event such small claims court
    //         specifically determines that it is without jurisdiction to hear the
    //         Dispute, you and DarkFantasy shall arbitrate the Dispute under the
    //         terms of this Agreement. All other issues (except as otherwise
    //         provided herein) are exclusively for the Arbitrator to decide,
    //         including but not limited to scope and enforceability of this
    //         Dispute Resolution Section and including questions of arbitrability,
    //         any request to proceed in small claims court that is made after an
    //         arbitrator has been appointed, and any dispute as to whether either
    //         Party is in breach or default of the Dispute Resolution Section or
    //         has explicitly or implicitly waived the right to arbitrate. If you
    //         or DarkFantasy challenges the small claims court election in your
    //         Dispute, and a court of competent jurisdiction determines that the
    //         small claims court election is unenforceable, then such election
    //         shall be severed from this Agreement as to your Dispute. However,
    //         such court determination shall not be considered or deemed binding
    //         or have preclusive effect with respect to any proceeding involving
    //         DarkFantasy and anyone other than you.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Any court proceeding to enforce this Dispute Resolution Section 15,
    //         including any proceeding to confirm, modify, or vacate an
    //         arbitration award, must be commenced in accordance with Section 17.
    //         In the event Dispute Resolution Section 15 is for any reason held to
    //         be unenforceable, any litigation against DarkFantasy (except for
    //         small claims court actions) may be commenced only in the federal or
    //         state courts located in Dallas County, Texas. You hereby irrevocably
    //         consent to those courts’ exercise of personal jurisdiction over you
    //         for such purposes and waive any claim that such courts constitute an
    //         inconvenient forum.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15d. INDIVIDUAL ARBITRATION AND MASS ARBITRATION PROTOCOLS
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         This subsection 15d applies to Disputes that are submitted to NAM
    //         after fully completing the informal dispute resolution process
    //         described in subsection 15a above and when no small claims court
    //         election is made by you or DarkFantasy. Any arbitration between you
    //         and DarkFantasy shall be administered by NAM in accordance with
    //         NAM’s operative Comprehensive Dispute Resolution Rules and
    //         Procedures (the “NAM Rules”) in effect at the time any demand for
    //         arbitration is filed with NAM, as modified by this Dispute
    //         Resolution Section 15. For a copy of the NAM Rules, please
    //         visit https://www.namadr.com/resources/rules-fees-forms or contact
    //         NAM at NAM’s National Processing Center at 990 Stewart Avenue,
    //         1st Floor, Garden City, NY 11530 or at email address
    //         at commercial@namadr.com. If NAM is unable or unwilling to perform
    //         its duties under this Agreement, the Parties shall mutually agree on
    //         an alternative administrator that will replace NAM and assume NAM’s
    //         role consistent with this Agreement and this Agreement will govern
    //         to the extent it conflicts with the arbitration provider’s rules. If
    //         the Parties are unable to agree, they will petition a court of
    //         competent jurisdiction to appoint an arbitration provider who will
    //         assume NAM’s duties under this Agreement and this Agreement will
    //         govern to the extent it conflicts with the arbitration provider’s
    //         rules.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         The Parties agree that the following procedures will apply to any
    //         Arbitrations initiated under this Dispute Resolution Section
    //         (subject to either Party’s small claims court election as described
    //         above):
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Commencing an Arbitration </b> – To initiate an arbitration, you
    //         or DarkFantasy shall send to NAM a demand for arbitration (“Demand
    //         for Arbitration”) that describes the claim(s) and request for relief
    //         in detail, consistent with the requirements in this Agreement and
    //         NAM Rules. If you send a Demand for Arbitration, you shall also send
    //         it to DarkFantasy at CT Corporation, 1209 Orange Street, City of
    //         Wilmington, County of New Castle, Delaware 19801, USA, within 7 days
    //         of delivery of the Demand for Arbitration to NAM. If DarkFantasy
    //         sends a Demand for Arbitration, we will also send it to your mailing
    //         address on file with us within the same 7-day period. If your
    //         mailing address is unavailable, we will send it to your email
    //         address on file, or if no email address is on file, other contact
    //         information associated with your account. The arbitration provider
    //         shall not accept or administer any demand for arbitration and shall
    //         administratively close any such demand for arbitration that fails to
    //         certify in writing that the Party meets the requirements of Dispute
    //         Resolution Section 15 or if either Party elects small claims court
    //         as set forth above.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Fees  </b> – The payment of NAM fees shall be governed by the NAM
    //         Rules, except to the extent that the case is a part of a Mass Filing
    //         (as defined below) or the NAM fees and costs (including Arbitrator
    //         fees) paid by either Party are reallocated upon order of the
    //         Arbitrator following a determination that (a) either Party breached
    //         Section 15 of this Agreement, (b) such reallocation is called for
    //         under this Agreement, or (c) reallocation is otherwise permitted
    //         under applicable law. Upon a showing to DarkFantasy of your
    //         financial hardship we will consider a good faith request made by you
    //         to pay your portion of the applicable consumer portion of the filing
    //         fee. DarkFantasy is committed to ensuring that arbitration costs to
    //         consumers do not serve as a barrier to the adjudication of disputes.
    //         If DarkFantasy initiates an arbitration against you, we shall pay
    //         all NAM fees.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>The Arbitrator </b> – The arbitration shall be conducted by a
    //         single, neutral arbitrator (the “Claim Arbitrator”), as assisted by
    //         any Process Arbitrator appointed under NAM Rules. (The term
    //         “Arbitrator” applies to both the Claim Arbitrator and the Process
    //         Arbitrator). If a hearing is elected by either Party, the Arbitrator
    //         shall be in or close to the location in which you reside. The
    //         Arbitrator is bound by and shall adhere to this Agreement. In the
    //         event NAM Rules conflict with this Agreement, the terms of this
    //         Agreement shall control. If the Arbitrator determines that strict
    //         application of any term of Section 15 of this Agreement (except for
    //         the small claims election, which shall be determined by the small
    //         claims court) would result in a fundamentally unfair arbitration
    //         (the “Unfair Term”), then the Arbitrator shall have authority to
    //         modify the Unfair Term to the extent necessary to ensure a
    //         fundamentally fair arbitration that is consistent with the Terms of
    //         Use (the “Modified Term”). In determining the substance of a
    //         Modified Term, the Arbitrator shall select a term that comes closest
    //         to expressing the intention of the Unfair Term.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Dispositive Motions  </b> – The Parties agree that the Claim
    //         Arbitrator shall have the authority to consider dispositive motions
    //         without an oral evidentiary hearing. Dispositive motions may be
    //         requested under the following circumstances: (a) within 30 days
    //         after the Claim Arbitrator’s appointment, a Party may request to
    //         file a dispositive motion based upon the pleadings; and (b) no later
    //         than 30 days prior to the evidentiary hearing, a Party may request
    //         to file a dispositive motion for summary judgment based upon the
    //         Parties’ pleadings and the evidence submitted
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Discovery </b> – Each Party may (a) serve up to five requests for
    //         relevant, non-privileged documents from the other Party; and
    //         (b) request that the other Party provide verified responses to no
    //         more than 5 relevant interrogatories (including subparts). Unless
    //         both Parties agree otherwise, no other forms of discovery (including
    //         depositions) may be utilized. Any such discovery requests must be
    //         served on the other Party within 21 days after the Claim
    //         Arbitrator’s appointment. The responding Party shall provide the
    //         requesting Party with all responsive, non-privileged documents,
    //         responses signed by the Party themselves to the requested
    //         interrogatories, and/or any objections to the requests within 30
    //         days after receipt of the requests, or, in the event of an objection
    //         to any discovery request, 30 days after the Claim Arbitrator
    //         resolves the dispute. In the event either Party requests that the
    //         Claim Arbitrator consider a dispositive motion on the pleadings,
    //         such written discovery response deadlines shall be extended until 30
    //         days following the Claim Arbitrator’s final decision on such
    //         dispositive motion. If after meeting and conferring the Parties
    //         cannot agree on a dispute  about discovery or a request for
    //         extension, that matter shall be submitted promptly to the Claim
    //         Arbitrator for resolution. In ruling on any discovery matter, the
    //         Claim Arbitrator shall take into consideration the nature, amount,
    //         and scope of the underlying arbitration claim, the cost and other
    //         effort that would be involved in providing the requested discovery,
    //         the case schedule, and the extent to which the requested discovery
    //         is truly necessary for the adequate preparation of a claim or
    //         defense, and NAM’s goal of efficient and economical resolutions. The
    //         burden of establishing good cause for any additional discovery is on
    //         the moving Party.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Confidentiality</b> – Upon either Party’s request, the Arbitrator
    //         will issue an order requiring that confidential information of
    //         either Party disclosed during the arbitration (whether in documents
    //         or orally) may not be used or disclosed except in connection with
    //         the arbitration or a proceeding to enforce the arbitration award and
    //         that any permitted court filing of confidential information must be
    //         done under seal.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Arbitration Hearing </b> – You and DarkFantasy are entitled to a
    //         fair evidentiary hearing (i.e. trial) before the Claim Arbitrator.
    //         Arbitration proceedings are usually simpler, less costly, and more
    //         streamlined than trials and other judicial proceedings. The Parties
    //         agree to waive all oral hearings and instead submit all disputes to
    //         the Claim Arbitrator for an award based on written submissions and
    //         other evidence as the Parties may agree, unless a Party requests an
    //         oral hearing at least within 10 days after the Respondent files a
    //         response. If an oral evidentiary hearing is requested, both Parties
    //         must be personally present at the hearing, regardless of whether
    //         either Party has retained counsel. Both Parties must personally
    //         attend the hearing. Either Party’s failure to personally attend the
    //         hearing, without a continuance ordered by the Claim Arbitrator for
    //         good cause, will result in a default judgment taken against that
    //         Party.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Arbitration Award  </b> – Regardless of the format of the
    //         arbitration, the Claim Arbitrator shall provide a reasoned decision,
    //         in writing within 30 days after the hearing or, if no hearing is
    //         held, within 30 days after any rebuttal or supplemental statements
    //         are due. The decision must clearly specify the relief, if any,
    //         awarded and contain a brief statement of the reasons for the award.
    //         The arbitration award is binding only between you and DarkFantasy
    //         and will not have any preclusive effect in another arbitration or
    //         proceeding that involves a different Party. The Claim Arbitrator
    //         may, however, choose to consider rulings from other arbitrations
    //         involving a different Party. The Arbitrator may award fees and costs
    //         as provided by the NAM Rules or to the extent such fees and costs
    //         could be awarded in court. This includes but is not limited to the
    //         ability of the Arbitrator to award fees and costs if the Arbitrator
    //         determines that a claim or defense is frivolous or was brought for
    //         an improper purpose, for the purpose of harassment, or in bad faith.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Offer of Settlement   </b> – The Respondent may, but is not
    //         obligated to, make a written settlement offer to the opposing Party
    //         any time before the evidentiary hearing or, if a dispositive motion
    //         is permitted, prior to the dispositive motion being granted. The
    //         amount or terms of any settlement offer may not be disclosed to the
    //         Claim Arbitrator until after the Claim Arbitrator issues an award on
    //         the claim. If the award is issued in the opposing Party’s favor and
    //         is less than the Respondent’s settlement offer or if the award is in
    //         the Respondent’s favor, the opposing Party must pay the Respondent’s
    //         costs incurred after the offer was made, including any attorney’s
    //         fees. If any applicable statute or case law prohibits the flipping
    //         of costs incurred in the arbitration, then the offer in this
    //         provision shall serve to cease the accumulation of any costs that
    //         claimant may be entitled to for the cause of action under which it
    //         is suing.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         <b>Mass Filing    </b> – – If, at any time, 25 or more similar
    //         demands for arbitration are asserted against DarkFantasy or related
    //         parties by the same or coordinated counsel or entities (“Mass
    //         Filing”), consistent with the definition and criteria of Mass
    //         Filings set forth in the NAM’s Mass Filing Supplemental Dispute
    //         Resolution Rules and Procedures (“NAM’s Mass Filing
    //         Rules”, available
    //         at https://www.namadr.com/resources/rules-fees-forms/), the
    //         additional protocols set forth below shall apply.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         If you or your counsel file a Demand for Arbitration that fits
    //         within the definition of Mass Filing referred to above, then you
    //         agree that your Demand for Arbitration shall be subject to the
    //         additional protocols set forth in this Mass Filing subsection. You
    //         also acknowledge that the adjudication of your Dispute might be
    //         delayed and that any applicable statute of limitations shall be
    //         tolled from the time at which the first cases are chosen to proceed
    //         until your case is chosen for a bellwether proceeding.
    //       </li>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         NAM’s Mass Filing Rules shall apply if your Dispute is deemed by
    //         NAM, in its sole discretion pursuant to its Rules and this Dispute
    //         Resolution Section, to be part of a Mass Filing. Such election for
    //         NAM’s Mass Filing Rules and related fee schedule must be made by
    //         either you or DarkFantasy in writing and submitted to NAM and all
    //         Parties.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         Bellwether Proceedings. Bellwether proceedings are encouraged by
    //         courts and arbitration administrators when there are multiple
    //         disputes involving similar claims against the same or related
    //         parties. For the first set of bellwether proceedings, counsel for
    //         the Mass Filings claimants (including you) and counsel for
    //         DarkFantasy shall each select 15 Demands for Arbitration (30 total)
    //         to proceed, and no more than those 30 arbitrations shall be filed,
    //         processed, adjudicated, or pending at such time, with each of the 30
    //         individual arbitrations presided over by a different Claim
    //         Arbitrator. During this time, no other Demands for Arbitration that
    //         are part of the Mass Filings may be filed, processed, adjudicated,
    //         or pending.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         If the Parties are unable to resolve the remaining Demands for
    //         Arbitration after the first set of bellwether proceedings are
    //         arbitrated or otherwise resolved, then the Parties will continue to
    //         engage in the bellwether proceedings for an additional four (4)
    //         rounds, increasing the amount of Demands for Arbitration selected by
    //         counsel for each Party by five (5) with each round, so that during
    //         the second round, counsel for the Claimants and counsel for
    //         DarkFantasy shall each select an additional 20 Demands for
    //         Arbitration (40 total), in the third round, 25 each (50 total), in
    //         the fourth round, 30 each (60 total), and in the fifth round 35 each
    //         (70 total).  Within each round, each of the individual arbitrations
    //         is to be presided over by a different Claim Arbitrator, and during
    //         these additional rounds of the bellwether proceedings, no other
    //         Demands for Arbitration that are part of the Mass Filings may be
    //         filed, processed, or adjudicated once selected by the Procedural
    //         Arbitrator. Following the first round of bellwether proceedings, but
    //         before the second round of bellwether proceedings, counsel for the
    //         Parties shall participate in a global mediation, before a retired
    //         federal or state-court judge (unless the Parties agree otherwise),
    //         with DarkFantasy to pay the mediator’s fees. Following the second,
    //         third, fourth, and fifth rounds of bellwether proceedings, counsel
    //         for both parties should discuss additional mediation and seek out
    //         opportunities to resolve the remaining Demands for Arbitration, but
    //         will only proceed with mediation upon consent of counsel for all
    //         Parties.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         If the Parties are unable to resolve the remaining Demands for
    //         Arbitration after the fifth set of bellwether proceedings are
    //         arbitrated or otherwise resolved, and the Parties decide to not
    //         continue with additional rounds of bellwether proceedings, then
    //         counsel for the Claimants and counsel for DarkFantasy shall discuss
    //         with NAM a fair process for individually adjudicating the remaining
    //         Demands for Arbitration. Under this process, the Procedural
    //         Arbitrator will make the final decision on the number of Demands for
    //         Arbitration that can proceed individually at any time, as well as a
    //         method for selecting which Demands for Arbitration will proceed,
    //         taking into account the number of individual arbitrations that
    //         counsel for Claimants and counsel for DarkFantasy are able to
    //         reasonably manage at the same time, as well as the number of
    //         individual arbitrations that NAM is able to administer. A Demand for
    //         Arbitration that was not included in the bellwethering process will
    //         only be deemed filed, processed, or adjudicated once selected by the
    //         Procedural Arbitrator. At any time after the first set of Demands
    //         for Arbitration are resolved (30 Demands for Arbitration total), the
    //         Parties may agree to forgo the bellwether proceedings for any
    //         additional Demands for Arbitration deemed to be part of the Mass
    //         Filings. Fees associated with a Demand for Arbitration included in
    //         the Mass Filings, including fees owed by DarkFantasy and the
    //         Claimants (including you), shall only be due after the Demand for
    //         Arbitration is chosen to proceed as part of a set of bellwether
    //         proceedings, or after being selected by the Procedural Arbitrator to
    //         proceed upon completion of the bellwether proceedings, and therefore
    //         properly designated for filing, processing, and adjudication. The
    //         Parties are encouraged to meet and confer throughout this process
    //         regarding ways to streamline the proceedings, including discussion
    //         of potential ways to increase the number of Demands for Arbitration
    //         to be adjudicated in sets of staged bellwether proceedings. Either
    //         Party may negotiate with NAM as to reducing and deferring fees and
    //         streamlining procedures. If you are a Mass Filing claimant, any
    //         applicable statute of limitations (or other applicable limitations
    //         period) shall be tolled beginning when you initiate the informal
    //         dispute resolution process set forth in subsection 15a of the
    //         Agreement, and if the first Mass Filings’ Demands for Arbitration
    //         that are chosen for the initial set of bellwether proceedings have
    //         been filed, your claims will remain tolled until your Demand for
    //         Arbitration is either selected by counsel for the Parties in the
    //         bellwether proceedings or selected by the Procedural Arbitrator
    //         following completion of the bellwether proceedings. A court of
    //         competent jurisdiction located in a venue allowed under Section 17
    //         of the Agreement shall have the power to enforce this subsection.
    //       </li>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <li>
    //         {" "}
    //         You and DarkFantasy agree that we each value the integrity and
    //         efficiency of the arbitration and small claims court process and
    //         wish to employ the process for the fair resolution of genuine and
    //         sincere disputes between us. You and DarkFantasy acknowledge and
    //         agree to act in good faith to ensure the fair resolution of genuine
    //         and sincere Disputes. The Parties further agree that application of
    //         these Mass Filings procedures have been reasonably designed to
    //         result in an efficient and fair adjudication of such cases.
    //       </li>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       15e. FUTURE CHANGES AND RETROACTIVE APPLICATION
    //     </div>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p>
    //         {" "}
    //         This Dispute Resolution Section 15 applies to all Disputes between
    //         the Parties, including for any claims that accrued against you or
    //         DarkFantasy prior to the time of your consent to this Agreement and
    //         to any claims that accrue against you or DarkFantasy after your
    //         consent to this Agreement. Notwithstanding any provision in this
    //         Agreement to the contrary, you may elect to opt out of the
    //         retroactive application of this Dispute Resolution Section 15 as to
    //         claims that have accrued against you or against DarkFantasy prior to
    //         the time of your consent to this Agreement. You may opt out by
    //         sending us written notice, within 30 days of the time you consent to
    //         this Agreement, to the following email
    //         address: DarkFantasyoptout@darkfantasy.club. Please do not direct
    //         any customer support inquiries to support@darkfantasy.club, as they
    //         will not be addressed; such inquiries should be directed to
    //          customer support. You must include information sufficient to
    //         identify your account(s), such as the email address or phone number
    //         associated with your account(s), and should include a statement that
    //         you are opting out of the retroactive application of this Dispute
    //         Resolution Section 15. Please note: if you opt out of the
    //         retroactive application of this Dispute Resolution Section 15, you
    //         will still be subject to and bound by any Dispute Resolution
    //         Sections and Arbitration Procedures you previously agreed to,
    //         including any arbitration provisions, class action waivers, and
    //         retroactive application sections. Also, regardless of whether you
    //         opt out of the retroactive application of these changes, the Parties
    //         will resolve any claims that accrue against you or DarkFantasy after
    //         your consent to this Agreement in accordance with this Dispute
    //         Resolution Section.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">16. GOVERNING LAW</div>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         {" "}
    //         Texas law and the Federal Arbitration Act will apply to any Dispute
    //         (except where prohibited by law).
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         {" "}
    //         The laws of Texas, U.S.A., without regard to its conflict of laws
    //         rules, shall explicitly apply to any Dispute arising out of or
    //         relating to this Agreement or our Services, and the Dispute
    //         Resolution Process set forth in Section 15 shall be governed by the
    //         Federal Arbitration Act
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         {" "}
    //         In the EU and EEA, the choice of Texas governing law shall not apply
    //         only where a mandatory consumer protection law explicitly prohibits
    //         such choice of law provisions.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       17. VENUE/FORUM SELECTION
    //     </div>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         To the fullest extent allowable by law, any claims that are not
    //         arbitrated for any reason must be litigated in Dallas County, Texas
    //         (except for claims filed in small claims court, or for users
    //         residing in the EU, EEA, UK or Switzerland or another jurisdiction
    //         where prohibited by law).
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         Except where prohibited by law, including for users residing in the
    //         EU, EEA, UK or Switzerland, who may bring claims in their country of
    //         residence in accordance with applicable law, and except for claims
    //         that are heard in a small claims court as set forth in Section 15,
    //         any claims arising out of or relating to this Agreement (including
    //         any challenges to the class action waiver provision in subsection
    //         15b), to our Services, or to your relationship with DarkFantasy that
    //         for whatever reason are not required to be arbitrated or filed in
    //         small claims court, will be litigated exclusively in the federal or
    //         state courts located in Dallas County, Texas, U.S.A. You and
    //         DarkFantasy consent to the exercise of personal jurisdiction of
    //         courts in the State of Texas and waive any claim that such courts
    //         constitute an inconvenient forum.
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       18. INDEMNITY BY YOU
    //     </div>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         You agree to indemnify DarkFantasy if a claim is made against
    //         DarkFantasy due to your actions.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         You agree, to the extent permitted under applicable law, to
    //         indemnify, defend, and hold harmless DarkFantasy, our affiliates,
    //         and their and our respective officers, directors, agents, and
    //         employees from and against any and all complaints, demands, claims,
    //         damages, losses, costs, liabilities, and expenses, including
    //         attorney's fees, due to, arising out of, or relating in any way to
    //         your access to or use of our Services, Your Content, your conduct
    //         toward other users, or your breach of this Agreement. SOME
    //         JURISDICTIONS DO NOT ALLOW INDEMNIFICATION, SO SOME OR ALL OF THIS
    //         SECTION MAY NOT APPLY TO YOU.
    //       </p>
    //     </ul>
    //     <div className="text-[24px] mt-2 font-semibold ">
    //       19. ACCEPTANCE OF TERMS
    //     </div>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         By using our Services, you accept the Terms of this Agreement.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         By using our Services, whether through a mobile device, mobile
    //         application, or computer, you agree to be bound by (i) these Terms,
    //         which we may amend from time to time, (ii) our Privacy
    //         Policy, Cookie Policy, Community Guidelines, and Safety Tips (iii)
    //         any Additional Terms Upon Purchase. If you do not accept and agree
    //         to be bound by all of the terms of this Agreement, you are not
    //         entitled to use our Services.
    //       </p>
    //     </ul>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="">
    //         All pronouns and any variations thereof shall be deemed to refer to
    //         the masculine, feminine, neuter, singular or plural as the identity
    //         of the entities or persons referred to any require
    //       </p>
    //     </ul>

    //     <div className="text-[24px] mt-2 font-semibold ">
    //       20. ENTIRE AGREEMENT
    //     </div>
    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="font-semibold">
    //         This Agreement supersedes any previous agreements or
    //         representations.
    //       </p>
    //     </ul>

    //     <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //       <p className="mb-4">
    //         These Terms, with the <Link href={"/privacy-policy"}>Privacy Policy</Link>, Cookie Policy, Community
    //         Guidelines, and Safety Tips, and any Additional Terms Upon Purchase,
    //         contain the entire agreement between you and DarkFantasy regarding
    //         the use of our Services. The Terms supersede all previous
    //         agreements, representations, and arrangements between us, written or
    //         oral. If any provision of these Terms is held invalid, illegal, or
    //         otherwise unenforceable, the remainder of the Terms shall continue
    //         in full force and effect. The failure of the Company to exercise or
    //         enforce any right or provision of these Terms shall not constitute a
    //         waiver of such right or provision. You agree that your DarkFantasy
    //         account is non-transferable and all of your rights to your account
    //         and its content terminate upon your death, unless otherwise provided
    //         by law. Any rights and licenses granted hereunder, may not be
    //         transferred or assigned by you, but may be assigned by us without
    //         restriction. No agency, partnership, joint venture, fiduciary or
    //         other special relationship or employment is created as a result of
    //         these Terms, and you may not make any representations on behalf of
    //         or bind DarkFantasy in any manner.
    //       </p>
    //     </ul>
    //   </div>
    // </div>

    <div>
      <h2 className="text-xl font-semibold  justify-center flex mb-8 mt-8">
        TERMS OF SERVICE
      </h2>

      <h2 className="text-xl font-semibold mt-2 justify-center flex mb-8">
        - - - -
      </h2>
      <div>
        <h2 className="text-xl font-semibold mt-2">OVERVIEW</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            This website is operated by{" "}
            <span className="font-semibold"> Cariappa</span>. Throughout the
            site, the terms “we”, “us” and “our” refer to{" "}
            <span className="font-semibold"> Cariappa</span>.{" "}
            <span className="font-semibold"> Cariappa</span> offers this
            website, including all information, tools and services available
            from this site to you, the user, conditioned upon your acceptance of
            all terms, conditions, policies and notices stated here.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            By visiting our site and/ or purchasing something from us, you
            engage in our “Service” and agree to be bound by the following terms
            and conditions (“Terms of Service”, “Terms”), including those
            additional terms and conditions and policies referenced herein
            and/or available by hyperlink. These Terms of Service apply to all
            users of the site, including without limitation users who are
            browsers, vendors, customers, merchants, and/ or contributors of
            content.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any services. If these Terms of Service
            are considered an offer, acceptance is expressly limited to these
            Terms of Service.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Any new features or tools which are added to the current store shall
            also be subject to the Terms of Service. You can review the most
            current version of the Terms of Service at any time on this page. We
            reserve the right to update, change or replace any part of these
            Terms of Service by posting updates and/or changes to our website.
            It is your responsibility to check this page periodically for
            changes. Your continued use of or access to the website following
            the posting of any changes constitutes acceptance of those changes.
          </li>
        </ul>
      </div>

      {/* 2 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 1 - ONLINE STORE TERMS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your state or province of residence, or
            that you are the age of majority in your state or province of
            residence and you have given us your consent to allow any of your
            minor dependents to use this site.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You may not use our products for any illegal or unauthorized purpose
            nor may you, in the use of the Service, violate any laws in your
            jurisdiction (including but not limited to copyright laws).
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You must not transmit any worms or viruses or any code of a
            destructive nature.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            A breach or violation of any of the Terms will result in an
            immediate termination of your Services.
          </li>
        </ul>
      </div>
      {/* 3 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 2 - GENERAL CONDITIONS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right to refuse service to anyone for any reason at
            any time{" "}
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You understand that your content (not including credit card
            information), may be transferred unencrypted and involve (a)
            transmissions over various networks; and (b) changes to conform and
            adapt to technical requirements of connecting networks or devices.
            Credit card information is always encrypted during transfer over
            networks.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You agree not to reproduce, duplicate, copy, sell, resell or exploit
            any portion of the Service, use of the Service, or access to the
            Service or any contact on the website through which the service is
            provided, without express written permission by us.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            The headings used in this agreement are included for convenience
            only and will not limit or otherwise affect these Terms.
          </li>
        </ul>
      </div>

      {/* 4 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 3 - ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We are not responsible if information made available on this site is
            not accurate, complete or current. The material on this site is
            provided for general information only and should not be relied upon
            or used as the sole basis for making decisions without consulting
            primary, more accurate, more complete or more timely sources of
            information. Any reliance on the material on this site is at your
            own risk.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            This site may contain certain historical information. Historical
            information, necessarily, is not current and is provided for your
            reference only. We reserve the right to modify the contents of this
            site at any time, but we have no obligation to update any
            information on our site. You agree that it is your responsibility to
            monitor changes to our site.
          </li>
        </ul>
      </div>

      {/* 5 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 4 - MODIFICATIONS TO THE SERVICE AND PRICES
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Prices for our products are subject to change without notice.{" "}
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right at any time to modify or discontinue the
            Service (or any part or content thereof) without notice at any time.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We shall not be liable to you or to any third-party for any
            modification, price change, suspension or discontinuance of the
            Service
          </li>
        </ul>
      </div>

      {/* 6 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 5 - PRODUCTS OR SERVICES
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Certain products or services may be available exclusively online
            through the website. These products or services may have limited
            quantities and are subject to return or exchange only according to
            our Return Policy.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We have made every effort to display as accurately as possible the
            colors and images of our products that appear at the store. We
            cannot guarantee that your computer monitor's display of any color
            will be accurate.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right, but are not obligated, to limit the sales of
            our products or Services to any person, geographic region or
            jurisdiction. We may exercise this right on a case-by-case basis. We
            reserve the right to limit the quantities of any products or
            services that we offer. All descriptions of products or product
            pricing are subject to change at anytime without notice, at the sole
            discretion of us. We reserve the right to discontinue any product at
            any time. Any offer for any product or service made on this site is
            void where prohibited.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We do not warrant that the quality of any products, services,
            information, or other material purchased or obtained by you will
            meet your expectations, or that any errors in the Service will be
            corrected.
          </li>
        </ul>
      </div>

      {/* 7 */}
      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 6 - ACCURACY OF BILLING AND ACCOUNT INFORMATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right to refuse any order you place with us. We may,
            in our sole discretion, limit or cancel quantities purchased per
            person, per household or per order. These restrictions may include
            orders placed by or under the same customer account, the same credit
            card, and/or orders that use the same billing and/or shipping
            address. In the event that we make a change to or cancel an order,
            we may attempt to notify you by contacting the e-mail and/or billing
            address/phone number provided at the time the order was made. We
            reserve the right to limit or prohibit orders that, in our sole
            judgment, appear to be placed by dealers, resellers or distributors.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You agree to provide current, complete and accurate purchase and
            account information for all purchases made at our store. You agree
            to promptly update your account and other information, including
            your email address and credit card numbers and expiration dates, so
            that we can complete your transactions and contact you as needed.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>For more detail, please review our Returns Policy.</li>
        </ul>
      </div>

      {/* 8 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 7 - OPTIONAL TOOLS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We may provide you with access to third-party tools over which we
            neither monitor nor have any control nor input.{" "}
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You acknowledge and agree that we provide access to such tools ”as
            is” and “as available” without any warranties, representations or
            conditions of any kind and without any endorsement. We shall have no
            liability whatsoever arising from or relating to your use of
            optional third-party tools.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Any use by you of optional tools offered through the site is
            entirely at your own risk and discretion and you should ensure that
            you are familiar with and approve of the terms on which tools are
            provided by the relevant third-party provider(s).
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We may also, in the future, offer new services and/or features
            through the website (including, the release of new tools and
            resources). Such new features and/or services shall also be subject
            to these Terms of Service.
          </li>
        </ul>
      </div>

      {/* 9 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 8 - THIRD-PARTY LINKS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Certain content, products and services available via our Service may
            include materials from third-parties.{" "}
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Third-party links on this site may direct you to third-party
            websites that are not affiliated with us. We are not responsible for
            examining or evaluating the content or accuracy and we do not
            warrant and will not have any liability or responsibility for any
            third-party materials or websites, or for any other materials,
            products, or services of third-parties.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We are not liable for any harm or damages related to the purchase or
            use of goods, services, resources, content, or any other
            transactions made in connection with any third-party websites.
            Please review carefully the third-party's policies and practices and
            make sure you understand them before you engage in any transaction.
            Complaints, claims, concerns, or questions regarding third-party
            products should be directed to the third-party.
          </li>
        </ul>
      </div>

      {/* 10 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 9 - USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If, at our request, you send certain specific submissions (for
            example contest entries) or without a request from us you send
            creative ideas, suggestions, proposals, plans, or other materials,
            whether online, by email, by postal mail, or otherwise
            (collectively, 'comments'), you agree that we may, at any time,
            without restriction, edit, copy, publish, distribute, translate and
            otherwise use in any medium any comments that you forward to us. We
            are and shall be under no obligation (1) to maintain any comments in
            confidence; (2) to pay compensation for any comments; or (3) to
            respond to any comments.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We may, but have no obligation to, monitor, edit or remove content
            that we determine in our sole discretion are unlawful, offensive,
            threatening, libelous, defamatory, pornographic, obscene or
            otherwise objectionable or violates any party’s intellectual
            property or these Terms of Service.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You agree that your comments will not violate any right of any
            third-party, including copyright, trademark, privacy, personality or
            other personal or proprietary right. You further agree that your
            comments will not contain libelous or otherwise unlawful, abusive or
            obscene material, or contain any computer virus or other malware
            that could in any way affect the operation of the Service or any
            related website. You may not use a false e-mail address, pretend to
            be someone other than yourself, or otherwise mislead us or
            third-parties as to the origin of any comments. You are solely
            responsible for any comments you make and their accuracy. We take no
            responsibility and assume no liability for any comments posted by
            you or any third-party.
          </li>
        </ul>
      </div>

      {/* 11 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 10 - PERSONAL INFORMATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Your submission of personal information through the store is
            governed by our Privacy Policy.{" "}
          </li>
        </ul>
      </div>
      {/* 12 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 11 - ERRORS, INACCURACIES AND OMISSIONS
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Occasionally there may be information on our site or in the Service
            that contains typographical errors, inaccuracies or omissions that
            may relate to product descriptions, pricing, promotions, offers,
            product shipping charges, transit times and availability. We reserve
            the right to correct any errors, inaccuracies or omissions, and to
            change or update information or cancel orders if any information in
            the Service or on any related website is inaccurate at any time
            without prior notice (including after you have submitted your
            order).
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We undertake no obligation to update, amend or clarify information
            in the Service or on any related website, including without
            limitation, pricing information, except as required by law. No
            specified update or refresh date applied in the Service or on any
            related website, should be taken to indicate that all information in
            the Service or on any related website has been modified or updated.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 12 - PROHIBITED USES
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            In addition to other prohibitions as set forth in the Terms of
            Service, you are prohibited from using the site or its content: (a)
            for any unlawful purpose; (b) to solicit others to perform or
            participate in any unlawful acts; (c) to violate any international,
            federal, provincial or state regulations, rules, laws, or local
            ordinances; (d) to infringe upon or violate our intellectual
            property rights or the intellectual property rights of others; (e)
            to harass, abuse, insult, harm, defame, slander, disparage,
            intimidate, or discriminate based on gender, sexual orientation,
            religion, ethnicity, race, age, national origin, or disability; (f)
            to submit false or misleading information; (g) to upload or transmit
            viruses or any other type of malicious code that will or may be used
            in any way that will affect the functionality or operation of the
            Service or of any related website, other websites, or the Internet;
            (h) to collect or track the personal information of others; (i) to
            spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any
            obscene or immoral purpose; or (k) to interfere with or circumvent
            the security features of the Service or any related website, other
            websites, or the Internet. We reserve the right to terminate your
            use of the Service or any related website for violating any of the
            prohibited uses.
          </li>
        </ul>
      </div>

      {/* 13 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 13 - DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We do not guarantee, represent or warrant that your use of our
            service will be uninterrupted, timely, secure or error-free.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We do not warrant that the results that may be obtained from the use
            of the service will be accurate or reliable.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You agree that from time to time we may remove the service for
            indefinite periods of time or cancel the service at any time,
            without notice to you.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You expressly agree that your use of, or inability to use, the
            service is at your sole risk. The service and all products and
            services delivered to you through the service are (except as
            expressly stated by us) provided 'as is' and 'as available' for your
            use, without any representation, warranties or conditions of any
            kind, either express or implied, including all implied warranties or
            conditions of merchantability, merchantable quality, fitness for a
            particular purpose, durability, title, and non-infringement.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            In no case shall <span className="font-semibold">Dark Fantasy</span>
            , our directors, officers, employees, affiliates, agents,
            contractors, interns, suppliers, service providers or licensors be
            liable for any injury, loss, claim, or any direct, indirect,
            incidental, punitive, special, or consequential damages of any kind,
            including, without limitation lost profits, lost revenue, lost
            savings, loss of data, replacement costs, or any similar damages,
            whether based in contract, tort (including negligence), strict
            liability or otherwise, arising from your use of any of the service
            or any products procured using the service, or for any other claim
            related in any way to your use of the service or any product,
            including, but not limited to, any errors or omissions in any
            content, or any loss or damage of any kind incurred as a result of
            the use of the service or any content (or product) posted,
            transmitted, or otherwise made available via the service, even if
            advised of their possibility. Because some states or jurisdictions
            do not allow the exclusion or the limitation of liability for
            consequential or incidental damages, in such states or
            jurisdictions, our liability shall be limited to the maximum extent
            permitted by law.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 14 - INDEMNIFICATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You agree to indemnify, defend and hold harmless{" "}
            <span className="font-semibold">Dark Fantasy</span> and our parent,
            subsidiaries, affiliates, partners, officers, directors, agents,
            contractors, licensors, service providers, subcontractors,
            suppliers, interns and employees, harmless from any claim or demand,
            including reasonable attorneys’ fees, made by any third-party due to
            or arising out of your breach of these Terms of Service or the
            documents they incorporate by reference, or your violation of any
            law or the rights of a third-party.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 15 - SEVERABILITY
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            In the event that any provision of these Terms of Service is
            determined to be unlawful, void or unenforceable, such provision
            shall nonetheless be enforceable to the fullest extent permitted by
            applicable law, and the unenforceable portion shall be deemed to be
            severed from these Terms of Service, such determination shall not
            affect the validity and enforceability of any other remaining
            provisions.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">SECTION 16 - TERMINATION</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            The obligations and liabilities of the parties incurred prior to the
            termination date shall survive the termination of this agreement for
            all purposes.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            These Terms of Service are effective unless and until terminated by
            either you or us. You may terminate these Terms of Service at any
            time by notifying us that you no longer wish to use our Services, or
            when you cease using our site. If in our sole judgment you fail, or
            we suspect that you have failed, to comply with any term or
            provision of these Terms of Service, we also may terminate this
            agreement at any time without notice and you will remain liable for
            all amounts due up to and including the date of termination; and/or
            accordingly may deny you access to our Services (or any part
            thereof).
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 17 - ENTIRE AGREEMENT
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            The failure of us to exercise or enforce any right or provision of
            these Terms of Service shall not constitute a waiver of such right
            or provision.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            These Terms of Service and any policies or operating rules posted by
            us on this site or in respect to The Service constitutes the entire
            agreement and understanding between you and us and govern your use
            of the Service, superseding any prior or contemporaneous agreements,
            communications and proposals, whether oral or written, between you
            and us (including, but not limited to, any prior versions of the
            Terms of Service).
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Any ambiguities in the interpretation of these Terms of Service
            shall not be construed against the drafting party.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 18 - GOVERNING LAW
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            These Terms of Service and any separate agreements whereby we
            provide you Services shall be governed by and construed in
            accordance with the laws of India and jurisdiction of Jaipur,
            Rajasthan
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 19 - CHANGES TO TERMS OF SERVICE
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            You can review the most current version of the Terms of Service at
            any time at this page.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right, at our sole discretion, to update, change or
            replace any part of these Terms of Service by posting updates and
            changes to our website. It is your responsibility to check our
            website periodically for changes. Your continued use of or access to
            our website or the Service following the posting of any changes to
            these Terms of Service constitutes acceptance of those changes.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mt-2">
          SECTION 20 - CONTACT INFORMATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Questions about the Terms of Service should be sent to us at{" "}
            <span className="font-semibold">info@darkfantasy.club</span>.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsPage;
