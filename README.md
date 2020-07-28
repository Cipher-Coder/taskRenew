<div class="icon" style="text-align: center;">
<img src="icons/taskRenew128.png" alt="Task Renew Icon"/>
</div>

# Task Renew

### _This extension is only for RaterLabs or Appen Global Raters who are a part of the Arrow Project._

&nbsp;

As I am sure you are all well aware, one of the worst parts of this job is the dreaded NTA. I know there are some page refresher tools and things of that nature, that you can possibly use to refresh the page and keep checking for tasks, but I tried to go a step further and made a custom extension for this.

Not only does this extension check for tasks, it will also notify you via a Chrome notification and an email message sent to whatever email you enter. This way, you can keep doing whatever it is you want and you will get an email once tasks have been acquired.

> Since I have not had this approved by Appen or RaterLabs, I have yet to release it as a full-fledged Chrome extension. If I can ever figure out who to talk to about getting approval and/or checking this out and releasing it to the other raters, I will absolutely go through the process. But until then... load it as an unpacked extension on Chrome.

### To use:

Step 1: Downlad the extension from this repo. To do so, click the 'Code' button and then "Download as Zip"

Step 2: Extract the contents of the zip file. It can be placed anywhere in your filesystem at this point since we are loading it as an Unpacked extension.

Step 3: Open Chrome and in the upper right corner, click the three vertical dots. Go to 'More Tools' and then click on 'extensions'.

Step 4: At the top right hand side you will see "Developer Mode", click the slider to turn on Developer mode and then you will see three buttons appear.

Step 5: Click 'Load Unpacked' and it will bring up your File Explorer, or Finder. Navigate to where you have unpacked the zip folder containing the code for the extension. Then click on the unpacked folder and click 'open'. This will now add the extension to Chrome.

## What it does...

The repo is open, so anyone whom would like to read the code is more than welcome to. In fact, if you want to make it better in anyway, or see anywhere it could be improved... please feel free.

I wanted to be careful about not interfering with what our company does. I choose not to intercept or even send the network request with fetch or ajax, I did not want to read it, or the response. I also did not want to get involved with auth or any of the cookies that have to be sent along with the request to acquire more tasks.

Once it is loaded, click on the icon next to the address bar. A window will appear with two inputs. The first input, which is required, is for whichever email you want the notification sent to. Once the extension acquires new tasks, it will send an email telling you it found tasks and to return to your computer to start working.

The second input is the time interval in Minutes. This is how often you want the computer to check for tasks. RaterLabs does not want us checking for tasks sooner than every two minutes so the minimum is 2 and that is also set as the default. If you leave this input blank, it will use the default value and it will check every two minutes for tasks. If you only want to check every half hour, then just enter 30 into this input.

The extension is actually programmed to press the button for you. As I said earlier, it is not actually sending the request, just pressing the button. With that being said, make sure you are already signed into your rating email before using this. Then after it presses the button, it waits for two seconds to allow the network to return the response and it checks the text at the top of the screen. If the text says "No tasks are available." it will continue to check for tasks. If a task is returned, it will fire off an email from my server, as well as a notification from Chrome telling you to return to your computer that tasks have been found.
