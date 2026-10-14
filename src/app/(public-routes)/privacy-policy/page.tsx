import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    // <div>
    //   <div className="text-start py-10">
    //     <p className="text-3xl font-bold">Privacy Policy</p>
    //     <p className="text-2xl font-bold mt-2">Our Commitment To You</p>
    //     <div className="">
    //       <p className="mt-3 text-base">
    //         At DarkFantasy, your privacy is a top priority. Your privacy is at
    //         the core of the way we design and build the services and products
    //         you know and love, so that you can fully trust them and focus on
    //         building meaningful connections.
    //       </p>
    //       <p className="mt-3 text-base">
    //         We appreciate that you put your trust in us when you provide us with
    //         your information and we do not take this lightly.
    //       </p>
    //       <p className="mt-3 text-base">
    //         <b>Our commitment to privacy.</b> We design all of our products and
    //         services with your privacy in mind. We involve experts from various
    //         fields, including legal, security, engineering, product design and
    //         others to make sure that our decisions are taken with the utmost
    //         respect for your privacy.
    //       </p>
    //       <p className="mt-3 text-base">
    //         <b>Our commitment to transparency.</b>Because we use many of the
    //         same online services you do, we know that insufficient information
    //         and overly complicated language are common issues in privacy
    //         policies. We take the exact opposite approach: we’re doing our best
    //         to write our Privacy Policy and related documents in plain language.
    //         We actually want you to read our policies and understand our privacy
    //         practices!
    //       </p>
    //       <p className="mt-3 text-base">
    //         <b>Our commitment to security.</b>We have teams dedicated to keeping
    //         your data safe and secure. We constantly update our security
    //         practices and invest in our security efforts to enhance the safety
    //         of your information.
    //       </p>

    //       <hr />
    //       <p className="mt-3 text-base">
    //         Welcome to our Privacy Policy. Thank you for taking the time to read
    //         it.
    //       </p>
    //       <ol className="my-5 list-decimal ps-8 text-base">
    //         <li>Where This Privacy Policy Applies</li>
    //         <li>Information We Collect</li>
    //         <li>How We Use Information</li>
    //         <li>How We Share Information</li>
    //         <li>Cross-Border Data Transfers</li>
    //         <li>Your Rights</li>
    //         <li>How Long We Retain Your Information</li>
    //         <li>Children's Privacy</li>
    //         <li>Job Candidates, Contractors and Vendor Representatives</li>
    //         <li>Privacy Policy Changes</li>
    //         <li>How To Contact Us</li>
    //       </ol>

    //       {/* 1 */}
    //       <div>
    //         <h2 className="text-2xl font-bold mt-2">
    //           2. Where This Privacy Policy Applies
    //         </h2>
    //         <p className="mt-3 text-base">
    //           This Privacy Policy applies to websites, apps, events and other
    //           services we operate under the DarkFantasy brand. For simplicity,
    //           we refer to all of these as our “services” in this Privacy Policy.
    //           To make it extra clear, we’ve added links to this Privacy Policy
    //           on all applicable services
    //         </p>
    //         <p className="mt-3 text-base">
    //           Some services may require their own unique privacy policy. If a
    //           service has its own privacy policy, then that policy -- not this
    //           Privacy Policy -- applies.
    //         </p>
    //       </div>
    //       {/* 2 */}
    //       <div>
    //         <h2 className="text-2xl font-bold mt-2">
    //           3. Information We Collect
    //         </h2>

    //         <p className="mt-3 text-base">
    //           It goes without saying, we can’t help you develop meaningful
    //           connections without some information about you, such as basic
    //           profile details and the types of people you’d like to meet. We
    //           also collect information about your use of our services such as
    //           access logs, as well as information from third parties, like when
    //           you access our services through your social media account or when
    //           you upload information from your social media account to complete
    //           your profile. If you want additional info, we go into more detail
    //           below.
    //         </p>

    //         <h3 className="text-xl font-semibold mt-2">
    //           Information you give us
    //         </h3>
    //         <p className="mt-3 text-base">
    //           You choose to give us certain information when using our services.
    //           This includes:
    //         </p>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             When you create an account, you provide us with at least your
    //             phone number and email address, as well as some basic details
    //             necessary for the service to work, such as your gender, date of
    //             birth, and who you’d like to connect with.
    //           </li>
    //           <li>
    //             When you complete your profile, you have the option to share
    //             your sexual orientation with us. Where you provide such elements
    //             to us, you consent to us using it for the purposes identified
    //             and as laid out in this Privacy Policy. You can also share
    //             additional information with us, such as details on your bio and
    //             your interests, as well as content such as photos and videos. To
    //             add certain content, like pictures or videos, you may allow us
    //             to access your camera or photo album.
    //           </li>
    //           <li>
    //             When you subscribe to a paid service or make a purchase directly
    //             from us (rather than through a platform such as iOS or Android),
    //             you provide us with information related to the purchases you
    //             make and our payment processors with information such as your
    //             debit or credit card number or other financial information.
    //           </li>
    //           <li>
    //             When you participate in surveys, focus groups or market studies,
    //             you give us your insights into our products and services,
    //             responses to our questions and testimonials.
    //           </li>
    //           <li>
    //             When you choose to participate in our promotions, events or
    //             contests, we collect the information that you use to register or
    //             enter.
    //           </li>
    //           <li>
    //             If you contact our customer care team, we collect the
    //             information you give us during the interaction.
    //           </li>
    //           <li>
    //             If you share with us information about other people (for
    //             example, if you use contact details of a friend for a given
    //             feature), we process this information on your behalf in order to
    //             complete your request.
    //           </li>
    //           <li>
    //             Of course, we also process your chats with other members as well
    //             as the content you publish to operate and secure the services,
    //             and to keep our community safe.
    //           </li>
    //         </ul>

    //         <h3 className="text-xl font-semibold mt-2">
    //           Information we receive from others
    //         </h3>
    //         <p className="mt-3 text-base">
    //           In addition to the information you may provide us directly, we
    //           receive information about you from others, including:
    //         </p>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Members: </b> Members may provide information about you as
    //             they use our services, for instance as they interact with you or
    //             if they submit a report involving you.
    //           </li>
    //           <li>
    //             <b>Social Media: </b> You may decide to share information with
    //             us through your social media account, for instance if you decide
    //             to create and log into your account via your social media or
    //             other account (e.g., Facebook, Google or Apple) or to upload
    //             onto our services information such as photos from one of your
    //             social media accounts (e.g., Instagram or Spotify).
    //           </li>
    //           <li>
    //             <b>Other Partners: </b> We may receive information about you
    //             from our partners where our ads are published on a partner’s
    //             service (in which case they may pass along details on a
    //             campaign’s success). Where legally allowed, we can also receive
    //             information about suspected or convicted bad actors from third
    //             parties as part of our efforts to ensure our members’ safety and
    //             security.
    //           </li>
    //         </ul>

    //         <h3 className="text-xl font-semibold mt-2">
    //           Information generated or automatically collected when you use our
    //           services
    //         </h3>
    //         <p className="mt-3 text-base">
    //           When you use our services, this generates technical data about
    //           which features you’ve used, how you’ve used them and the devices
    //           you use to access our services. See below for more details.
    //         </p>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Usage Information: </b> Using the services generates data
    //             about your activity on our services, for instance how you use
    //             them (e.g., when you logged in, features you’ve been using,
    //             actions taken, information shown to you, referring webpages
    //             address and ads that you interacted with) and your interactions
    //             with other members (e.g., members you connect and interact with,
    //             and when you matched and exchanged messages with them).
    //           </li>
    //           <li>
    //             <b>Device information: </b> We collect information from and
    //             about the device(s) you use to access our services, including
    //             hardware and software information such as IP address, device ID
    //             and type, apps settings and characteristics, app crashes,
    //             advertising IDs (which are randomly generated numbers that you
    //             can reset by going into your device’ settings and, in some
    //             cases, disable entirely), and identifiers associated with
    //             cookies or other technologies that may uniquely identify a
    //             device or browser.
    //           </li>
    //           <li>
    //             <b>
    //               Information collected by cookies and similar technologies:{" "}
    //             </b>{" "}
    //             We use and may allow others to use cookies and similar
    //             technologies (e.g., web beacons, pixels, SDKs) to recognize you
    //             and/or your device(s). You may read our Cookie Policy for more
    //             information on why we use them and how you can better control
    //             their use. Some web browsers (including Safari, Internet
    //             Explorer, Firefox and Chrome) have a “Do Not Track” (“DNT”)
    //             feature that tells a website that a user does not want to have
    //             his or her online activity tracked. If a website that responds
    //             to a DNT signal receives a DNT signal, the browser can block
    //             that website from collecting certain information about the
    //             browser’s user. Not all browsers offer a DNT option and DNT
    //             signals are not yet uniform. For this reason, many businesses,
    //             including ours, do not currently respond to DNT signals.
    //           </li>

    //           <li>
    //             <b>Other information with your consent:</b>
    //           </li>
    //           <li>
    //             <b>Precise geolocation data: </b>If you give us your consent, we
    //             can collect your precise geolocation (latitude and longitude)
    //             from your device. The collection of your geolocation may occur
    //             in the background even when you aren’t using the services if the
    //             permission you gave us expressly permits such collection. If you
    //             decline permission for us to collect your precise geolocation,
    //             we will not collect it, and our services that rely on precise
    //             geolocation may not be available to you.
    //           </li>
    //           <li>
    //             <b>Other information:  </b>We may collect other information with
    //             your permission, such as photos and videos (for instance, if you
    //             want to publish a photo or video or participate in streaming
    //             features on our services).
    //           </li>
    //         </ul>
    //       </div>
    //       {/* <div>
    //         <h2 className="text-2xl font-bold mt-2">
    //           4. How We Use Information
    //         </h2>
    //         <p>
    //           The main reason we use your information is to deliver and improve
    //           our services. Additionally, we use your info to help keep you and
    //           our community safe, and to provide you with advertising that may
    //           be of interest to you. Read on for a more detailed explanation of
    //           the various reasons for which we use your information, together
    //           with practical examples.
    //         </p>
    //         <h3 className="text-xl font-semibold mt-2">
    //           A. To administer your account and provide our services to you
    //         </h3>
    //         <li>Create and manage your account</li>
    //         <li>
    //           Provide you with customer support and respond to your requests
    //         </li>
    //         <li>Communicate with you about our services</li>
    //         <li>
    //           Personalize pricing, offer discounts and other promotions, and
    //           complete your transactions
    //         </li>
    //         <li>Administer sweepstakes and contests</li>

    //         <h3 className="text-xl font-semibold mt-2">
    //           B. To help you connect with other users
    //         </h3>
    //         <li>
    //           Recommend you to other members and recommend other members to you
    //         </li>
    //         <li>Show members’ profiles to one another</li>
    //         <li>Enable members to search for and connect with members</li>

    //         <h3 className="text-xl font-semibold mt-2">
    //           C. To provide new DarkFantasy services to you
    //         </h3>
    //         <li>
    //           Register you and display your profile on new DarkFantasy features
    //           and apps
    //         </li>
    //         <li>Administer your account on these new features and apps</li>

    //         <h3 className="text-xl font-semibold mt-2">
    //           D. To provide offers and operate advertising and marketing
    //           campaigns
    //         </h3>
    //         <li>
    //           Perform and measure the effectiveness of advertising campaigns on
    //           our services and marketing our services off our platform
    //         </li>
    //         <li>
    //           Communicate with you about products or services that we believe
    //           may interest you
    //         </li>

    //         <h3 className="text-xl font-semibold mt-2">
    //           E. To improve our services and develop new ones
    //         </h3>
    //         <li>Administer focus groups, market studies and surveys</li>
    //         <li>
    //           Review interactions with customer care teams to improve our
    //           quality of service
    //         </li>
    //         <li>
    //           Understand how members typically use the services to improve them
    //           (for instance, we may decide to change the look and feel or even
    //           substantially modify a given feature based on how members react to
    //           it)
    //         </li>
    //         <li>
    //           Develop new features and services (for example, we may decide to
    //           build a new interests-based feature further to requests received
    //           from members)
    //         </li>

    //         <h3 className="text-xl font-semibold mt-2">
    //           F. To prevent, detect and fight fraud and other illegal or
    //           unauthorized activities
    //         </h3>
    //         <li>
    //           Find and address ongoing, suspected or alleged violations of
    //           our Terms of Use, notably through the review of reports and
    //           interactions between members
    //         </li>
    //         <li>
    //           Better understand and design countermeasures against violations of
    //           our Terms of Use
    //         </li>
    //         <li>
    //           Retain data related to violations of our Terms of Use to address
    //           the violation and prevent against recurrences
    //         </li>
    //         <li>
    //           Enforce or exercise our rights, for example our rights set out in
    //           our Terms of Use
    //         </li>
    //         <li>
    //           Communicate to individuals who submit a report, including what
    //           we’ve done as a result of their submission
    //         </li>
    //         <h3 className="text-xl font-semibold mt-2">
    //           G. To ensure legal compliance
    //         </h3>
    //         <li>Comply with legal requirements</li>
    //         <li>Assist law enforcement</li>
    //         <p>
    //           For information on how we process personal information through
    //           profiling and automated decision-making, please see our FAQ.
    //         </p>
    //         <p>
    //           {" "}
    //           To process your information as described in this Privacy Policy,
    //           we rely on the following legal bases:
    //         </p>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             Provide our service to you: The reason we process your
    //             information for purposes A, B and C above is to perform the
    //             contract that you have with us. For instance, as you go about
    //             using our service to build meaningful connections, we use your
    //             information to maintain your account and your profile, make it
    //             viewable to other members and recommend other members to you and
    //             to otherwise provide our free and paid features to you and other
    //             members
    //           </li>
    //           <li>
    //             Legitimate interests: We process your information for purposes
    //             D, E and F above, based on our legitimate interest. For
    //             instance, we analyze users’ behavior on our services to
    //             continuously improve our offerings, we suggest offers we think
    //             might interest you and promote our own services, we process
    //             information to help keep our members safe and we process data
    //             where necessary to enforce our rights, assist law enforcement
    //             and enable us to defend ourselves in the event of a legal
    //             action.
    //           </li>
    //           <li>
    //             Comply with applicable laws and regulations: We process your
    //             information for purpose G above where it is necessary for us to
    //             comply with applicable laws and regulations and evidence our
    //             compliance with applicable laws and regulations. For example, we
    //             retain traffic data and data about transactions in line with our
    //             accounting, tax and other statutory data retention obligations
    //             and to be able to respond to valid access requests from law
    //             enforcement. We also keep data evidencing consents members give
    //             us and decisions they may have taken to opt-out of a given
    //             feature or processing.
    //           </li>
    //           <li>
    //             Consent: If you choose to provide us with information that may
    //             be considered “special” or “sensitive” in certain jurisdictions,
    //             such as your sexual orientation, you’re consenting to our
    //             processing of that information in accordance with this Privacy
    //             Policy. From time to time, we may ask for your consent to
    //             collect specific information such as your precise geolocation or
    //             use your information for certain specific reasons. In some
    //             cases, you may withdraw your consent by adapting your settings
    //             (for instance in relation to the collection of our precise
    //             geolocation) or by deleting your content (for instance where you
    //             entered information in your profile that may be considered
    //             “special” or “sensitive”). In any case, you may withdraw your
    //             consent at any time by contacting us at the address provided at
    //             the end of this Privacy Policy.
    //           </li>
    //         </ul>
    //       </div> */}

    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           4. How We Share Information
    //         </h3>
    //         <li>
    //           Since our goal is to help you make meaningful connections, the
    //           main sharing of members’ information is, of course, with other
    //           members. We also share some types of  members’ information with
    //           service providers and partners who assist us in operating the
    //           services, with other Match Group companies for specified reasons
    //           as laid out below and, in some cases, legal authorities. Read on
    //           for more details about how your information is shared with others.
    //         </li>

    //         <li className="text-base font-semibold mt-2">With other members</li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             You share information with other members when you voluntarily
    //             disclose information on the service (including your public
    //             profile). Please be careful with your information and make sure
    //             that the content you share is stuff that you’re comfortable
    //             being visible. If you choose to limit the audience for all or
    //             part of your profile or for certain content or information about
    //             you, then it will be visible according to your settings. If
    //             someone submits a report involving you (such as a claim you
    //             violated our Terms of Use), we may communicate to the reporter
    //             actions, if any, we took as a result of their report.
    //           </li>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           With our service providers and partners
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             We use vendors to help us operate, distribute, market and
    //             improve our services, such as data hosting and maintenance,
    //             analytics, customer care, marketing, advertising, payment
    //             processing and security operations. We also share information
    //             with vendors who distribute and assist us in advertising our
    //             services. For instance, we may share limited information on you
    //             in hashed, non-human readable form to advertising vendors.
    //           </li>
    //         </ul>
    //         <p>
    //           We follow a strict vetting process prior to engaging any vendor or
    //           working with any partner. Our vendors and partners must agree to
    //           strict confidentiality obligations.
    //         </p>

    //         <li className="text-base font-semibold mt-2">
    //           With our affiliates
    //         </li>
    //         <p>
    //           We share your information with affiliates for limited legitimate
    //           purposes as laid out below:
    //         </p>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             To make all Match Group platforms safer and enable us to address
    //             (e.g., ban) bad actors found on one platform also on the others
    //           </li>
    //         </ul>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             For them to assist us in data processing operations, as
    //             processors / service providers, upon our instructions and on our
    //             behalf. Their assistance may include technical processing
    //             operations, such as data hosting and maintenance, customer care,
    //             marketing and targeted advertising, analytics, finance and
    //             accounting assistance, improving our service, securing our data
    //             and systems and fighting against spam, abuse, fraud,
    //             infringement and other wrongdoings
    //           </li>
    //         </ul>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             We may also share information with other Match Group companies
    //             for other legitimate business purposes including corporate
    //             audit, analysis and consolidated reporting, where and as allowed
    //             under applicable law
    //           </li>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           Sharing functionality
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <p>
    //             You may choose to share other members’ profiles and they may
    //             share yours with people outside of our services, using the
    //             sharing functionality.
    //           </p>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           For corporate transactions
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <p>
    //             We may transfer your information if we are involved, whether in
    //             whole or in part, in a merger, sale, acquisition, divestiture,
    //             restructuring, reorganization, dissolution, bankruptcy or other
    //             change of ownership or control.
    //           </p>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           With law enforcement / when required by law
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <p>
    //             We may disclose your information if reasonably necessary: (i) to
    //             comply with a legal process, such as a court order, subpoena or
    //             search warrant, government / law enforcement investigation or
    //             other legal requirements; (ii) to assist in the prevention or
    //             detection of crime (subject in each case to applicable law); or
    //             (iii) to protect the safety of any person.
    //           </p>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           To enforce legal rights
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <p>
    //             We may also share information: (i) if disclosure would mitigate
    //             our liability in an actual or threatened lawsuit; (ii) as
    //             necessary to protect our legal rights and legal rights of our
    //             members, business partners or other interested parties; (iii) to
    //             enforce our agreements with you; and (iv) to investigate,
    //             prevent, or take other action regarding illegal activity,
    //             suspected fraud or other wrongdoing.
    //           </p>
    //         </ul>

    //         <li className="text-base font-semibold mt-2">
    //           With your consent or at your request
    //         </li>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <p>
    //             We may ask for your consent to share your information with third
    //             parties. In any such case, we will make it clear why we want to
    //             share the information.
    //           </p>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             We may use and share non-personal information (meaning
    //             information that, by itself, does not identify who you are such
    //             as device information, general demographics, general behavioral
    //             data, location in de-identified form), as well as personal
    //             information in hashed, non-human readable form, under any of the
    //             above circumstances. We may also share this information with
    //             other Match Group companies and third parties (notably
    //             advertisers) to develop and deliver targeted advertising on our
    //             services and on websites or applications of third parties, and
    //             to analyze and report on advertising you see. We may combine
    //             this information with additional non-personal information or
    //             personal information in hashed, non-human readable form
    //             collected from other sources. More information on our use of
    //             cookies and similar technologies can be found in our Cookie
    //             Policy
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           5. Your Rights and Choices
    //         </h3>
    //         <p>
    //           We want you to be in control of your information, so we want to
    //           remind you of the following options and tools available to you
    //         </p>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Access / Update tools in the service: </b> Tools and account
    //             settings can help you access, rectify or remove information that
    //             you provided to us and that’s associated with your account
    //             directly within the service. If you have any questions on those
    //             tools and settings, please contact our customer care team for
    //             help.
    //           </li>
    //         </ul>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Device permissions: </b> Mobile platforms can have permission
    //             systems for specific types of device data and notifications,
    //             such as phone contacts, pictures, location services, push
    //             notifications and advertising identifiers. You can change your
    //             settings on your device to either consent or oppose the
    //             collection or processing of the corresponding information or the
    //             display of the corresponding notifications. Of course, if you do
    //             that, certain services may lose functionality.
    //           </li>
    //         </ul>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Uninstall: </b>You can stop all information collection by an
    //             app by uninstalling it using the standard uninstall process for
    //             your device. Remember that uninstalling an app does NOT close
    //             your account. To close your account, please use the
    //             corresponding functionality on the service.
    //           </li>
    //         </ul>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Account closure: </b> You can close your account by using the
    //             corresponding functionality directly on the service.
    //           </li>
    //         </ul>

    //         <p className="mt-2">
    //           We also want you to be aware of your privacy rights. Depending on
    //           where you live, you may have the right to:
    //         </p>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Access/know: </b> You may have the right to request a copy of
    //             the information we keep about you, and in certain circumstances
    //             to receive this in a portable format. You can exercise your
    //             right to access directly within the service by putting in a
    //             request.
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Delete/erase: </b> You may request that we delete the
    //             personal information we keep about you. You can exercise your
    //             right to delete by submitting a request.
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Correct/rectify/update:  </b>You can correct most information
    //             you provided to us by editing your profile directly in the
    //             service. If you believe the information we hold about you is
    //             inaccurate, you may contact us to rectify it.
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             <b>Object/restrict:  </b>You may also have the right to object
    //             to or request that we restrict certain processing. To do so,
    //             please contact us.
    //           </li>
    //         </ul>

    //         <p className="mt-2">
    //           For your protection and the protection of all of our members, we
    //           may ask you to provide proof of identity before we can answer the
    //           above requests. Keep in mind, we may reject requests, including if
    //           we are unable to authenticate you, if the request is unlawful or
    //           invalid, or if it may infringe on trade secrets or intellectual
    //           property or the privacy or other rights of someone else. If you
    //           wish to receive information relating to another member, such as a
    //           copy of any messages you received from them through our service,
    //           the other member will have to contact us to provide their written
    //           consent before the information is released. We may also ask them
    //           to provide proof of identity before we can answer the request.
    //           Also, we may not be able to accommodate certain requests to object
    //           to or restrict the processing of personal information, notably
    //           where such requests would not allow us to provide our service to
    //           you anymore. For instance, we cannot provide our service if we do
    //           not have your date of birth and thus cannot ensure that you are 18
    //           years of age or older.
    //         </p>
    //         <p className="mt-2">
    //           If you are a resident of Virginia, Colorado, or Connecticut,
    //           USA, if we deny your privacy request, you may be able to appeal
    //           by contacting us, and explicitly referencing “Privacy Request
    //           Appeal.” If you have concerns about the result of your appeal you
    //           may contact the attorney general for your state.  Additionally,
    //           please note that we do not “sell” your personal data, or use it
    //           for “targeted advertising” or “profiling” in furtherance of
    //           decisions that produce legal or similarly significant effects, as
    //           those terms are defined by applicable law in your state, so no
    //           opt-out choice is necessary.
    //         </p>
    //       </div>

    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           6. How Long We Retain Your Information
    //         </h3>
    //         <p>
    //           We keep your personal information only as long as we need it for
    //           legitimate business purposes (as laid out in Section 4) and as
    //           permitted by applicable law. If you decide to stop using our
    //           services, you can close your account and your profile will stop
    //           being visible to other members. Note that we will close your
    //           account automatically if you are inactive for a period of two
    //           years. After your account is closed, we will delete your personal
    //           information, as laid out below:
    //         </p>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             To protect the safety and security of our members, we implement
    //             a safety retention window of three months following account
    //             closure, or one year following an account ban. During this
    //             period, we keep your information in the event that it might be
    //             necessary to investigate unlawful or harmful conducts. The
    //             retention of information during this safety retention window is
    //             based on our legitimate interest as well as that of potential
    //             third-party victims
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             Once the safety retention window elapses, we delete your data
    //             and only keep limited information for specified purposes, as
    //             laid out below:
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             a) We maintain limited data to comply with legal data retention
    //             obligations: in particular, we keep transaction data for 10
    //             years to comply with tax and accounting legal requirements,
    //             credit card information for the duration the user may challenge
    //             the transaction and “traffic data” / logs for one year to comply
    //             with legal data retention obligations. We also keep records of
    //             consents members give us for five years to evidence our
    //             compliance with applicable law.
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             b) We maintain limited information on the basis of our
    //             legitimate interest: we keep customer care records and
    //             supporting data as well as imprecise location of
    //             download/purchase for five years to support our customer care
    //             decisions, enforce our rights and enable us to defend ourselves
    //             in the event of a claim, information on the existence of past
    //             accounts and subscriptions, which we delete three years after
    //             the closure of your last account to ensure proper and accurate
    //             financial forecasting and reporting, profile data for one year
    //             in anticipation of potential litigation, for the establishment,
    //             exercise or defence of legal claims, and data necessary to
    //             prevent members who were banned from opening a new account, for
    //             as long as necessary to ensure the safety and vital interests of
    //             our members.
    //           </li>
    //         </ul>

    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             c) Finally, we maintain information on the basis of our
    //             legitimate interest where there is an outstanding or potential
    //             issue, claim or dispute requiring us to keep information (in
    //             particular if we receive a valid legal subpoena or request
    //             asking us to preserve data (in which case we would need to keep
    //             the data to comply with our legal obligations) or if data would
    //             otherwise be necessary as part of legal proceedings).
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           7. No Children Allowed
    //         </h3>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             Our services are restricted to individuals who are 18 years of
    //             age or older. We do not permit individuals under the age of 18
    //             on our platform. If you suspect that a member is under the age
    //             of 18, please use the reporting mechanism available on the
    //             service.
    //           </li>
    //         </ul>
    //       </div>

    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           8. Privacy Policy Changes
    //         </h3>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             Because we’re always looking for new and innovative ways to help
    //             you build meaningful connections and strive to make sure
    //             explanations about our data practices remain up-to-date, this
    //             policy may change over time. We will notify you before any
    //             material changes take effect so that you have time to review the
    //             changes.
    //           </li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h3 className="text-xl font-semibold mt-2">
    //           9. How to Contact Us
    //         </h3>
    //         <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
    //           <li>
    //             If you have questions about this Privacy Policy, you have
    //             different options below: support@darkfantasy.club
    //           </li>
    //         </ul>
    //       </div>
    //       {/* 3 */}

    //       <div></div>
    //     </div>
    //   </div>
    // </div>
    <div>
        <h2 className="text-xl font-semibold  justify-center flex mb-8 mt-8">
        PRIVACY STATEMENT




        </h2>

        <h2 className="text-xl font-semibold mt-2 justify-center flex mb-8">
        - - - -



        </h2>
      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Our services are restricted to individuals who are 18 years of age
            or older. We do not permit individuals under the age of 18 on our
            platform. If you suspect that a member is under the age of 18,
            please use the reporting mechanism available on the service.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            When you browse our store, we also automatically receive your
            computer’s internet protocol (IP) address in order to provide us
            with information that helps us learn about your browser and
            operating system.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Email marketing (if applicable): With your permission, we may send
            you emails about our store, new products and other updates.
          </li>
        </ul>
      </div>
      {/* 2 */}

      <div>
        <h2 className="text-xl font-semibold mt-2">SECTION 2 - CONSENT</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>How do you get my consent?</li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            When you provide us with personal information to complete a
            transaction, verify your credit card, place an order, arrange for a
            delivery or return a purchase, we imply that you consent to our
            collecting it and using it for that specific reason only.{" "}
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If we ask for your personal information for a secondary reason, like
            marketing, we will either ask you directly for your expressed
            consent, or provide you with an opportunity to say no.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>How do I withdraw my consent? </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If after you opt-in, you change your mind, you may withdraw your
            consent for us to contact you, for the continued collection, use or
            disclosure of your information, at anytime, by contacting us at{" "}
            <span className=" font-semibold">
              <Link className=" font-semibold" href={"/info@darkfantasy.club"}>
                info@darkfantasy.club
              </Link>
            </span>{" "}
            or mailing us at:{" "}
            <span className=" font-semibold">
              Sy No. 64, No. 137/1, 147/3, 3rd Stage, 7th Block, Allanahalli,
              Mysuru
            </span>
          </li>
        </ul>
      </div>

      {/* 3 */}
      <div>
        <h2 className="text-xl font-semibold mt-2">SECTION 3 - DISCLOSURE</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We may disclose your personal information if we are required by law
            to do so or if you violate our Terms of Service.
          </li>
        </ul>
      </div>

      {/* 4 */}
      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 4 - THIRD-PARTY SERVICES
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            In general, the third-party providers used by us will only collect,
            use and disclose your information to the extent necessary to allow
            them to perform the services they provide to us.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            However, certain third-party service providers, such as payment
            gateways and other payment transaction processors, have their own
            privacy policies in respect to the information we are required to
            provide to them for your purchase-related transactions.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            For these providers, we recommend that you read their privacy
            policies so you can understand the manner in which your personal
            information will be handled by these providers.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            In particular, remember that certain providers may be located in or
            have facilities that are located a different jurisdiction than
            either you or us. So if you elect to proceed with a transaction that
            involves the services of a third-party service provider, then your
            information may become subject to the laws of the jurisdiction(s) in
            which that service provider or its facilities are located.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            Once you leave our store’s website or are redirected to a
            third-party website or application, you are no longer governed by
            this Privacy Policy or our website’s Terms of Service.
          </li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>Links</li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            When you click on links on our store, they may direct you away from
            our site. We are not responsible for the privacy practices of other
            sites and encourage you to read their privacy statements.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">SECTION 6 - SECURITY</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            To protect your personal information, we take reasonable precautions
            and follow industry best practices to make sure it is not
            inappropriately lost, misused, accessed, disclosed, altered or
            destroyed.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">SECTION 7 - COOKIES</h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We use cookies to maintain session of your user. It is not used to
            personally identify you on other websites.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 8 - AGE OF CONSENT
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            By using this site, you represent that you are at least the age of
            majority in your state or province of residence, or that you are the
            age of majority in your state or province of residence and you have
            given us your consent to allow any of your minor dependents to use
            this site.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mt-2">
          SECTION 9 - CHANGES TO THIS PRIVACY POLICY
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            We reserve the right to modify this privacy policy at any time, so
            please review it frequently. Changes and clarifications will take
            effect immediately upon their posting on the website. If we make
            material changes to this policy, we will notify you here that it has
            been updated, so that you are aware of what information we collect,
            how we use it, and under what circumstances, if any, we use and/or
            disclose it.
          </li>
        </ul>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If our store is acquired or merged with another company, your
            information may be transferred to the new owners so that we may
            continue to sell products to you.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mt-2">
          QUESTIONS AND CONTACT INFORMATION
        </h2>
        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>
            If you would like to: access, correct, amend or delete any personal
            information we have about you, register a complaint, or simply want
            more information contact our Privacy Compliance Officer at{" "}
            <span className=" font-semibold">
              <Link className=" font-semibold" href={"/info@darkfantasy.club"}>
                info@darkfantasy.club
              </Link>
            </span>{" "}
            or mailing us at:{" "}
            <span className=" font-semibold">
              Sy No. 64, No. 137/1, 147/3, 3rd Stage, 7th Block, Allanahalli,
              Mysuru
            </span>
          </li>
        </ul>
        {/* <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>[Re: Privacy Compliance Officer]</li>
        </ul>

        <ul className="mt-3 pl-8 flex flex-col gap-3 list-disc">
          <li>[622 Manglam Electronic Market Jaipur Rajasthan India 302001]</li>
        </ul> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
