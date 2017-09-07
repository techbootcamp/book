# Web Accessibility
Author: Brian Sherwin

Inclusive Practice of building applications with interactions for functionality with consideration for people with disabilities.

This isn't about removing barriers…it's about building applications without them.

If you don't have a disability it's hard to understand what the experience for a disabled user is. One of the closest analogies though might be using a desktop website on a mobile phone. Think of how frustrating that was.

## Background
In 1990, the Americans with Disabilities Act (ADA) was enacted into law. It prohibits discrimination and ensures equal opportunity for people with disabilities in employment, state and local government services, public accommodations, commercial facilities, and transportation.

In 1998, Congress amended the Rehabilitation Act of 1973, including Section 508 to require Federal agencies to make their electronic and information technology accessible to people with disabilities. Inaccessible technology interferes with an individual’s ability to obtain and use information quickly and easily. Section 508 was enacted to eliminate barriers in information technology, to make available new opportunities for people with disabilities, and to encourage development of technologies that will help achieve these goals. The law applies to all Federal agencies when they develop, procure, maintain, or use electronic and information technology. Under Section 508 (29 U.S.C. 794d), agencies must give disabled employees and members of the public access to information that is comparable to the access available to others. [[1]](
http://webtools.ca.gov/web-content/web-accessibility/background-on-accessibility/)

**BUT THAT SHOULDN'T MATTER!!**

It's just the right thing to do.

Because the web has become an essential resource for almost every area of our lives from education to government, healthcare to banking, recreation to employment, it is imperative that the web be accessible in order to provide equal access and opportunity to people with disabilities.

One should be careful to not only think of permanent physical disabilities but also older people, temporary injuries and others with special needs that are not always permanently manifested.

Often we talk about this as reduced legal risk because of laws, but this is more about social responsibility. Accessibility can become a major factor in application usability and thus, customer loyalty.

## Areas of Concern
* Visual: color blind, low vision, blindness
* Mobility: motor control, speed, missing or uncontrolled limbs
* Audible: deaf, hard of hearing
* Seizures: flashing/strobing
* Cognitive: dyslexia, memory or attention
> Note: Disabilities can be Temporary, Permanent or Situational

## Accessibility Statistics
57 Million Americans have a Disability
According to the new figures released by the Census Bureau on July 25, 2012, 56.7 million Americans (18.7% of the U.S. population) have some type of disability and out of this number, an estimated 38.3 million (12.6%) have a severe disability.

Consider impairments that impact accessibility of online websites, applications, and documents.  This survey estimates the number of people with specific impairments as follows:
* 19.9 million (8.2%) have difficulty lifting or grasping. This could, for example impact their use of a mouse or keyboard.
* 15.2 million (6.3%) have a cognitive, mental, or emotional impairment.
* 8.1 million (3.3%) have a vision impairment. These people might rely on a screen magnifier or a screen reader, or might have a form of color blindness.
* 7.6 million (3.1%) have a hearing impairment.  They might rely on transcripts and / or captions for audio and video media.

![Myth of "Minority User"](http://www.interactiveaccessibility.com/system/files/account_pics/myth-of-minority-user.png)
>This section was taken from Interactive Accessibility [2](http://www.interactiveaccessibility.com/accessibility-statistics)


## Assistive Technologies
* Screen Readers
> Some operating systems have this built in. Browsers have extensions that read content specific to HTML. JAWS is probably the most widely used screen reader.
* Braille terminals
* Screen Magnification
* Speech Recognition
* Keyboard overlays
* Subtitles / PiP signing in videos

While screen readers are not the only assistive technology, they are the easiest to get a hold of. Building a website that works well with a screen reader will get you most of the way with the other technologies. The larger your audience, the more you will want to invest in devices for testing during development.

## WCAG 2.0 Standard
The [WCAG 2.0 Standard](http://www.w3.org/TR/2008/REC-WCAG20-20081211/) was published as a W3C recommendation on December 11, 2008.

These guidelines establish a set of guidelines that can make your content more accessible to people with disabilities. There are four principles that the guidelines fall under and form the acronym **POUR**:

* Perceivable
    > Information and user interface components must be presentable to users in ways they can perceive.

	1. Provide text alternatives for any non-text content so that it can be changed into other forms people need, such as large print, braille, speech, symbols or simpler language.
    1. Time-based media: Provide alternatives for time-based media.
	1. Create content that can be presented in different ways (for example simpler layout) without losing information or structure.
	1. Make it easier for users to see and hear content including separating foreground from background.
* Operable
	> User interface components and navigation must be operable.

	1. Make all functionality available from a keyboard.
	1. Provide users enough time to read and use content.
	1. Do not design content in a way that is known to cause seizures.
	1. Provide ways to help users navigate, find content, and determine where they are.
* Understandable
    > Information and the operation of user interface must be understandable.
	
    1. Make text content readable and understandable.
	1. Make web pages appear and operate in predictable ways.
	1. Help users avoid and correct mistakes.
* Robust
    > Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

	* Maximize compatibility with current and future user agents, including assistive technologies.

While the guidelines are helpful, they are not overly prescriptive. This is where the Web AIM team created a [checklist](http://webaim.org/standards/wcag/checklist) for the WCAG principles.

## First Steps on Web Accessibility Practices to make a web site more accessible
[Here](http://www.w3.org/WAI/eval/preliminary.html) is a good first pass at the steps you should be taking before publishing your website for users. 

## Helpful Development Tools
* ChromeVox
* FireVox

## Places to Learn More
* [Free Udacity Course on Accessibility](https://classroom.udacity.com/courses/ud891)
* [Section 508 Checklist](http://webaim.org/standards/508/checklist)
* [Microsoft Accessibility](https://www.microsoft.com/en-us/Accessibility/windows)


## Technical Challenge
Details will be given at bootcamp, but after the bootcamp, refer to the following "Before And After Demo" to review how to improve a website with WCAG2.0

[BAD - Before and After Demo](http://www.w3.org/WAI/demos/bad/Overview.html)