export default
{
  "TRY": [
    "Play around!",
    "Try it!",
    "Give it the old college try!",
    "Road test!",
    "Shake down!",
    "Push your luck!",
    "Go for it!",
    "Have a try!",
    "Play it safe!",
    "Have a ball!",
    "It's up to you!",
    "Taste!"
  ],

  "EXAMPLES": [
    "C()",
    "C(2.5)",
    "new Cube(2.5)",

    "Y()",
    "Y(2.5, 2.5)",
    "new Cylinder(2.5, 2.5, 10)",

    "for(let i=-2;i<=2;i++){\n\tfor(let j=-2;j<=2;j++){\n\t\tfor(let k=-2;k<=2;k++){\n\t\t\tC(1).set(i,j,k)\n}}}",
    "for(let i=-2;i<=2;i++){\n\tfor(let j=-2;j<=2;j++){\n\t\tfor(let k=-2;k<=2;k++){\n\t\t\tC(1).set(i*2,j*2,k*2)\n}}}",
    "for(let i=-2;i<=2;i++){\n\tfor(let j=-2;j<=2;j++){\n\t\tfor(let k=-2;k<=2;k++){\n\t\t\tY(0,1).set(i*2,j*2,k*2)\n}}}",

    "i(2000,()=>{C()})",
    "e(2000,()=>{C().p()})",
    "e(2000,()=>{C(1).p()})\nC(10,1,10).m('d', 5).p('f')",

    "let c = C()\nc.ev(1000, ()=>{\nc.c();});",
    "let c = C()\nlet s = 0;\nc.ev(100, ()=>{\nc.m('r',s);\ns++;\n});",

    "C().p()",
    "Y().p()",

    "C(10).m('d',7.5).p('f');\nC(2).p();",
    "C(10).m('d',7.5).p('f');\nC(2).m('l',5).p();",
    "C(10).m('d',7.5).p('f');\nC(2).m('l',5).p();\nC(2).m('r',2).p()",

    "new Ground()\nnew Grid()\nnew Cube()",

    "new Space({color:0x548adf});\nnew Ground({color:0x9aa9fe});\nvar synth = new Tone.Synth().toMaster();\nnew Cube({w:5,h:1,l:1})\n.m('l',5)\n.r('r',.5).r('f',.5)\n.c(0xffffff)\n.l((_,t)=> _.r('l', .01))\n.o('enter',(_)=>{_.c();\nsynth.triggerAttackRelease('C4', '8n');\n})\nnew Cube({w:5,h:1,l:1})\n.m('r',0)\n.r('r',.5).r('f',.5)\n.c(0xffffff)\n.l((_,t)=> _.r('u', .01))\n.o('release',(_)=>{_.c()\nsynth.triggerAttackRelease('C6', '8n');\n})\nnew Cube({w:5,h:1,l:1})\n.m('r',5)\n.r('r',.5).r('f',.5)\n.c(0xffffff)\n.l((_,t)=> _.r('b', .01))\n.o('touch',(_)=>{_.c()\nsynth.triggerAttackRelease('C2', '8n');\n})",

    "new Cube()"
  ]
}
