/ * * 
 *   b o o t s t r a p . j s   v 3 . 0 . 0   b y   @ f a t   a n d   @ m d o 
 *   C o p y r i g h t   2 0 1 3   T w i t t e r   I n c . 
 *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
 * / 
 i f   ( ! j Q u e r y )   {   t h r o w   n e w   E r r o r ( " B o o t s t r a p   r e q u i r e s   j Q u e r y " )   } 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   t r a n s i t i o n . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # t r a n s i t i o n s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 3   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   C S S   T R A N S I T I O N   S U P P O R T   ( S h o u t o u t :   h t t p : / / w w w . m o d e r n i z r . c o m / ) 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     f u n c t i o n   t r a n s i t i o n E n d ( )   { 
         v a r   e l   =   d o c u m e n t . c r e a t e E l e m e n t ( ' b o o t s t r a p ' ) 
 
         v a r   t r a n s E n d E v e n t N a m e s   =   { 
             ' W e b k i t T r a n s i t i o n '   :   ' w e b k i t T r a n s i t i o n E n d ' 
         ,   ' M o z T r a n s i t i o n '         :   ' t r a n s i t i o n e n d ' 
         ,   ' O T r a n s i t i o n '             :   ' o T r a n s i t i o n E n d   o t r a n s i t i o n e n d ' 
         ,   ' t r a n s i t i o n '               :   ' t r a n s i t i o n e n d ' 
         } 
 
         f o r   ( v a r   n a m e   i n   t r a n s E n d E v e n t N a m e s )   { 
             i f   ( e l . s t y l e [ n a m e ]   ! = =   u n d e f i n e d )   { 
                 r e t u r n   {   e n d :   t r a n s E n d E v e n t N a m e s [ n a m e ]   } 
             } 
         } 
     } 
 
     / /   h t t p : / / b l o g . a l e x m a c c a w . c o m / c s s - t r a n s i t i o n s 
     $ . f n . e m u l a t e T r a n s i t i o n E n d   =   f u n c t i o n   ( d u r a t i o n )   { 
         v a r   c a l l e d   =   f a l s e ,   $ e l   =   t h i s 
         $ ( t h i s ) . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   f u n c t i o n   ( )   {   c a l l e d   =   t r u e   } ) 
         v a r   c a l l b a c k   =   f u n c t i o n   ( )   {   i f   ( ! c a l l e d )   $ ( $ e l ) . t r i g g e r ( $ . s u p p o r t . t r a n s i t i o n . e n d )   } 
         s e t T i m e o u t ( c a l l b a c k ,   d u r a t i o n ) 
         r e t u r n   t h i s 
     } 
 
     $ ( f u n c t i o n   ( )   { 
         $ . s u p p o r t . t r a n s i t i o n   =   t r a n s i t i o n E n d ( ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   a l e r t . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # a l e r t s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 3   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   A L E R T   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   d i s m i s s   =   ' [ d a t a - d i s m i s s = " a l e r t " ] ' 
     v a r   A l e r t       =   f u n c t i o n   ( e l )   { 
         $ ( e l ) . o n ( ' c l i c k ' ,   d i s m i s s ,   t h i s . c l o s e ) 
     } 
 
     A l e r t . p r o t o t y p e . c l o s e   =   f u n c t i o n   ( e )   { 
         v a r   $ t h i s         =   $ ( t h i s ) 
         v a r   s e l e c t o r   =   $ t h i s . a t t r ( ' d a t a - t a r g e t ' ) 
 
         i f   ( ! s e l e c t o r )   { 
             s e l e c t o r   =   $ t h i s . a t t r ( ' h r e f ' ) 
             s e l e c t o r   =   s e l e c t o r   & &   s e l e c t o r . r e p l a c e ( / . * ( ? = # [ ^ \ s ] * $ ) / ,   ' ' )   / /   s t r i p   f o r   i e 7 
         } 
 
         v a r   $ p a r e n t   =   $ ( s e l e c t o r ) 
 
         i f   ( e )   e . p r e v e n t D e f a u l t ( ) 
 
         i f   ( ! $ p a r e n t . l e n g t h )   { 
             $ p a r e n t   =   $ t h i s . h a s C l a s s ( ' a l e r t ' )   ?   $ t h i s   :   $ t h i s . p a r e n t ( ) 
         } 
 
         $ p a r e n t . t r i g g e r ( e   =   $ . E v e n t ( ' c l o s e . b s . a l e r t ' ) ) 
 
         i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         $ p a r e n t . r e m o v e C l a s s ( ' i n ' ) 
 
         f u n c t i o n   r e m o v e E l e m e n t ( )   { 
             $ p a r e n t . t r i g g e r ( ' c l o s e d . b s . a l e r t ' ) . r e m o v e ( ) 
         } 
 
         $ . s u p p o r t . t r a n s i t i o n   & &   $ p a r e n t . h a s C l a s s ( ' f a d e ' )   ? 
             $ p a r e n t 
                 . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   r e m o v e E l e m e n t ) 
                 . e m u l a t e T r a n s i t i o n E n d ( 1 5 0 )   : 
             r e m o v e E l e m e n t ( ) 
     } 
 
 
     / /   A L E R T   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . a l e r t 
 
     $ . f n . a l e r t   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s   =   $ ( t h i s ) 
             v a r   d a t a     =   $ t h i s . d a t a ( ' b s . a l e r t ' ) 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . a l e r t ' ,   ( d a t a   =   n e w   A l e r t ( t h i s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] . c a l l ( $ t h i s ) 
         } ) 
     } 
 
     $ . f n . a l e r t . C o n s t r u c t o r   =   A l e r t 
 
 
     / /   A L E R T   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = 
 
     $ . f n . a l e r t . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . a l e r t   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   A L E R T   D A T A - A P I 
     / /   = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . a l e r t . d a t a - a p i ' ,   d i s m i s s ,   A l e r t . p r o t o t y p e . c l o s e ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   b u t t o n . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # b u t t o n s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 3   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   B U T T O N   P U B L I C   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   B u t t o n   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . $ e l e m e n t   =   $ ( e l e m e n t ) 
         t h i s . o p t i o n s     =   $ . e x t e n d ( { } ,   B u t t o n . D E F A U L T S ,   o p t i o n s ) 
     } 
 
     B u t t o n . D E F A U L T S   =   { 
         l o a d i n g T e x t :   ' l o a d i n g . . . ' 
     } 
 
     B u t t o n . p r o t o t y p e . s e t S t a t e   =   f u n c t i o n   ( s t a t e )   { 
         v a r   d         =   ' d i s a b l e d ' 
         v a r   $ e l     =   t h i s . $ e l e m e n t 
         v a r   v a l     =   $ e l . i s ( ' i n p u t ' )   ?   ' v a l '   :   ' h t m l ' 
         v a r   d a t a   =   $ e l . d a t a ( ) 
 
         s t a t e   =   s t a t e   +   ' T e x t ' 
 
         i f   ( ! d a t a . r e s e t T e x t )   $ e l . d a t a ( ' r e s e t T e x t ' ,   $ e l [ v a l ] ( ) ) 
 
         $ e l [ v a l ] ( d a t a [ s t a t e ]   | |   t h i s . o p t i o n s [ s t a t e ] ) 
 
         / /   p u s h   t o   e v e n t   l o o p   t o   a l l o w   f o r m s   t o   s u b m i t 
         s e t T i m e o u t ( f u n c t i o n   ( )   { 
             s t a t e   = =   ' l o a d i n g T e x t '   ? 
                 $ e l . a d d C l a s s ( d ) . a t t r ( d ,   d )   : 
                 $ e l . r e m o v e C l a s s ( d ) . r e m o v e A t t r ( d ) ; 
         } ,   0 ) 
     } 
 
     B u t t o n . p r o t o t y p e . t o g g l e   =   f u n c t i o n   ( )   { 
         v a r   $ p a r e n t   =   t h i s . $ e l e m e n t . c l o s e s t ( ' [ d a t a - t o g g l e = " b u t t o n s " ] ' ) 
 
         i f   ( $ p a r e n t . l e n g t h )   { 
             v a r   $ i n p u t   =   t h i s . $ e l e m e n t . f i n d ( ' i n p u t ' ) 
                 . p r o p ( ' c h e c k e d ' ,   ! t h i s . $ e l e m e n t . h a s C l a s s ( ' a c t i v e ' ) ) 
                 . t r i g g e r ( ' c h a n g e ' ) 
             i f   ( $ i n p u t . p r o p ( ' t y p e ' )   = = =   ' r a d i o ' )   $ p a r e n t . f i n d ( ' . a c t i v e ' ) . r e m o v e C l a s s ( ' a c t i v e ' ) 
         } 
 
         t h i s . $ e l e m e n t . t o g g l e C l a s s ( ' a c t i v e ' ) 
     } 
 
 
     / /   B U T T O N   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . b u t t o n 
 
     $ . f n . b u t t o n   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . b u t t o n ' ) 
             v a r   o p t i o n s   =   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . b u t t o n ' ,   ( d a t a   =   n e w   B u t t o n ( t h i s ,   o p t i o n s ) ) ) 
 
             i f   ( o p t i o n   = =   ' t o g g l e ' )   d a t a . t o g g l e ( ) 
             e l s e   i f   ( o p t i o n )   d a t a . s e t S t a t e ( o p t i o n ) 
         } ) 
     } 
 
     $ . f n . b u t t o n . C o n s t r u c t o r   =   B u t t o n 
 
 
     / /   B U T T O N   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = 
 
     $ . f n . b u t t o n . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . b u t t o n   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   B U T T O N   D A T A - A P I 
     / /   = = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . b u t t o n . d a t a - a p i ' ,   ' [ d a t a - t o g g l e ^ = b u t t o n ] ' ,   f u n c t i o n   ( e )   { 
         v a r   $ b t n   =   $ ( e . t a r g e t ) 
         i f   ( ! $ b t n . h a s C l a s s ( ' b t n ' ) )   $ b t n   =   $ b t n . c l o s e s t ( ' . b t n ' ) 
         $ b t n . b u t t o n ( ' t o g g l e ' ) 
         e . p r e v e n t D e f a u l t ( ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   c a r o u s e l . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # c a r o u s e l 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   C A R O U S E L   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   C a r o u s e l   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . $ e l e m e n t         =   $ ( e l e m e n t ) 
         t h i s . $ i n d i c a t o r s   =   t h i s . $ e l e m e n t . f i n d ( ' . c a r o u s e l - i n d i c a t o r s ' ) 
         t h i s . o p t i o n s           =   o p t i o n s 
         t h i s . p a u s e d             = 
         t h i s . s l i d i n g           = 
         t h i s . i n t e r v a l         = 
         t h i s . $ a c t i v e           = 
         t h i s . $ i t e m s             =   n u l l 
 
         t h i s . o p t i o n s . p a u s e   = =   ' h o v e r '   & &   t h i s . $ e l e m e n t 
             . o n ( ' m o u s e e n t e r ' ,   $ . p r o x y ( t h i s . p a u s e ,   t h i s ) ) 
             . o n ( ' m o u s e l e a v e ' ,   $ . p r o x y ( t h i s . c y c l e ,   t h i s ) ) 
     } 
 
     C a r o u s e l . D E F A U L T S   =   { 
         i n t e r v a l :   5 0 0 0 
     ,   p a u s e :   ' h o v e r ' 
     ,   w r a p :   t r u e 
     } 
 
     C a r o u s e l . p r o t o t y p e . c y c l e   =     f u n c t i o n   ( e )   { 
         e   | |   ( t h i s . p a u s e d   =   f a l s e ) 
 
         t h i s . i n t e r v a l   & &   c l e a r I n t e r v a l ( t h i s . i n t e r v a l ) 
 
         t h i s . o p t i o n s . i n t e r v a l 
             & &   ! t h i s . p a u s e d 
             & &   ( t h i s . i n t e r v a l   =   s e t I n t e r v a l ( $ . p r o x y ( t h i s . n e x t ,   t h i s ) ,   t h i s . o p t i o n s . i n t e r v a l ) ) 
 
         r e t u r n   t h i s 
     } 
 
     C a r o u s e l . p r o t o t y p e . g e t A c t i v e I n d e x   =   f u n c t i o n   ( )   { 
         t h i s . $ a c t i v e   =   t h i s . $ e l e m e n t . f i n d ( ' . i t e m . a c t i v e ' ) 
         t h i s . $ i t e m s     =   t h i s . $ a c t i v e . p a r e n t ( ) . c h i l d r e n ( ) 
 
         r e t u r n   t h i s . $ i t e m s . i n d e x ( t h i s . $ a c t i v e ) 
     } 
 
     C a r o u s e l . p r o t o t y p e . t o   =   f u n c t i o n   ( p o s )   { 
         v a r   t h a t                 =   t h i s 
         v a r   a c t i v e I n d e x   =   t h i s . g e t A c t i v e I n d e x ( ) 
 
         i f   ( p o s   >   ( t h i s . $ i t e m s . l e n g t h   -   1 )   | |   p o s   <   0 )   r e t u r n 
 
         i f   ( t h i s . s l i d i n g )               r e t u r n   t h i s . $ e l e m e n t . o n e ( ' s l i d ' ,   f u n c t i o n   ( )   {   t h a t . t o ( p o s )   } ) 
         i f   ( a c t i v e I n d e x   = =   p o s )   r e t u r n   t h i s . p a u s e ( ) . c y c l e ( ) 
 
         r e t u r n   t h i s . s l i d e ( p o s   >   a c t i v e I n d e x   ?   ' n e x t '   :   ' p r e v ' ,   $ ( t h i s . $ i t e m s [ p o s ] ) ) 
     } 
 
     C a r o u s e l . p r o t o t y p e . p a u s e   =   f u n c t i o n   ( e )   { 
         e   | |   ( t h i s . p a u s e d   =   t r u e ) 
 
         i f   ( t h i s . $ e l e m e n t . f i n d ( ' . n e x t ,   . p r e v ' ) . l e n g t h   & &   $ . s u p p o r t . t r a n s i t i o n . e n d )   { 
             t h i s . $ e l e m e n t . t r i g g e r ( $ . s u p p o r t . t r a n s i t i o n . e n d ) 
             t h i s . c y c l e ( t r u e ) 
         } 
 
         t h i s . i n t e r v a l   =   c l e a r I n t e r v a l ( t h i s . i n t e r v a l ) 
 
         r e t u r n   t h i s 
     } 
 
     C a r o u s e l . p r o t o t y p e . n e x t   =   f u n c t i o n   ( )   { 
         i f   ( t h i s . s l i d i n g )   r e t u r n 
         r e t u r n   t h i s . s l i d e ( ' n e x t ' ) 
     } 
 
     C a r o u s e l . p r o t o t y p e . p r e v   =   f u n c t i o n   ( )   { 
         i f   ( t h i s . s l i d i n g )   r e t u r n 
         r e t u r n   t h i s . s l i d e ( ' p r e v ' ) 
     } 
 
     C a r o u s e l . p r o t o t y p e . s l i d e   =   f u n c t i o n   ( t y p e ,   n e x t )   { 
         v a r   $ a c t i v e       =   t h i s . $ e l e m e n t . f i n d ( ' . i t e m . a c t i v e ' ) 
         v a r   $ n e x t           =   n e x t   | |   $ a c t i v e [ t y p e ] ( ) 
         v a r   i s C y c l i n g   =   t h i s . i n t e r v a l 
         v a r   d i r e c t i o n   =   t y p e   = =   ' n e x t '   ?   ' l e f t '   :   ' r i g h t ' 
         v a r   f a l l b a c k     =   t y p e   = =   ' n e x t '   ?   ' f i r s t '   :   ' l a s t ' 
         v a r   t h a t             =   t h i s 
 
         i f   ( ! $ n e x t . l e n g t h )   { 
             i f   ( ! t h i s . o p t i o n s . w r a p )   r e t u r n 
             $ n e x t   =   t h i s . $ e l e m e n t . f i n d ( ' . i t e m ' ) [ f a l l b a c k ] ( ) 
         } 
 
         t h i s . s l i d i n g   =   t r u e 
 
         i s C y c l i n g   & &   t h i s . p a u s e ( ) 
 
         v a r   e   =   $ . E v e n t ( ' s l i d e . b s . c a r o u s e l ' ,   {   r e l a t e d T a r g e t :   $ n e x t [ 0 ] ,   d i r e c t i o n :   d i r e c t i o n   } ) 
 
         i f   ( $ n e x t . h a s C l a s s ( ' a c t i v e ' ) )   r e t u r n 
 
         i f   ( t h i s . $ i n d i c a t o r s . l e n g t h )   { 
             t h i s . $ i n d i c a t o r s . f i n d ( ' . a c t i v e ' ) . r e m o v e C l a s s ( ' a c t i v e ' ) 
             t h i s . $ e l e m e n t . o n e ( ' s l i d ' ,   f u n c t i o n   ( )   { 
                 v a r   $ n e x t I n d i c a t o r   =   $ ( t h a t . $ i n d i c a t o r s . c h i l d r e n ( ) [ t h a t . g e t A c t i v e I n d e x ( ) ] ) 
                 $ n e x t I n d i c a t o r   & &   $ n e x t I n d i c a t o r . a d d C l a s s ( ' a c t i v e ' ) 
             } ) 
         } 
 
         i f   ( $ . s u p p o r t . t r a n s i t i o n   & &   t h i s . $ e l e m e n t . h a s C l a s s ( ' s l i d e ' ) )   { 
             t h i s . $ e l e m e n t . t r i g g e r ( e ) 
             i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
             $ n e x t . a d d C l a s s ( t y p e ) 
             $ n e x t [ 0 ] . o f f s e t W i d t h   / /   f o r c e   r e f l o w 
             $ a c t i v e . a d d C l a s s ( d i r e c t i o n ) 
             $ n e x t . a d d C l a s s ( d i r e c t i o n ) 
             $ a c t i v e 
                 . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   f u n c t i o n   ( )   { 
                     $ n e x t . r e m o v e C l a s s ( [ t y p e ,   d i r e c t i o n ] . j o i n ( '   ' ) ) . a d d C l a s s ( ' a c t i v e ' ) 
                     $ a c t i v e . r e m o v e C l a s s ( [ ' a c t i v e ' ,   d i r e c t i o n ] . j o i n ( '   ' ) ) 
                     t h a t . s l i d i n g   =   f a l s e 
                     s e t T i m e o u t ( f u n c t i o n   ( )   {   t h a t . $ e l e m e n t . t r i g g e r ( ' s l i d ' )   } ,   0 ) 
                 } ) 
                 . e m u l a t e T r a n s i t i o n E n d ( 6 0 0 ) 
         }   e l s e   { 
             t h i s . $ e l e m e n t . t r i g g e r ( e ) 
             i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
             $ a c t i v e . r e m o v e C l a s s ( ' a c t i v e ' ) 
             $ n e x t . a d d C l a s s ( ' a c t i v e ' ) 
             t h i s . s l i d i n g   =   f a l s e 
             t h i s . $ e l e m e n t . t r i g g e r ( ' s l i d ' ) 
         } 
 
         i s C y c l i n g   & &   t h i s . c y c l e ( ) 
 
         r e t u r n   t h i s 
     } 
 
 
     / /   C A R O U S E L   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . c a r o u s e l 
 
     $ . f n . c a r o u s e l   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . c a r o u s e l ' ) 
             v a r   o p t i o n s   =   $ . e x t e n d ( { } ,   C a r o u s e l . D E F A U L T S ,   $ t h i s . d a t a ( ) ,   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n ) 
             v a r   a c t i o n     =   t y p e o f   o p t i o n   = =   ' s t r i n g '   ?   o p t i o n   :   o p t i o n s . s l i d e 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . c a r o u s e l ' ,   ( d a t a   =   n e w   C a r o u s e l ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' n u m b e r ' )   d a t a . t o ( o p t i o n ) 
             e l s e   i f   ( a c t i o n )   d a t a [ a c t i o n ] ( ) 
             e l s e   i f   ( o p t i o n s . i n t e r v a l )   d a t a . p a u s e ( ) . c y c l e ( ) 
         } ) 
     } 
 
     $ . f n . c a r o u s e l . C o n s t r u c t o r   =   C a r o u s e l 
 
 
     / /   C A R O U S E L   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . c a r o u s e l . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . c a r o u s e l   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   C A R O U S E L   D A T A - A P I 
     / /   = = = = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . c a r o u s e l . d a t a - a p i ' ,   ' [ d a t a - s l i d e ] ,   [ d a t a - s l i d e - t o ] ' ,   f u n c t i o n   ( e )   { 
         v a r   $ t h i s       =   $ ( t h i s ) ,   h r e f 
         v a r   $ t a r g e t   =   $ ( $ t h i s . a t t r ( ' d a t a - t a r g e t ' )   | |   ( h r e f   =   $ t h i s . a t t r ( ' h r e f ' ) )   & &   h r e f . r e p l a c e ( / . * ( ? = # [ ^ \ s ] + $ ) / ,   ' ' ) )   / / s t r i p   f o r   i e 7 
         v a r   o p t i o n s   =   $ . e x t e n d ( { } ,   $ t a r g e t . d a t a ( ) ,   $ t h i s . d a t a ( ) ) 
         v a r   s l i d e I n d e x   =   $ t h i s . a t t r ( ' d a t a - s l i d e - t o ' ) 
         i f   ( s l i d e I n d e x )   o p t i o n s . i n t e r v a l   =   f a l s e 
 
         $ t a r g e t . c a r o u s e l ( o p t i o n s ) 
 
         i f   ( s l i d e I n d e x   =   $ t h i s . a t t r ( ' d a t a - s l i d e - t o ' ) )   { 
             $ t a r g e t . d a t a ( ' b s . c a r o u s e l ' ) . t o ( s l i d e I n d e x ) 
         } 
 
         e . p r e v e n t D e f a u l t ( ) 
     } ) 
 
     $ ( w i n d o w ) . o n ( ' l o a d ' ,   f u n c t i o n   ( )   { 
         $ ( ' [ d a t a - r i d e = " c a r o u s e l " ] ' ) . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ c a r o u s e l   =   $ ( t h i s ) 
             $ c a r o u s e l . c a r o u s e l ( $ c a r o u s e l . d a t a ( ) ) 
         } ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   c o l l a p s e . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # c o l l a p s e 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   C O L L A P S E   P U B L I C   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   C o l l a p s e   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . $ e l e m e n t             =   $ ( e l e m e n t ) 
         t h i s . o p t i o n s               =   $ . e x t e n d ( { } ,   C o l l a p s e . D E F A U L T S ,   o p t i o n s ) 
         t h i s . t r a n s i t i o n i n g   =   n u l l 
 
         i f   ( t h i s . o p t i o n s . p a r e n t )   t h i s . $ p a r e n t   =   $ ( t h i s . o p t i o n s . p a r e n t ) 
         i f   ( t h i s . o p t i o n s . t o g g l e )   t h i s . t o g g l e ( ) 
     } 
 
     C o l l a p s e . D E F A U L T S   =   { 
         t o g g l e :   t r u e 
     } 
 
     C o l l a p s e . p r o t o t y p e . d i m e n s i o n   =   f u n c t i o n   ( )   { 
         v a r   h a s W i d t h   =   t h i s . $ e l e m e n t . h a s C l a s s ( ' w i d t h ' ) 
         r e t u r n   h a s W i d t h   ?   ' w i d t h '   :   ' h e i g h t ' 
     } 
 
     C o l l a p s e . p r o t o t y p e . s h o w   =   f u n c t i o n   ( )   { 
         i f   ( t h i s . t r a n s i t i o n i n g   | |   t h i s . $ e l e m e n t . h a s C l a s s ( ' i n ' ) )   r e t u r n 
 
         v a r   s t a r t E v e n t   =   $ . E v e n t ( ' s h o w . b s . c o l l a p s e ' ) 
         t h i s . $ e l e m e n t . t r i g g e r ( s t a r t E v e n t ) 
         i f   ( s t a r t E v e n t . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         v a r   a c t i v e s   =   t h i s . $ p a r e n t   & &   t h i s . $ p a r e n t . f i n d ( ' >   . p a n e l   >   . i n ' ) 
 
         i f   ( a c t i v e s   & &   a c t i v e s . l e n g t h )   { 
             v a r   h a s D a t a   =   a c t i v e s . d a t a ( ' b s . c o l l a p s e ' ) 
             i f   ( h a s D a t a   & &   h a s D a t a . t r a n s i t i o n i n g )   r e t u r n 
             a c t i v e s . c o l l a p s e ( ' h i d e ' ) 
             h a s D a t a   | |   a c t i v e s . d a t a ( ' b s . c o l l a p s e ' ,   n u l l ) 
         } 
 
         v a r   d i m e n s i o n   =   t h i s . d i m e n s i o n ( ) 
 
         t h i s . $ e l e m e n t 
             . r e m o v e C l a s s ( ' c o l l a p s e ' ) 
             . a d d C l a s s ( ' c o l l a p s i n g ' ) 
             [ d i m e n s i o n ] ( 0 ) 
 
         t h i s . t r a n s i t i o n i n g   =   1 
 
         v a r   c o m p l e t e   =   f u n c t i o n   ( )   { 
             t h i s . $ e l e m e n t 
                 . r e m o v e C l a s s ( ' c o l l a p s i n g ' ) 
                 . a d d C l a s s ( ' i n ' ) 
                 [ d i m e n s i o n ] ( ' a u t o ' ) 
             t h i s . t r a n s i t i o n i n g   =   0 
             t h i s . $ e l e m e n t . t r i g g e r ( ' s h o w n . b s . c o l l a p s e ' ) 
         } 
 
         i f   ( ! $ . s u p p o r t . t r a n s i t i o n )   r e t u r n   c o m p l e t e . c a l l ( t h i s ) 
 
         v a r   s c r o l l S i z e   =   $ . c a m e l C a s e ( [ ' s c r o l l ' ,   d i m e n s i o n ] . j o i n ( ' - ' ) ) 
 
         t h i s . $ e l e m e n t 
             . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   $ . p r o x y ( c o m p l e t e ,   t h i s ) ) 
             . e m u l a t e T r a n s i t i o n E n d ( 3 5 0 ) 
             [ d i m e n s i o n ] ( t h i s . $ e l e m e n t [ 0 ] [ s c r o l l S i z e ] ) 
     } 
 
     C o l l a p s e . p r o t o t y p e . h i d e   =   f u n c t i o n   ( )   { 
         i f   ( t h i s . t r a n s i t i o n i n g   | |   ! t h i s . $ e l e m e n t . h a s C l a s s ( ' i n ' ) )   r e t u r n 
 
         v a r   s t a r t E v e n t   =   $ . E v e n t ( ' h i d e . b s . c o l l a p s e ' ) 
         t h i s . $ e l e m e n t . t r i g g e r ( s t a r t E v e n t ) 
         i f   ( s t a r t E v e n t . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         v a r   d i m e n s i o n   =   t h i s . d i m e n s i o n ( ) 
 
         t h i s . $ e l e m e n t 
             [ d i m e n s i o n ] ( t h i s . $ e l e m e n t [ d i m e n s i o n ] ( ) ) 
             [ 0 ] . o f f s e t H e i g h t 
 
         t h i s . $ e l e m e n t 
             . a d d C l a s s ( ' c o l l a p s i n g ' ) 
             . r e m o v e C l a s s ( ' c o l l a p s e ' ) 
             . r e m o v e C l a s s ( ' i n ' ) 
 
         t h i s . t r a n s i t i o n i n g   =   1 
 
         v a r   c o m p l e t e   =   f u n c t i o n   ( )   { 
             t h i s . t r a n s i t i o n i n g   =   0 
             t h i s . $ e l e m e n t 
                 . t r i g g e r ( ' h i d d e n . b s . c o l l a p s e ' ) 
                 . r e m o v e C l a s s ( ' c o l l a p s i n g ' ) 
                 . a d d C l a s s ( ' c o l l a p s e ' ) 
         } 
 
         i f   ( ! $ . s u p p o r t . t r a n s i t i o n )   r e t u r n   c o m p l e t e . c a l l ( t h i s ) 
 
         t h i s . $ e l e m e n t 
             [ d i m e n s i o n ] ( 0 ) 
             . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   $ . p r o x y ( c o m p l e t e ,   t h i s ) ) 
             . e m u l a t e T r a n s i t i o n E n d ( 3 5 0 ) 
     } 
 
     C o l l a p s e . p r o t o t y p e . t o g g l e   =   f u n c t i o n   ( )   { 
         t h i s [ t h i s . $ e l e m e n t . h a s C l a s s ( ' i n ' )   ?   ' h i d e '   :   ' s h o w ' ] ( ) 
     } 
 
 
     / /   C O L L A P S E   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . c o l l a p s e 
 
     $ . f n . c o l l a p s e   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . c o l l a p s e ' ) 
             v a r   o p t i o n s   =   $ . e x t e n d ( { } ,   C o l l a p s e . D E F A U L T S ,   $ t h i s . d a t a ( ) ,   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n ) 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . c o l l a p s e ' ,   ( d a t a   =   n e w   C o l l a p s e ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . c o l l a p s e . C o n s t r u c t o r   =   C o l l a p s e 
 
 
     / /   C O L L A P S E   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . c o l l a p s e . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . c o l l a p s e   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   C O L L A P S E   D A T A - A P I 
     / /   = = = = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . c o l l a p s e . d a t a - a p i ' ,   ' [ d a t a - t o g g l e = c o l l a p s e ] ' ,   f u n c t i o n   ( e )   { 
         v a r   $ t h i s       =   $ ( t h i s ) ,   h r e f 
         v a r   t a r g e t     =   $ t h i s . a t t r ( ' d a t a - t a r g e t ' ) 
                 | |   e . p r e v e n t D e f a u l t ( ) 
                 | |   ( h r e f   =   $ t h i s . a t t r ( ' h r e f ' ) )   & &   h r e f . r e p l a c e ( / . * ( ? = # [ ^ \ s ] + $ ) / ,   ' ' )   / / s t r i p   f o r   i e 7 
         v a r   $ t a r g e t   =   $ ( t a r g e t ) 
         v a r   d a t a         =   $ t a r g e t . d a t a ( ' b s . c o l l a p s e ' ) 
         v a r   o p t i o n     =   d a t a   ?   ' t o g g l e '   :   $ t h i s . d a t a ( ) 
         v a r   p a r e n t     =   $ t h i s . a t t r ( ' d a t a - p a r e n t ' ) 
         v a r   $ p a r e n t   =   p a r e n t   & &   $ ( p a r e n t ) 
 
         i f   ( ! d a t a   | |   ! d a t a . t r a n s i t i o n i n g )   { 
             i f   ( $ p a r e n t )   $ p a r e n t . f i n d ( ' [ d a t a - t o g g l e = c o l l a p s e ] [ d a t a - p a r e n t = " '   +   p a r e n t   +   ' " ] ' ) . n o t ( $ t h i s ) . a d d C l a s s ( ' c o l l a p s e d ' ) 
             $ t h i s [ $ t a r g e t . h a s C l a s s ( ' i n ' )   ?   ' a d d C l a s s '   :   ' r e m o v e C l a s s ' ] ( ' c o l l a p s e d ' ) 
         } 
 
         $ t a r g e t . c o l l a p s e ( o p t i o n ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   d r o p d o w n . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # d r o p d o w n s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   D R O P D O W N   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   b a c k d r o p   =   ' . d r o p d o w n - b a c k d r o p ' 
     v a r   t o g g l e       =   ' [ d a t a - t o g g l e = d r o p d o w n ] ' 
     v a r   D r o p d o w n   =   f u n c t i o n   ( e l e m e n t )   { 
         v a r   $ e l   =   $ ( e l e m e n t ) . o n ( ' c l i c k . b s . d r o p d o w n ' ,   t h i s . t o g g l e ) 
     } 
 
     D r o p d o w n . p r o t o t y p e . t o g g l e   =   f u n c t i o n   ( e )   { 
         v a r   $ t h i s   =   $ ( t h i s ) 
 
         i f   ( $ t h i s . i s ( ' . d i s a b l e d ,   : d i s a b l e d ' ) )   r e t u r n 
 
         v a r   $ p a r e n t     =   g e t P a r e n t ( $ t h i s ) 
         v a r   i s A c t i v e   =   $ p a r e n t . h a s C l a s s ( ' o p e n ' ) 
 
         c l e a r M e n u s ( ) 
 
         i f   ( ! i s A c t i v e )   { 
             i f   ( ' o n t o u c h s t a r t '   i n   d o c u m e n t . d o c u m e n t E l e m e n t   & &   ! $ p a r e n t . c l o s e s t ( ' . n a v b a r - n a v ' ) . l e n g t h )   { 
                 / /   i f   m o b i l e   w e   w e   u s e   a   b a c k d r o p   b e c a u s e   c l i c k   e v e n t s   d o n ' t   d e l e g a t e 
                 $ ( ' < d i v   c l a s s = " d r o p d o w n - b a c k d r o p " / > ' ) . i n s e r t A f t e r ( $ ( t h i s ) ) . o n ( ' c l i c k ' ,   c l e a r M e n u s ) 
             } 
 
             $ p a r e n t . t r i g g e r ( e   =   $ . E v e n t ( ' s h o w . b s . d r o p d o w n ' ) ) 
 
             i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
             $ p a r e n t 
                 . t o g g l e C l a s s ( ' o p e n ' ) 
                 . t r i g g e r ( ' s h o w n . b s . d r o p d o w n ' ) 
 
             $ t h i s . f o c u s ( ) 
         } 
 
         r e t u r n   f a l s e 
     } 
 
     D r o p d o w n . p r o t o t y p e . k e y d o w n   =   f u n c t i o n   ( e )   { 
         i f   ( ! / ( 3 8 | 4 0 | 2 7 ) / . t e s t ( e . k e y C o d e ) )   r e t u r n 
 
         v a r   $ t h i s   =   $ ( t h i s ) 
 
         e . p r e v e n t D e f a u l t ( ) 
         e . s t o p P r o p a g a t i o n ( ) 
 
         i f   ( $ t h i s . i s ( ' . d i s a b l e d ,   : d i s a b l e d ' ) )   r e t u r n 
 
         v a r   $ p a r e n t     =   g e t P a r e n t ( $ t h i s ) 
         v a r   i s A c t i v e   =   $ p a r e n t . h a s C l a s s ( ' o p e n ' ) 
 
         i f   ( ! i s A c t i v e   | |   ( i s A c t i v e   & &   e . k e y C o d e   = =   2 7 ) )   { 
             i f   ( e . w h i c h   = =   2 7 )   $ p a r e n t . f i n d ( t o g g l e ) . f o c u s ( ) 
             r e t u r n   $ t h i s . c l i c k ( ) 
         } 
 
         v a r   $ i t e m s   =   $ ( ' [ r o l e = m e n u ]   l i : n o t ( . d i v i d e r ) : v i s i b l e   a ' ,   $ p a r e n t ) 
 
         i f   ( ! $ i t e m s . l e n g t h )   r e t u r n 
 
         v a r   i n d e x   =   $ i t e m s . i n d e x ( $ i t e m s . f i l t e r ( ' : f o c u s ' ) ) 
 
         i f   ( e . k e y C o d e   = =   3 8   & &   i n d e x   >   0 )                                   i n d e x - -                                                 / /   u p 
         i f   ( e . k e y C o d e   = =   4 0   & &   i n d e x   <   $ i t e m s . l e n g t h   -   1 )   i n d e x + +                                                 / /   d o w n 
         i f   ( ! ~ i n d e x )                                                                             i n d e x = 0 
 
         $ i t e m s . e q ( i n d e x ) . f o c u s ( ) 
     } 
 
     f u n c t i o n   c l e a r M e n u s ( )   { 
         $ ( b a c k d r o p ) . r e m o v e ( ) 
         $ ( t o g g l e ) . e a c h ( f u n c t i o n   ( e )   { 
             v a r   $ p a r e n t   =   g e t P a r e n t ( $ ( t h i s ) ) 
             i f   ( ! $ p a r e n t . h a s C l a s s ( ' o p e n ' ) )   r e t u r n 
             $ p a r e n t . t r i g g e r ( e   =   $ . E v e n t ( ' h i d e . b s . d r o p d o w n ' ) ) 
             i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
             $ p a r e n t . r e m o v e C l a s s ( ' o p e n ' ) . t r i g g e r ( ' h i d d e n . b s . d r o p d o w n ' ) 
         } ) 
     } 
 
     f u n c t i o n   g e t P a r e n t ( $ t h i s )   { 
         v a r   s e l e c t o r   =   $ t h i s . a t t r ( ' d a t a - t a r g e t ' ) 
 
         i f   ( ! s e l e c t o r )   { 
             s e l e c t o r   =   $ t h i s . a t t r ( ' h r e f ' ) 
             s e l e c t o r   =   s e l e c t o r   & &   / # / . t e s t ( s e l e c t o r )   & &   s e l e c t o r . r e p l a c e ( / . * ( ? = # [ ^ \ s ] * $ ) / ,   ' ' )   / / s t r i p   f o r   i e 7 
         } 
 
         v a r   $ p a r e n t   =   s e l e c t o r   & &   $ ( s e l e c t o r ) 
 
         r e t u r n   $ p a r e n t   & &   $ p a r e n t . l e n g t h   ?   $ p a r e n t   :   $ t h i s . p a r e n t ( ) 
     } 
 
 
     / /   D R O P D O W N   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . d r o p d o w n 
 
     $ . f n . d r o p d o w n   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s   =   $ ( t h i s ) 
             v a r   d a t a     =   $ t h i s . d a t a ( ' d r o p d o w n ' ) 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' d r o p d o w n ' ,   ( d a t a   =   n e w   D r o p d o w n ( t h i s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] . c a l l ( $ t h i s ) 
         } ) 
     } 
 
     $ . f n . d r o p d o w n . C o n s t r u c t o r   =   D r o p d o w n 
 
 
     / /   D R O P D O W N   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . d r o p d o w n . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . d r o p d o w n   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   A P P L Y   T O   S T A N D A R D   D R O P D O W N   E L E M E N T S 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) 
         . o n ( ' c l i c k . b s . d r o p d o w n . d a t a - a p i ' ,   c l e a r M e n u s ) 
         . o n ( ' c l i c k . b s . d r o p d o w n . d a t a - a p i ' ,   ' . d r o p d o w n   f o r m ' ,   f u n c t i o n   ( e )   {   e . s t o p P r o p a g a t i o n ( )   } ) 
         . o n ( ' c l i c k . b s . d r o p d o w n . d a t a - a p i '     ,   t o g g l e ,   D r o p d o w n . p r o t o t y p e . t o g g l e ) 
         . o n ( ' k e y d o w n . b s . d r o p d o w n . d a t a - a p i ' ,   t o g g l e   +   ' ,   [ r o l e = m e n u ] '   ,   D r o p d o w n . p r o t o t y p e . k e y d o w n ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   m o d a l . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # m o d a l s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   M O D A L   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   M o d a l   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . o p t i o n s       =   o p t i o n s 
         t h i s . $ e l e m e n t     =   $ ( e l e m e n t ) 
         t h i s . $ b a c k d r o p   = 
         t h i s . i s S h o w n       =   n u l l 
 
         i f   ( t h i s . o p t i o n s . r e m o t e )   t h i s . $ e l e m e n t . l o a d ( t h i s . o p t i o n s . r e m o t e ) 
     } 
 
     M o d a l . D E F A U L T S   =   { 
             b a c k d r o p :   t r u e 
         ,   k e y b o a r d :   t r u e 
         ,   s h o w :   t r u e 
     } 
 
     M o d a l . p r o t o t y p e . t o g g l e   =   f u n c t i o n   ( _ r e l a t e d T a r g e t )   { 
         r e t u r n   t h i s [ ! t h i s . i s S h o w n   ?   ' s h o w '   :   ' h i d e ' ] ( _ r e l a t e d T a r g e t ) 
     } 
 
     M o d a l . p r o t o t y p e . s h o w   =   f u n c t i o n   ( _ r e l a t e d T a r g e t )   { 
         v a r   t h a t   =   t h i s 
         v a r   e         =   $ . E v e n t ( ' s h o w . b s . m o d a l ' ,   {   r e l a t e d T a r g e t :   _ r e l a t e d T a r g e t   } ) 
 
         t h i s . $ e l e m e n t . t r i g g e r ( e ) 
 
         i f   ( t h i s . i s S h o w n   | |   e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         t h i s . i s S h o w n   =   t r u e 
 
         t h i s . e s c a p e ( ) 
 
         t h i s . $ e l e m e n t . o n ( ' c l i c k . d i s m i s s . m o d a l ' ,   ' [ d a t a - d i s m i s s = " m o d a l " ] ' ,   $ . p r o x y ( t h i s . h i d e ,   t h i s ) ) 
 
         t h i s . b a c k d r o p ( f u n c t i o n   ( )   { 
             v a r   t r a n s i t i o n   =   $ . s u p p o r t . t r a n s i t i o n   & &   t h a t . $ e l e m e n t . h a s C l a s s ( ' f a d e ' ) 
 
             i f   ( ! t h a t . $ e l e m e n t . p a r e n t ( ) . l e n g t h )   { 
                 t h a t . $ e l e m e n t . a p p e n d T o ( d o c u m e n t . b o d y )   / /   d o n ' t   m o v e   m o d a l s   d o m   p o s i t i o n 
             } 
 
             t h a t . $ e l e m e n t . s h o w ( ) 
 
             i f   ( t r a n s i t i o n )   { 
                 t h a t . $ e l e m e n t [ 0 ] . o f f s e t W i d t h   / /   f o r c e   r e f l o w 
             } 
 
             t h a t . $ e l e m e n t 
                 . a d d C l a s s ( ' i n ' ) 
                 . a t t r ( ' a r i a - h i d d e n ' ,   f a l s e ) 
 
             t h a t . e n f o r c e F o c u s ( ) 
 
             v a r   e   =   $ . E v e n t ( ' s h o w n . b s . m o d a l ' ,   {   r e l a t e d T a r g e t :   _ r e l a t e d T a r g e t   } ) 
 
             t r a n s i t i o n   ? 
                 t h a t . $ e l e m e n t . f i n d ( ' . m o d a l - d i a l o g ' )   / /   w a i t   f o r   m o d a l   t o   s l i d e   i n 
                     . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   f u n c t i o n   ( )   { 
                         t h a t . $ e l e m e n t . f o c u s ( ) . t r i g g e r ( e ) 
                     } ) 
                     . e m u l a t e T r a n s i t i o n E n d ( 3 0 0 )   : 
                 t h a t . $ e l e m e n t . f o c u s ( ) . t r i g g e r ( e ) 
         } ) 
     } 
 
     M o d a l . p r o t o t y p e . h i d e   =   f u n c t i o n   ( e )   { 
         i f   ( e )   e . p r e v e n t D e f a u l t ( ) 
 
         e   =   $ . E v e n t ( ' h i d e . b s . m o d a l ' ) 
 
         t h i s . $ e l e m e n t . t r i g g e r ( e ) 
 
         i f   ( ! t h i s . i s S h o w n   | |   e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         t h i s . i s S h o w n   =   f a l s e 
 
         t h i s . e s c a p e ( ) 
 
         $ ( d o c u m e n t ) . o f f ( ' f o c u s i n . b s . m o d a l ' ) 
 
         t h i s . $ e l e m e n t 
             . r e m o v e C l a s s ( ' i n ' ) 
             . a t t r ( ' a r i a - h i d d e n ' ,   t r u e ) 
             . o f f ( ' c l i c k . d i s m i s s . m o d a l ' ) 
 
         $ . s u p p o r t . t r a n s i t i o n   & &   t h i s . $ e l e m e n t . h a s C l a s s ( ' f a d e ' )   ? 
             t h i s . $ e l e m e n t 
                 . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   $ . p r o x y ( t h i s . h i d e M o d a l ,   t h i s ) ) 
                 . e m u l a t e T r a n s i t i o n E n d ( 3 0 0 )   : 
             t h i s . h i d e M o d a l ( ) 
     } 
 
     M o d a l . p r o t o t y p e . e n f o r c e F o c u s   =   f u n c t i o n   ( )   { 
         $ ( d o c u m e n t ) 
             . o f f ( ' f o c u s i n . b s . m o d a l ' )   / /   g u a r d   a g a i n s t   i n f i n i t e   f o c u s   l o o p 
             . o n ( ' f o c u s i n . b s . m o d a l ' ,   $ . p r o x y ( f u n c t i o n   ( e )   { 
                 i f   ( t h i s . $ e l e m e n t [ 0 ]   ! = =   e . t a r g e t   & &   ! t h i s . $ e l e m e n t . h a s ( e . t a r g e t ) . l e n g t h )   { 
                     t h i s . $ e l e m e n t . f o c u s ( ) 
                 } 
             } ,   t h i s ) ) 
     } 
 
     M o d a l . p r o t o t y p e . e s c a p e   =   f u n c t i o n   ( )   { 
         i f   ( t h i s . i s S h o w n   & &   t h i s . o p t i o n s . k e y b o a r d )   { 
             t h i s . $ e l e m e n t . o n ( ' k e y u p . d i s m i s s . b s . m o d a l ' ,   $ . p r o x y ( f u n c t i o n   ( e )   { 
                 e . w h i c h   = =   2 7   & &   t h i s . h i d e ( ) 
             } ,   t h i s ) ) 
         }   e l s e   i f   ( ! t h i s . i s S h o w n )   { 
             t h i s . $ e l e m e n t . o f f ( ' k e y u p . d i s m i s s . b s . m o d a l ' ) 
         } 
     } 
 
     M o d a l . p r o t o t y p e . h i d e M o d a l   =   f u n c t i o n   ( )   { 
         v a r   t h a t   =   t h i s 
         t h i s . $ e l e m e n t . h i d e ( ) 
         t h i s . b a c k d r o p ( f u n c t i o n   ( )   { 
             t h a t . r e m o v e B a c k d r o p ( ) 
             t h a t . $ e l e m e n t . t r i g g e r ( ' h i d d e n . b s . m o d a l ' ) 
         } ) 
     } 
 
     M o d a l . p r o t o t y p e . r e m o v e B a c k d r o p   =   f u n c t i o n   ( )   { 
         t h i s . $ b a c k d r o p   & &   t h i s . $ b a c k d r o p . r e m o v e ( ) 
         t h i s . $ b a c k d r o p   =   n u l l 
     } 
 
     M o d a l . p r o t o t y p e . b a c k d r o p   =   f u n c t i o n   ( c a l l b a c k )   { 
         v a r   t h a t         =   t h i s 
         v a r   a n i m a t e   =   t h i s . $ e l e m e n t . h a s C l a s s ( ' f a d e ' )   ?   ' f a d e '   :   ' ' 
 
         i f   ( t h i s . i s S h o w n   & &   t h i s . o p t i o n s . b a c k d r o p )   { 
             v a r   d o A n i m a t e   =   $ . s u p p o r t . t r a n s i t i o n   & &   a n i m a t e 
 
             t h i s . $ b a c k d r o p   =   $ ( ' < d i v   c l a s s = " m o d a l - b a c k d r o p   '   +   a n i m a t e   +   ' "   / > ' ) 
                 . a p p e n d T o ( d o c u m e n t . b o d y ) 
 
             t h i s . $ e l e m e n t . o n ( ' c l i c k . d i s m i s s . m o d a l ' ,   $ . p r o x y ( f u n c t i o n   ( e )   { 
                 i f   ( e . t a r g e t   ! = =   e . c u r r e n t T a r g e t )   r e t u r n 
                 t h i s . o p t i o n s . b a c k d r o p   = =   ' s t a t i c ' 
                     ?   t h i s . $ e l e m e n t [ 0 ] . f o c u s . c a l l ( t h i s . $ e l e m e n t [ 0 ] ) 
                     :   t h i s . h i d e . c a l l ( t h i s ) 
             } ,   t h i s ) ) 
 
             i f   ( d o A n i m a t e )   t h i s . $ b a c k d r o p [ 0 ] . o f f s e t W i d t h   / /   f o r c e   r e f l o w 
 
             t h i s . $ b a c k d r o p . a d d C l a s s ( ' i n ' ) 
 
             i f   ( ! c a l l b a c k )   r e t u r n 
 
             d o A n i m a t e   ? 
                 t h i s . $ b a c k d r o p 
                     . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   c a l l b a c k ) 
                     . e m u l a t e T r a n s i t i o n E n d ( 1 5 0 )   : 
                 c a l l b a c k ( ) 
 
         }   e l s e   i f   ( ! t h i s . i s S h o w n   & &   t h i s . $ b a c k d r o p )   { 
             t h i s . $ b a c k d r o p . r e m o v e C l a s s ( ' i n ' ) 
 
             $ . s u p p o r t . t r a n s i t i o n   & &   t h i s . $ e l e m e n t . h a s C l a s s ( ' f a d e ' ) ? 
                 t h i s . $ b a c k d r o p 
                     . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   c a l l b a c k ) 
                     . e m u l a t e T r a n s i t i o n E n d ( 1 5 0 )   : 
                 c a l l b a c k ( ) 
 
         }   e l s e   i f   ( c a l l b a c k )   { 
             c a l l b a c k ( ) 
         } 
     } 
 
 
     / /   M O D A L   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . m o d a l 
 
     $ . f n . m o d a l   =   f u n c t i o n   ( o p t i o n ,   _ r e l a t e d T a r g e t )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . m o d a l ' ) 
             v a r   o p t i o n s   =   $ . e x t e n d ( { } ,   M o d a l . D E F A U L T S ,   $ t h i s . d a t a ( ) ,   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n ) 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . m o d a l ' ,   ( d a t a   =   n e w   M o d a l ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( _ r e l a t e d T a r g e t ) 
             e l s e   i f   ( o p t i o n s . s h o w )   d a t a . s h o w ( _ r e l a t e d T a r g e t ) 
         } ) 
     } 
 
     $ . f n . m o d a l . C o n s t r u c t o r   =   M o d a l 
 
 
     / /   M O D A L   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = 
 
     $ . f n . m o d a l . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . m o d a l   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   M O D A L   D A T A - A P I 
     / /   = = = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . m o d a l . d a t a - a p i ' ,   ' [ d a t a - t o g g l e = " m o d a l " ] ' ,   f u n c t i o n   ( e )   { 
         v a r   $ t h i s       =   $ ( t h i s ) 
         v a r   h r e f         =   $ t h i s . a t t r ( ' h r e f ' ) 
         v a r   $ t a r g e t   =   $ ( $ t h i s . a t t r ( ' d a t a - t a r g e t ' )   | |   ( h r e f   & &   h r e f . r e p l a c e ( / . * ( ? = # [ ^ \ s ] + $ ) / ,   ' ' ) ) )   / / s t r i p   f o r   i e 7 
         v a r   o p t i o n     =   $ t a r g e t . d a t a ( ' m o d a l ' )   ?   ' t o g g l e '   :   $ . e x t e n d ( {   r e m o t e :   ! / # / . t e s t ( h r e f )   & &   h r e f   } ,   $ t a r g e t . d a t a ( ) ,   $ t h i s . d a t a ( ) ) 
 
         e . p r e v e n t D e f a u l t ( ) 
 
         $ t a r g e t 
             . m o d a l ( o p t i o n ,   t h i s ) 
             . o n e ( ' h i d e ' ,   f u n c t i o n   ( )   { 
                 $ t h i s . i s ( ' : v i s i b l e ' )   & &   $ t h i s . f o c u s ( ) 
             } ) 
     } ) 
 
     $ ( d o c u m e n t ) 
         . o n ( ' s h o w . b s . m o d a l ' ,     ' . m o d a l ' ,   f u n c t i o n   ( )   {   $ ( d o c u m e n t . b o d y ) . a d d C l a s s ( ' m o d a l - o p e n ' )   } ) 
         . o n ( ' h i d d e n . b s . m o d a l ' ,   ' . m o d a l ' ,   f u n c t i o n   ( )   {   $ ( d o c u m e n t . b o d y ) . r e m o v e C l a s s ( ' m o d a l - o p e n ' )   } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   t o o l t i p . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # t o o l t i p 
   *   I n s p i r e d   b y   t h e   o r i g i n a l   j Q u e r y . t i p s y   b y   J a s o n   F r a m e 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   T O O L T I P   P U B L I C   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   T o o l t i p   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . t y p e               = 
         t h i s . o p t i o n s         = 
         t h i s . e n a b l e d         = 
         t h i s . t i m e o u t         = 
         t h i s . h o v e r S t a t e   = 
         t h i s . $ e l e m e n t       =   n u l l 
 
         t h i s . i n i t ( ' t o o l t i p ' ,   e l e m e n t ,   o p t i o n s ) 
     } 
 
     T o o l t i p . D E F A U L T S   =   { 
         a n i m a t i o n :   t r u e 
     ,   p l a c e m e n t :   ' t o p ' 
     ,   s e l e c t o r :   f a l s e 
     ,   t e m p l a t e :   ' < d i v   c l a s s = " t o o l t i p " > < d i v   c l a s s = " t o o l t i p - a r r o w " > < / d i v > < d i v   c l a s s = " t o o l t i p - i n n e r " > < / d i v > < / d i v > ' 
     ,   t r i g g e r :   ' h o v e r   f o c u s ' 
     ,   t i t l e :   ' ' 
     ,   d e l a y :   0 
     ,   h t m l :   f a l s e 
     ,   c o n t a i n e r :   f a l s e 
     } 
 
     T o o l t i p . p r o t o t y p e . i n i t   =   f u n c t i o n   ( t y p e ,   e l e m e n t ,   o p t i o n s )   { 
         t h i s . e n a b l e d     =   t r u e 
         t h i s . t y p e           =   t y p e 
         t h i s . $ e l e m e n t   =   $ ( e l e m e n t ) 
         t h i s . o p t i o n s     =   t h i s . g e t O p t i o n s ( o p t i o n s ) 
 
         v a r   t r i g g e r s   =   t h i s . o p t i o n s . t r i g g e r . s p l i t ( '   ' ) 
 
         f o r   ( v a r   i   =   t r i g g e r s . l e n g t h ;   i - - ; )   { 
             v a r   t r i g g e r   =   t r i g g e r s [ i ] 
 
             i f   ( t r i g g e r   = =   ' c l i c k ' )   { 
                 t h i s . $ e l e m e n t . o n ( ' c l i c k . '   +   t h i s . t y p e ,   t h i s . o p t i o n s . s e l e c t o r ,   $ . p r o x y ( t h i s . t o g g l e ,   t h i s ) ) 
             }   e l s e   i f   ( t r i g g e r   ! =   ' m a n u a l ' )   { 
                 v a r   e v e n t I n     =   t r i g g e r   = =   ' h o v e r '   ?   ' m o u s e e n t e r '   :   ' f o c u s ' 
                 v a r   e v e n t O u t   =   t r i g g e r   = =   ' h o v e r '   ?   ' m o u s e l e a v e '   :   ' b l u r ' 
 
                 t h i s . $ e l e m e n t . o n ( e v e n t I n     +   ' . '   +   t h i s . t y p e ,   t h i s . o p t i o n s . s e l e c t o r ,   $ . p r o x y ( t h i s . e n t e r ,   t h i s ) ) 
                 t h i s . $ e l e m e n t . o n ( e v e n t O u t   +   ' . '   +   t h i s . t y p e ,   t h i s . o p t i o n s . s e l e c t o r ,   $ . p r o x y ( t h i s . l e a v e ,   t h i s ) ) 
             } 
         } 
 
         t h i s . o p t i o n s . s e l e c t o r   ? 
             ( t h i s . _ o p t i o n s   =   $ . e x t e n d ( { } ,   t h i s . o p t i o n s ,   {   t r i g g e r :   ' m a n u a l ' ,   s e l e c t o r :   ' '   } ) )   : 
             t h i s . f i x T i t l e ( ) 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t D e f a u l t s   =   f u n c t i o n   ( )   { 
         r e t u r n   T o o l t i p . D E F A U L T S 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t O p t i o n s   =   f u n c t i o n   ( o p t i o n s )   { 
         o p t i o n s   =   $ . e x t e n d ( { } ,   t h i s . g e t D e f a u l t s ( ) ,   t h i s . $ e l e m e n t . d a t a ( ) ,   o p t i o n s ) 
 
         i f   ( o p t i o n s . d e l a y   & &   t y p e o f   o p t i o n s . d e l a y   = =   ' n u m b e r ' )   { 
             o p t i o n s . d e l a y   =   { 
                 s h o w :   o p t i o n s . d e l a y 
             ,   h i d e :   o p t i o n s . d e l a y 
             } 
         } 
 
         r e t u r n   o p t i o n s 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t D e l e g a t e O p t i o n s   =   f u n c t i o n   ( )   { 
         v a r   o p t i o n s     =   { } 
         v a r   d e f a u l t s   =   t h i s . g e t D e f a u l t s ( ) 
 
         t h i s . _ o p t i o n s   & &   $ . e a c h ( t h i s . _ o p t i o n s ,   f u n c t i o n   ( k e y ,   v a l u e )   { 
             i f   ( d e f a u l t s [ k e y ]   ! =   v a l u e )   o p t i o n s [ k e y ]   =   v a l u e 
         } ) 
 
         r e t u r n   o p t i o n s 
     } 
 
     T o o l t i p . p r o t o t y p e . e n t e r   =   f u n c t i o n   ( o b j )   { 
         v a r   s e l f   =   o b j   i n s t a n c e o f   t h i s . c o n s t r u c t o r   ? 
             o b j   :   $ ( o b j . c u r r e n t T a r g e t ) [ t h i s . t y p e ] ( t h i s . g e t D e l e g a t e O p t i o n s ( ) ) . d a t a ( ' b s . '   +   t h i s . t y p e ) 
 
         c l e a r T i m e o u t ( s e l f . t i m e o u t ) 
 
         s e l f . h o v e r S t a t e   =   ' i n ' 
 
         i f   ( ! s e l f . o p t i o n s . d e l a y   | |   ! s e l f . o p t i o n s . d e l a y . s h o w )   r e t u r n   s e l f . s h o w ( ) 
 
         s e l f . t i m e o u t   =   s e t T i m e o u t ( f u n c t i o n   ( )   { 
             i f   ( s e l f . h o v e r S t a t e   = =   ' i n ' )   s e l f . s h o w ( ) 
         } ,   s e l f . o p t i o n s . d e l a y . s h o w ) 
     } 
 
     T o o l t i p . p r o t o t y p e . l e a v e   =   f u n c t i o n   ( o b j )   { 
         v a r   s e l f   =   o b j   i n s t a n c e o f   t h i s . c o n s t r u c t o r   ? 
             o b j   :   $ ( o b j . c u r r e n t T a r g e t ) [ t h i s . t y p e ] ( t h i s . g e t D e l e g a t e O p t i o n s ( ) ) . d a t a ( ' b s . '   +   t h i s . t y p e ) 
 
         c l e a r T i m e o u t ( s e l f . t i m e o u t ) 
 
         s e l f . h o v e r S t a t e   =   ' o u t ' 
 
         i f   ( ! s e l f . o p t i o n s . d e l a y   | |   ! s e l f . o p t i o n s . d e l a y . h i d e )   r e t u r n   s e l f . h i d e ( ) 
 
         s e l f . t i m e o u t   =   s e t T i m e o u t ( f u n c t i o n   ( )   { 
             i f   ( s e l f . h o v e r S t a t e   = =   ' o u t ' )   s e l f . h i d e ( ) 
         } ,   s e l f . o p t i o n s . d e l a y . h i d e ) 
     } 
 
     T o o l t i p . p r o t o t y p e . s h o w   =   f u n c t i o n   ( )   { 
         v a r   e   =   $ . E v e n t ( ' s h o w . b s . ' +   t h i s . t y p e ) 
 
         i f   ( t h i s . h a s C o n t e n t ( )   & &   t h i s . e n a b l e d )   { 
             t h i s . $ e l e m e n t . t r i g g e r ( e ) 
 
             i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
             v a r   $ t i p   =   t h i s . t i p ( ) 
 
             t h i s . s e t C o n t e n t ( ) 
 
             i f   ( t h i s . o p t i o n s . a n i m a t i o n )   $ t i p . a d d C l a s s ( ' f a d e ' ) 
 
             v a r   p l a c e m e n t   =   t y p e o f   t h i s . o p t i o n s . p l a c e m e n t   = =   ' f u n c t i o n '   ? 
                 t h i s . o p t i o n s . p l a c e m e n t . c a l l ( t h i s ,   $ t i p [ 0 ] ,   t h i s . $ e l e m e n t [ 0 ] )   : 
                 t h i s . o p t i o n s . p l a c e m e n t 
 
             v a r   a u t o T o k e n   =   / \ s ? a u t o ? \ s ? / i 
             v a r   a u t o P l a c e   =   a u t o T o k e n . t e s t ( p l a c e m e n t ) 
             i f   ( a u t o P l a c e )   p l a c e m e n t   =   p l a c e m e n t . r e p l a c e ( a u t o T o k e n ,   ' ' )   | |   ' t o p ' 
 
             $ t i p 
                 . d e t a c h ( ) 
                 . c s s ( {   t o p :   0 ,   l e f t :   0 ,   d i s p l a y :   ' b l o c k '   } ) 
                 . a d d C l a s s ( p l a c e m e n t ) 
 
             t h i s . o p t i o n s . c o n t a i n e r   ?   $ t i p . a p p e n d T o ( t h i s . o p t i o n s . c o n t a i n e r )   :   $ t i p . i n s e r t A f t e r ( t h i s . $ e l e m e n t ) 
 
             v a r   p o s                     =   t h i s . g e t P o s i t i o n ( ) 
             v a r   a c t u a l W i d t h     =   $ t i p [ 0 ] . o f f s e t W i d t h 
             v a r   a c t u a l H e i g h t   =   $ t i p [ 0 ] . o f f s e t H e i g h t 
 
             i f   ( a u t o P l a c e )   { 
                 v a r   $ p a r e n t   =   t h i s . $ e l e m e n t . p a r e n t ( ) 
 
                 v a r   o r g P l a c e m e n t   =   p l a c e m e n t 
                 v a r   d o c S c r o l l         =   d o c u m e n t . d o c u m e n t E l e m e n t . s c r o l l T o p   | |   d o c u m e n t . b o d y . s c r o l l T o p 
                 v a r   p a r e n t W i d t h     =   t h i s . o p t i o n s . c o n t a i n e r   = =   ' b o d y '   ?   w i n d o w . i n n e r W i d t h     :   $ p a r e n t . o u t e r W i d t h ( ) 
                 v a r   p a r e n t H e i g h t   =   t h i s . o p t i o n s . c o n t a i n e r   = =   ' b o d y '   ?   w i n d o w . i n n e r H e i g h t   :   $ p a r e n t . o u t e r H e i g h t ( ) 
                 v a r   p a r e n t L e f t       =   t h i s . o p t i o n s . c o n t a i n e r   = =   ' b o d y '   ?   0   :   $ p a r e n t . o f f s e t ( ) . l e f t 
 
                 p l a c e m e n t   =   p l a c e m e n t   = =   ' b o t t o m '   & &   p o s . t o p       +   p o s . h e i g h t     +   a c t u a l H e i g h t   -   d o c S c r o l l   >   p a r e n t H e i g h t     ?   ' t o p '         : 
                                         p l a c e m e n t   = =   ' t o p '         & &   p o s . t o p       -   d o c S c r o l l       -   a c t u a l H e i g h t   <   0                                                   ?   ' b o t t o m '   : 
                                         p l a c e m e n t   = =   ' r i g h t '     & &   p o s . r i g h t   +   a c t u a l W i d t h   >   p a r e n t W i d t h                                                             ?   ' l e f t '       : 
                                         p l a c e m e n t   = =   ' l e f t '       & &   p o s . l e f t     -   a c t u a l W i d t h   <   p a r e n t L e f t                                                               ?   ' r i g h t '     : 
                                         p l a c e m e n t 
 
                 $ t i p 
                     . r e m o v e C l a s s ( o r g P l a c e m e n t ) 
                     . a d d C l a s s ( p l a c e m e n t ) 
             } 
 
             v a r   c a l c u l a t e d O f f s e t   =   t h i s . g e t C a l c u l a t e d O f f s e t ( p l a c e m e n t ,   p o s ,   a c t u a l W i d t h ,   a c t u a l H e i g h t ) 
 
             t h i s . a p p l y P l a c e m e n t ( c a l c u l a t e d O f f s e t ,   p l a c e m e n t ) 
             t h i s . $ e l e m e n t . t r i g g e r ( ' s h o w n . b s . '   +   t h i s . t y p e ) 
         } 
     } 
 
     T o o l t i p . p r o t o t y p e . a p p l y P l a c e m e n t   =   f u n c t i o n ( o f f s e t ,   p l a c e m e n t )   { 
         v a r   r e p l a c e 
         v a r   $ t i p       =   t h i s . t i p ( ) 
         v a r   w i d t h     =   $ t i p [ 0 ] . o f f s e t W i d t h 
         v a r   h e i g h t   =   $ t i p [ 0 ] . o f f s e t H e i g h t 
 
         / /   m a n u a l l y   r e a d   m a r g i n s   b e c a u s e   g e t B o u n d i n g C l i e n t R e c t   i n c l u d e s   d i f f e r e n c e 
         v a r   m a r g i n T o p   =   p a r s e I n t ( $ t i p . c s s ( ' m a r g i n - t o p ' ) ,   1 0 ) 
         v a r   m a r g i n L e f t   =   p a r s e I n t ( $ t i p . c s s ( ' m a r g i n - l e f t ' ) ,   1 0 ) 
 
         / /   w e   m u s t   c h e c k   f o r   N a N   f o r   i e   8 / 9 
         i f   ( i s N a N ( m a r g i n T o p ) )     m a r g i n T o p     =   0 
         i f   ( i s N a N ( m a r g i n L e f t ) )   m a r g i n L e f t   =   0 
 
         o f f s e t . t o p     =   o f f s e t . t o p     +   m a r g i n T o p 
         o f f s e t . l e f t   =   o f f s e t . l e f t   +   m a r g i n L e f t 
 
         $ t i p 
             . o f f s e t ( o f f s e t ) 
             . a d d C l a s s ( ' i n ' ) 
 
         / /   c h e c k   t o   s e e   i f   p l a c i n g   t i p   i n   n e w   o f f s e t   c a u s e d   t h e   t i p   t o   r e s i z e   i t s e l f 
         v a r   a c t u a l W i d t h     =   $ t i p [ 0 ] . o f f s e t W i d t h 
         v a r   a c t u a l H e i g h t   =   $ t i p [ 0 ] . o f f s e t H e i g h t 
 
         i f   ( p l a c e m e n t   = =   ' t o p '   & &   a c t u a l H e i g h t   ! =   h e i g h t )   { 
             r e p l a c e   =   t r u e 
             o f f s e t . t o p   =   o f f s e t . t o p   +   h e i g h t   -   a c t u a l H e i g h t 
         } 
 
         i f   ( / b o t t o m | t o p / . t e s t ( p l a c e m e n t ) )   { 
             v a r   d e l t a   =   0 
 
             i f   ( o f f s e t . l e f t   <   0 )   { 
                 d e l t a               =   o f f s e t . l e f t   *   - 2 
                 o f f s e t . l e f t   =   0 
 
                 $ t i p . o f f s e t ( o f f s e t ) 
 
                 a c t u a l W i d t h     =   $ t i p [ 0 ] . o f f s e t W i d t h 
                 a c t u a l H e i g h t   =   $ t i p [ 0 ] . o f f s e t H e i g h t 
             } 
 
             t h i s . r e p l a c e A r r o w ( d e l t a   -   w i d t h   +   a c t u a l W i d t h ,   a c t u a l W i d t h ,   ' l e f t ' ) 
         }   e l s e   { 
             t h i s . r e p l a c e A r r o w ( a c t u a l H e i g h t   -   h e i g h t ,   a c t u a l H e i g h t ,   ' t o p ' ) 
         } 
 
         i f   ( r e p l a c e )   $ t i p . o f f s e t ( o f f s e t ) 
     } 
 
     T o o l t i p . p r o t o t y p e . r e p l a c e A r r o w   =   f u n c t i o n ( d e l t a ,   d i m e n s i o n ,   p o s i t i o n )   { 
         t h i s . a r r o w ( ) . c s s ( p o s i t i o n ,   d e l t a   ?   ( 5 0   *   ( 1   -   d e l t a   /   d i m e n s i o n )   +   " % " )   :   ' ' ) 
     } 
 
     T o o l t i p . p r o t o t y p e . s e t C o n t e n t   =   f u n c t i o n   ( )   { 
         v a r   $ t i p     =   t h i s . t i p ( ) 
         v a r   t i t l e   =   t h i s . g e t T i t l e ( ) 
 
         $ t i p . f i n d ( ' . t o o l t i p - i n n e r ' ) [ t h i s . o p t i o n s . h t m l   ?   ' h t m l '   :   ' t e x t ' ] ( t i t l e ) 
         $ t i p . r e m o v e C l a s s ( ' f a d e   i n   t o p   b o t t o m   l e f t   r i g h t ' ) 
     } 
 
     T o o l t i p . p r o t o t y p e . h i d e   =   f u n c t i o n   ( )   { 
         v a r   t h a t   =   t h i s 
         v a r   $ t i p   =   t h i s . t i p ( ) 
         v a r   e         =   $ . E v e n t ( ' h i d e . b s . '   +   t h i s . t y p e ) 
 
         f u n c t i o n   c o m p l e t e ( )   { 
             i f   ( t h a t . h o v e r S t a t e   ! =   ' i n ' )   $ t i p . d e t a c h ( ) 
         } 
 
         t h i s . $ e l e m e n t . t r i g g e r ( e ) 
 
         i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         $ t i p . r e m o v e C l a s s ( ' i n ' ) 
 
         $ . s u p p o r t . t r a n s i t i o n   & &   t h i s . $ t i p . h a s C l a s s ( ' f a d e ' )   ? 
             $ t i p 
                 . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   c o m p l e t e ) 
                 . e m u l a t e T r a n s i t i o n E n d ( 1 5 0 )   : 
             c o m p l e t e ( ) 
 
         t h i s . $ e l e m e n t . t r i g g e r ( ' h i d d e n . b s . '   +   t h i s . t y p e ) 
 
         r e t u r n   t h i s 
     } 
 
     T o o l t i p . p r o t o t y p e . f i x T i t l e   =   f u n c t i o n   ( )   { 
         v a r   $ e   =   t h i s . $ e l e m e n t 
         i f   ( $ e . a t t r ( ' t i t l e ' )   | |   t y p e o f ( $ e . a t t r ( ' d a t a - o r i g i n a l - t i t l e ' ) )   ! =   ' s t r i n g ' )   { 
             $ e . a t t r ( ' d a t a - o r i g i n a l - t i t l e ' ,   $ e . a t t r ( ' t i t l e ' )   | |   ' ' ) . a t t r ( ' t i t l e ' ,   ' ' ) 
         } 
     } 
 
     T o o l t i p . p r o t o t y p e . h a s C o n t e n t   =   f u n c t i o n   ( )   { 
         r e t u r n   t h i s . g e t T i t l e ( ) 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t P o s i t i o n   =   f u n c t i o n   ( )   { 
         v a r   e l   =   t h i s . $ e l e m e n t [ 0 ] 
         r e t u r n   $ . e x t e n d ( { } ,   ( t y p e o f   e l . g e t B o u n d i n g C l i e n t R e c t   = =   ' f u n c t i o n ' )   ?   e l . g e t B o u n d i n g C l i e n t R e c t ( )   :   { 
             w i d t h :   e l . o f f s e t W i d t h 
         ,   h e i g h t :   e l . o f f s e t H e i g h t 
         } ,   t h i s . $ e l e m e n t . o f f s e t ( ) ) 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t C a l c u l a t e d O f f s e t   =   f u n c t i o n   ( p l a c e m e n t ,   p o s ,   a c t u a l W i d t h ,   a c t u a l H e i g h t )   { 
         r e t u r n   p l a c e m e n t   = =   ' b o t t o m '   ?   {   t o p :   p o s . t o p   +   p o s . h e i g h t ,       l e f t :   p o s . l e f t   +   p o s . w i d t h   /   2   -   a c t u a l W i d t h   /   2     }   : 
                       p l a c e m e n t   = =   ' t o p '         ?   {   t o p :   p o s . t o p   -   a c t u a l H e i g h t ,   l e f t :   p o s . l e f t   +   p o s . w i d t h   /   2   -   a c t u a l W i d t h   /   2     }   : 
                       p l a c e m e n t   = =   ' l e f t '       ?   {   t o p :   p o s . t o p   +   p o s . h e i g h t   /   2   -   a c t u a l H e i g h t   /   2 ,   l e f t :   p o s . l e f t   -   a c t u a l W i d t h   }   : 
                 / *   p l a c e m e n t   = =   ' r i g h t '   * /   {   t o p :   p o s . t o p   +   p o s . h e i g h t   /   2   -   a c t u a l H e i g h t   /   2 ,   l e f t :   p o s . l e f t   +   p o s . w i d t h       } 
     } 
 
     T o o l t i p . p r o t o t y p e . g e t T i t l e   =   f u n c t i o n   ( )   { 
         v a r   t i t l e 
         v a r   $ e   =   t h i s . $ e l e m e n t 
         v a r   o     =   t h i s . o p t i o n s 
 
         t i t l e   =   $ e . a t t r ( ' d a t a - o r i g i n a l - t i t l e ' ) 
             | |   ( t y p e o f   o . t i t l e   = =   ' f u n c t i o n '   ?   o . t i t l e . c a l l ( $ e [ 0 ] )   :     o . t i t l e ) 
 
         r e t u r n   t i t l e 
     } 
 
     T o o l t i p . p r o t o t y p e . t i p   =   f u n c t i o n   ( )   { 
         r e t u r n   t h i s . $ t i p   =   t h i s . $ t i p   | |   $ ( t h i s . o p t i o n s . t e m p l a t e ) 
     } 
 
     T o o l t i p . p r o t o t y p e . a r r o w   =   f u n c t i o n   ( )   { 
         r e t u r n   t h i s . $ a r r o w   =   t h i s . $ a r r o w   | |   t h i s . t i p ( ) . f i n d ( ' . t o o l t i p - a r r o w ' ) 
     } 
 
     T o o l t i p . p r o t o t y p e . v a l i d a t e   =   f u n c t i o n   ( )   { 
         i f   ( ! t h i s . $ e l e m e n t [ 0 ] . p a r e n t N o d e )   { 
             t h i s . h i d e ( ) 
             t h i s . $ e l e m e n t   =   n u l l 
             t h i s . o p t i o n s     =   n u l l 
         } 
     } 
 
     T o o l t i p . p r o t o t y p e . e n a b l e   =   f u n c t i o n   ( )   { 
         t h i s . e n a b l e d   =   t r u e 
     } 
 
     T o o l t i p . p r o t o t y p e . d i s a b l e   =   f u n c t i o n   ( )   { 
         t h i s . e n a b l e d   =   f a l s e 
     } 
 
     T o o l t i p . p r o t o t y p e . t o g g l e E n a b l e d   =   f u n c t i o n   ( )   { 
         t h i s . e n a b l e d   =   ! t h i s . e n a b l e d 
     } 
 
     T o o l t i p . p r o t o t y p e . t o g g l e   =   f u n c t i o n   ( e )   { 
         v a r   s e l f   =   e   ?   $ ( e . c u r r e n t T a r g e t ) [ t h i s . t y p e ] ( t h i s . g e t D e l e g a t e O p t i o n s ( ) ) . d a t a ( ' b s . '   +   t h i s . t y p e )   :   t h i s 
         s e l f . t i p ( ) . h a s C l a s s ( ' i n ' )   ?   s e l f . l e a v e ( s e l f )   :   s e l f . e n t e r ( s e l f ) 
     } 
 
     T o o l t i p . p r o t o t y p e . d e s t r o y   =   f u n c t i o n   ( )   { 
         t h i s . h i d e ( ) . $ e l e m e n t . o f f ( ' . '   +   t h i s . t y p e ) . r e m o v e D a t a ( ' b s . '   +   t h i s . t y p e ) 
     } 
 
 
     / /   T O O L T I P   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . t o o l t i p 
 
     $ . f n . t o o l t i p   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . t o o l t i p ' ) 
             v a r   o p t i o n s   =   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . t o o l t i p ' ,   ( d a t a   =   n e w   T o o l t i p ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . t o o l t i p . C o n s t r u c t o r   =   T o o l t i p 
 
 
     / /   T O O L T I P   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . t o o l t i p . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . t o o l t i p   =   o l d 
         r e t u r n   t h i s 
     } 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   p o p o v e r . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # p o p o v e r s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   P O P O V E R   P U B L I C   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   P o p o v e r   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . i n i t ( ' p o p o v e r ' ,   e l e m e n t ,   o p t i o n s ) 
     } 
 
     i f   ( ! $ . f n . t o o l t i p )   t h r o w   n e w   E r r o r ( ' P o p o v e r   r e q u i r e s   t o o l t i p . j s ' ) 
 
     P o p o v e r . D E F A U L T S   =   $ . e x t e n d ( { }   ,   $ . f n . t o o l t i p . C o n s t r u c t o r . D E F A U L T S ,   { 
         p l a c e m e n t :   ' r i g h t ' 
     ,   t r i g g e r :   ' c l i c k ' 
     ,   c o n t e n t :   ' ' 
     ,   t e m p l a t e :   ' < d i v   c l a s s = " p o p o v e r " > < d i v   c l a s s = " a r r o w " > < / d i v > < h 3   c l a s s = " p o p o v e r - t i t l e " > < / h 3 > < d i v   c l a s s = " p o p o v e r - c o n t e n t " > < / d i v > < / d i v > ' 
     } ) 
 
 
     / /   N O T E :   P O P O V E R   E X T E N D S   t o o l t i p . j s 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     P o p o v e r . p r o t o t y p e   =   $ . e x t e n d ( { } ,   $ . f n . t o o l t i p . C o n s t r u c t o r . p r o t o t y p e ) 
 
     P o p o v e r . p r o t o t y p e . c o n s t r u c t o r   =   P o p o v e r 
 
     P o p o v e r . p r o t o t y p e . g e t D e f a u l t s   =   f u n c t i o n   ( )   { 
         r e t u r n   P o p o v e r . D E F A U L T S 
     } 
 
     P o p o v e r . p r o t o t y p e . s e t C o n t e n t   =   f u n c t i o n   ( )   { 
         v a r   $ t i p         =   t h i s . t i p ( ) 
         v a r   t i t l e       =   t h i s . g e t T i t l e ( ) 
         v a r   c o n t e n t   =   t h i s . g e t C o n t e n t ( ) 
 
         $ t i p . f i n d ( ' . p o p o v e r - t i t l e ' ) [ t h i s . o p t i o n s . h t m l   ?   ' h t m l '   :   ' t e x t ' ] ( t i t l e ) 
         $ t i p . f i n d ( ' . p o p o v e r - c o n t e n t ' ) [ t h i s . o p t i o n s . h t m l   ?   ' h t m l '   :   ' t e x t ' ] ( c o n t e n t ) 
 
         $ t i p . r e m o v e C l a s s ( ' f a d e   t o p   b o t t o m   l e f t   r i g h t   i n ' ) 
 
         / /   I E 8   d o e s n ' t   a c c e p t   h i d i n g   v i a   t h e   ` : e m p t y `   p s e u d o   s e l e c t o r ,   w e   h a v e   t o   d o 
         / /   t h i s   m a n u a l l y   b y   c h e c k i n g   t h e   c o n t e n t s . 
         i f   ( ! $ t i p . f i n d ( ' . p o p o v e r - t i t l e ' ) . h t m l ( ) )   $ t i p . f i n d ( ' . p o p o v e r - t i t l e ' ) . h i d e ( ) 
     } 
 
     P o p o v e r . p r o t o t y p e . h a s C o n t e n t   =   f u n c t i o n   ( )   { 
         r e t u r n   t h i s . g e t T i t l e ( )   | |   t h i s . g e t C o n t e n t ( ) 
     } 
 
     P o p o v e r . p r o t o t y p e . g e t C o n t e n t   =   f u n c t i o n   ( )   { 
         v a r   $ e   =   t h i s . $ e l e m e n t 
         v a r   o     =   t h i s . o p t i o n s 
 
         r e t u r n   $ e . a t t r ( ' d a t a - c o n t e n t ' ) 
             | |   ( t y p e o f   o . c o n t e n t   = =   ' f u n c t i o n '   ? 
                         o . c o n t e n t . c a l l ( $ e [ 0 ] )   : 
                         o . c o n t e n t ) 
     } 
 
     P o p o v e r . p r o t o t y p e . a r r o w   =   f u n c t i o n   ( )   { 
         r e t u r n   t h i s . $ a r r o w   =   t h i s . $ a r r o w   | |   t h i s . t i p ( ) . f i n d ( ' . a r r o w ' ) 
     } 
 
     P o p o v e r . p r o t o t y p e . t i p   =   f u n c t i o n   ( )   { 
         i f   ( ! t h i s . $ t i p )   t h i s . $ t i p   =   $ ( t h i s . o p t i o n s . t e m p l a t e ) 
         r e t u r n   t h i s . $ t i p 
     } 
 
 
     / /   P O P O V E R   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . p o p o v e r 
 
     $ . f n . p o p o v e r   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . p o p o v e r ' ) 
             v a r   o p t i o n s   =   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . p o p o v e r ' ,   ( d a t a   =   n e w   P o p o v e r ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . p o p o v e r . C o n s t r u c t o r   =   P o p o v e r 
 
 
     / /   P O P O V E R   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . p o p o v e r . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . p o p o v e r   =   o l d 
         r e t u r n   t h i s 
     } 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   s c r o l l s p y . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # s c r o l l s p y 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   S C R O L L S P Y   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     f u n c t i o n   S c r o l l S p y ( e l e m e n t ,   o p t i o n s )   { 
         v a r   h r e f 
         v a r   p r o c e s s     =   $ . p r o x y ( t h i s . p r o c e s s ,   t h i s ) 
 
         t h i s . $ e l e m e n t               =   $ ( e l e m e n t ) . i s ( ' b o d y ' )   ?   $ ( w i n d o w )   :   $ ( e l e m e n t ) 
         t h i s . $ b o d y                     =   $ ( ' b o d y ' ) 
         t h i s . $ s c r o l l E l e m e n t   =   t h i s . $ e l e m e n t . o n ( ' s c r o l l . b s . s c r o l l - s p y . d a t a - a p i ' ,   p r o c e s s ) 
         t h i s . o p t i o n s                 =   $ . e x t e n d ( { } ,   S c r o l l S p y . D E F A U L T S ,   o p t i o n s ) 
         t h i s . s e l e c t o r               =   ( t h i s . o p t i o n s . t a r g e t 
             | |   ( ( h r e f   =   $ ( e l e m e n t ) . a t t r ( ' h r e f ' ) )   & &   h r e f . r e p l a c e ( / . * ( ? = # [ ^ \ s ] + $ ) / ,   ' ' ) )   / / s t r i p   f o r   i e 7 
             | |   ' ' )   +   '   . n a v   l i   >   a ' 
         t h i s . o f f s e t s                 =   $ ( [ ] ) 
         t h i s . t a r g e t s                 =   $ ( [ ] ) 
         t h i s . a c t i v e T a r g e t       =   n u l l 
 
         t h i s . r e f r e s h ( ) 
         t h i s . p r o c e s s ( ) 
     } 
 
     S c r o l l S p y . D E F A U L T S   =   { 
         o f f s e t :   1 0 
     } 
 
     S c r o l l S p y . p r o t o t y p e . r e f r e s h   =   f u n c t i o n   ( )   { 
         v a r   o f f s e t M e t h o d   =   t h i s . $ e l e m e n t [ 0 ]   = =   w i n d o w   ?   ' o f f s e t '   :   ' p o s i t i o n ' 
 
         t h i s . o f f s e t s   =   $ ( [ ] ) 
         t h i s . t a r g e t s   =   $ ( [ ] ) 
 
         v a r   s e l f           =   t h i s 
         v a r   $ t a r g e t s   =   t h i s . $ b o d y 
             . f i n d ( t h i s . s e l e c t o r ) 
             . m a p ( f u n c t i o n   ( )   { 
                 v a r   $ e l       =   $ ( t h i s ) 
                 v a r   h r e f     =   $ e l . d a t a ( ' t a r g e t ' )   | |   $ e l . a t t r ( ' h r e f ' ) 
                 v a r   $ h r e f   =   / ^ # \ w / . t e s t ( h r e f )   & &   $ ( h r e f ) 
 
                 r e t u r n   ( $ h r e f 
                     & &   $ h r e f . l e n g t h 
                     & &   [ [   $ h r e f [ o f f s e t M e t h o d ] ( ) . t o p   +   ( ! $ . i s W i n d o w ( s e l f . $ s c r o l l E l e m e n t . g e t ( 0 ) )   & &   s e l f . $ s c r o l l E l e m e n t . s c r o l l T o p ( ) ) ,   h r e f   ] ] )   | |   n u l l 
             } ) 
             . s o r t ( f u n c t i o n   ( a ,   b )   {   r e t u r n   a [ 0 ]   -   b [ 0 ]   } ) 
             . e a c h ( f u n c t i o n   ( )   { 
                 s e l f . o f f s e t s . p u s h ( t h i s [ 0 ] ) 
                 s e l f . t a r g e t s . p u s h ( t h i s [ 1 ] ) 
             } ) 
     } 
 
     S c r o l l S p y . p r o t o t y p e . p r o c e s s   =   f u n c t i o n   ( )   { 
         v a r   s c r o l l T o p         =   t h i s . $ s c r o l l E l e m e n t . s c r o l l T o p ( )   +   t h i s . o p t i o n s . o f f s e t 
         v a r   s c r o l l H e i g h t   =   t h i s . $ s c r o l l E l e m e n t [ 0 ] . s c r o l l H e i g h t   | |   t h i s . $ b o d y [ 0 ] . s c r o l l H e i g h t 
         v a r   m a x S c r o l l         =   s c r o l l H e i g h t   -   t h i s . $ s c r o l l E l e m e n t . h e i g h t ( ) 
         v a r   o f f s e t s             =   t h i s . o f f s e t s 
         v a r   t a r g e t s             =   t h i s . t a r g e t s 
         v a r   a c t i v e T a r g e t   =   t h i s . a c t i v e T a r g e t 
         v a r   i 
 
         i f   ( s c r o l l T o p   > =   m a x S c r o l l )   { 
             r e t u r n   a c t i v e T a r g e t   ! =   ( i   =   t a r g e t s . l a s t ( ) [ 0 ] )   & &   t h i s . a c t i v a t e ( i ) 
         } 
 
         f o r   ( i   =   o f f s e t s . l e n g t h ;   i - - ; )   { 
             a c t i v e T a r g e t   ! =   t a r g e t s [ i ] 
                 & &   s c r o l l T o p   > =   o f f s e t s [ i ] 
                 & &   ( ! o f f s e t s [ i   +   1 ]   | |   s c r o l l T o p   < =   o f f s e t s [ i   +   1 ] ) 
                 & &   t h i s . a c t i v a t e (   t a r g e t s [ i ]   ) 
         } 
     } 
 
     S c r o l l S p y . p r o t o t y p e . a c t i v a t e   =   f u n c t i o n   ( t a r g e t )   { 
         t h i s . a c t i v e T a r g e t   =   t a r g e t 
 
         $ ( t h i s . s e l e c t o r ) 
             . p a r e n t s ( ' . a c t i v e ' ) 
             . r e m o v e C l a s s ( ' a c t i v e ' ) 
 
         v a r   s e l e c t o r   =   t h i s . s e l e c t o r 
             +   ' [ d a t a - t a r g e t = " '   +   t a r g e t   +   ' " ] , ' 
             +   t h i s . s e l e c t o r   +   ' [ h r e f = " '   +   t a r g e t   +   ' " ] ' 
 
         v a r   a c t i v e   =   $ ( s e l e c t o r ) 
             . p a r e n t s ( ' l i ' ) 
             . a d d C l a s s ( ' a c t i v e ' ) 
 
         i f   ( a c t i v e . p a r e n t ( ' . d r o p d o w n - m e n u ' ) . l e n g t h )     { 
             a c t i v e   =   a c t i v e 
                 . c l o s e s t ( ' l i . d r o p d o w n ' ) 
                 . a d d C l a s s ( ' a c t i v e ' ) 
         } 
 
         a c t i v e . t r i g g e r ( ' a c t i v a t e ' ) 
     } 
 
 
     / /   S C R O L L S P Y   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . s c r o l l s p y 
 
     $ . f n . s c r o l l s p y   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . s c r o l l s p y ' ) 
             v a r   o p t i o n s   =   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . s c r o l l s p y ' ,   ( d a t a   =   n e w   S c r o l l S p y ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . s c r o l l s p y . C o n s t r u c t o r   =   S c r o l l S p y 
 
 
     / /   S C R O L L S P Y   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = = = = = 
 
     $ . f n . s c r o l l s p y . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . s c r o l l s p y   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   S C R O L L S P Y   D A T A - A P I 
     / /   = = = = = = = = = = = = = = = = = = 
 
     $ ( w i n d o w ) . o n ( ' l o a d ' ,   f u n c t i o n   ( )   { 
         $ ( ' [ d a t a - s p y = " s c r o l l " ] ' ) . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ s p y   =   $ ( t h i s ) 
             $ s p y . s c r o l l s p y ( $ s p y . d a t a ( ) ) 
         } ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   t a b . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # t a b s 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   T A B   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = 
 
     v a r   T a b   =   f u n c t i o n   ( e l e m e n t )   { 
         t h i s . e l e m e n t   =   $ ( e l e m e n t ) 
     } 
 
     T a b . p r o t o t y p e . s h o w   =   f u n c t i o n   ( )   { 
         v a r   $ t h i s         =   t h i s . e l e m e n t 
         v a r   $ u l             =   $ t h i s . c l o s e s t ( ' u l : n o t ( . d r o p d o w n - m e n u ) ' ) 
         v a r   s e l e c t o r   =   $ t h i s . a t t r ( ' d a t a - t a r g e t ' ) 
 
         i f   ( ! s e l e c t o r )   { 
             s e l e c t o r   =   $ t h i s . a t t r ( ' h r e f ' ) 
             s e l e c t o r   =   s e l e c t o r   & &   s e l e c t o r . r e p l a c e ( / . * ( ? = # [ ^ \ s ] * $ ) / ,   ' ' )   / / s t r i p   f o r   i e 7 
         } 
 
         i f   ( $ t h i s . p a r e n t ( ' l i ' ) . h a s C l a s s ( ' a c t i v e ' ) )   r e t u r n 
 
         v a r   p r e v i o u s   =   $ u l . f i n d ( ' . a c t i v e : l a s t   a ' ) [ 0 ] 
         v a r   e                 =   $ . E v e n t ( ' s h o w . b s . t a b ' ,   { 
             r e l a t e d T a r g e t :   p r e v i o u s 
         } ) 
 
         $ t h i s . t r i g g e r ( e ) 
 
         i f   ( e . i s D e f a u l t P r e v e n t e d ( ) )   r e t u r n 
 
         v a r   $ t a r g e t   =   $ ( s e l e c t o r ) 
 
         t h i s . a c t i v a t e ( $ t h i s . p a r e n t ( ' l i ' ) ,   $ u l ) 
         t h i s . a c t i v a t e ( $ t a r g e t ,   $ t a r g e t . p a r e n t ( ) ,   f u n c t i o n   ( )   { 
             $ t h i s . t r i g g e r ( { 
                 t y p e :   ' s h o w n . b s . t a b ' 
             ,   r e l a t e d T a r g e t :   p r e v i o u s 
             } ) 
         } ) 
     } 
 
     T a b . p r o t o t y p e . a c t i v a t e   =   f u n c t i o n   ( e l e m e n t ,   c o n t a i n e r ,   c a l l b a c k )   { 
         v a r   $ a c t i v e         =   c o n t a i n e r . f i n d ( ' >   . a c t i v e ' ) 
         v a r   t r a n s i t i o n   =   c a l l b a c k 
             & &   $ . s u p p o r t . t r a n s i t i o n 
             & &   $ a c t i v e . h a s C l a s s ( ' f a d e ' ) 
 
         f u n c t i o n   n e x t ( )   { 
             $ a c t i v e 
                 . r e m o v e C l a s s ( ' a c t i v e ' ) 
                 . f i n d ( ' >   . d r o p d o w n - m e n u   >   . a c t i v e ' ) 
                 . r e m o v e C l a s s ( ' a c t i v e ' ) 
 
             e l e m e n t . a d d C l a s s ( ' a c t i v e ' ) 
 
             i f   ( t r a n s i t i o n )   { 
                 e l e m e n t [ 0 ] . o f f s e t W i d t h   / /   r e f l o w   f o r   t r a n s i t i o n 
                 e l e m e n t . a d d C l a s s ( ' i n ' ) 
             }   e l s e   { 
                 e l e m e n t . r e m o v e C l a s s ( ' f a d e ' ) 
             } 
 
             i f   ( e l e m e n t . p a r e n t ( ' . d r o p d o w n - m e n u ' ) )   { 
                 e l e m e n t . c l o s e s t ( ' l i . d r o p d o w n ' ) . a d d C l a s s ( ' a c t i v e ' ) 
             } 
 
             c a l l b a c k   & &   c a l l b a c k ( ) 
         } 
 
         t r a n s i t i o n   ? 
             $ a c t i v e 
                 . o n e ( $ . s u p p o r t . t r a n s i t i o n . e n d ,   n e x t ) 
                 . e m u l a t e T r a n s i t i o n E n d ( 1 5 0 )   : 
             n e x t ( ) 
 
         $ a c t i v e . r e m o v e C l a s s ( ' i n ' ) 
     } 
 
 
     / /   T A B   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . t a b 
 
     $ . f n . t a b   =   f u n c t i o n   (   o p t i o n   )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s   =   $ ( t h i s ) 
             v a r   d a t a     =   $ t h i s . d a t a ( ' b s . t a b ' ) 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . t a b ' ,   ( d a t a   =   n e w   T a b ( t h i s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . t a b . C o n s t r u c t o r   =   T a b 
 
 
     / /   T A B   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = 
 
     $ . f n . t a b . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . t a b   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   T A B   D A T A - A P I 
     / /   = = = = = = = = = = = = 
 
     $ ( d o c u m e n t ) . o n ( ' c l i c k . b s . t a b . d a t a - a p i ' ,   ' [ d a t a - t o g g l e = " t a b " ] ,   [ d a t a - t o g g l e = " p i l l " ] ' ,   f u n c t i o n   ( e )   { 
         e . p r e v e n t D e f a u l t ( ) 
         $ ( t h i s ) . t a b ( ' s h o w ' ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 
 / *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   B o o t s t r a p :   a f f i x . j s   v 3 . 0 . 0 
   *   h t t p : / / t w b s . g i t h u b . c o m / b o o t s t r a p / j a v a s c r i p t . h t m l # a f f i x 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = 
   *   C o p y r i g h t   2 0 1 2   T w i t t e r ,   I n c . 
   * 
   *   L i c e n s e d   u n d e r   t h e   A p a c h e   L i c e n s e ,   V e r s i o n   2 . 0   ( t h e   " L i c e n s e " ) ; 
   *   y o u   m a y   n o t   u s e   t h i s   f i l e   e x c e p t   i n   c o m p l i a n c e   w i t h   t h e   L i c e n s e . 
   *   Y o u   m a y   o b t a i n   a   c o p y   o f   t h e   L i c e n s e   a t 
   * 
   *   h t t p : / / w w w . a p a c h e . o r g / l i c e n s e s / L I C E N S E - 2 . 0 
   * 
   *   U n l e s s   r e q u i r e d   b y   a p p l i c a b l e   l a w   o r   a g r e e d   t o   i n   w r i t i n g ,   s o f t w a r e 
   *   d i s t r i b u t e d   u n d e r   t h e   L i c e n s e   i s   d i s t r i b u t e d   o n   a n   " A S   I S "   B A S I S , 
   *   W I T H O U T   W A R R A N T I E S   O R   C O N D I T I O N S   O F   A N Y   K I N D ,   e i t h e r   e x p r e s s   o r   i m p l i e d . 
   *   S e e   t h e   L i c e n s e   f o r   t h e   s p e c i f i c   l a n g u a g e   g o v e r n i n g   p e r m i s s i o n s   a n d 
   *   l i m i t a t i o n s   u n d e r   t h e   L i c e n s e . 
   *   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =   * / 
 
 
 + f u n c t i o n   ( $ )   {   " u s e   s t r i c t " ; 
 
     / /   A F F I X   C L A S S   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   A f f i x   =   f u n c t i o n   ( e l e m e n t ,   o p t i o n s )   { 
         t h i s . o p t i o n s   =   $ . e x t e n d ( { } ,   A f f i x . D E F A U L T S ,   o p t i o n s ) 
         t h i s . $ w i n d o w   =   $ ( w i n d o w ) 
             . o n ( ' s c r o l l . b s . a f f i x . d a t a - a p i ' ,   $ . p r o x y ( t h i s . c h e c k P o s i t i o n ,   t h i s ) ) 
             . o n ( ' c l i c k . b s . a f f i x . d a t a - a p i ' ,     $ . p r o x y ( t h i s . c h e c k P o s i t i o n W i t h E v e n t L o o p ,   t h i s ) ) 
 
         t h i s . $ e l e m e n t   =   $ ( e l e m e n t ) 
         t h i s . a f f i x e d     = 
         t h i s . u n p i n         =   n u l l 
 
         t h i s . c h e c k P o s i t i o n ( ) 
     } 
 
     A f f i x . R E S E T   =   ' a f f i x   a f f i x - t o p   a f f i x - b o t t o m ' 
 
     A f f i x . D E F A U L T S   =   { 
         o f f s e t :   0 
     } 
 
     A f f i x . p r o t o t y p e . c h e c k P o s i t i o n W i t h E v e n t L o o p   =   f u n c t i o n   ( )   { 
         s e t T i m e o u t ( $ . p r o x y ( t h i s . c h e c k P o s i t i o n ,   t h i s ) ,   1 ) 
     } 
 
     A f f i x . p r o t o t y p e . c h e c k P o s i t i o n   =   f u n c t i o n   ( )   { 
         i f   ( ! t h i s . $ e l e m e n t . i s ( ' : v i s i b l e ' ) )   r e t u r n 
 
         v a r   s c r o l l H e i g h t   =   $ ( d o c u m e n t ) . h e i g h t ( ) 
         v a r   s c r o l l T o p         =   t h i s . $ w i n d o w . s c r o l l T o p ( ) 
         v a r   p o s i t i o n           =   t h i s . $ e l e m e n t . o f f s e t ( ) 
         v a r   o f f s e t               =   t h i s . o p t i o n s . o f f s e t 
         v a r   o f f s e t T o p         =   o f f s e t . t o p 
         v a r   o f f s e t B o t t o m   =   o f f s e t . b o t t o m 
 
         i f   ( t y p e o f   o f f s e t   ! =   ' o b j e c t ' )                   o f f s e t B o t t o m   =   o f f s e t T o p   =   o f f s e t 
         i f   ( t y p e o f   o f f s e t T o p   = =   ' f u n c t i o n ' )         o f f s e t T o p         =   o f f s e t . t o p ( ) 
         i f   ( t y p e o f   o f f s e t B o t t o m   = =   ' f u n c t i o n ' )   o f f s e t B o t t o m   =   o f f s e t . b o t t o m ( ) 
 
         v a r   a f f i x   =   t h i s . u n p i n       ! =   n u l l   & &   ( s c r o l l T o p   +   t h i s . u n p i n   < =   p o s i t i o n . t o p )   ?   f a l s e   : 
                                 o f f s e t B o t t o m   ! =   n u l l   & &   ( p o s i t i o n . t o p   +   t h i s . $ e l e m e n t . h e i g h t ( )   > =   s c r o l l H e i g h t   -   o f f s e t B o t t o m )   ?   ' b o t t o m '   : 
                                 o f f s e t T o p         ! =   n u l l   & &   ( s c r o l l T o p   < =   o f f s e t T o p )   ?   ' t o p '   :   f a l s e 
 
         i f   ( t h i s . a f f i x e d   = = =   a f f i x )   r e t u r n 
         i f   ( t h i s . u n p i n )   t h i s . $ e l e m e n t . c s s ( ' t o p ' ,   ' ' ) 
 
         t h i s . a f f i x e d   =   a f f i x 
         t h i s . u n p i n       =   a f f i x   = =   ' b o t t o m '   ?   p o s i t i o n . t o p   -   s c r o l l T o p   :   n u l l 
 
         t h i s . $ e l e m e n t . r e m o v e C l a s s ( A f f i x . R E S E T ) . a d d C l a s s ( ' a f f i x '   +   ( a f f i x   ?   ' - '   +   a f f i x   :   ' ' ) ) 
 
         i f   ( a f f i x   = =   ' b o t t o m ' )   { 
             t h i s . $ e l e m e n t . o f f s e t ( {   t o p :   d o c u m e n t . b o d y . o f f s e t H e i g h t   -   o f f s e t B o t t o m   -   t h i s . $ e l e m e n t . h e i g h t ( )   } ) 
         } 
     } 
 
 
     / /   A F F I X   P L U G I N   D E F I N I T I O N 
     / /   = = = = = = = = = = = = = = = = = = = = = = = 
 
     v a r   o l d   =   $ . f n . a f f i x 
 
     $ . f n . a f f i x   =   f u n c t i o n   ( o p t i o n )   { 
         r e t u r n   t h i s . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ t h i s       =   $ ( t h i s ) 
             v a r   d a t a         =   $ t h i s . d a t a ( ' b s . a f f i x ' ) 
             v a r   o p t i o n s   =   t y p e o f   o p t i o n   = =   ' o b j e c t '   & &   o p t i o n 
 
             i f   ( ! d a t a )   $ t h i s . d a t a ( ' b s . a f f i x ' ,   ( d a t a   =   n e w   A f f i x ( t h i s ,   o p t i o n s ) ) ) 
             i f   ( t y p e o f   o p t i o n   = =   ' s t r i n g ' )   d a t a [ o p t i o n ] ( ) 
         } ) 
     } 
 
     $ . f n . a f f i x . C o n s t r u c t o r   =   A f f i x 
 
 
     / /   A F F I X   N O   C O N F L I C T 
     / /   = = = = = = = = = = = = = = = = = 
 
     $ . f n . a f f i x . n o C o n f l i c t   =   f u n c t i o n   ( )   { 
         $ . f n . a f f i x   =   o l d 
         r e t u r n   t h i s 
     } 
 
 
     / /   A F F I X   D A T A - A P I 
     / /   = = = = = = = = = = = = = = 
 
     $ ( w i n d o w ) . o n ( ' l o a d ' ,   f u n c t i o n   ( )   { 
         $ ( ' [ d a t a - s p y = " a f f i x " ] ' ) . e a c h ( f u n c t i o n   ( )   { 
             v a r   $ s p y   =   $ ( t h i s ) 
             v a r   d a t a   =   $ s p y . d a t a ( ) 
 
             d a t a . o f f s e t   =   d a t a . o f f s e t   | |   { } 
 
             i f   ( d a t a . o f f s e t B o t t o m )   d a t a . o f f s e t . b o t t o m   =   d a t a . o f f s e t B o t t o m 
             i f   ( d a t a . o f f s e t T o p )         d a t a . o f f s e t . t o p         =   d a t a . o f f s e t T o p 
 
             $ s p y . a f f i x ( d a t a ) 
         } ) 
     } ) 
 
 } ( w i n d o w . j Q u e r y ) ; 
 