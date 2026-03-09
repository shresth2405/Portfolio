export const blogs = [
    {
        slug: "road-to-understanding-criu",
        title: "The Road to Understanding CRIU: What I Had to Learn First",
        date: "2025-03-10",
        tags: ["open-source", "linux", "criu", "systems-programming"],
        content: `# The Road to Understanding CRIU: What I Had to Learn First

Every technical journey starts with a small curiosity. Mine didn't begin with low-level systems programming or Linux internals. It started much higher up the stack.

At first, I was exploring the scope of the **MERN stack**. Like many developers, I was fascinated by how modern web applications work — React on the frontend, Node and Express on the backend, and databases tying everything together. But while building and experimenting with backend tools, I noticed something interesting about myself: I wasn't just curious about *using* these tools, I wanted to understand **how they worked underneath**.

What actually happens when a backend server handles requests?
How does the operating system manage processes?
What is really happening behind the APIs and frameworks we casually use?

Those questions slowly pushed me toward the systems side of computing.

## Moving into the Linux World

To explore that curiosity properly, I decided to move into a Linux environment. I installed **Manjaro Linux** and started getting comfortable with the system.

The first step was simple: understanding the environment.

I spent time learning the basics of the shell, writing small shell scripts, and exploring how Linux organizes files, processes, and commands. At first it was just experimentation — trying commands, breaking things, fixing them again. Gradually the terminal stopped feeling intimidating and started feeling like a place where I could actually understand what my system was doing.

That was an important shift. Once you become comfortable with Linux, the idea of exploring systems programming feels much more approachable.

## Discovering Low-Level Systems

Around the same time, I was studying operating systems through **Luv Babbar's OS playlist**. The more I studied topics like processes, memory management, and scheduling, the more curious I became about how these concepts actually appear in real software.

Reading theory alone wasn't enough for me. I tend to learn best when I can **work with real systems and real code**, not just textbooks. So I decided that if I wanted to explore low-level systems properly, I should do it through something practical.

That was around **October**, when I started seriously thinking about diving into lower-level development.

## Choosing the Open Source Path

Since I strongly believe in learning by doing, open source felt like the natural direction. It allows you to explore real projects, read production code, and learn directly from the way experienced developers design systems.

So I began searching for open source projects related to **low-level Linux systems**.

While exploring different options, I came across **CRIU (Checkpoint/Restore In Userspace)**. The project focuses on saving and restoring Linux processes — essentially capturing the state of a running process and bringing it back later.

At first glance, the idea itself sounded fascinating.

CRIU interacts deeply with Linux internals: processes, memory mappings, file descriptors, namespaces, and much more. But what made it especially appealing was that it works **in userspace**, meaning I could explore complex Linux concepts without immediately diving into kernel development.

That made it feel like the perfect starting point for someone trying to move toward systems programming.

It offered a chance to explore how Linux works internally while still staying within a manageable learning curve.

## Taking the First Step

Once I decided to explore CRIU, the first step was simply setting up the development environment. Even that initial process taught me a lot about how large open source projects are structured.

The early stages involved reading documentation, exploring the repository, and slowly becoming familiar with the ecosystem around the project.

During this process, I also received a lot of guidance that helped me move forward whenever I felt stuck. Having someone to clarify concepts and help break down complex topics made the journey much smoother.

Those early steps didn't involve writing complex code or making major contributions yet. Instead, they were about **understanding the landscape** — how Linux processes work, how CRIU interacts with them, and how large system projects are structured.

And that's where this journey really began.

## The Beginning of a Longer Exploration

What started as curiosity about backend tools eventually led me into the world of Linux systems programming. Installing Linux, learning the shell, studying operating system concepts, and discovering CRIU gradually shaped a new direction in my learning.

This blog series will document that journey — the path from high-level web development curiosity to understanding how Linux processes actually work.

In the next posts, I'll explore the concepts I had to learn along the way, starting with one of the most fundamental pieces of the puzzle:

**How Linux processes actually work.**`,
    },
];
