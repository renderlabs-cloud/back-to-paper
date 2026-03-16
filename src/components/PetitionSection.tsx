import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import SectionHeader from './SectionHeader';

const PetitionSection = () => {
  const { t } = useTranslation();
  const queryClient = useQueryClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const { data: count } = useQuery({
    queryKey: ['petition-count'],
    queryFn: async () => {
      const { count, error } = await supabase
        .from('petition_signatures')
        .select('*', { count: 'exact', head: true });
      if (error) throw error;
      return count ?? 0;
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const { error } = await supabase
        .from('petition_signatures')
        .insert({ name: name.trim(), email: email.trim(), role: role.trim() || null });
      if (error) throw error;
    },
    onSuccess: () => {
      setSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ['petition-count'] });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    mutation.mutate();
  };

  return (
    <section id="petition" className="py-24">
      <SectionHeader
        title={t('petition.title')}
        subtitle={t('petition.subtitle')}
        large
      />

      <div className="border border-foreground p-8 md:p-16 relative">
        <div className="absolute inset-0 bg-foreground translate-x-2 translate-y-2 -z-10" />

        {count !== undefined && count > 0 && (
          <div className="mb-8 font-mono text-sm uppercase tracking-widest text-muted-foreground">
            <span className="text-primary font-bold text-2xl">{count}</span>{' '}
            {t('petition.signatureCount')}
          </div>
        )}

        {submitted ? (
          <div className="py-8">
            <p className="font-mono text-2xl md:text-3xl uppercase tracking-tighter mb-2">
              {t('petition.thankYou')}
            </p>
            <p className="font-serif text-muted-foreground">
              {t('petition.thankYouSub')}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
            <div>
              <label className="font-mono text-xs uppercase tracking-widest block mb-2">
                {t('petition.nameLabel')} *
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-foreground p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('petition.namePlaceholder')}
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest block mb-2">
                {t('petition.emailLabel')} *
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background border border-foreground p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('petition.emailPlaceholder')}
              />
            </div>

            <div>
              <label className="font-mono text-xs uppercase tracking-widest block mb-2">
                {t('petition.roleLabel')}
              </label>
              <input
                type="text"
                maxLength={100}
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-background border border-foreground p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('petition.rolePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={mutation.isPending}
              className="bg-primary text-primary-foreground font-mono py-4 px-10 text-lg hover:bg-foreground hover:text-background disabled:opacity-50"
              style={{ transition: 'all 100ms steps(2)' }}
            >
              {mutation.isPending ? '...' : t('petition.cta')}
            </button>

            {mutation.isError && (
              <p className="font-mono text-sm text-destructive">
                {t('petition.error')}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};

export default PetitionSection;
