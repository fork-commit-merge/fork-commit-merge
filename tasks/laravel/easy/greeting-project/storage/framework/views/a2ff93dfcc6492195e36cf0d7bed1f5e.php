<?php $attributes ??= new \Illuminate\View\ComponentAttributeBag;

$__newAttributes = [];
$__propNames = \Illuminate\View\ComponentAttributeBag::extractPropNames((['queries']));

foreach ($attributes->all() as $__key => $__value) {
    if (in_array($__key, $__propNames)) {
        $$__key = $$__key ?? $__value;
    } else {
        $__newAttributes[$__key] = $__value;
    }
}

$attributes = new \Illuminate\View\ComponentAttributeBag($__newAttributes);

unset($__propNames);
unset($__newAttributes);

foreach (array_filter((['queries']), 'is_string', ARRAY_FILTER_USE_KEY) as $__key => $__value) {
    $$__key = $$__key ?? $__value;
}

$__defined_vars = get_defined_vars();

foreach ($attributes->all() as $__key => $__value) {
    if (array_key_exists($__key, $__defined_vars)) unset($$__key);
}

unset($__defined_vars, $__key, $__value); ?>

<div
    <?php echo e($attributes->merge(['class' => "flex flex-col gap-2.5 bg-neutral-50 dark:bg-white/1 border border-neutral-200 dark:border-neutral-800 rounded-xl p-2.5 shadow-xs"])); ?>

    x-data="{
        totalQueries: <?php echo e(min(count($queries), 100)); ?>,
        currentPage: 1,
        perPage: 10,
        get totalPages() {
            return Math.ceil(this.totalQueries / this.perPage);
        },
        get hasPrevious() {
            return this.currentPage > 1;
        },
        get hasNext() {
            return this.currentPage < this.totalPages;
        },
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        first() {
            this.currentPage = 1;
        },
        last() {
            this.currentPage = this.totalPages;
        },
        previous() {
            if (this.hasPrevious) {
                this.currentPage--;
            }
        },
        next() {
            if (this.hasNext) {
                this.currentPage++;
            }
        },
        get visiblePages() {
            const total = this.totalPages;
            const current = this.currentPage;
            const pages = [];

            if (total <= 7) {
                for (let i = 1; i <= total; i++) {
                    pages.push({ type: 'page', value: i });
                }
            } else {
                if (current <= 4) {
                    for (let i = 1; i <= 5; i++) {
                        pages.push({ type: 'page', value: i });
                    }
                    if (total > 6) {
                        pages.push({ type: 'ellipsis', value: '...', id: 'end' });
                        pages.push({ type: 'page', value: total });
                    }
                } else if (current > total - 4) {
                    pages.push({ type: 'page', value: 1 });
                    if (total > 6) {
                        pages.push({ type: 'ellipsis', value: '...', id: 'start' });
                    }
                    for (let i = Math.max(total - 4, 2); i <= total; i++) {
                        pages.push({ type: 'page', value: i });
                    }
                } else {
                    pages.push({ type: 'page', value: 1 });
                    pages.push({ type: 'ellipsis', value: '...', id: 'start' });
                    for (let i = current - 1; i <= current + 1; i++) {
                        pages.push({ type: 'page', value: i });
                    }
                    pages.push({ type: 'ellipsis', value: '...', id: 'end' });
                    pages.push({ type: 'page', value: total });
                }
            }
            return pages;
        }
    }"
>
    <div class="flex items-center justify-between p-2">
        <div class="flex items-center gap-2.5">
            <div class="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/5 rounded-md w-6 h-6 flex items-center justify-center p-1">
                <?php if (isset($component)) { $__componentOriginal9e277ab5ada333d718192209049fcff4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9e277ab5ada333d718192209049fcff4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.database','data' => ['class' => 'w-2.5 h-2.5 text-blue-500 dark:text-emerald-500']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.database'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-2.5 h-2.5 text-blue-500 dark:text-emerald-500']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9e277ab5ada333d718192209049fcff4)): ?>
<?php $attributes = $__attributesOriginal9e277ab5ada333d718192209049fcff4; ?>
<?php unset($__attributesOriginal9e277ab5ada333d718192209049fcff4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9e277ab5ada333d718192209049fcff4)): ?>
<?php $component = $__componentOriginal9e277ab5ada333d718192209049fcff4; ?>
<?php unset($__componentOriginal9e277ab5ada333d718192209049fcff4); ?>
<?php endif; ?>
            </div>
            <h3 class="text-base font-semibold">Queries</h3>
        </div>
        <div x-show="totalQueries > 0" class="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-2">
            <span x-text="`${((currentPage - 1) * perPage) + 1}-${Math.min(currentPage * perPage, totalQueries)} of ${totalQueries}`"></span>
            <?php if(count($queries) > 100): ?>
                <?php if (isset($component)) { $__componentOriginalc6e888149e09c77971305ebbddaee753 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalc6e888149e09c77971305ebbddaee753 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.info','data' => ['class' => 'w-3 h-3 text-blue-500 dark:text-emerald-500','dataTippyContent' => 'Only the first 100 queries are shown']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.info'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-blue-500 dark:text-emerald-500','data-tippy-content' => 'Only the first 100 queries are shown']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalc6e888149e09c77971305ebbddaee753)): ?>
<?php $attributes = $__attributesOriginalc6e888149e09c77971305ebbddaee753; ?>
<?php unset($__attributesOriginalc6e888149e09c77971305ebbddaee753); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalc6e888149e09c77971305ebbddaee753)): ?>
<?php $component = $__componentOriginalc6e888149e09c77971305ebbddaee753; ?>
<?php unset($__componentOriginalc6e888149e09c77971305ebbddaee753); ?>
<?php endif; ?>
            <?php endif; ?>
        </div>
    </div>

    <div class="flex flex-col gap-1">
        <?php $__empty_1 = true; $__currentLoopData = array_slice($queries, 0, 100); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => ['connectionName' => $connectionName, 'sql' => $sql, 'time' => $time]): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
        <div
            class="border border-neutral-200 dark:border-none bg-white dark:bg-white/[3%] rounded-md h-10 flex items-center justify-between gap-4 px-4 text-xs font-mono shadow-xs"
            x-show="Math.floor(<?php echo e($index); ?> / perPage) === (currentPage - 1)"
        >
            <div class="flex items-center gap-2 truncate">
                <div class="flex items-center gap-2">
                    <?php if (isset($component)) { $__componentOriginal9e277ab5ada333d718192209049fcff4 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal9e277ab5ada333d718192209049fcff4 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.database','data' => ['class' => 'w-3 h-3 text-neutral-500 dark:text-neutral-400']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.database'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3 text-neutral-500 dark:text-neutral-400']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal9e277ab5ada333d718192209049fcff4)): ?>
<?php $attributes = $__attributesOriginal9e277ab5ada333d718192209049fcff4; ?>
<?php unset($__attributesOriginal9e277ab5ada333d718192209049fcff4); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal9e277ab5ada333d718192209049fcff4)): ?>
<?php $component = $__componentOriginal9e277ab5ada333d718192209049fcff4; ?>
<?php unset($__componentOriginal9e277ab5ada333d718192209049fcff4); ?>
<?php endif; ?>
                    <span class="text-neutral-500 dark:text-neutral-400"><?php echo e($connectionName); ?></span>
                </div>
                <?php if (isset($component)) { $__componentOriginal12cb286571f553eebcbe98210b217f94 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal12cb286571f553eebcbe98210b217f94 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.syntax-highlight','data' => ['code' => $sql,'language' => 'sql','truncate' => true,'class' => 'min-w-0','dataTippyContent' => ''.e(nl2br($sql)).'']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::syntax-highlight'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['code' => \Illuminate\View\Compilers\BladeCompiler::sanitizeComponentAttribute($sql),'language' => 'sql','truncate' => true,'class' => 'min-w-0','data-tippy-content' => ''.e(nl2br($sql)).'']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal12cb286571f553eebcbe98210b217f94)): ?>
<?php $attributes = $__attributesOriginal12cb286571f553eebcbe98210b217f94; ?>
<?php unset($__attributesOriginal12cb286571f553eebcbe98210b217f94); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal12cb286571f553eebcbe98210b217f94)): ?>
<?php $component = $__componentOriginal12cb286571f553eebcbe98210b217f94; ?>
<?php unset($__componentOriginal12cb286571f553eebcbe98210b217f94); ?>
<?php endif; ?>
            </div>
            <div class="text-neutral-500 dark:text-neutral-200 text-right flex-shrink-0"><?php echo e($time); ?>ms</div>
        </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
        <?php if (isset($component)) { $__componentOriginal612ffe32146e3bd2ac6ba6076cca9520 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.empty-state','data' => ['message' => 'No queries executed']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::empty-state'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['message' => 'No queries executed']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520)): ?>
<?php $attributes = $__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520; ?>
<?php unset($__attributesOriginal612ffe32146e3bd2ac6ba6076cca9520); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal612ffe32146e3bd2ac6ba6076cca9520)): ?>
<?php $component = $__componentOriginal612ffe32146e3bd2ac6ba6076cca9520; ?>
<?php unset($__componentOriginal612ffe32146e3bd2ac6ba6076cca9520); ?>
<?php endif; ?>
        <?php endif; ?>
    </div>

    <!-- Pagination Controls -->
    <div x-cloak x-show="totalPages > 1" class="flex items-center justify-center gap-1 py-4 font-mono">
        <!-- First Button -->
        <button
            @click="first()"
            class="cursor-pointer flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :disabled="!hasPrevious"
            :class="hasPrevious ? 'text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:text-white hover:dark:bg-white/5' : 'text-neutral-600 cursor-not-allowed!'"
        >
            <?php if (isset($component)) { $__componentOriginal935198b948cf7048e898f42ce9f720b5 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginal935198b948cf7048e898f42ce9f720b5 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevrons-left','data' => ['class' => 'w-3 h-3']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevrons-left'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginal935198b948cf7048e898f42ce9f720b5)): ?>
<?php $attributes = $__attributesOriginal935198b948cf7048e898f42ce9f720b5; ?>
<?php unset($__attributesOriginal935198b948cf7048e898f42ce9f720b5); ?>
<?php endif; ?>
<?php if (isset($__componentOriginal935198b948cf7048e898f42ce9f720b5)): ?>
<?php $component = $__componentOriginal935198b948cf7048e898f42ce9f720b5; ?>
<?php unset($__componentOriginal935198b948cf7048e898f42ce9f720b5); ?>
<?php endif; ?>
        </button>

        <!-- Previous Button -->
        <button
            @click="previous()"
            class="cursor-pointer flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="hasPrevious ? 'text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:text-white hover:dark:bg-white/5' : 'text-neutral-600 cursor-not-allowed!'"
            :disabled="!hasPrevious"
        >
            <?php if (isset($component)) { $__componentOriginalb1a2603ab360710208f4e8402894d933 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb1a2603ab360710208f4e8402894d933 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevron-left','data' => ['class' => 'w-3 h-3']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevron-left'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb1a2603ab360710208f4e8402894d933)): ?>
<?php $attributes = $__attributesOriginalb1a2603ab360710208f4e8402894d933; ?>
<?php unset($__attributesOriginalb1a2603ab360710208f4e8402894d933); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb1a2603ab360710208f4e8402894d933)): ?>
<?php $component = $__componentOriginalb1a2603ab360710208f4e8402894d933; ?>
<?php unset($__componentOriginalb1a2603ab360710208f4e8402894d933); ?>
<?php endif; ?>
        </button>

        <!-- Page Numbers -->
        <template x-for="(page, index) in visiblePages" :key="`page-${page.type}-${page.value}-${page.id || index}`">
            <div>
                <template x-if="page.type === 'ellipsis'">
                    <span class="flex items-center justify-center w-8 h-8 text-neutral-500">...</span>
                </template>
                <template x-if="page.type === 'page'">
                    <button
                        @click="goToPage(page.value)"
                        class="cursor-pointer flex items-center justify-center w-8 h-8 rounded-md text-sm font-medium transition-colors"
                        :class="currentPage === page.value ? 'bg-blue-600 text-white' : 'text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:text-white hover:dark:bg-white/5'"
                        x-text="page.value"
                    ></button>
                </template>
            </div>
        </template>

        <!-- Next Button -->
        <button
            @click="next()"
            class="cursor-pointer flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="hasNext ? 'text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:text-white hover:dark:bg-white/5' : 'text-neutral-600 cursor-not-allowed!'"
            :disabled="!hasNext"
        >
            <?php if (isset($component)) { $__componentOriginalb7b593bedd3add356eaada0571956b3f = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalb7b593bedd3add356eaada0571956b3f = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevron-right','data' => ['class' => 'w-3 h-3']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevron-right'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalb7b593bedd3add356eaada0571956b3f)): ?>
<?php $attributes = $__attributesOriginalb7b593bedd3add356eaada0571956b3f; ?>
<?php unset($__attributesOriginalb7b593bedd3add356eaada0571956b3f); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalb7b593bedd3add356eaada0571956b3f)): ?>
<?php $component = $__componentOriginalb7b593bedd3add356eaada0571956b3f; ?>
<?php unset($__componentOriginalb7b593bedd3add356eaada0571956b3f); ?>
<?php endif; ?>
        </button>

        <!-- Last Button -->
        <button
            @click="last()"
            class="cursor-pointer flex items-center justify-center w-8 h-8 rounded-md transition-colors"
            :class="hasNext ? 'text-neutral-500 dark:text-neutral-300 hover:bg-neutral-200 hover:dark:text-white hover:dark:bg-white/5' : 'text-neutral-600 cursor-not-allowed!'"
            :disabled="!hasNext"
        >
            <?php if (isset($component)) { $__componentOriginalbb91e7976582fbddcedcde197cd5dca1 = $component; } ?>
<?php if (isset($attributes)) { $__attributesOriginalbb91e7976582fbddcedcde197cd5dca1 = $attributes; } ?>
<?php $component = Illuminate\View\AnonymousComponent::resolve(['view' => 'laravel-exceptions-renderer::components.icons.chevrons-right','data' => ['class' => 'w-3 h-3']] + (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag ? $attributes->all() : [])); ?>
<?php $component->withName('laravel-exceptions-renderer::icons.chevrons-right'); ?>
<?php if ($component->shouldRender()): ?>
<?php $__env->startComponent($component->resolveView(), $component->data()); ?>
<?php if (isset($attributes) && $attributes instanceof Illuminate\View\ComponentAttributeBag): ?>
<?php $attributes = $attributes->except(\Illuminate\View\AnonymousComponent::ignoredParameterNames()); ?>
<?php endif; ?>
<?php $component->withAttributes(['class' => 'w-3 h-3']); ?>
<?php echo $__env->renderComponent(); ?>
<?php endif; ?>
<?php if (isset($__attributesOriginalbb91e7976582fbddcedcde197cd5dca1)): ?>
<?php $attributes = $__attributesOriginalbb91e7976582fbddcedcde197cd5dca1; ?>
<?php unset($__attributesOriginalbb91e7976582fbddcedcde197cd5dca1); ?>
<?php endif; ?>
<?php if (isset($__componentOriginalbb91e7976582fbddcedcde197cd5dca1)): ?>
<?php $component = $__componentOriginalbb91e7976582fbddcedcde197cd5dca1; ?>
<?php unset($__componentOriginalbb91e7976582fbddcedcde197cd5dca1); ?>
<?php endif; ?>
        </button>
    </div>
</div>
<?php /**PATH /home/salvador/Formacion/GitHub/fork-commit-merge/tasks/laravel/easy/greeting-project/vendor/laravel/framework/src/Illuminate/Foundation/Providers/../resources/exceptions/renderer/components/query.blade.php ENDPATH**/ ?>