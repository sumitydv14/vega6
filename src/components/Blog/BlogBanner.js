import React from 'react'
import blog11 from '../images/blog11.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog4.jpg';



function BlogBanner() {
    return (
        <div>
            <section className="blog-sec">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div
                                id="carouselExampleControls"
                                data-interval={10000}
                                className="carousel slide"
                                data-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active"  data-interval="50000" data-ride="carousel" data-interval="false" >
                                        <div className="blog-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="blogs-img">
                                                        <img src={blog11} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-contents">
                                                        <h5>
                                                            Dispelling the Fear of the Unknown: Debunking 8 Myths
                                                            about Artificial Intelligence{" "}
                                                        </h5>
                                                        <p className="mt-5">
                                                            History has shown humans tend to antagonize the
                                                            unfamiliar. From Thomas Edison’s ridiculed light bulb to
                                                            the Wright Brothers’ mocked airplanes, well-meaning
                                                            innovations are no stranger to skepticism.
                                                        </p>
                                                        <p className="mt-5">
                                                            And history does repeat itself: Centuries later,
                                                            Artificial Intelligence (AI) is now the subject of the
                                                            very same mistrusting crowd.
                                                        </p>
                                                        <p className="mt-5">
                                                            From movies, video games and even to real-life news
                                                            headlines, AI has always been portrayed as an
                                                            all-knowing, uncalloused, almighty being that will
                                                            inevitably drive humanity to irrelevancy.
                                                        </p>
                                                        <p className="mt-5">
                                                            When in reality, especially in the time of the COVID-19
                                                            pandemic, AI has lifted countless organizations from
                                                            closing down, guided them to sounder business decisions
                                                            through data, and helped them produce more output with
                                                            fewer resources through automation.
                                                        </p>
                                                        <p className="mt-5">
                                                            Here are 8 myths about AI we need to unlearn right now:
                                                        </p>
                                                        <h4 className="mt-5">
                                                            {" "}
                                                            #1: AI Aims To Replace Manual Labor
                                                        </h4>
                                                        <p className="mt-5">
                                                            Mostly thanks to pop culture, the fear of AI replacing
                                                            humans has lingered in our collective consciousness for
                                                            the longest time. But when you think about it, AI is
                                                            merely a tool that ultimately needs to be operated on
                                                            and modified by… you guessed it, actual humans.
                                                        </p>
                                                        <p className="mt-5">
                                                            Stripped from the ultra-complex and cutting-edge
                                                            technologies within it, AI is just a machine like any
                                                            other: A human invention designed to make life easier
                                                            and productivity a lot more potent.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            After all, there’s no AI to operate on if it weren’t for
                                                            the humans who conceived it.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #2: AI’s Decision-Making Is Dispassionate &amp; Devoid
                                                            Of Humanity
                                                        </h4>
                                                        <p className="mt-5">
                                                            While it’s true that AI is, after all, just a string of
                                                            0s and 1s, it’s important to remember that AI is only as
                                                            objective—and subjective—as the humans who made and
                                                            improve upon it.
                                                        </p>
                                                        <p className="mt-5">
                                                            Remember, AI does not naturally occur in the wild. It
                                                            requires data sets, parameters, and rules that are
                                                            inherently biased since human input can never be 100%
                                                            objective.
                                                        </p>
                                                        <p className="mt-5">
                                                            Additionally, implementing AI’s predictive analysis is
                                                            usually not a one-layered phase. It entails years and
                                                            years of tweaking and patches to integrate new user data
                                                            and feedback, all with the goal of appropriately
                                                            handling the dynamic and often-evolving human
                                                            decision-making.
                                                        </p>
                                                        <h4 className="mt-5">#3: AI Has A Life Of Its Own</h4>
                                                        <p className="mt-5">
                                                            Unless used medicinally, the worst AI can do when
                                                            abandoned and left un-updated is make obsolete and
                                                            inaccurate decisions. Regardless of how many times we
                                                            see it in movies, it can’t suddenly learn sentience one
                                                            day and catalyze a robot uprising.
                                                        </p>
                                                        <p className="mt-5">
                                                            While it’s technically true that AI can make decisions
                                                            on its own, it still requires human operation to feed it
                                                            appropriate data, update its software, and eliminate
                                                            potential biases to make its predictive decisions more
                                                            targeted to the problem.
                                                        </p>
                                                        <p className="mt-5">
                                                            So yes, you can stop watching over your gadgets at night
                                                            now.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #4: I Can Always Tell If I’m Using A Byproduct Of AI
                                                        </h4>
                                                        <p className="mt-5">
                                                            You’d be surprised at how much of your day-to-day
                                                            activities have some semblance of AI integrated into it.
                                                            Social media platforms’ deep-learning AI is one of the
                                                            most well-known among these, but judging from how it
                                                            magically suggests just the right content for you
                                                            consistently, you probably would have guessed that by
                                                            now.
                                                        </p>
                                                        <p className="mt-5">
                                                            But seriously, AI integration can range from something
                                                            as trifle as your phone predicting your sleep pattern or
                                                            Amazon recommending items you’d most likely click on, to
                                                            utilization so essential you can’t help but feel
                                                            grateful for AI.
                                                        </p>
                                                        <p className="mt-5">
                                                            These include automobile features that proactively seek
                                                            out potential road hazards, detecting fraud on your bank
                                                            accounts, weather prediction for agriculture, and even
                                                            making society more accessible for differently-abled
                                                            folks.
                                                        </p>
                                                        <p className="mt-5">
                                                            If having AI omnipresent means I get to live in an
                                                            all-inclusive, convenient, and efficient world, then
                                                            count me right in.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #5: AI Leeches My Data And Privacy
                                                        </h4>
                                                        <p className="mt-5">
                                                            Let’s be real, data privacy and security concerns are
                                                            becoming more real by the minute. And who wouldn’t be
                                                            worried? With systems designed to take your data and
                                                            predict what you do next, how futile can our resistance
                                                            be?
                                                        </p>
                                                        <p className="mt-5">
                                                            What if I tell you there are already AI systems
                                                            specifically designed to let you thoroughly comprehend
                                                            and review the content before clicking that “Agree”
                                                            button on the Terms and Conditions?
                                                        </p>
                                                        <p className="mt-5">
                                                            Like any other powerful tool, AI can be used for the
                                                            better or for underhanded tactics. Rather than shoot the
                                                            messenger, why not hold accountable those people who
                                                            design AI for adversity?
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #6: AI Is A New Innovation We Still Can’t Trust
                                                        </h4>
                                                        <p className="mt-5">
                                                            Although it’s easy to think that AI is a cutting-edge
                                                            innovation fresh out of the oven, history would tell you
                                                            otherwise. In fact, its origins can be traced back to
                                                            World War II where machine learning’s foundations were
                                                            laid.
                                                        </p>
                                                        <p className="mt-5">
                                                            It wasn’t until years later that hardware caught up with
                                                            software and that AI, as we know it today, came to life.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            So if your trust in this technology is stifled by the
                                                            fact that it’s still on its alpha stage, think again.
                                                            Decades upon decades of blood, sweat, and brain cells of
                                                            countless people have been spent to get AI to the
                                                            impressive stage where it’s at now.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #7: My Business Has No Need For AI
                                                        </h4>
                                                        <p className="mt-5">
                                                            If there’s anything the COVID-19 pandemic brought to
                                                            light, it’s the importance of business continuity.
                                                            Seriously, no business owner worth their salt would be
                                                            caught without a contingency plan should operations go
                                                            south. And this is where AI can really shine.
                                                        </p>
                                                        <p className="mt-5">
                                                            If one of technology’s ultimate goal is to eliminate
                                                            scarcity, then AI complements this by letting humans
                                                            make the most out of our limited resources. Optimized,
                                                            ever-running operations? It’s every business owner’s
                                                            utopia.
                                                        </p>
                                                        <p className="mt-5">
                                                            Sure, it may be the least of your priorities today, but
                                                            the necessity for AI to stand out from the competition,
                                                            while keeping your operations functioning rain or shine,
                                                            is coming sooner rather than later.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            #8: AI Is just a Fancy Flair in Running My Business
                                                        </h4>
                                                        <p className="mt-5">
                                                            The sooner we embrace AI, the better. This is because it
                                                            supports the three pillars that modern-day businesses
                                                            need to get ahead: data insight, automation, and
                                                            engagement.
                                                        </p>
                                                        <p className="mt-5">
                                                            It doesn’t matter if you’re a well-established
                                                            institution or a startup business run solely by a
                                                            person, leveraging on AI’s capabilities to guide you
                                                            through your business decisions, pursue leads, and
                                                            streamline your processes bring about priceless benefits
                                                            any business can only have more of.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            We get it, AI is so vast you won’t even know where to
                                                            begin diving in. And maybe that same barrier of
                                                            unfamiliarity is what’s stopping most of us from fully
                                                            appreciating the power of AI.
                                                        </p>
                                                        <p className="mt-5">
                                                            But chances are, you have already experienced the beauty
                                                            of AI yourself, even without you noticing it—from
                                                            ordering your food a minute faster, being literally
                                                            saved by your car’s smart features, or maybe even
                                                            getting instant customer support assistance.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            AI is one of humanity’s greatest technological leaps.
                                                            Countless industries have already made the leap of faith
                                                            and are now reaping the benefits of AI, so what’s
                                                            stopping you?{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="50000" data-ride="carousel" data-interval="false" >
                                        <div className="blog-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="blogs-img ">
                                                        <img src={blog2} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-contents">
                                                        <h4>
                                                            Green Flags Of A Good Company: 6 Signs Your Employer Is
                                                            For Keeps
                                                        </h4>
                                                        <p className="mt-5">A job is more than a paycheck. </p>
                                                        <p className="mt-5">
                                                            You spend half of your waking life on it (or sometimes
                                                            even more), you get to interact with the same set of
                                                            people 5 days of the week, and it demands your full,
                                                            undivided dedication and attention. Not to mention you
                                                            most likely will do this for several years.
                                                        </p>
                                                        <p className="mt-5">
                                                            So when choosing one, it’s crucial to observe the
                                                            workplace culture to determine whether the next few
                                                            years of your life will actually be one of growth and
                                                            enjoyable challenges, or one full of dread and regrets.
                                                        </p>
                                                        <p className="mt-5">
                                                            No, the night-and-day comparison is not an exaggeration.
                                                            You may be at a point right now where your bills and
                                                            responsibilities take precedence, so office culture and
                                                            growth mean little. And as someone who lives in reality,
                                                            that’s okay. But there will come a point where you have
                                                            to ask yourself, “Is this the office culture I’m willing
                                                            to let go of my wellbeing for?”
                                                        </p>
                                                        <p className="mt-5">
                                                            To help you decide, here are 6 signs you work for a
                                                            company that takes care of its employees:
                                                        </p>
                                                        <h4 className="mt-5">
                                                            1. The management listens to new ideas and feedback
                                                        </h4>
                                                        <p className="mt-5">
                                                            Unfortunately, a lot of big-name, established
                                                            institutions fall into the trap of complacency. What
                                                            values and strategies brought them to the top decades
                                                            ago are still well in place even when a new generation
                                                            of consumers—and workers—are now in place.
                                                        </p>
                                                        <p className="mt-5">
                                                            So when your company encourages its employees to share
                                                            their process innovations, feedback, and techniques,
                                                            consider it a blessing. Not many are lucky to have their
                                                            voices heard throughout the organization.
                                                        </p>
                                                        <p className="mt-5">
                                                            Here’s the catch though: It also helps to observe which
                                                            feedback and recommendations are listened to. It may be
                                                            that the management does listen—but to select folks
                                                            only. Hierarchy or management level is also a factor you
                                                            have to take notice of when your company solicits a
                                                            review.
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? For smaller teams, a regular
                                                            group or one-one-session session wherein your ideas and
                                                            feedback are explored are held. For large organizations
                                                            however, a company-wide survey is usually held in place.
                                                        </p>
                                                        <h4 className="mt-5">2. Smiles are not a scarcity</h4>
                                                        <p className="mt-5">
                                                            Just like homes, the office vibe is usually a telling
                                                            sign of how the company operates. If it’s relaxed,
                                                            light, and filled with vibrant conversations, chances
                                                            are the employees within it feel at ease and comfortable
                                                            working.
                                                        </p>
                                                        <p className="mt-5">
                                                            Aside from emotional benefits, happy employees are also
                                                            productive employees according to a 2019 research by
                                                            Oxford University's Saïd Business School. So not only
                                                            are you surrounded by an environment that makes your
                                                            workload easier to handle, you’re also around people who
                                                            are scientifically proven to do more.
                                                        </p>
                                                        <p className="mt-5">
                                                            And it’s true what they say, “All work and no play makes
                                                            Jack a dull boy.” If your office culture treats its
                                                            employees like machines who can be 100% on work mode,
                                                            and not actual humans who need time for personal
                                                            welfare, then maybe it’s time to consider looking for an
                                                            employer who can treat you better.
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? It’s a sign that your company
                                                            sees you more than merely a money-making machine when
                                                            they occasionally shake things up and organize fun
                                                            events. Take notice if the management tries to keep its
                                                            people engaged. It doesn’t have to be grandiose—a simple
                                                            team lunch-out or even a virtual friendly competition
                                                            can do the trick.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            3. Employees are happily tenured with a low turnover
                                                            rate
                                                        </h4>
                                                        <p className="mt-5">
                                                            When employees feel job-secure, well-compensated, and
                                                            generally in an environment that lets them grow, chances
                                                            are they can stay with that company longer.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            It’s no rocket science: Would you ever think of leaving
                                                            an environment that keeps you happy, motivated, AND pays
                                                            you for it? It’s one of the easiest decisions you can
                                                            stick to.
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? Unlike the other items listed,
                                                            this one pertains more to the outcome rather than the
                                                            problem itself. In other words, you wouldn’t see it
                                                            coming until it hits you in the face. It may start with
                                                            general low morale within the company, then progressing
                                                            towards a stale workplace. Before you know it, you can
                                                            see your office riddled with vacant backfill positions
                                                            and fresh faces that you wish knew better.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            4. Employees grow both in experience and skillset
                                                        </h4>
                                                        <p className="mt-5">
                                                            Although low employee turnover is great, also take
                                                            caution on environments filled with people who have been
                                                            stuck doing the same stuff five 5 days a week for so
                                                            many years.
                                                        </p>
                                                        <p className="mt-5">
                                                            It’s not enough that employees stay, it’s also important
                                                            what the company does for the people who do.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            For instance, upskilling workers is one of the surefire
                                                            ways of ensuring they continuously grow even when
                                                            they’re staying with the same organization. And it
                                                            doesn’t have to be super official, complete with
                                                            certifications (although we wouldn’t say no to that!),
                                                            or a paid instructor.
                                                        </p>
                                                        <p className="mt-5">
                                                            It can be as simple as intercompany refresher courses on
                                                            basic office skills such as spreadsheets, word
                                                            processing software, or as straightforward as business
                                                            writing training.
                                                        </p>
                                                        <p className="mt-5">
                                                            It can also be in a form of work rotation, just to keep
                                                            it fresh for the workers while also letting them know
                                                            the organization better through exploration and
                                                            immersion outside their usual environment.
                                                        </p>
                                                        <p className="mt-5">
                                                            The best companies to work for are those who are as
                                                            interested in driving your value as you are in boosting
                                                            theirs. After all, an organization is only as good as
                                                            its individual members.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? Take notice if there are company
                                                            initiatives to keep workers from being stale in terms of
                                                            growth and experience, whether it be training,
                                                            educational grants, or maybe even special schedule
                                                            arrangements to accommodate your external courses.
                                                        </p>
                                                        <p className="mt-5">
                                                            On the flip side, if you notice bored and unchallenged
                                                            employees, chances are the organization isn’t as
                                                            invested in their growth as you hope they’d be.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            5. They prefer the carrot to the stick
                                                        </h4>
                                                        <p className="mt-5">
                                                            Another strong sign that an organization has its
                                                            employees’ welfare in mind is implementing positive
                                                            reinforcement as the norm.
                                                        </p>
                                                        <p className="mt-5">
                                                            Gone are the days of being penalized for not reaching
                                                            your quota. Nowadays, those who exceed the company
                                                            benchmark are rewarded extra for delivering beyond their
                                                            goals.
                                                        </p>
                                                        <p className="mt-5">
                                                            Not to say that refractions are unacceptable now, there
                                                            are still some cases where they’re appropriate. But when
                                                            your management leans towards motivating you through
                                                            worthwhile and appealing rewards, one can’t help but
                                                            return the kindness with dedication and loyalty.
                                                        </p>
                                                        <p className="mt-5">
                                                            An organization that truly has your welfare in mind
                                                            works with you, and not against you.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? You can usually tell a company’s
                                                            values by the consequences of the key performance
                                                            indicators it imposes. For instance, does it reward
                                                            top-performing employees or would it rather demote those
                                                            who are not doing so well?{" "}
                                                        </p>
                                                        <h4 className="mt-5">6. Your efforts are recognized</h4>
                                                        <p className="mt-5">
                                                            As simple as it may seem, there’s no denying the power
                                                            of recognition and appreciation especially in a
                                                            professional setting.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            You can be at a lucrative-paying job, or be surrounded
                                                            by the most engaging company activities, but without an
                                                            occasional tap on the back for a job well done, it’s
                                                            hard not to feel disregarded and unvalued.
                                                        </p>
                                                        <p className="mt-5">
                                                            No need for a full fanfare, even quick gestures go a
                                                            long way in keeping an employee happy, motivated, and
                                                            engaged. Seriously, who doesn’t like a little validation
                                                            now and then?
                                                        </p>
                                                        <p className="mt-5">
                                                            How would I know this? You can tell workers feel valued
                                                            when they actively take part in the culture of
                                                            appreciation themselves. You often hear “Great job”s or
                                                            “You did great”s exchanged and teammates are genuinely
                                                            proud of their peer’s achievements.
                                                        </p>
                                                        <p className="mt-5">
                                                            Not to worry if these all still sound unrealistic to
                                                            you. Finding the perfect workplace really does take a
                                                            lot of time, patience, and maybe a little bit of luck
                                                            too.
                                                        </p>
                                                        <p className="mt-5">
                                                            Never say never though. While it may be true that
                                                            finding a job that keeps you happy is hard to come
                                                            by—and finding a company that takes care of you
                                                            (financially and beyond) is something a lot rarer, it’s
                                                            all going to be so worth it when you finally do.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="50000" data-ride="carousel" data-interval="false" >
                                        <div className="blog-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="blogs-img ">
                                                        <img src={blog3} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-contents">
                                                        <h4>
                                                            Why Bother Automate? 10 Benefits Only Automation Can
                                                            Give You
                                                        </h4>
                                                        <p className="mt-5">
                                                            Automation is not the enemy. In fact, many thriving
                                                            businesses can correlate their newfound or continued
                                                            success to automation propelling their business towards
                                                            stability and success.
                                                        </p>
                                                        <p className="mt-5">
                                                            You see, there’s no combination more potent than
                                                            powerful technology, effective implementation, and
                                                            adaptive internal management. How these foundations are
                                                            laid can make or break any enterprise especially in
                                                            today’s relentless competition.
                                                        </p>
                                                        <p className="mt-5">
                                                            So if you’re still on the fence about whether automation
                                                            really is the next step for your business, here are some
                                                            points to consider when taking the leap:
                                                        </p>
                                                        <h4 className="mt-5">
                                                            1. You Get Seamlessly Interweaving Processes
                                                        </h4>
                                                        <p className="mt-5">
                                                            Don’t you love it when your data and records are
                                                            scattered across separate repositories? I know I don’t.
                                                            This is where automation can help make your operations
                                                            run more efficiently.
                                                        </p>
                                                        <p className="mt-5">
                                                            Automation does the heavy lifting of bridging all your
                                                            silos into one organized and convenient platform. Not
                                                            only do you save time and resources, you also produce
                                                            results that are more accurate since your data is
                                                            processed in real-time.
                                                        </p>
                                                        <p className="mt-5">
                                                            Manually scouring through years’ old records will become
                                                            a thing of the past if your transition to automation is
                                                            done right.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            2. You Easily Establish an Always-On Market Presence{" "}
                                                        </h4>
                                                        <p className="mt-5">
                                                            24/7 operation is one of the most taken-for-granted
                                                            luxuries in today’s commerce. Not only is it expensive
                                                            to have employees on-rotation day and night, it also
                                                            puts your branding in the hands of select employees who
                                                            can be susceptible to lapses without rigorous training.
                                                        </p>
                                                        <p className="mt-5">
                                                            Chatbot and automated marketing through email and social
                                                            media, when implemented right, can really bolster your
                                                            business’ presence in the market not only on customer
                                                            reliability but on pursuing leads as well.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            But of course, nothing beats actual human interaction
                                                            when engaging with customers. This is why automating
                                                            menial tasks such as post scheduling, auto-replies, and
                                                            data retrieval can help make your employees focus on
                                                            more complex, stringent tasks.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            3. You Get 24/7 Productivity (That Won’t Break the Bank)
                                                        </h4>
                                                        <p className="mt-5">
                                                            If you’re in a business where volume is paramount to
                                                            your sales, then automation couldn’t be more helpful in
                                                            pushing your business in the right direction.
                                                        </p>
                                                        <p className="mt-5">
                                                            Not only can you produce a steady volume, you’ll also be
                                                            driving the efficiency of how you use your resources
                                                            without compromising the quality of your output.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            4. You Can Effortlessly Empower Your Employees
                                                        </h4>
                                                        <p className="mt-5">
                                                            Contrary to popular belief, automation actually makes
                                                            employees feel more significant and value-adding to the
                                                            organization.
                                                        </p>
                                                        <p className="mt-5">
                                                            See, with automation taking away those dreaded
                                                            “dead-end” tasks, it’s more likely that your workforce
                                                            is handling complex assignments that are diverse and
                                                            mentally challenging.
                                                        </p>
                                                        <p className="mt-5">
                                                            Without those dull and repetitive tasks holding them
                                                            back, employees working alongside machines gain more
                                                            autonomy over their daily tasks and, in turn, are more
                                                            motivated to work.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            5. You Get an Agile Collaboration in Your Organization
                                                        </h4>
                                                        <p className="mt-5">
                                                            Automation makes team operations run more efficiently
                                                            through technology. No longer are people bound by
                                                            distance, automation can collect and organize team
                                                            members’ contributions in real-time.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            The shift in automation also lowers the ancient barrier
                                                            of the corporate hierarchy, paving the way to a more
                                                            democratic and diverse working culture.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            6. You Get Immediate Data Collection
                                                        </h4>
                                                        <p className="mt-5">
                                                            With automation comes hair-trigger actions that you
                                                            don’t always get with manual labor. One of the many
                                                            situations this comes in handy is establishing and
                                                            growing your list.
                                                        </p>
                                                        <p className="mt-5">
                                                            Whether it’s in the form of a newsletter subscription,
                                                            clicking the “Follow” prompt, or simply hitting a react
                                                            button on a social media post, the business can quickly
                                                            assess which people are most reactive to their content.
                                                        </p>
                                                        <p className="mt-5">
                                                            Data capture is also crucial in terms of knowing your
                                                            target market’s demographics, what type of content works
                                                            the best for your audience, or even what trends your
                                                            business can straddle on for maximum reach and exposure.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            7. You Can Make Your Operations Readily-Scalable
                                                        </h4>
                                                        <p className="mt-5">
                                                            Scaling up your operations usually comes with a hefty
                                                            price, especially in manpower. On the other hand,
                                                            scaling down usually means redundant employees and
                                                            resources that ultimately get underutilized.
                                                        </p>
                                                        <p className="mt-5">
                                                            One aim of automation is to afford its users
                                                            flexibility, whether they’re producing twice or half of
                                                            last week’s output.
                                                        </p>
                                                        <p className="mt-5">
                                                            No longer do you have to manually train new employees or
                                                            spend days to ensure their learning curve is mitigated.
                                                            With an automated tool that is specifically designed for
                                                            your operations, scalability is only a matter of
                                                            modifying your tool to adapt to the changes in your
                                                            processes.
                                                        </p>
                                                        <h4 className="mt-5">8. You Can Optimize Your Costs</h4>
                                                        <p className="mt-5">
                                                            Manpower is one of the biggest costs automation can help
                                                            reduce in your business.
                                                        </p>
                                                        <p className="mt-5">
                                                            Optimizing your workweek not only means saving capital
                                                            to keep your operations running for longer, it also
                                                            helps your workforce stay competitive and focused by
                                                            focusing on challenging tasks.
                                                        </p>
                                                        <h4 className="mt-5">9. You Get Data-Driven Insights</h4>
                                                        <p className="mt-5">
                                                            Another understated benefit of automation is its
                                                            capability to produce black-and-white data that can
                                                            concretely guide your business forward. Just like
                                                            adapting to the current trends, it’s equally important
                                                            for your business to also have the ability to forecast
                                                            the market’s direction.
                                                        </p>
                                                        <p className="mt-5">
                                                            Quantifying your performance lets you evaluate what
                                                            strategies are fit for your market, what approach works
                                                            best in advertising your products and services, and most
                                                            importantly, how to proactively cater to your customers’
                                                            ever-changing appetite.
                                                        </p>
                                                        <h4 className="mt-5">
                                                            10. Tighter Production Safety and Reduced Human Errors
                                                        </h4>
                                                        <p className="mt-5">
                                                            Automation comes with the comfort of predictability,
                                                            whether you’re in an on-site workplace environment or a
                                                            completely virtual setup.
                                                        </p>
                                                        <p className="mt-5">
                                                            In the manufacturing industry, automation reduces the
                                                            safety risk for your employees while producing a
                                                            predictable amount of output per cycle. Meanwhile for
                                                            virtual setups, automating your processes reduces the
                                                            risk of human errors while also driving your
                                                            productivity up.
                                                        </p>
                                                        <p className="mt-5">
                                                            Sure, nothing beats the power of human ingenuity. And
                                                            automation doesn’t aim to replace that.
                                                        </p>
                                                        <p className="mt-5">
                                                            It is, however, designed to boost your production with
                                                            the manpower and resources you already have. So if
                                                            you’re targeting to make the most out of your current
                                                            capital, automation is a sound investment that you can
                                                            make today.{" "}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-interval="50000" data-ride="carousel" data-interval="false" >
                                        <div className="blog-box">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="blogs-img ">
                                                        <img src={blog4} alt="" className="img-fluid" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="blog-contents">
                                                        <h4>
                                                            Work Smart, Not Hard: 5 Tips on Creating your Workplace
                                                            Legacy
                                                        </h4>
                                                        <h5 className="text-center mt-5">
                                                            “You live only as long as the last person who remembers
                                                            you.” – Westworld
                                                        </h5>
                                                        <p className="mt-5">
                                                            Legacy is such a big word. Most of us, especially young
                                                            professionals fresh out of college, don’t even know
                                                            where to start our journey towards imprinting a lasting,
                                                            lifetime legacy within the organization.
                                                        </p>
                                                        <p className="mt-5">
                                                            But when you think about it, you most likely don’t
                                                            remember who initiated automating your company
                                                            processes, or who held the all-time highest sales figure
                                                            in the company.
                                                        </p>
                                                        <p className="mt-5">
                                                            Rather, the ones you remember are those who consistently
                                                            lent you a hand during project crunch times, or those
                                                            who patiently answered your queries during team
                                                            meetings.
                                                        </p>
                                                        <p className="mt-5">
                                                            Sure, organizational legacies are nothing short of
                                                            impressive. But fostering a culture of productivity and
                                                            upping the workplace benchmark? That’s what modern
                                                            legends are all about.{" "}
                                                        </p>
                                                        <p className="mt-5">
                                                            Here are five tips on how you can begin your journey
                                                            towards corporate prominence:
                                                        </p>
                                                        <h4>1. Be remembered.</h4>
                                                        <p className="mt-5">
                                                            You can’t build a legacy without people remembering you.
                                                            Very much like the concept of selling yourself, an
                                                            unwavering, consistent, and solid branding is your key
                                                            to being remembered by your teammates, clients, and
                                                            stakeholders.
                                                        </p>
                                                        <p className="mt-5">
                                                            Whether you’re labeled as the team's Buzzer-Beater with
                                                            your last-minute submissions, or remembered with an
                                                            actual impressive title like the Excel Wizard or the
                                                            Office Oracle is completely up to your skills, smarts,
                                                            and how you play your cards.
                                                        </p>
                                                        <p className="mt-5">
                                                            The bottom line: make yourself indispensable to the
                                                            team, and ultimately to the whole company, through a
                                                            solid branding that is unmistakably and uniquely yours.{" "}
                                                        </p>
                                                        <h4 className="mt-5">
                                                            2. Observe the tasks you grumble about.
                                                        </h4>
                                                        <p className="mt-5">
                                                            Have you ever been tasked with something so menial you
                                                            can’t help but wish for robots to replace you right
                                                            there and then? Chances are, these grumble-worthy tasks
                                                            are the process gaps your team can improve on.
                                                        </p>
                                                        <p className="mt-5">
                                                            If you’re looking for a much more concrete legacy to
                                                            leave, streamlining is one of your biggest allies. After
                                                            a much-needed grumbling, it helps to think what
                                                            improvements can be made to optimize the processes
                                                            currently in place within the organization.
                                                        </p>
                                                        <p className="mt-5">
                                                            Of course, inspiration without action is merely
                                                            entertainment. Formulate a plan on how to best approach
                                                            the subject or how to formally escalate this to your
                                                            superiors.
                                                        </p>
                                                        <h4 className="mt-5">3. Put your faith in technology.</h4>
                                                        <p className="mt-5">
                                                            Especially effective in organizations still clinging to
                                                            old-fashioned, manual labor, familiarizing yourself with
                                                            automation and online collaboration tools will not only
                                                            put you in a good light but overall make life easier for
                                                            your team and clients as well.
                                                        </p>
                                                        <p className="mt-5">
                                                            Win-win, right? Well, it helps to also ease your
                                                            teammates into the transition first. Keep in mind that
                                                            people tend to reject the unfamiliar. A smooth
                                                            transition helps them get to know the innovation and, if
                                                            the stars are aligned, to actually grow an appreciation
                                                            for it.
                                                        </p>
                                                        <h4 className="mt-5">4. Make a mentor.</h4>
                                                        <p className="mt-5">
                                                            Coincidentally, leading by example works not only for
                                                            children but for full-grown adults as well. One tested
                                                            way to know how to create a legacy within the workplace
                                                            is to observe someone who has actually done it – not to
                                                            retrace their steps, but to take inspiration from their
                                                            decision-making.
                                                        </p>
                                                        <p className="mt-5">
                                                            How did their initiative begin? Where did they even get
                                                            the idea of shaking things up? And most importantly,
                                                            what supporting actions have they done to enforce this
                                                            change within the organization?
                                                        </p>
                                                        <p className="mt-5">
                                                            Whether it be through networking to win over colleagues,
                                                            persistent campaigning and awareness drives to promote
                                                            the innovation, or directly through mandating the new
                                                            process, it helps to see what went right and what went
                                                            wrong from those who have treaded the path before you.{" "}
                                                        </p>
                                                        <h4 className="mt-5">
                                                            5. Make your presence felt even after your employment.
                                                        </h4>
                                                        <p className="mt-5">
                                                            The harsh reality is that it is not enough to excel
                                                            during your time at work. Sure, you’ll be remembered by
                                                            your immediate teammates and maybe even your boss, but
                                                            what happens after their time in the workplace?
                                                        </p>
                                                        <p className="mt-5">
                                                            Your contributions should ideally ripple beyond your
                                                            immediate environment. It doesn’t have to be something
                                                            grand or complex, it can be simple yet meaningful
                                                            gestures that surpass your time and reach in the
                                                            organization.
                                                        </p>
                                                        <p className="mt-5">
                                                            For instance, coaching your teammates on a certain
                                                            skillset you excel at not only boosts your relevance to
                                                            the organization but also makes the team more efficient
                                                            for stakeholders to work with. This way, your presence
                                                            can still be felt long after your time in the company.
                                                        </p>
                                                        <p className="mt-5">
                                                            But as with all great things, planning ahead and
                                                            strategizing heightens your probability of success. The
                                                            best way to create your workplace legacy is to prepare
                                                            for it while you’re still working. Doing this not only
                                                            boosts your performance but inspires your teammates as
                                                            well.
                                                        </p>
                                                        <p className="mt-5">
                                                            Lastly, keep in mind: Legacies don’t happen overnight.
                                                            It most certainly doesn’t come served on a silver
                                                            platter. It requires persistent effort, consistent
                                                            performance, and heaps of patience not only for those
                                                            around you but for your personal development as well.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="carousel-control-prev"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="prev"
                                >
                                    <span aria-hidden="true">
                                        <i className="fas fa-long-arrow-alt-left" />
                                    </span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a
                                    className="carousel-control-next"
                                    href="#carouselExampleControls"
                                    role="button"
                                    data-slide="next"
                                >
                                    <span aria-hidden="true">
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default BlogBanner
