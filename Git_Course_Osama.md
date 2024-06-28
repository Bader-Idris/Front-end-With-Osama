Git and GIthub by Usama Muhammad

git is a tool and github uses it as other websites such as GitLab, BitBucket, although we can upload it into a [  centralized server ] 

Git has GUI graphical user interface
as github desktop, but it's not preferred

*----------------------*
WORDS YOU'LL HEAR IN OFTEN:
Repository spelled as repo
Branch means a section as for CO.s 
Local and Remote Repo
Commit (Snapshot or Checkpoint In Your Local Repo) 
Clone [From Local Or Remote] we can clone locally in another dir location
Push [ Upload Local Changes To Remote ]
Pull [ You Change From Remote Repo To Your Local ]
Pull Request [ Inform others of version Changes, From Local To Remote ]


eg:
CokeCola is the repo, and in egypt it has a Branch./cairo branch
the server is the Remote repo and your PC is the Local repository.
Using clone with pure PHP and other Frameworks branched to it

IMPORTANT NOTES: 
Specify Each Project With Its Repository, don't involve many projects into one repo
Create New Branches for Each Enhancement and Feature.
No Need To Be Connected with Remote repos when Working
Users Push/Pull by Their Permission

4:36 PM 11/12/2022 12 here is date not MN
----------------------------------

3rd lesson Create Repo and Clone It 

After getting the syntax you'll be able to work with any website that's tended for git usages as 
local or gitlab or as mentioned above

ReadMe.md [md extension here represents markdown ] as txt for windows, it only supports HTML.

Its syntaxes are in github:
# represents how big is a heading
 # The largest heading.
## The second largest heading.
###### The smallest heading.
...
To clone our repo we go to our named repo then 
click on the right green bottom on top corner
Clone or download
ends with git extension

after we went to our directory inside our OS 🔽🔽🔽
as E:/coding_and_programming 
[back slash as for linux]:
we start to clone our repo by terminal
by typing: 
git clone https://githubRepoLocation



our dir for this course is [ cd /e/coding_and_programming/My-Github
 ]
we can download Cmder as our terminal, or use Git Bash.
6:53 PM 11/15/2022
----------------------------------
 we clone/create a repo then see this 🔽

********************************************************************
an outer important command I found to access in our repo
is:
git init https://github.com/Bader-Idris/MyStackshare.git 🔽🔽🔽
it didn't work, I solved the problem by running cmder that Osama uses and accessing my repo place which is 
E:\coding_and_programming\My-Github\MyStackShare

So, I type: 🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽🔽
cd /d E: 
to access an external driver we type /d then the driver
cd /d E:\coding_and_programming\My-Github\MyStackShare
********************************************************************



git status It shows the lack of files you have
get status

untracked files:  means files now added to its staging area [preparing place] to give them commit then upload them to 
our local repo after all three stages we push it to the remote repo as github hitLab etc. eg:
git add css\main.css [1st css here is a dir]
or by adding the wildcard * to upload each file
to add two files in same dir we type the path and separate the second file name as:
git add css\main.css index.html

how to unstage files [ picking them out of remote files ]:
git reset head fileName.ext 

to add that folder to our local repository we type:
git commit -m "a message with its files"

10:10 PM 11/26/2022
----------------------------------
Osama uses push command that pushes commands to local repo then to remone the remote one

git branch informs us each branch in our local
so we can add many ones with many advantages for each.

(main -> origin) main means the branch and origin is the remote repo 

git push RemoteName BranchName as:
git push origin main ↵

git remote -v shows remote versions

github requires my login details to give permissions as it's private in most cases.

git  pull  RemoteName BranchName comes before pushing files as I saw

11:50 PM 11/27/2022
----------------------------------
6th lesson Push Changes Nn Remote Repository
creating a repo to share with the crew

in another user's account we clone the repo and made our changes
and added new files,
then pushed to our Local branch then to remote repo

it will inform us that it Forks [taking a version ]it as other users.
instead of forking it as an outer user, we go to project's settings ↵
Collaborators [to be a part of the team]

when we pull files from the remote repo two phases occurs
git fetch [brings changes ] and git merge [it merges both local and remote files]

I must use two account to check if I understand this lesson or not!?!

11:00 PM 11/28/2022
-----------------------------------
7th lesson Configurations 

we'll add usernames, emails and change the colors, and whatnot

we can change it locally and globally 
to see the configuration list we type: 
git --config -l
or as not a shorthand
git  --config --list
so many things to modify as we wish
but as a new cmder it won't be inside our file, so we type:
git help config it'll refer us to an HTML file filled with info named as 
git-config Manual Page
as other softwares, config has little crurial info, and manual one has the whole info,

so we can add some of it to our configuration file after search inside the page

Two ways to modify it, one is by our Editor as Vs code, and 2nd is 
by terminal itself:   so we type:
git config --global [our config here]   as:
git config --global user.email

To change it, easily we type same as above and double quotes "" and the value within it, e.g:
git config --global user.email "baidsforbusiness@gmail.com"

we can get out of (END),  by typing Q button
it appears as : to me! [colon symbol : ]

if we have duplicate commands we should see its origin, so we type:
git config -l --show-origin
we can empty our values by adding empty double quotes as ""
for example:
git config --global user.name ""
or by adding --unset user.name as following:
git config --global --unset user.name 

To modify The Configurations By Our Editor we type:
git config --global --edit 

We can change the color in a batter way by Editor as 
------------
[color "status"]
  added = green 
  changed = red bold 
  untracked = magenta bold

[color "branch"]
  remote = yellow
------------
touch new_file.txt to create a new file

If we remove our changes it goes back to default value

5:43 PM 11/29/2022
------------------------------------------------
8th lesson Generate and test Github public Key, AKA Secure shell key
We can have many  Public Keys to access from anywhere
It doesn't force us to append user and passwd each time we access it!

Repos have their own permissions to prevent strangers as we know, It uses layers to access it.

Public Keys are popular than Github, so it's a security object connected to Systems as Linux

To generate our public key we type:
ssh-keygen -t rsa -b 4096 -C "mymail@gmail.com"

 [ssh means secure shell], and [keygen means key generator]
[-t means the type of algorithm when generating our key]and [rsa is a type of algorithm named as [rivest shamir adleman]] dsa is another type as [Digital Signature Algorithm], and there's ecdsa type stands for [Elliptic curve digital signature algorithm], 
-b is the number of bits

So, it generates it to our local repo

then it asks for a password to secure it: 
we can type it or leave it, when we type it, nothing appears when typing 

My passwd is same as my PC's one

cat  shows file's content so after last command we access our dir as:
cat ~/.ssh/id_rsa.pub it got saved as this with Osama, the public key.

So, we copy all text [it's a long one], and go to our GitHub ↵ settings ↵
SSH and GPG keys ↵ click on New SSH key [secure shell key]
and we give it a title as [My Home's PC]

Then we go back to git, to check its situation, so we type:
ssh -T git@github.com ↵ passwd 

3:44 PM 11/30/2022
------------------------------------------------
9th lesson uploading existing projects to github

chdir equals to cd, it means change directory
This lesson is Important to have the repo and origin commands in our cmder terminal, so, we use this command:
git init it initializes an empty repo in current dir

After creating a repo inside github, as MyStackShare,  we choose what security algorithm we'll be using! either SSH or HTTPS, 
So, we choose SSH, because it accesses with our public key 

after  that, we access our remote repo by typing this command:
git remote add origin git@github.com:Bader-Idris/MyStackShare.git

then we use:
git push -u origin main [main is instead of master]
-u stands for pulling and pushing simultaneously
we use pull because fills will be changed after we got a clone

2:00 PM 12/1/2022
------------------------------------------------
10th lesson Pull request 
Pull request is useful because it's phasing contributed files to be modified by other members of the Company before pushing it again

He made a fork as a beginning, and made a change to the ReadMe file, and made a normal commit then went to Pull requests window, and made a one with its commits

In the main admin account, he went to Pull requests tab to see who's asking it

then in the little account after the fork has been accepted, we can delete the fork, because it's available to re-fork it 

2nd way, after we fork the files instead of committing our modifies and titles we  create a new branch then it goes to local repo, to send it finally to remote repo as a pull request
it opens a pull request, but it's locally and you're whom to accept it

So, why do we do this?
because we will be in a big company and the main project isn't the same as we push directly, we'll be in a smaller team to modify the files

After that we make a pull request to the main company whom we got the projects from to accept our modifies

10:53 PM 12/2/2022
------------------------------------------------
11th lesson Aliases
We can make our shorthands/aliases instead of typing many words
same as functions [I think]

To short-hand  our git status for instance we type:
git config --global alias.st status
st here is our made, instead of status, so we type:
git st  instead of prior one

when having a space in our code we add ""
so commit -m becomes cm after we make these:
git config --global alias.cm "commit -m"

it's lovelier to modify them by git config --global --edit 
the one who goes to our editor

search for git alias list  to see lovely results from others

11:05 PM 12/2/2022 Dec
------------------------------------------------
12th lesson Branching And Merging
After we fix bugs or do the work in a particular branch, we do:
Clone the branch to the master branch, or we send it to it in a pull request

git branch shows what branches are in our Repo
git Branch Scroll scroll here is our name for a new branch
git checkout Scroll makes us go to our tended branch
git branch -d Scroll deletes our branch
-d [small] deletes safely, and -D deletes forcely[not caring about file changes]
git checkout -b Dev-Feature creates a branch and goes to it, called dev...
get branch -m NewName to rename the branch

let's say we're in master branch, to merge it with Scroll we type:
git merge Scroll when in master one, then to delete it 
git branch -d Scroll then we push it git push RepoName master[repo as origin ]

11:05 PM 1/3/2023 Jan
------------------------------------------------
13th lesson Mastering Stash Part 1

stash command is to hide/sort sth
after adding the new changed files 
before uploading 'em to the repo by
using: 
git stash 
and not deleting 'em
if we check by git status it'll return none, so they're sorted aside.
git pop brings it back from its shelter to drop 'em
we check their existing by coding:
git stash list if empty, they're dropped if there's a crypto code, they're inside the shelter!
now we can git commit -m "sth" then 
git push origin main/master


9:40 PM 2/6/2023 Feb
------------------------------------------------
14th lesson Mastering Stash Part 2
when we stash files [similar to arrays] before committing 'em
and stash other files, they don't go to same [stashing box]🔴
to see that type:
  git stash list

touch file.txt
git add file.txt
git stash

to save stash particularly, type this instead of last step:
git stash save "your message title"

using [git stash apply] instead of stash pop 
  is useful when we want the file and not removing it from its stashed box

to pick up a specific stash box we call its id as:
got stash pop/apply stash@{1} as arrays

to remove a stash we use:
git stash drop stash@{1} or git stash drop [last box]
!! files in stashed box vanish when removing their parent

to see files inside of a stash use:
git stash show

to remove all stashed boxes use:
git stash clear


4:33 PM 3/6/2023
------------------------------------------------
15th lesson Restore And Clean



------------------------------------------------