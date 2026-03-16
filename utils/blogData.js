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
    {
        slug: "preparing-to-read-criu-codebase",
        title: "Preparing to Read the CRIU Codebase: Learning Linux Internals From Scratch",
        date: "2026-03-16",
        tags: ["open-source", "linux", "criu", "ptrace", "systems-programming"],
        content: `# Preparing to Read the CRIU Codebase: Learning Linux Internals From Scratch

When I first discovered CRIU, I was excited to start reading the codebase immediately.

That excitement lasted for about five minutes.

The moment I opened the repository, I realized something important: I didn't yet have the mental model required to understand what was happening. The project works very closely with Linux internals, and many concepts that appeared in the code — namespaces, cgroups, ptrace, \`/proc\`, ELF structures — were things I had either only heard about or never explored in practice.

At that point, it became clear that before contributing to CRIU, I first needed to **build the foundation required to read it**.

## The Knowledge Gap

CRIU interacts deeply with how Linux represents processes and their state. To understand even a small part of the codebase, I needed to get comfortable with several Linux concepts:

- **Namespaces** – how Linux isolates resources like PIDs, mounts, and networks
- **cgroups** – how processes are grouped and resource limits are enforced
- **The \`/proc\` filesystem** – the interface through which user space programs inspect process state
- **\`ptrace\`** – the mechanism used by debuggers to inspect and control processes
- **Memory layouts** – how a process's memory is organized

At the beginning, these topics felt scattered. Each one opened up another rabbit hole.

But slowly, they started forming a picture of how Linux actually manages processes.

## Learning by Experimenting

I strongly prefer learning through hands-on experiments rather than just reading documentation. So instead of only studying theory, I started building small experiments around these concepts.

One of the most interesting exercises was building **a simple debugger using \`ptrace\`**. This helped me understand how debuggers interact with processes — attaching to them, inspecting their state, and controlling execution.

Working with \`ptrace\` made the relationship between user space tools and the kernel much clearer.

Alongside that, I also practiced working with **namespaces** and explored how Linux exposes system information through the \`/proc\` filesystem. These experiments helped me understand how processes, files, and system resources are represented internally.

## Hands-on Exercises

To make these concepts more concrete, I implemented several small experiments and practice programs while learning these topics. Instead of keeping them locally, I documented them in a repository so that I could track my learning process and revisit these experiments later.

The exercises included things like:

- Writing a **simple debugger using \`ptrace\`**
- Experimenting with **process attachment using \`PTRACE_ATTACH\` and \`PTRACE_SEIZE\`**
- Exploring **Linux namespaces** and how processes behave inside them
- Inspecting process state through the **\`/proc\` filesystem**
- Understanding **file-backed memory mappings and inodes**
- Observing how **process memory regions appear in \`/proc/<pid>/maps\`**

All of these small practice programs are available in my practice repository: [shresth2405/Criu-hands-on-practice](https://github.com/shresth2405/Criu-hands-on-practice)

These exercises helped bridge the gap between theoretical concepts and real system behavior. Seeing how these mechanisms actually work on a running Linux system made the learning process much clearer.

## An Unexpected Pause

This exploration phase lasted for about half a month. I was slowly building confidence with these Linux internals.

Then something familiar to every student happened — **semester exams arrived**.

My 5th semester endsems forced me to pause this exploration for a while. Like many side projects, learning systems programming had to temporarily give way to academic responsibilities.

But once the exams were over, I returned to the process of learning and experimenting.

## Getting Ready to Read Real Systems Code

After spending time understanding these foundational pieces — namespaces, ptrace, process inspection, memory layouts — I finally felt more comfortable approaching the CRIU codebase again.

The difference was noticeable.

Concepts that previously looked cryptic in the code were now recognizable. I could begin connecting the theory I had studied with the way a real system-level project implements it.

This phase of preparation might not have produced immediate contributions, but it was essential. Without building that mental model first, reading the code would have felt like navigating a maze without a map.

Now, with that groundwork in place, the next step was clear:

**start reading the CRIU source code seriously and begin working toward real contributions.**`,
    },
];
